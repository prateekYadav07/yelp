CREATE TABLE yelp_reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES yelp_restaurants(id) ON DELETE CASCADE,
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT check(rating>=1 and rating<=5)
);

INSERT INTO yelp_reviews (name, review, rating, restaurant_id) values ('josh', 'weird place', 1, 77);

select trunc(avg(rating),1) as avg_rating from yelp_reviews where restaurant_id = 86;

select * from yelp_restaurants left join (select restaurant_id, count(*), trunc(avg(rating),2) as average_rating from yelp_reviews group by restaurant_id) yelp_reviews on
yelp_reviews.restaurant_id = yelp_restaurants.id;

select * from yelp_restaurants left join (select restaurant_id, count(*), trunc(avg(rating),2) as average_rating from yelp_reviews group by restaurant_id) yelp_reviews on
yelp_reviews.restaurant_id = yelp_restaurants.id;