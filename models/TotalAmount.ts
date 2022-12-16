import { Sequelize } from "sequelize";
import db from "../config/database";
 
const { DataTypes }: any = Sequelize;
 
const TotalAmount = db.define('totalamount', {
  price: {
    type: DataTypes.FLOAT
  },
  currency: {
    type: DataTypes.STRING
  },
  net_price: {
    type: DataTypes.FLOAT
  },
  owed: {
    type: DataTypes.FLOAT
  },
  dueDate: {
    type: DataTypes.STRING
  },
  
  
},{
  freezeTableName: true,
  timestamps: false
});


export default TotalAmount;