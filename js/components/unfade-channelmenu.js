AFRAME.registerComponent('unfade-channelmenu', {
    schema: {
        listen: {
            default: ''
        },
        emit: {
            default: ''
        },
        active: {
            type: 'boolean'   
        }
    },

    update: function () {
       var el = this.el;
        var data = this.data;
        
        if(!data.active){
            return;
        }


        this.el.addEventListener('mouseleave', function () {


            console.log("mouseleave");

            var fadewhenvidobjects = document.querySelectorAll('.fadewhenvid');


                console.log("opacity is not 1");

                for (var i = 0; i < fadewhenvidobjects.length; i++) {

                     document.querySelectorAll('.fadewhenvid')[i].setAttribute('visible', 'true');

                }

        });

        
           this.el.addEventListener('mouseenter', function () {

            console.log("mouseenter");


                var fadewhenvidobjects = document.querySelectorAll('.fadewhenvid');


                console.log("fade");
                
                for (var i = 0; i < fadewhenvidobjects.length; i++) {


                  document.querySelectorAll('.fadewhenvid')[i].setAttribute('visible', 'false');
                
                }


        });



    }
});