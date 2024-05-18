import express from "express";
import { createUser, getUserById, getUsers, deleteUserById, editUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/createuser", createUser);
userRouter.get("/getuser/:iduser", getUserById);
userRouter.get("/getusers", getUsers);
userRouter.delete("/deleteuser/:iduser", deleteUserById);
userRouter.put("/edituser/:iduser", editUser);

export default userRouter;