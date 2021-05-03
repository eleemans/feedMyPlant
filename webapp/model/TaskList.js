sap.ui.define(["com/leemans/focusToday/model/Task"], function(Task) {
    'use strict';

    class TaskList{
        constructor (api) {
            this.api = api;
        }
        async getTasks () {
            let data = this.api.get() //return new Tasks();
            let list = data[0];
            let test = await new Task(list)
           // list.push(data.forEach (data=> {new Task(data)}))
            return test
        }
        addTasks (){
            this.api.create(url) // this.api.creat(new Task)
        }
        //nog te zetten in super
        createModel(object){
            let oModel = new sap.ui.model.json.JSONModel();
            oModel.setData(object)

        }

    } 
    return TaskList;
})