'use strict';

let express = require('express');
let router = express.Router();
let UsersController = require('./controller/UsersController.js');

router.get('/users', UsersController.showUsers);
router.post('/users', UsersController.createUser);
router.get('/users/:userId', UsersController.getUserByID);
router.delete('/users/:userId', UsersController.deleteUser);

module.exports = router;
