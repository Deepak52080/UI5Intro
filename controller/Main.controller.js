sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function(Controller){
        return Controller.extend("demo.controller.Main", {

            //this.oLocal = "demo";

            onInit: function(){
                this.oGlobalVariable = "Hello globalVarible";
                //alert(this.oGlobalVariable);

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
                   
                    oTextArea.setValue(this.oGlobalVariable);
                    oTextArea.setValue(aArray);


            }
        });


});