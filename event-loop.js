const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 2;

setTimeout(() => console.log("Timer 1 Finished"), 0);
setImmediate(() => console.log("Immediate 1 Finished"));

//Event-loop
fs.readFile("test-file.txt", () => {
  console.log("IO finished");

  process.nextTick(() => console.log("Process.nextTick"));

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
});

console.log("Hello from the top-level code");
