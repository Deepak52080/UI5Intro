sap.ui.jsview("demo.view.Main", {

    getControllerName: function(){
        return "demo.controller.Main";

    },
    //This method is use for creting the content of View 
    createContent: function(oController){


        var oSwitch = new sap.m.Switch({


        });
        
        //this is the object of button 
        var oButton = new sap.m.Button({
            id: "idBtn",
            text: "Welcome to First SAP UI5 Control",
            icon: "sap-icon://attachment",
            type: "Critical",
            press: oController.myBtnClick
        });

        return [oSwitch, oButton];

        //oButton.placeAt("content");



    }

})