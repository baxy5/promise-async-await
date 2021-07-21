const inventory = {
  apple: 0,
  banana: 0,
};

const checkInventory = (order) => {
  return new Promise((resolve, rejetct) => {
    setTimeout(() => {
      let inStock = order.every((item) => inventory[item[0]] >= item[1]);

      if (inStock) {
        resolve("Sikeres vásárlás!");
      } else {
        rejetct("Sikertelen vásárlás!");
      }
    }, 2000);
  });
};

module.exports = {checkInventory};
