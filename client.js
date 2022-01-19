const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(`"Server says: ", ${data}`);
    conn.end();
  });

  conn.on("connect", () => {
    conn.write("Name: Edw");
    console.log("Successfully connected to server.");
  });

  return conn;
};

module.exports = { connect };
