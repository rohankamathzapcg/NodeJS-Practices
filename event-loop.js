const fs = require("fs");

setTimeout(() => console.log("Timer 1 Finished"), 0);
setImmediate(() => console.log("Immediate 1 Finished"));

fs.readFile("textfile.txt-", () => {
  console.log("IO finished");
});
s
console.log("Hello from the top-level code");
