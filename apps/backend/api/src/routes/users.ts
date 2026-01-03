import express from 'express';
const pgp = require('pg-promise')();

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = process.env.DB_PORT;
const connectionString = `postgres://${dbUsername}:${dbPassword}@localhost:${dbPort}`;
const db = pgp(connectionString);

const router = express.Router();

router.post('/', (req, res) => {
  res.send("Create new user");
});

router.route('/:id').get(async (req, res) => {
  const users = await db.any(`SELECT * FROM user_profile WHERE id = '${req.params.id}';`)
  res.json(users);
}).put((req, res) => {
  res.send(`Update user with ID: ${req.params.id}`);
}).delete((req, res) => {
  res.send(`Delete user with ID: ${req.params.id}`);
});

router.param('id', (req, res, next, id) => {
  console.log(id);
  next();
})

module.exports = router;