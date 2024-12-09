const check = (value) => {
  if (value == undefined) {
    console.log("Value is undefined");
  }

  if (value == null) {
    console.log("Value is null");
  }
  const type = typeof value;

  if (!(value instanceof Date)) {
    console.log("Value is not a Date");
  }

  if (type === "Object") {
    console.log("Value " + JSON.stringify(value) + " is an Object");
  }
  if (type != "Object") {
    console.log("Value is a " + type);
  }
};
check(123);
