import { Sequelize } from "sequelize";
import mysql2 from "mysql2";

const db = new Sequelize("vpuijmph_group_15", "vpuijmph_fiftyhotels", "8xy8@uF]g;jX", {
  host: "103.123.62.101",
  dialect: "mysql",
  dialectModule: mysql2
});

export default db;
