import express from "express";
import { createUser, getUserById, getUsers, deleteUserById, editUser } from "../controllers/userController.js";
import checkToken from "../middware/authmiddware.js";

const userRouter = express.Router();

userRouter.post("/createuser", createUser);
userRouter.get("/getuser/:iduser", checkToken, getUserById);
userRouter.get("/getusers", checkToken, getUsers);
userRouter.delete("/deleteuser/:iduser", checkToken, deleteUserById);
userRouter.put("/edituser/:iduser", checkToken, editUser);

export default userRouter;