const net = require('net');
const { IP, PORT } = require('./constants');

//establish a connection with the game server
const connect = function(data) {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  //Prints if connection was successful to server
  conn.on('connect', () => {
    console.log('Connected successfully!');
  });

  // Send snakes name to server
  conn.on('connect', () => {
    conn.write('Name: BRW');
  });

  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write("Move: up");
  //   }, 2000);
  // }));

  // Displays a message to player that they sat idle.
  conn.on('data', (data) => {
    console.log(data.toString());
  });

  //inerpret incoming data as test
  conn.setEncoding('utf8');

  return conn;
};

module.exports = {
  connect,
};
