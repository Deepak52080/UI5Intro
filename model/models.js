sap.ui.define(
    ["sap/ui/model/json/JSONModel"],
    
    function(JSONModel){

        return {
            createEmployeeModel: function(filePath){
                //1 - Craete a model object 
                var oModel = new JSONModel();

                oModel.loadData(filePath);

                return oModel;

            }

        }


});