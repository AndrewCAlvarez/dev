const express = require("express");
const router = express.Router();
const io = require("socket.io")();

io.on("connection", (client) => {
  //  here you start emitting events to the client
  client.on("subscribeToTimer", (interval) => {
    console.log(`Client is subscribing to timer with interval ${interval}`);
    setInterval(() => {
      client.emit("timer", new Date());
    }, interval);
  });

  client.on("chat message", (msg) => {
    console.log(msg);
    client.emit("callback msg", msg);
  });
});

const port = 8000;
io.listen(port);
console.log(`Socket.io listening on port ${port}`);

module.exports = router;
