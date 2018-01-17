
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
            if(data[i].status === false){
                console.log(`${data[i].id}. [ ] ${data[i].task}`)
            }else if(data[i].status === true){
                console.log(`${data[i].id}. [X] ${data[i].task}`)
            }
            
        }
    }

    static addList(data){
        console.log(`Added "${data.task}" to your TODO list`);
    }

    static findList(data){
        console.log(data);
    }

    static deleteList(data){
        console.log(`Delete "${data.task}" to your TODO list`);
    }

    static completeList(data){
        console.log(data);
    }
}

module.exports = View;