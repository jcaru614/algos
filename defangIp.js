// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

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

