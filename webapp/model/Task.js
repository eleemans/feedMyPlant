sap.ui.define([], function () {
    'use strict';

    class Task{
        constructor(data){
            this.itemName = data.itemNumber
            this.itemDescription = data.itemText
            this.createdAt = data.aanmaakDatum
        }
    }
    return Task
});