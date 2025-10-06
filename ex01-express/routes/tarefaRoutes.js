import express from "express";
import Tarefa from "../models/Tarefa.js";

const router = express.Router();

// CREATE - Criar uma nova tarefa
router.post("/", async (req, res) => {
  try {
    const tarefa = await Tarefa.create(req.body);
    res.status(201).json(tarefa);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar tarefa" });
  }
});

// READ - Obter todas as tarefas
router.get("/", async (req, res) => {
  try {
    const tarefas = await Tarefa.findAll();
    res.json(tarefas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar tarefas" });
  }
});

// READ - Obter uma tarefa pelo ID
router.get("/:id", async (req, res) => {
  try {
    const tarefa = await Tarefa.findByPk(req.params.id);
    if (!tarefa) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }
    res.json(tarefa);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar tarefa" });
  }
});

// UPDATE - Atualizar uma tarefa
router.put("/:id", async (req, res) => {
  try {
    const tarefa = await Tarefa.findByPk(req.params.id);
    if (!tarefa) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }
    await tarefa.update(req.body);
    res.json(tarefa);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar tarefa" });
  }
});

// DELETE - Excluir uma tarefa
router.delete("/:id", async (req, res) => {
  try {
    const tarefa = await Tarefa.findByPk(req.params.id);
    if (!tarefa) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }
    await tarefa.destroy();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir tarefa" });
  }
});

export default router;