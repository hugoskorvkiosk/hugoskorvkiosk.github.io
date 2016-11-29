AFRAME.registerComponent('unfade-channelmenu', {
    schema: {
        listen: {
            default: ''
        },
        emit: {
            default: ''
        }
    },

    update: function () {
       


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