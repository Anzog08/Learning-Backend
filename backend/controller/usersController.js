import { getUserByEmail } from "../quieries/user/getUsers.js";
import { createUser } from "../quieries/user/createUser.js";
import { updateUser } from "../quieries/user/updateUser.js";
import { deleteUser } from "../quieries/user/deleteUser.js";
// import { authMiddleware } from "../middleware/auth.js";

export const getUserByEmailService = async (req, res) => {
  try {
    const user = await getUserByEmail(req);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createUserService = async (req, res) => {
  try {
    const user = await createUser(req);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const updateUserService = async (req, res) => {
  try {
    const user = await updateUser(req);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const deleteUserService = async (req, res) => {
  try {
    const user = await deleteUser(req);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const authUserService = async (req, res) => {
  try {
    const user = await getUserByEmail(req);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
