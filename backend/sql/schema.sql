CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  age INT,
  marks INT
);

INSERT INTO students (name, age, marks) VALUES
('Aman', 20, 85),
('Riya', 21, 72),
('Kunal', 22, 90);
