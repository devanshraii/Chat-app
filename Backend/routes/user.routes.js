import express from "express";
import verifyJWT from "../middlewares/verify.middleware.js";
import { getUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", verifyJWT, getUsers);

export default router;
