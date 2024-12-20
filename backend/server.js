import { app, server } from "./socket/socket.js";
import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/ConnectToMDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// ? Routes Import
import authRoute from "./routes/auth.routes.js";
import messageRoute from "./routes/message.routes.js";
import usersRoute from "./routes/users.routes.js";

const PORT = process.env.PORT || 8081;
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000/",
  })
);

// ? Auth Routes
app.use("/api/auth", authRoute);

// ? Message Routes
app.use("/api/messages", messageRoute);

// ? Users Routes
app.use("/api/users", usersRoute);

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`\n\t\t[!] Server Is Running On: http://localhost:${PORT}\n`);
});
