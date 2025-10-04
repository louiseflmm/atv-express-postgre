import express from "express";
import userRoutes from "./userRoutes.js";
import messageRoutes from "./messageRoutes.js";

const router = express.Router();

// Centraliza as rotas da aplicação
router.use("/users", userRoutes);
router.use("/messages", messageRoutes);

export default router;