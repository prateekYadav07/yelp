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
    location : {notEmpty:true, errorMessage:{name: 'location can not be empty'}},
    price_range : {notEmpty:true, errorMessage:{name: 'price range can not be empty'}}
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
        res.status(200).json({
            status : 'success',
            message : 'Restaurant found',
            data : {
                values: results.rows
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
 
app.delete('/api/v1/restaurants/:id', async (req,res) => {
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

app.listen(port, () => {
    console.log(`server is listening at ${port}`);
})