"use strict"

const fs = require("fs")

class Model {
    constructor(){
        this._taskList = []
    }

    list(){
        var isi = fs.readFileSync("./data.json", "utf8")
        var parsed = JSON.parse(isi);
        
        this._taskList = parsed
        return this._taskList;
    }

    addTask(data){
        var obj = {
            id: this._taskList.length+1,
            task: data,
        }
        this._taskList.push(obj);
        fs.writeFileSync("./tampungan.json", JSON.stringify(this._taskList, null, 2), "utf8")
        return this._taskList;
    }
}

// var model = new Model()
// model.list(); 
// console.log(model.addTask("Shutdown my computer"))
 
// console.log(model.addTask("Shut down my computer"))
// console.log(Model.addTask("Shut down my computer"));

module.exports = Model