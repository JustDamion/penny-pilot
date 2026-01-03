import express from 'express';

const db = require('../db')
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