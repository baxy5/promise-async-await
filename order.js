const { checkInventory } = require("./inventory");

const order = [["banana", 2]];

const handleSuccess = (resolveValue) => {
  console.log(resolveValue);
};

const handleFailure = (rejectValue) => {
  console.log(rejectValue);
};

checkInventory(order).then(handleSuccess).catch(handleFailure);