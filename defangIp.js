var defangIPaddr = function (address) {
    newIp = "";
    for (let i = 0; i < address.length; i++) {
        if (address[i] === ".") {
            newIp += "[.]"
        } else {
            newIp += address[i]
        }
    }
    return newIp
}

console.log(defangIPaddr("1.1.1.1"))

