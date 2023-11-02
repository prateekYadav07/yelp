const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const morgan = require('morgan')
const cors = require('cors')
const db = require('./db')
const {query, checkSchema, validationResult, matchedData} = require('express-validator')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(morgan('tiny'))
const port = process.env.PORT || 8000;

const validRestaurant = {
    name: {notEmpty:true, errorMessage:{name: 'name can not be empty'}},
    location : {notEmpty:true, errorMessage:{location: 'location can not be empty'}},
    price_range : {notEmpty:true, errorMessage:{price_range: 'price range can not be empty'}}
}

const validReview = {
    name: {notEmpty:true, errorMessage:{name:'reviewer must provide their name'}},
    rating: {notEmpty:true, errorMessage:{rating:'rating cannot be empty'}},
    review: {notEmpty:true, errorMessage:{review:'review cannot be empty'}}
}

const getAllRestaurants = app.get('/api/v1/restaurants', async (req,res) => {
    try {
        const results = await db.query('select * from yelp_restaurants;')
        res.status(200).json({
            status : 'success',
            message: 'All the restaurants retrieved',
            rows :results.rows.length,
            data: {
                values: results.rows
            }
        })
    } catch (error) {
        console.log(error);
    }

})

app.get('/api/v1/restaurants/:id', async (req,res) => {
    try {
        const results = await db.query('select * from yelp_restaurants where id=$1', [req.params.id]);
        const reviewsData  = await db.query('select * from yelp_reviews where restaurant_id=$1', [req.params.id]);
        res.status(200).json({
            status : 'success',
            message : 'Restaurant found',
            data : {
                values: results.rows,
                reviews: reviewsData.rows
            }
        })
    } catch (error) {
        res.status(error.status).json(error)
    }
})

app.post('/api/v1/restaurants', checkSchema(validRestaurant), async (req,res) => {
    try {
        const result = validationResult(req)
        if(!result.isEmpty())  
            return res.status(400).send({errors: result.array()})
        const body = matchedData(req)
        const values = [body.name, body.location, body.price_range]
        const results = await db.query('INSERT INTO yelp_restaurants (name, location, price_range) values ($1, $2, $3) returning *',values)
        res.status(201).json({
            status : 'success',
            message : 'Restaurant added',
            data : {
                values: results.rows
            }
        })
    } catch (error) {
        console.log(error);
    }
})

app.put('/api/v1/restaurants/:id',checkSchema(validRestaurant), async (req,res) => {
    try {
        const result = validationResult(req)
        if(!result.isEmpty())  
            return res.status(400).send({errors: result.array()})
        const body = matchedData(req)
        const id = req.params.id
        const values = [body.name, body.location, body.price_range, id]
        const results = await db.query('UPDATE yelp_restaurants SET name=$1, location=$2, price_range=$3 WHERE id=$4 returning *',values)
        res.status(201).json({
            status : 'success',
            message : 'Restaurant Updated',
            data : {
                values: results.rows
            }
        })
    } catch (error) {
        console.log(error);
    }
})
 
app.delete('/api/v1/restaurants/:id' ,async (req,res) => {
    try {
        const results = await db.query('DELETE FROM yelp_restaurants WHERE id=$1',[req.params.id])
        res.status(200).json({
            status : 'success',
            message : 'Restaurant deleted',
            data : {
                values: results.rows
            }
        })
    } catch (error) {
        res.status(error.status).json(error)
    }
})

app.post('/api/v1/restaurants/:id/addReview',checkSchema(validReview) ,async (req,res) => {
    try {
        const result = validationResult(req)
        if(!result.isEmpty())  
            return res.status(400).send({errors: result.array()})
        const body = matchedData(req)
        const values = [req.params.id, body.name, body.rating, body.review]
        const results = await db.query('INSERT INTO yelp_reviews (restaurant_id, name, rating, review) values($1,$2,$3,$4) returning *', values)
        res.status(201).json({
            status : 'success',
            message : 'review added',
            data:{
                reviews: results.rows
            }
        })
    } catch (error) {
        console.log(error);
    }
})

app.listen(port, () => {
    console.log(`server is listening at ${port}`);
})