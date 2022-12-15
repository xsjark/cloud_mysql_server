import { Sequelize } from "sequelize";
import db from "../config/database";
 
const { DataTypes }: any = Sequelize;
 
const License = db.define('license', {
  city: {
    type: DataTypes.STRING
  },
},{
  freezeTableName: true,
});


export default License;