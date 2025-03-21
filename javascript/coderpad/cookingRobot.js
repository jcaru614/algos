// Robot needs all 3 ingredients to make a burger: bread, ham, and cheese.
// We track storage as ingredients arrive.
// Just because we have 3 ingredients total doesn't mean we can cook —
// we must have at least one of each.
// The output is the maximum number of each ingredient that was ever stored at one time.

const cookingRobot = (listOfIngredients) => {
  // We need to store ingredients in a map as we iterate over them.
  // When we have all 3 (bread, ham, cheese), we make a burger and subtract one of each from storage.
  // We need to keep track of the maximum amount of each ingredient that was in storage before making a burger.
  // After making a burger, we reduce the storage, but we don't update max storage after that.
  // Return the greatest number of items stored at any point so we can see how inefficient the process was.

  const storage = { bread: 0, cheese: 0, ham: 0 };
  let maxStored = { bread: 0, cheese: 0, ham: 0 };

  for (let i = 0; i < listOfIngredients.length; i++) {
    let item = listOfIngredients[i];

    storage[item]++;
    maxStored[item] = Math.max(maxStored[item], storage[item]);

    console.log('storage ', storage);
    if (storage.bread > 0 && storage.cheese > 0 && storage.ham > 0) {
      console.log('making burger');
      storage.bread--;
      storage.cheese--;
      storage.ham--;
    }
  }
  return maxStored;
};

console.log(cookingRobot(['bread', 'bread', 'bread', 'ham', 'cheese', 'ham', 'ham', 'cheese']));
