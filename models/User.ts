import { Sequelize } from "sequelize";
import db from "../config/database";
 
const { DataTypes }: any = Sequelize;
 
const User = db.define('user', {
  email: {
    type: DataTypes.STRING
  },
  displayName: {
    type: DataTypes.STRING
  },
},{
  freezeTableName: true,
  timestamps: false
});

export default User;