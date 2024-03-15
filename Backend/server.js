import "dotenv/config";
import express from "express";
import connectToDB from "./DB/connectToDB.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
import cors from "cors";

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  connectToDB();
  console.log(`Server running on port ${PORT}`);
});
