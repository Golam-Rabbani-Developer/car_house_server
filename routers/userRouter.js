const { registration, login } = require('../controllers/userRegistration');

const router = require('express').Router();

// user registration 
router.post('/registration', registration)

//user login 
router.post('/login', login)


module.exports = router;