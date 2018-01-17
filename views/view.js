
class View{
    constructor(){}

    static nothing(){
        console.log(`node todo.js help`)
    }

    static help(){
        console.log(`node todo.js help`)
        console.log(`node todo.js list`)
        console.log(`node todo.js add <task_content>`)
        console.log(`node todo.js findById <task_id>`)
        console.log(`node todo.js delete <task_id>`)
        console.log(`node todo.js complete <task_id>`)
        console.log(`node todo.js uncomplete <task_id>`)
    }

    static list(data){
        for(var i=0; i<data.length; i++){
            console.log(`${i+1}. ${data[i]}`)
        }
    }
}

module.exports = View;