import { Sequelize } from "sequelize";
import db from "../config/database";
 
const { DataTypes }: any = Sequelize;
 
const Feature = db.define('feature', {
  quantity: {
    type: DataTypes.INTEGER
  },
  productId: {
    type: DataTypes.STRING
  },
},{
  freezeTableName: true,
});


export default Feature;