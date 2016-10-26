AFRAME.registerComponent('animationdone', {
    schema: {
        listen: {
            default: ''
        },
        emit: {
            default: ''
        }
    },

    update: function () {
       


        this.el.addEventListener('animation-complete', function () {


            console.log("animation done");




            document.querySelector(".isanimationdone").setAttribute("id", "true");




        });

        this.el.addEventListener('animation-begin', function () {


            console.log("animation begin");




            document.querySelector(".isanimationdone").setAttribute("id", "false");




        });






    }
});