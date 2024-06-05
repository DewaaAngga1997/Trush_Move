import { Sequelize } from "sequelize";

const db = new Sequelize("trash_move", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
