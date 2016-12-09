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
            
            
            if(decrease == -1){
                decrease = 0;
            }
            

            if (el.getAttribute('id') == "scrollleftchannelflow") {

              
            document.querySelector('#flowcontentcontainer').setAttribute('template', 'src', "scenes/"+"flow"+decrease+".template");
              
           

            } else if (el.getAttribute('id') == "scrollrightchannelflow" ) {
            
   
            document.querySelector('#flowcontentcontainer').setAttribute('template','src',"scenes/"+"flow"+increase+".template");
              

            } else if(el.getAttribute('id') == "scrollupchannelflow" ) {
                document.querySelector('#flowcontentcontainer').setAttribute('template','src',"scenes/"+"flow"+decrease+".template");
            }
            else if(el.getAttribute('id') == "scrolldownchannelflow" ){
                 document.querySelector('#flowcontentcontainer').setAttribute('template','src',"scenes/"+"flow"+increase+".template");
            }


        });


    


    },


});