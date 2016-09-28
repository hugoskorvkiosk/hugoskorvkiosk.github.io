// Component to change to color on click.
AFRAME.registerComponent('channels-fade', {
    init: function () {


    },

    update: function (oldData) {

        var el = this.el;
        var data = this.data;


        //var diffData = diff(data, oldData || {});
        // console.log("diffData " + diffData); 
        var channels;

        
        /*
        
        this.el.addEventListener('click', function () {



            channels = document.querySelectorAll(".channels");


            console.log(channels);

            for (i = 0; i < channels.length; i++) {

                channels[i].emit('fade');


            }






            /*
            for (i = 0; i < channels.length; i++) {
                channels[i].emit('fade');
            }
            


        });

        
        */

    }
});