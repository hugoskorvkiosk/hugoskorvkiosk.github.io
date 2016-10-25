AFRAME.registerComponent('unfade-channelmenu', {
    schema: {
        listen: {
            default: 'mouseleave'
        },
        emit: {
            default: ''
        }
    },

    update: function () {
        var data = this.data;
        this.el.addEventListener(data.listen, function () {

            
            console.log("mouseleave");

                var fadewhenvidobjects = document.querySelectorAll('.fadewhenvid');
                  
            console.log(document.querySelectorAll('.fadewhenvid')[1].getAttribute('material').opacity == '0');
            
            console.log("before if opacity");

            
            
//            
//            
//                if (document.querySelectorAll('.fadewhenvid')[1].getAttribute('material').opacity == '0') {
//                    
//                    console.log("opacity is not 1");
//                    
//                        for (var i = 0; i < fadewhenvidobjects.length; i++) {
//                            
//                            console.log("unfade");
//
//                    document.querySelectorAll('.fadewhenvid')[i].emit('unfade');
//                  
//                            
//                }
//                    
//                    
//                }

            




            //        data.target.emit(data.emit);


            //        document.querySelector('#thescene').setAttribute('material', 'opacity', '0.99');


            //         document.querySelector('#thechanneltemplatescene').emit('animationover');

            //      data.target.emit(data.emit);


        });
    }
});