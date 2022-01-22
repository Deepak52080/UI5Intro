sap.ui.define(
    ["sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"],
    
    function(JSONModel, ResourceModel){

        return {
            createEmployeeModel: function(filePath){
                //1 - Craete a model object 
                var oModel = new JSONModel();

                oModel.loadData(filePath);

                return oModel;

            },

            getResourceModel: function(){
                var oModel = new ResourceModel({
                        bundleUrl: 'i18n/i18n.properties'
                });
                return oModel;
            }

        }


});