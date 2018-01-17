"use strict"

const fs = require("fs")

class Model {
    constructor(){}

    static list(){
        var isi = fs.readFileSync("./data.json", "utf8")
        var parsed = JSON.parse(isi);
        var task = parsed.map(elements => {
            return elements.task;
        })
        
        return task
    }
}

// console.log(Model.list());

module.exports = Model