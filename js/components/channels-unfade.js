// Component to change to color on click.
AFRAME.registerComponent('channels-unfade', {
    init: function () {


    },

    update: function (oldData) {

        /*
        if (channels[0].getAttribute('material', 'opacity') == 0) {
            return;
        }
        */

        var el = this.el;
        var data = this.data;


        //var diffData = diff(data, oldData || {});
        // console.log("diffData " + diffData); 


        var channels;

        /*
        
        this.el.addEventListener('click', function () {

            channels = document.querySelectorAll(".channels");



            for (i = 0; i < channels.length; i++) {
                channels[i].emit('unfade');
            }

        });


        */
    }
});