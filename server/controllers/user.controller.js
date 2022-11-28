const {
    createUser,
    getAllUsers,
    getUserByEmail,
    getUserById,
    deleteUser
} = require('../services/user.service');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// REGISTER
const handleRegisterUser = async (req, res) => {
    console.log("controller: handleRegisterUser req.body: ", req.body);
    try {
        // check if email has been used before
        const userWithSameEmail = await getUserByEmail(req.body.email);
        if (userWithSameEmail.length === 0) {
            const newUser = await createUser(req.body);
            const userToken = jwt.sign({
                id: newUser._id
            }, process.env.SECRET_KEY);
            return res.cookie("userToken", userToken, process.env.SECRET_KEY, {
                    httpOnly: true
                })
                .json(newUser);
        }
        else { 
            return res.status(400).json({ errors: { email: { message: "Email is already registered."}}});
        }
    } catch (error) {
        return res.status(400).json(error);
    }
}

// LOGIN 
const handleLoginUser = async (req, res) => {
    console.log("controller: handleLoginUser req.body: ", req.body);
    try {
        // check email
        const userWithSameEmail = await getUserByEmail(req.body.email);
        
        if (userWithSameEmail === null) {
            return res.status(400).json({ errors: "Invalid login" });
        } 
        // check password
        const correctPassword = await bcrypt.compare(req.body.password, userWithSameEmail.password);
        if (!correctPassword) {
            return res.status(400).json({ error: "Invalid login"})
        }
        // add access token
        const userToken = jwt.sign({
            id: userWithSameEmail._id
        }, process.env.SECRET_KEY);

        return res.cookie("userToken", userToken, process.env.SECRET_KEY, {
                httpOnly: true
            })
            .json(userWithSameEmail);
    } catch (error) {
        return res.status(400).json(error);
    }
}

// LOGOUT
const handleLogoutUser = (req, res) => {
    console.log("controller: handleLogoutUser");
    res.clearCookie("userToken");
    res.sendStatus(200);
}

// LOGGED IN USER
const handleLoggedInUserCheck = async (req, res) => {
    console.log("controller: handleLoggedInUserCheck");
    try {
        const decodedJwt = jwt.decode(req.cookies.userToken, { complete: true });
        const foundUser = await getUserById(decodedJwt.payload.id);
        if (foundUser === null) {
            return res.status(400).json({ error: "Not logged in." })
        }
        return res.json(foundUser);
    } catch (error) {
        return res.status(400).json(error);
    }
}

// GET ALL USERS
const handleGetAllUsers = async (req, res) => {
    console.log("controller: handleGetAllUsers");
    try {
        const allUsers = await getAllUsers()
        return res.json(allUsers);
    } catch (error) {
        return res.status(400).json(error);
    }
}

// UPDATE

// DELETE USER
const handleDeleteUser = async (req, res) => {
    console.log("controller: handleDeleteUser req.params: ", req.params.id);
    try {
        const deletedUser = await deleteUser(req.params.id);
        return res.json(deleteUser);
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = {
    handleRegisterUser: handleRegisterUser,
    handleLoginUser: handleLoginUser,
    handleLogoutUser: handleLogoutUser,
    handleLoggedInUserCheck: handleLoggedInUserCheck,
    handleGetAllUsers: handleGetAllUsers,
    handleDeleteUser: handleDeleteUser
}