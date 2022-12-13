import { Sequelize } from "sequelize";
import db from "../config/database";
 
const { DataTypes }: any = Sequelize;
 
// Define schema
const License = db.define('license', {
  displayName: {
    type: DataTypes.STRING
  }
},{
  freezeTableName: true
});
 
License.sync()

export default License;