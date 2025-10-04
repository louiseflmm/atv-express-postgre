import express from "express";
import sequelize from "./models/index.js";
import routes from "./routes/index.js"; // Importa o roteador principal

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Rotas
app.use("/api", routes); // Todas as rotas terão o prefixo /api

// Rota raiz de boas-vindas
app.get("/", (req, res) => res.send("API com Express e PostgreSQL rodando! 🚀"));

// Sincroniza o banco e inicia o servidor
const startServer = async () => {
  try {
    await sequelize.sync();
    console.log("Banco de dados sincronizado com sucesso. 🚀");
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Não foi possível conectar ao banco de dados:", error);
  }
};

startServer();