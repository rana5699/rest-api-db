const {
  createUsers,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
} = require("../controlers/users.controler");
const route = require("express").Router();

route.get("/users", getAllUsers);

// ! get by id
route.get("/users/:id", getOneUser);

// ! update user by id
route.put("/users/:id", updateUser);

// ! DELETE user by id
route.delete("/users/:id", deleteUser);

// route.get("/", getAllUsers);
route.post("/user", createUsers);

module.exports = route;
