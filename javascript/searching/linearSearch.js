function linearSearch(array, value){
    for(var i = 0; i < array.length; i++){
        if(array[i] === value) return i;
    }
    return -1;
}

console.log(linearSearch([34,51,1,2,3,45,56,687], 51))