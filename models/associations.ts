import License from "./License";
import Owner from "./Owner";

License.hasOne(Owner);
Owner.belongsTo(License);

export { License, Owner }
