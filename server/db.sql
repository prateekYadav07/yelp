CREATE TABLE yelp_reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES yelp_restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT check(rating>=1 and rating<=5)
);

INSERT INTO reviews (name, review, rating) values ('carl', 'awesome place', 3);