import express from "express";
import { sendMessage, getMessages } from "../controllers/message.contoller.js";
import verifyJWT from "../middlewares/verify.middleware.js";
const router = express.Router();

router.post("/send/:id", verifyJWT, sendMessage);
router.get("/:id", verifyJWT, getMessages);

export default router;
