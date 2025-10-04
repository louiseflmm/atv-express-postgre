import express from "express";
import sequelize from "./models/index.js";
import usersRoutes from "./routes/users.routes.js";
import messagesRoutes from "./routes/messages.routes.js";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/messages", messagesRoutes);

sequelize.sync().then(() => console.log("Banco sincronizado 🚀"));

app.get("/", (req, res) => res.send("API rodando 🚀"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
