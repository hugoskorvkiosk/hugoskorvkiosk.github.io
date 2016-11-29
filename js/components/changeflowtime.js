// Component to change to color on click.
AFRAME.registerComponent('changeflowtime', {


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
            var currentflowtemplatenumber = currentflowtemplate.split('template')[1];
            
            

            if (el.getAttribute('id') == "scrollleftchannelflow") {

                
                if(currentflowtemplatenumber == "1"){
                    return;
                }
                else{
                    
                  
                    
                    var decrease = parseInt(currentflowtemplatenumber)-1;
                    
                   
                    console.log("decrease " + decrease);
                    document.querySelector('#flowcontentcontainer').setAttribute('template','src',"#nunjucksflowtemplate"+decrease);
                }
           

            } else if (el.getAttribute('id') == "scrollrightchannelflow") {
            
                
                if(currentflowtemplatenumber == "3"){
                    return;
                }
                    else{
                   
                       var increase = parseInt(currentflowtemplatenumber)+1;
                        
                         console.log("increase " + increase);
                        document.querySelector('#flowcontentcontainer').setAttribute('template','src',"#nunjucksflowtemplate"+increase);
                }
                

            } else {
                return;
            }


        });


    


    },


});