const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth/authController')
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const auth = require('../middleware/auth');

const regiterSchema = Joi.object({
    username : Joi.string().min(3).max(12).required(),
    password : Joi.string().min(6).max(12).required(),
    mail : Joi.string().email().required(),
});

const loginSchema = Joi.object({
    password : Joi.string().min(6).max(12).required(),
    mail : Joi.string().email().required(),
});

router.post(
    '/register',
    validator.body(regiterSchema),
    authControllers.controllers.postRegister
);
router.post(
    '/login', 
    validator.body(loginSchema), 
    authControllers.controllers.postLogin
);


//test route
router.get('/test', auth,(req,res) => {
    res.send("request is passed");
});

module.exports = router;