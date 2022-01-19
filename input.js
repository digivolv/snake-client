const { stdin } = require("process");

let connection;

const setupInput = (conn) => {
  connection = conn;
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

    const w = "Move: up";
    const a = "Move: left";
    const s = "Move: down";
    const d = "Move: right";

    if (key === "w") {
      console.log(`W: ${w}: is being pressed`);
      connection.write("Move: up");
    } else if (key === "a") {
      console.log(`A: ${a}: is being pressed`);
      connection.write("Move: left");
    } else if (key === "s") {
      console.log(`S: ${s} : is being pressed`);
      connection.write("Move: down");
    } else if (key === "d") {
      console.log(`D:${d} : is being pressed`);
      connection.write("Move: right");
    }
  });

stdin.on("data", handleUserInput);
module.exports = { setupInput };
