const { connect } = require("./client");

const coon = connect();
coon.on("data", (data) => {
  console.log(data);
});

console.log("Connecting ...");

connect();
