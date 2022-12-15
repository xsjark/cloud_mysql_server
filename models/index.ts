import Feature from "./Feature";
import License from "./License";
import User from "./User";
import Product from "./Product";

License.belongsTo(User);
User.hasMany(License);

License.hasOne(User, { foreignKey :"createdBy", as :"CREATED_BY"});
User.hasOne(License);

License.hasMany(Feature);
Feature.belongsTo(License)

License.hasOne(Product);
Product.belongsTo(License);

export { License, User, Feature,Product }
