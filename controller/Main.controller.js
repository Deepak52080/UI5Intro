sap.ui.define(
    ["sap/ui/core/mvc/Controller",
    "demo/model/models"],
    function(Controller, Model){
        return Controller.extend("demo.controller.Main", {

            //this.oLocal = "demo";

            onInit: function(){
                // this.oGlobalVariable = "Hello globalVarible";

                // //1-create a model object
                // var oModel = new JSONModel();

                //1- set the data to model
                // oModel.setData();

                //3 - make the model aware to View
                // this.getView().setModel(oModel);

                //alert(this.oGlobalVariable);

                this.oModel = Model.createEmployeeModel("model/mockData/emp.json");
                

                this.oModel1 = Model.createEmployeeModel("model/mockData/emp1.json");

                // seeting the model at view level
                // this.getView().setModel(this.oModel);

                //setting the model at application level 
                //this is my deafult model
                sap.ui.getCore().setModel(this.oModel);
                // this is my named model
                 sap.ui.getCore().setModel(this.oModel1, "myNamedModel");


            },
            
            myBtnClick: function(){
                var oBtn = sap.ui.getCore().byId("idBtn");
                oBtn.setVisible(false);

            },
            
            myXMLBtnClick: function(){
                var oBtn = this.getView().byId("idXML");
                oBtn.setText("text gets changed");

            },
            onPress: function(){
                var oName = this.getView().byId("idName").getValue();
                var oEmp = this.getView().byId("idEmpID").getValue();
                var oAddress = this.getView().byId("idAddress").getValue();
                var oContact = this.getView().byId("idContact").getValue();
                var oSalary = this.getView().byId("idSal").getValue();
                var aArray = [];
                    aArray.push(oName, oEmp, oAddress, oContact, oSalary);

                var oTextArea= this.getView().byId("idArea");
                   
                    // oTextArea.setValue(this.oGlobalVariable);
                    oTextArea.setValue(aArray);


            },
            onPressChange: function(){
                this.oModel.setProperty("/empTable/0/enabled", true);

            }
        });


});