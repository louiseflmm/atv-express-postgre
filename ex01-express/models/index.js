import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import pg from "pg"; // <-- ADICIONE ESTA LINHA

// Apenas executa o dotenv.config() se não estivermos em produção
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres", // Definido diretamente como postgres
    dialectModule: pg,   // <-- ADICIONE ESTA LINHA
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  }
);

export default sequelize;