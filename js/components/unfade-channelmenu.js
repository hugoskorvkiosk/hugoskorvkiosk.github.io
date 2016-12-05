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



        this.el.addEventListener('mouseleave', function () {


            if(document.querySelector('#vidbox').getAttribute('unfade-channelmenu').active){

                console.log("active true");

                console.log(document.querySelector('#vidbox').getAttribute('unfade-channelmenu').active);
                console.log("mouseleave");

                var fadewhenvidobjects = document.querySelectorAll('.fadewhenvid');


                console.log("opacity is not 1");

                for (var i = 0; i < fadewhenvidobjects.length; i++) {

                    document.querySelectorAll('.fadewhenvid')[i].setAttribute('visible', 'true');

                }
            }



        });


        this.el.addEventListener('mouseenter', function () {


            if(document.querySelector('#vidbox').getAttribute('unfade-channelmenu').active){


                console.log(document.querySelector('#vidbox').getAttribute('unfade-channelmenu').active);
                console.log("mouseenter");


                var fadewhenvidobjects = document.querySelectorAll('.fadewhenvid');


                console.log("fade");

                for (var i = 0; i < fadewhenvidobjects.length; i++) {


                    document.querySelectorAll('.fadewhenvid')[i].setAttribute('visible', 'false');

                }

            }



        });



    }
});