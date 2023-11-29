import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const HotelModel = db.define(
  "hotel",
  {
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lokasi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fasilitas: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kota: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image3: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url3: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true
  }
);
export default HotelModel;
