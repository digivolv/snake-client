const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

//passes connect function result to connection
const connection = connect();
setupInput(connection);
