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
        }else if(argv[0] === "findById"){
            var modelFind = new Model()
            modelFind.list()
            View.findList(modelFind.findByIdTask(argv[1]));
        }else if(argv[0] === "delete"){
            var modelDelete = new Model()
            modelDelete.list()
            View.deleteList(modelDelete.deleteTask(argv[1]));
        }else if(argv[0] === "complete"){
            var modelComplete = new Model()
            modelComplete.list()
            View.completeList(modelComplete.completeTask(argv[1]))
        }else if(argv[0] === "uncomplete"){
            var modelUncomplete = new Model()
            modelUncomplete.list()
            View.completeList(modelUncomplete.uncompleteTask(argv[1]))
        }
    }
}

module.exports = Controller;