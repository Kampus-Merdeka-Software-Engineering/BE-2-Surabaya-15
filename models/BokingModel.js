import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import HotelModel from "./HotelModel.js";

const { DataTypes } = Sequelize;

const BokingModel = db.define(
  "boking",
  {
    checkin: {
      type: DataTypes.DATE,
      allowNull: false
    },
    checkout: {
      type: DataTypes.DATE,
      allowNull: false
    },
    total_ruangan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nama_pemesan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email_pemesan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    total_pembayaran: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    freezeTableName: true
  }
);

HotelModel.hasMany(BokingModel);
BokingModel.belongsTo(HotelModel);
export default BokingModel;
