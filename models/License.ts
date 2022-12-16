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
  uid: {
    type: DataTypes.STRING
  },
  updatedAt: {
    type: DataTypes.DATE
  },
  disabledAt: {
    type: DataTypes.DATE
  },
  status: {
    type: DataTypes.ENUM("PENDING", "CREATED", "DISABLED", "REVOKED", "GIVEN")
  }

},{
  freezeTableName: true,
  timestamps: false
});


export default License;