const Model = require("../models/model.js") 
const View = require("../views/view.js")

class Controller{
    constructor(){}

    static processor(argv){
        if(!argv[0]){
            View.nothing()
        }else if(argv[0] === "help"){s
            View.help()
        }else if(argv[0] === "list"){
            var modelList = new Model();
            View.list(modelList.list())
        }else if(argv[0] === "add"){
            var modelAdd = new Model()
            modelAdd.list()
            View.addList(modelAdd.addTask(argv[1]))
        }
    }
}

module.exports = Controller;