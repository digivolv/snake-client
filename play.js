const net = require("net");
const { connect } = require("client");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    conn.write("Name: Ed");
    conn.end();
  });

  // conn.on("connect", () => {
  //   console.log("Hello from client!");
  //   conn.end();
  // });

  conn.on("data", (data) => {
    console.log(`"Server says: ", ${data}`);
  });

  return conn;
};

console.log("Connecting ...");
connect();
