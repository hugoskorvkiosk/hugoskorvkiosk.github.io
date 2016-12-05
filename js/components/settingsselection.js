// Component to change to color on click.
AFRAME.registerComponent('settingsselection', {


    schema: {
        listen: {
            default: 'click'
        },
        target: {
            type: 'selector'
        },
        emit: {
            default: 'moveindication'
        },
        active:{
            type: 'boolean'
        }
        ,
        setting:{
            default: 'fade'    
        }
        
    },

    update: function () {
        var data = this.data;
        var el = this.el;


        this.el.addEventListener(data.listen, function () {

             var newopacity;
            if(data.active){
                
                console.log("deactivating");
                el.setAttribute('cursorover','color','#6F6F6F');
                newopacity = '1';
                
            }else{
                
                console.log("activating");
                
                el.setAttribute('cursorover','color','#A43D18');
                 newopacity = '0.55';
               
            }
            
            
            el.setAttribute('settingsselection', 'active', !data.active);
            
            switch (data.setting){
                case "fade": 
                       document.querySelector('#vidbox').setAttribute('unfade-channelmenu','active',!data.active);
                    break;
                case "transparent": 
                    document.querySelector('#curvedbg').setAttribute('material','opacity',newopacity);
                    break; 
                case "hide": 
                    break;
                
            }
            
            

        });

    },


});