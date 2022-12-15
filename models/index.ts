import Feature from "./Feature";
import License from "./License";
import Owner from "./Owner";

License.hasOne(Owner);
Owner.belongsTo(License);

License.hasMany(Feature);
Feature.belongsTo(License)

export { License, Owner, Feature }
