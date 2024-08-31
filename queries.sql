CREATE TABLE yourhr (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(40),
    middlename VARCHAR(40),
    lastname VARCHAR(40),
    course VARCHAR(10),
    job_preference(25),
    gender(10),
    contact_number VARCHAR(10),
    current_address VARCHAR(100),
    email VARCHAR(30)
); 