import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: 'Freon1990',
  port: 5432,
});

// const query = (text, params) => pool.query(text, params);

pool.query('SELECT * FROM "cars" LIMIT 1000', (err, res) => {
  if (err) {
    console.log(err);
  }
  console.log(res.rows);
  pool.end();
});
