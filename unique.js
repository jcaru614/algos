function unique(str1, str2) {
    let newStr = "";
    for (let i = 0; i < str1.length; i++) {
      let myBool = false;
        for (var j = 0; j < str2.length; j++) {
         if (str2[j] == str1[i]) {
          myBool = true;
         } 
        }
        if (myBool === false){
          newStr += str1[i] 
        }  
      }
        return newStr;
    }
  
  let str1 = 'have a nice day';
  let str2 = 'av';
  
  console.log(unique(str1, str2));