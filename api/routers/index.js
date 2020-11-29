const router = require('express').Router();

const { authMiddleware } = require('../middleware/auth.middleware');

const authRouters = require('./auth.routes');
const usersRouters = require('./users.routes');

router.use('/auth', authRouters);
router.use(authMiddleware)
router.use('/users', usersRouters);

module.exports = router;