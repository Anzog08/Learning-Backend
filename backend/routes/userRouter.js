import express from "express";
import { authUserService } from "../controller/usersController.js";
import { getUserByEmail } from "../quieries/user/getUsers.js";
import { authMiddleware } from "../middleware/auth.js";


import {
  getUserByEmailService,
  createUserService,
  updateUserService,
  deleteUserService,
} from "../controller/usersController.js";

const userRouter = express.Router();

//get

userRouter.get("/users/:email", getUserByEmailService);

//post

userRouter.post("/signup", createUserService);

//put

userRouter.put("/update", updateUserService);

// //delete

userRouter.delete("/:email", deleteUserService);

// getUserByEmailService

userRouter.post("/login", authMiddleware, authUserService);

export default userRouter;
