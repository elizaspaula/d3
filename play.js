const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542,
  });

  // interpret incoming data as text

  conn.setEncoding("utf8");

  return conn;
};

const coon = connect();
coon.on("data", (data) => {
  console.log(data);
});

console.log("Connecting ...");
connect();
