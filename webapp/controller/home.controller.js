sap.ui.define([
    "com/leemans/feedMyPlant/controller/BaseController",
], function(BaseController) {
    "use strict";

    return BaseController.extend("com.leemans.focusToday.controller.home", {

        onInit: function() {
            this.getRouter().getRoute("RouteHome").attachPatternMatched(this._onRouteMatched, this)


        },

        _onRouteMatched: function(oEvent) {
           this.get();
        },

        get: function() {
            let aResults
            $.ajax({
                url: "../localService/mockdata/mockdata.json",
                method: "GET",
                async: false,
                success: aData => {
                    console.log("gelukt");
                    //oModel.setData(aData)
                    aResults = aData
                }
            });
            this._createModel(aResults, "viewModel")
        },

       

        _onSelect: function(oEvent) {


        },

        onCreate: function(oEvent) {

        },

        onUpdate: function(oEvent) {

        },

        onDelete: function(oEvent) {

        },

        _createModel: function(json, name) {
            let aData = json
            let oModel = new sap.ui.model.json.JSONModel()
            oModel.setData(aData);
            this.getView().setModel(oModel, name)

        },



    });
});