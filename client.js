const net = require('net');

//establish a connection with the game server
const connect = function(data) {
  const conn = net.createConnection({
    host: '192.168.2.160',
    port: '50541'
  });

  conn.on('connect', () => {
    console.log('Connected successfully!');
  });

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
