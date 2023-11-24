import {Sequelize} from 'sequelize';
import db from '../config/Database.js';
import HotelModel from './HotelModel.js';

const {DataTypes} = Sequelize;

const TypebedModel = db.define (
  'typebeds',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

HotelModel.hasMany (TypebedModel);
TypebedModel.belongsTo (HotelModel);
export default TypebedModel;
