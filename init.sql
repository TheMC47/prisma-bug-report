CREATE TABLE main(id SERIAL PRIMARY KEY);
CREATE TABLE other(id SERIAL PRIMARY KEY, main_id INT REFERENCES main(id), num REAL NOT NULL);
