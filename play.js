const net = require("net");
const { connect } = require("./client");
const { stdin } = require("process");

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
setupInput();

const handleUserInput =
  ("keypress",
  (key) => {
    if (key === "\u0003") {
      process.exit();
    }
  });

stdin.on("data", handleUserInput);

// const connect = function () {
//   const conn = net.createConnection({
//     host: "165.227.47.243",
//     port: 50541,
//   });

//   conn.setEncoding("utf8");

//   conn.on("connect", () => {
//     conn.write("Name: Ed");
//     conn.end();
//   });

//   // conn.on("connect", () => {
//   //   console.log("Hello from client!");
//   //   conn.end();
//   // });

//   conn.on("data", (data) => {
//     console.log(`"Server says: ", ${data}`);
//   });

//   return conn;
// };

// console.log("Connecting ...");
// connect();
