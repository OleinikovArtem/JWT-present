const router = require('express').Router();

const { signup, login, refreshToken } = require('../controllers/auth.controller');

router.post('/sign-up', signup);
router.post('/login', login);
router.get('/refresh-token', refreshToken);

module.exports = router;