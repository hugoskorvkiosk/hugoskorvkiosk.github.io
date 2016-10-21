AFRAME.registerComponent('unfade-channelmenu', {
    schema: {
        listen: {
            default: 'click'
        },
        emit: {
            default: ''
        }
    },

    update: function () {
        var data = this.data;
        this.el.addEventListener(data.listen, function () {


                var fadewhenvidobjects = document.querySelectorAll('.fadewhenvid');
                  
                  console.log(document.querySelectorAll('.fadewhenvid')[1].getAttribute('material').opacity == '0');

                if (document.querySelectorAll('.fadewhenvid')[1].getAttribute('material').opacity != '1') {
                    
                    console.log("opacity is not 1");
                    
                        for (var i = 0; i < fadewhenvidobjects.length; i++) {
                            
                            console.log("unfade");

                    document.querySelectorAll('.fadewhenvid')[i].emit('unfade');
                  
                            
                }
                    
                    
                }

            




            //        data.target.emit(data.emit);


            //        document.querySelector('#thescene').setAttribute('material', 'opacity', '0.99');


            //         document.querySelector('#thechanneltemplatescene').emit('animationover');

            //      data.target.emit(data.emit);


        });
    }
});