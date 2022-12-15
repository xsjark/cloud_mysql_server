import { Sequelize } from "sequelize";
import db from "../config/database";
 
const { DataTypes }: any = Sequelize;
 
const License = db.define('license', {
  city: {
    type: DataTypes.STRING
  },
  country: {
    type: DataTypes.STRING
  },
  region: {
    type: DataTypes.STRING
  },
  productId: {
    type: DataTypes.STRING
  },
},{
  freezeTableName: true,
  timestamps: false
});


export default License;