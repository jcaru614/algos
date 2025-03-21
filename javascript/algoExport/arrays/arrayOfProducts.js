function arrayOfProducts(array) {
  let productArray = [];
  let product = 1;

  for (let i = 0; i < array.length; i++) {
    let j = i - 1;
    let k = i + 1;
    while (j >= 0) {
      product *= array[j];
      console.log("product j", product);
      j--;
    }
    while (k <= array.length - 1) {
      product *= array[k];
      console.log("product k", product);
      k++;
    }

    productArray.push(product);
    product = 1;
  }
  return productArray;
}

console.log(arrayOfProducts([5, 1, 4, 2]));
