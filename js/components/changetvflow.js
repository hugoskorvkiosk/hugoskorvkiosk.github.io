// Component to change to color on click.
AFRAME.registerComponent('changetvflow', {


    schema: {
        listen: {
            default: 'click'
        },
    },

    update: function () {
        var data = this.data;
        var el = this.el;


        this.el.addEventListener(data.listen, function () {

            var currentflowtemplate = document.querySelector('#flowcontentcontainer').getAttribute('template').src;
            var currentflowtemplatenumber = currentflowtemplate.split('flow')[1];
            
            var increase = (parseInt(currentflowtemplatenumber)+1) %3;
            var decrease = (parseInt(currentflowtemplatenumber)-1) %3;
            
              if(decrease == 0){
              
                decrease = 1;
              }
            
            console.log("increase " + increase + "  decrease " + decrease);
            

            if (el.getAttribute('id') == "scrollleftchannelflow" && currentflowtemplatenumber != "1") {

              
            document.querySelector('#flowcontentcontainer').setAttribute('template', 'src', "scenes/"+"flow"+decrease+".template");
              
           

            } else if (el.getAttribute('id') == "scrollrightchannelflow" && currentflowtemplatenumber != "3") {
            
   
            document.querySelector('#flowcontentcontainer').setAttribute('template','src',"scenes/"+"flow"+increase+".template");
              

            } else if(el.getAttribute('id') == "scrollupchannelflow" && currentflowtemplatenumber != "1") {
                document.querySelector('#flowcontentcontainer').setAttribute('template','src',"scenes/"+"flow"+decrease+".template");
            }
            else if(el.getAttribute('id') == "scrolldownchannelflow" && currentflowtemplatenumber != "3"){
                 document.querySelector('#flowcontentcontainer').setAttribute('template','src',"scenes/"+"flow"+increase+".template");
            }


        });


    


    },


});