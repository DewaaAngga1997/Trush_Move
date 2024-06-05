import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Admin = db.define(
  "admin",
  {
    nama: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);
export default Admin;

(async () => {
  await db.sync();
})();
