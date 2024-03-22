const Users = require("../models/users.model");

const getAllUsers = async (req, res) => {
  try {
    const totalUsers = await Users.countDocuments();
    if (totalUsers) {
      const allUsers = await Users.find();
      res.status(200).send({
        sucsses: true,
        totalUsers,
        allUsers,
      });
    } else {
      res.status(404).send({
        sucsses: false,
        message: "Users not avilable here",
      });
    }
    // res.status(200).send("Get All Users");
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create user.", details: error.message });
  }
};

// ! get single user

const getOneUser = async (req, res) => {
  const userId = req.params.id;
  const user = await Users.find({ _id: userId });
  if (user) {
    res.status(200).send({
      sucsses: true,
      message: `Found sucssesfully by this  ${userId} user`,
      user,
    });
  } else {
    res.status(404).send({
      sucsses: false,
      message: `not found this  ${userId} user`,
    });
  }
};

// ! create new useers POST  Method
const createUsers = async (req, res) => {
  const newUser = new Users({
    name: req.body.name,
    email: req.body.email,
    age: Number(req.body.age),
    image: req.file ? req.file.filename : null,
  });
  // Save the new user to the database
  try {
    const newUseData = await newUser.save();
    res.status(200).send(newUseData);
  } catch (error) {
    // Handle database errors
    res
      .status(500)
      .json({ error: "Failed to create user.", details: error.message });
  }
};

// ! update user
const updateUser = async (req, res) => {
  const userId = req.params.id;
  const userUpadte = await Users.findById(userId);

  if (userUpadte) {
    userUpadte.name = req.body.name;
    userUpadte.email = req.body.email;
    userUpadte.age = req.body.age;

    // Save the updated user
    const updatedUser = await userUpadte.save();

    res.status(200).send({
      success: true,
      message: `Successfully updated user with ID: ${userId}`,
      updatedUser: updatedUser,
    });
  } else {
    res.status(404).send({
      success: false,
      message: `User with ID: ${userId} not found`,
    });
  }
};

// ! DELERTE USEE4R S
const deleteUser = async (req, res) => {
  const userId = req.params.id;

  const deleteUser = await Users.findByIdAndDelete(userId);

  if (deleteUser) {
    res.status(200).send({
      success: true,
      meassage: "User is delete secssesfull",
      deleteUser,
    });
  } else {
    res.status(404).send({
      success: false,
      meassage: "404 NOT FOUND !",
    });
  }
};

module.exports = {
  createUsers,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
};
