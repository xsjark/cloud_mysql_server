import { Sequelize } from "sequelize";
import db from "../config/database";
 
const { DataTypes }: any = Sequelize;
 
const Tax = db.define('tax', {
  name: {
    type: DataTypes.ENUM("IVA 12%")
  },
  basis: {
    type: DataTypes.INTEGER
  },
  value: {
    type: DataTypes.INTEGER
  },
  currency: {
    type: DataTypes.ENUM("USD")
  },
},{
  freezeTableName: true,
  timestamps: false
});


export default Tax;