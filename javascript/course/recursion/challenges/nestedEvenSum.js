// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(obj) {
  let evenSum = 0;
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "number" && value % 2 === 0) {
      console.log("value", value);
      evenSum += value;
    }
    if (typeof obj[key] === "object") {
      evenSum += nestedEvenSum(obj[key]);
    }
  }

  return evenSum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
