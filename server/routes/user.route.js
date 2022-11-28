const express = require('express');
const { authenticate } = require('../config/jwt.config');
const router = express.Router();

const {
     handleRegisterUser,
     handleLoginUser,
     handleLogoutUser,
     handleLoggedInUserCheck,
     handleDeleteUser,
     handleGetAllUsers
} = require('../controllers/user.controller')

router.get('/', authenticate, handleGetAllUsers);
router.post('/register', handleRegisterUser);
router.post('/login', handleLoginUser);
router.get('/logout', handleLogoutUser);
router.get('/loggedInCheck', handleLoggedInUserCheck);
router.delete('/:id/delete', handleDeleteUser);

module.exports = { userRouter: router };