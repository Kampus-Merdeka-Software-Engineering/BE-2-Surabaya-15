import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const TestimoniModel = db.define(
  "testimoni",
  {
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pesan: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    freezeTableName: true
  }
);
export default TestimoniModel;
