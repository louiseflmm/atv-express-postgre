// Versão final para a Vercel
import express from "express";
import sequelize from "./models/index.js";
import routes from "./routes/index.js";

const app = express();

// Middlewares
app.use(express.json());

// Rotas
app.use("/api", routes);

// Rota raiz de boas-vindas
app.get("/", (req, res) => res.send("API com Express e PostgreSQL rodando!"));

// Sincroniza o banco de dados ao iniciar
// Isso garante que as tabelas sejam criadas na Vercel
sequelize.sync().catch(error => {
  console.error("Falha ao sincronizar o banco de dados:", error);
});

// EXPORTA O APP PARA A VERCEL USAR
export default app;