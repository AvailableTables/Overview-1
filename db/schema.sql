DROP TABLE IF EXISTS restaurants.overview;
DROP SCHEMA IF EXISTS restaurants; 
CREATE SCHEMA restaurants;

-- \c restaurants 
CREATE TABLE restaurants.overview (
    rid SERIAL PRIMARY KEY,
    name VARCHAR(50), 
    review_count DECIMAL, 
    display_address VARCHAR(100), 
    display_phone VARCHAR(50), 
    website VARCHAR(50), 
    aggregate_score DECIMAL, 
    price_quantile VARCHAR(100), 
    cuisine VARCHAR(400), 
    tags VARCHAR(400),  
    decription VARCHAR(750),
    private_dining  VARCHAR(450),  
    dining_style VARCHAR(300), 
    hour VARCHAR(500), 
    payment_options VARCHAR(400),  
    dress_code VARCHAR(400), 
    executive_chef VARCHAR(300), 
    catering VARCHAR(530), 
    private_party_facilities VARCHAR(530), 
    private_party_contact_name VARCHAR(350), 
    private_party_contact_number VARCHAR(350),   
    neighborhood VARCHAR(350), 
    cross_street VARCHAR(350), 
    parking_details VARCHAR(450), 
    public_transit VARCHAR(450), 
    entertainment VARCHAR(750), 
    special_events_promotions VARCHAR(750), 
    additional VARCHAR(750)
);

\COPY restaurants.overview FROM 'dbPG.csv' WITH DELIMITER AS '^' CSV;
CREATE INDEX id on restaurants.overview(rid); 
-- SELECT COUNT(DISTINCT restaurants.overview) FROM `information_schema`.`columns` WHERE `res` = 'your_db_name'

-- ('rid', 'name', 'review_count', 'display_address', 'display_phone',  'website',  'aggregate_score',   'price_quantile',  'cuisine',  'tags',  'private_dining',    'dining_style', 'hour',  'payment_options',   'dress_code',  'executive_chef',   'catering',   'private_party_facilities',   'private_party_contact_name',   'private_party_contact_number',     'neighborhood',   'cross_street',  'parking_details',   'public_transit',  'entertainment',  'special_events_promotions',  additional )