CREATE TABLE employee (
	employee_id SERIAL PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
	name VARCHAT(255) NOT NULL,
	job_role VARCHAR(255) NOT NULL,
	salary NUMERIC(5,2),
	date_of_birth DATE NOT NULL,
	employee_registration INTEGER NOT NULL
)