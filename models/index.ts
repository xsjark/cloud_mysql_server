import Feature from "./Feature";
import License from "./License";
import User from "./User";
import Product from "./Product";
import Tax from "./Tax";
import TotalAmount from "./TotalAmount";

License.belongsTo(User);
User.hasMany(License);

License.hasOne(User, { foreignKey :"createdBy", as :"CREATED_BY"});
User.hasOne(License);

License.hasMany(Feature);
Feature.belongsTo(License)

License.hasOne(Product);
Product.belongsTo(License);

License.hasOne(TotalAmount);
TotalAmount.belongsTo(License);

TotalAmount.hasOne(Tax);
Tax.belongsTo(TotalAmount);

export { License, User, Feature, Product, Tax }
