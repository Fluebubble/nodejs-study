import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on("test", (...args) => console.log(args));
emitter.once("test", (...args) => console.log("gegewp", args));
emitter.prependListener("test", (...args) =>
  console.log("ZOZI FIRST!!!", args)
);

emitter.emit("test", 1, 2, 3, 4);
emitter.emit("test", "bibi", 2, "0", "lel");

console.log("after");

console.log(emitter.listeners('test'));
