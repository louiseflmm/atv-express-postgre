import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const Tarefa = sequelize.define("Tarefa", {
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  concluida: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default Tarefa;