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

            
            if(data.active){
                
                console.log("is active");
                el.setAttribute('cursorover','color','#BE471C');
                
            }else{
            
                
                el.setAttribute('cursorover','color','#6F6F6F');
            }
            
            
            el.setAttribute('settingsselection', 'active', !data.active);
            
            switch (data.setting){
                case "fade": 
                    break;
                case "transparent": 
                    break; 
                case "hide": 
                    break;
                
            }
            
              if(data.setting == "fade"){
                  
                  document.querySelector('#vidbox').setAttribute('unfade-channelmenu','active',!data.active);
              
              }
          

        });

    },


});