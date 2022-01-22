sap.ui.define(
    ["sap/ui/core/mvc/Controller",
    "demo/model/models",
    "demo/utils/formatter"],
    function(Controller, Model, Formatter){
        return Controller.extend("demo.controller.Main", {

            //this.oLocal = "demo";
            hulk: Formatter, // Formatter has been assigned to Hulk
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

                this.oModel2 = Model.getResourceModel();

                // seeting the model at view level
                // this.getView().setModel(this.oModel);

                //setting the model at application level 
                //this is my deafult model
                sap.ui.getCore().setModel(this.oModel);
                sap.ui.getCore().setModel(this.oModel2, "i18n");
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

            },

            onSelect: function(oEvent){


                // This is the one we used for Aggreation Binding concept

                // // to get the binding path of slected row
                // var oSelect = oEvent.getParameter("listItem").getBindingContextPath();

                // // to gte the specific row data 
                // var oSelctedItem = oEvent.getParameter("listItem").getBindingContext("myNamedModel").getObject();

                // //var oForm = this.getView().byId("idForm");
                // var oEmpname = this.getView().byId("idName").setValue(oSelctedItem.empName);
                //  var oEmpNo = this.getView().byId("idEmpID").setValue(oSelctedItem.empNo);
                // var oEmpAddress = this.getView().byId("idAddress").setValue(oSelctedItem.address);
                // var oContact = this.getView().byId("idContact").setValue(oSelctedItem.contact);
                // var oSalary = this.getView().byId("idSal").setValue(oSelctedItem.salary);

                 // This is the one we used for Element  Binding concept
                
                 var oSelect = oEvent.getParameter("listItem").getBindingContextPath();
                 var oForm = this.getView().byId("idForm");
                 oForm.bindElement(oSelect);




            }

        });


});