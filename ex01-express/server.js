import express from "express";
import sequelize from "./models/index.js";
import routes from "./routes/index.js";

const app = express();

// Middlewares
app.use(express.json());

// Rotas
app.use("/api", routes);

// Rota raiz
app.get("/", (req, res) => {
  res.send("API com Express e PostgreSQL rodando!");
});

// Sincroniza o banco de dados
sequelize.sync().then(() => {
  console.log("Banco de dados sincronizado com sucesso.");
}).catch((error) => {
  console.error("Não foi possível sincronizar o banco de dados:", error);
});

// Exporta o app para a Vercel usar
export default app;