const os = require('os');

// user info 

const user = os.userInfo();
console.log(user);

// os uptime 
console.log(`this os uptime is ${os.uptime}`);

//currentOs info 

const currentOS = {
    name: os.type(),
    realease: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);