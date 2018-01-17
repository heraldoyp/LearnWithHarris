const Model = require("../models/model.js") 
const View = require("../views/view.js")

class Controller{
    constructor(){}

    static processor(argv){
        if(!argv[0]){
            View.nothing()
        }else if(argv[0] === "help"){
            View.help()
        }else if(argv[0] === "list"){
            View.list(Model.list())
        }
    }
}

module.exports = Controller;