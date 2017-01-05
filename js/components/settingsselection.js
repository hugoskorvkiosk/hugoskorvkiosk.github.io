// Component to change to color on click.
AFRAME.registerComponent('settingsselection', {


    schema: {
        listen: {
            default: 'click'
        },
        target: {
            type: 'selector'
        },

        active: {
            type: 'boolean'
        },
        setting: {
            default: 'fade'
        }

    },
    
  
          
    update: function () {
        var data = this.data;
        var el = this.el;
        

        this.el.addEventListener(data.listen, function () {

            var newbgopacity;
           
            var fadewhenvidobjects = document.querySelectorAll('.fadewhenvid');
            if (data.active) {

                console.log("deactivating");

                newbgopacity = '1';
          

            } else {

                console.log("activating");

                newbgopacity = '0.55';
       
            }


            el.setAttribute('settingsselection', 'active', !data.active);

            switch (data.setting) {
            case "fade":
                document.querySelector('#vidbox').setAttribute('unfade-channelmenu', 'active', !data.active);

                break;
            case "transparent":
                document.querySelector('#curvedbg').setAttribute('material', 'opacity', newbgopacity);
                break;
            case "hide":
                for (var i = 0; i < fadewhenvidobjects.length; i++) {
                    document.querySelectorAll('.fadewhenvid')[i].setAttribute('visible', 'false');
                    }
                    document.querySelector('#vidbox').setAttribute('unfade-channelmenu', 'active', false);

                break;

            }



        });


        this.el.addEventListener('mouseenter', function () {


            if (data.active) {
                console.log('active: true ' + data.active);
                el.setAttribute('material', 'color', '#F12226');
            } else {
                el.setAttribute('material', 'color', '#22F15A');
            }
            el.setAttribute('material', 'opacity', '0.85');
            

        });

        this.el.addEventListener('mouseleave', function () {



            if (data.active) {
                console.log(data.active);
                el.setAttribute('material', 'opacity', '0.7');
                el.setAttribute('material', 'color', '#22F15A');
            } else {
                
                el.setAttribute('material', 'color', '#ffffff');
                el.setAttribute('material', 'opacity', '0.2');
            }


        });
        
          this.el.addEventListener('click', function () {



            if (!data.active) {
                console.log(data.active);
                el.setAttribute('material', 'opacity', '0.7');
                el.setAttribute('material', 'color', '#22F15A');
            } else {
                
                el.setAttribute('material', 'color', '#ffffff');
                el.setAttribute('material', 'opacity', '0.2');
            }


        });
        

    },


});

//
//
//// Component to change to color on click.
//AFRAME.registerComponent('settingsselection', {
//
//
//    schema: {
//        listen: {
//            default: 'click'
//        },
//        target: {
//            type: 'selector'
//        },
//
//        active: {
//            type: 'boolean'
//        },
//        setting: {
//            default: 'fade'
//        },
//        onoff: {
//            default: 'on'   
//        }
//
//    },
//
//    update: function () {
//        var data = this.data;
//        var el = this.el;
//        
//
//        this.el.addEventListener(data.listen, function () {
//
//            var newbgopacity;
//           
//            var fadewhenvidobjects = document.querySelectorAll('.fadewhenvid');
//           
//            var onoroff =  el.getAttribute('onoff');
//            
//            var onbutton = document.querySelector('#' + data.setting + 'settingOn');
//            var offbutton = document.querySelector('#' + data.setting + 'settingOff');
//            
//            if(data.active){
//            return;
//            }
//            else{
//            
//                if(onoroff == 'off'){
//                
//                    offbutton.setAttribute('settingselection', 'active', true);
//                    offbutton.setAttribute('material','opacity', '1');
//                    onbutton.setAttribute('settingselection', 'active', false);
//                    onbutton.setAttribute('material','opacity', '0.5');
//                
//                }
//                else{
//                
//                    onbutton.setAttribute('settingselection', 'active', true);
//                    onbutton.setAttribute('material','opacity', '1');
//                    offbutton.setAttribute('settingselection', 'active', false);
//                    offbutton.setAttribute('material','opacity', '0.5');
//                
//                }
//                
//           
//            
//            }
//            
//            /*
//            
//            om !active 
//             om onoff == off
//                off set active
//                off set opacity 1
//                on set !active
//                on set opacity 0.5
//            
//            */
//            
//            if (!data.active) {
//
//                console.log("deactivating");
//
//                newbgopacity = '1';
//          
//
//            } else {
//
//                console.log("activating");
//
//                newbgopacity = '0.55';
//       
//            }
//
//            
//
//            switch (data.setting) {
//            case "fade":
//                document.querySelector('#vidbox').setAttribute('unfade-channelmenu', 'active', !data.active);
//
//                break;
//            case "transparent":
//                document.querySelector('#curvedbg').setAttribute('material', 'opacity', newbgopacity);
//                break;
//            case "hide":
//                for (var i = 0; i < fadewhenvidobjects.length; i++) {
//                    document.querySelectorAll('.fadewhenvid')[i].setAttribute('visible', 'false');
//                    }
//                    document.querySelector('#vidbox').setAttribute('unfade-channelmenu', 'active', false);
//
//                break;
//
//            }
//
//
//        });
//
//
//        this.el.addEventListener('mouseenter', function () {
//
//            if (!data.active) {
//                el.setAttribute('material', 'opacity', '1');
//            } 
//
//
//        });
//
//        this.el.addEventListener('mouseleave', function () {
//
//
//            if (!data.active) {
//                console.log(data.active);
//                 el.setAttribute('material', 'opacity', '0.5');
//            }
//
//
//
//        });
//
//    },
//
//
//});