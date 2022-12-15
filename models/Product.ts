import { Sequelize } from "sequelize";
import db from "../config/database";
 
const { DataTypes }: any = Sequelize;
 
const Product = db.define('product', {
  productId: {
    type: DataTypes.STRING
  },
},{
  freezeTableName: true,
  timestamps: false
});


export default Product;