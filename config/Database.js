import { Sequelize } from "sequelize";

const db = new Sequelize("group_15", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

export default db;
