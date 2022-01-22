sap.ui.define([], 
    function(){
        return {

            salaryCurrencyConversion: function(salary){
                if(salary === 2000){
                    return salary + " " + "INR";
                }else {
                    return salary + " " + "USD";
                }
                

            },

            joiningDateConversion: function(jd){
                var sYear = jd.substring(0,4);
                var sMonth = jd.substring (4,6);
                var sDate = jd.substring(6,8);

                return sYear + "/" + sMonth + "/" + sDate;

            }


        }



});