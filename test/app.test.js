const sayHello = require("../app");

if (sayHello() === "Hello, World!") {
  console.log("✅ Test passed");
} else {
  console.error("❌ Test failed");
  process.exit(1);
}
