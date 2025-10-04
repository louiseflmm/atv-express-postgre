import express from "express";
import User from "../models/User.js";

const router = express.Router();

// CREATE user
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user); // 201 → Created
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar usuário" }); // 500 → Internal Server Error
  }
});

// READ all users
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users); // 200 → OK
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

// READ one user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" }); // 404
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuário" });
  }
});

// UPDATE user
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

    await user.update(req.body);
    res.json(user); // 200 → OK
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
});

// DELETE user
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

    await user.destroy();
    res.sendStatus(204); // 204 → No Content
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir usuário" });
  }
});

export default router;
