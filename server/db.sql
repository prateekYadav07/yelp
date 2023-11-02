CREATE TABLE yelp_reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES yelp_restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT check(rating>=1 and rating<=5)
);

INSERT INTO yelp_reviews (name, review, rating, restaurant_id) values ('josh', 'weird place', 1, 77);