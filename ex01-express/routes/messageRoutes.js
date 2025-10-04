import express from "express";
import Message from "../models/Message.js";
import User from "../models/User.js";

const router = express.Router();

// CREATE message
router.post("/", async (req, res) => {
  try {
    const { userId, content } = req.body;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    const message = await Message.create({ userId, content });
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar mensagem" });
  }
});

// READ all messages
router.get("/", async (req, res) => {
  try {
    const messages = await Message.findAll({ include: User });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar mensagens" });
  }
});

// READ one message
router.get("/:id", async (req, res) => {
  try {
    const message = await Message.findByPk(req.params.id, { include: User });
    if (!message) {
      return res.status(404).json({ error: "Mensagem não encontrada" });
    }
    res.json(message);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar mensagem" });
  }
});

// UPDATE message
router.put("/:id", async (req, res) => {
  try {
    const message = await Message.findByPk(req.params.id);
    if (!message) {
      return res.status(404).json({ error: "Mensagem não encontrada" });
    }
    await message.update(req.body);
    res.json(message);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar mensagem" });
  }
});

// DELETE message
router.delete("/:id", async (req, res) => {
  try {
    const message = await Message.findByPk(req.params.id);
    if (!message) {
      return res.status(404).json({ error: "Mensagem não encontrada" });
    }
    await message.destroy();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir mensagem" });
  }
});

export default router;