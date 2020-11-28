const router = require('express').Router();

const authRouters = require('./auth.routes');
const usersRouters = require('./users.routes');

router.use('/auth', authRouters);
router.use('/users', usersRouters);

module.exports = router;