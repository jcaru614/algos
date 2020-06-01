function duplicates() {
    let dups = {}
    for(let val in arguments){
      dups[arguments[val]] ? dups[arguments[val]] += 1 : dups[arguments[val]] = 1
    }
    for(let key in dups){
      if(dups[key] > 1) return true
    }
    return false;
  }
  console.log(duplicates(1,2,3,3))