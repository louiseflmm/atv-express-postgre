import express from "express";
import userRoutes from "./userRoutes.js";
import messageRoutes from "./messageRoutes.js";
import tarefaRoutes from "./tarefaRoutes.js"; // Importa as rotas de tarefa

const router = express.Router();

// Centraliza as rotas da aplicação
router.use("/users", userRoutes);
router.use("/messages", messageRoutes);
router.use("/tarefas", tarefaRoutes); // Adiciona as novas rotas com o prefixo /tarefas

export default router;