const inventory = {
  apple: 0,
  banana: 0,
};

const checkInventory = (order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let inStock = order.every((item) => inventory[item[0]] >= item[1]);
      // .every returns a boolean value

      if (inStock) {
        resolve("Sikeres vásárlás!");
      } else {
        reject("Sikertelen vásárlás!");
      }
    }, 2000);
  });
};

module.exports = {checkInventory};
