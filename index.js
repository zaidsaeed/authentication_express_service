const express = require('express');
const app = express();
const port = 3000;

const { Client } = require('pg');

const client = new Client(process.env.DATABASE_URL);
client.connect().then(() => console.log('Connected to PSQL database successfully!'));

app.get('/login', async (req, res) => {
  const response = await client.query('SELECT * from accounts;');
  console.log('response', response);
  return true;
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})