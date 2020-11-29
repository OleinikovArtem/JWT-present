const router = require('express').Router();

const { getUsers, getClient } = require('../controllers/users.controller');

router.get('/', getUsers);
router.get('/verify-client', getClient);

module.exports = router;