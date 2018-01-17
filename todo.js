const fs = require("fs");
const Controller = require("./controller/controller.js")

let argv = process.argv.slice(2)
Controller.processor(argv)