const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 5

setTimeout(()=> console.log("Hello From Timer 1"),0);
setImmediate(()=> console.log("Hello from Immediate Fn 2"));

fs.readFile('sample.txt','utf-8',()=>{
    console.log("IO Polling Finished");

    setTimeout(()=> console.log("Hello From Timer 2"),0);
    setTimeout(()=> console.log("Hello From Timer 3"),5 * 1000);
    setImmediate(()=> console.log("Hello from Immediate Fn 2"));

    // CPU Extensive Work

    crypto.pbkdf2("password1",'salt1',100000,1024,'sha512',()=>{``
        console.log(`${Date.now() - start}ms Password Done 1`);
    });


    crypto.pbkdf2("password2",'salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now() - start}ms Password Done 2`);
    });


    crypto.pbkdf2("password3",'salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now() - start}ms Password Done 3`);
    });


    crypto.pbkdf2("password4",'salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now() - start}ms Password Done 4`);
    });

    crypto.pbkdf2("password5",'salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now() - start}ms Password Done 5`);
    });

});


console.log("Hello from Top Level Code");