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

module.exports = { setupInput };
