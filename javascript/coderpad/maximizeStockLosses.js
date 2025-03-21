const maximizeStockLosses = (array) => {
  // its a chronological order of stock prices
  // we want to simulate what happens as if you bought at a price and sold at another
  // this means that the buy price will always come before the sell price in the list because its chronological
  // to get the max loss subtract the sell price from the buy price
  let highestPrice = array[0];
  let biggestLoss = 0;
  for (let i = 1; i < array.length; i++) {
    const price = array[i];
    // accounting for a loss
    if (price < highestPrice) {
      biggestLoss = Math.min(biggestLoss, price - highestPrice);
    } else {
      // the sell price is greater then the buy price
      highestPrice = price;
    }
  }
  return biggestLoss;
};

console.log(maximizeStockLosses([3, 2, 4, 2, 1, 5]));
