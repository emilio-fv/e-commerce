// Imports
const { User } = require('../models/user.model');

// CREATE
const createUser = async (data) => {
    console.log("service: createUser");
    const newUser = await User.create(data);
    return newUser;
}

// READ
const getAllUsers = async () => {
    console.log("service: getAllUsers");
    const allUsers = await User.find();
    return allUsers;
}

const getUserById = async (id) => {
    console.log("service: getUserById")
    const oneUser = await User.findById(id);
    return oneUser;
}

const getUserByEmail = async (email) => {
    console.log("service: getUserByEmail");
    const oneUser = await User.findOne({ email: email });
    return oneUser;
}

// UPDATE

// DELETE
const deleteUser = async (id) => {
    console.log("service: deleteUser");
    const deletedUser = await User.findByIdAndDelete(id);
    return deleteUser;
}

// Exports
module.exports = {
    createUser: createUser,
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    getUserByEmail: getUserByEmail,
    deleteUser: deleteUser
}