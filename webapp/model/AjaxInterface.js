sap.ui.define([ ], function () {
    'use strict';

    class AjaxInterface {
        constructor() {

        }

        get() {
            let aResults
            $.ajax({
                url: "../localService/mockdata/mockdata.json",
                method: "GET",
                async: false,
                success: aData => {
                    console.log("gelukt");
                    console.log(aData);
                    //oModel.setData(aData)
                    aResults = aData
                }
            });
            return aResults
        }

        create() {

        }
    }
    return AjaxInterface;

});