"use strict"

const fs = require("fs")

class Model {
    constructor(){
        this._taskList = []
    }

    list(){
        // var isi = fs.readFileSync("../tampungan.json", "utf8")
        var isi = fs.readFileSync("./tampungan.json", "utf8")
        var parsed = JSON.parse(isi);
        
        this._taskList = parsed
        return this._taskList;
    }

    addTask(data){
        var obj = {
            id: this._taskList[this._taskList.length-1].id+1 || 0,
            task: data,
            status: false,
        }
        this._taskList.push(obj);
        fs.writeFileSync("./tampungan.json", JSON.stringify(this._taskList, null, 2), "utf8")
        return obj;
    }

    findByIdTask(argv){
        var found = this._taskList.filter(elements =>{
            return elements.id == argv;
        })
        return found[0].task;
    }

    deleteTask(argv){
        var isi = []
        for(var i=0; i<this._taskList.length; i++){
            if(this._taskList[i].id == argv){
                isi = this._taskList.splice(i, 1)
                fs.writeFileSync("./tampungan.json", JSON.stringify(this._taskList, null, 2), "utf8")
                for(var j=0; j<this._taskList.length; j++){
                    this._taskList[j].id = j+1;
                }
                return isi[0];
            }
        }
    }

    completeTask(argv){
        for(var i=0; i<this._taskList.length; i++){
            if(this._taskList[i].id == argv){
                this._taskList[i].status = true;
                fs.writeFileSync("./tampungan.json", JSON.stringify(this._taskList, null, 2), "utf8")
                return this._taskList[i];
            }
        }
    }

    uncompleteTask(argv){
        for(var i=0; i<this._taskList.length; i++){
            if(this._taskList[i].id == argv){
                this._taskList[i].status = false;
                fs.writeFileSync("./tampungan.json", JSON.stringify(this._taskList, null, 2), "utf8")
                return this._taskList[i];
            }
        }
    }
}

// var model = new Model()
// model.list(); 
// console.log(model.completeTask(1))
// model.addTask("Shutdown my computer")
// console.log(model.findByIdTask(2))
 
// console.log(model.addTask("Shut down my computer"))
// console.log(Model.addTask("Shut down my computer"));

module.exports = Model