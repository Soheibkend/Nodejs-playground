const logEvents = require("./logEvents");

const events = require("events");

const MyEventEmitter = new events.EventEmitter();

MyEventEmitter.on("log", (msg) => logEvents(msg));

setInterval(() => {
  MyEventEmitter.emit("log", "Soheib kendjouh");
}, 2000);
