AFRAME.registerComponent('collide-check', {
    dependencies: ['raycaster'],


    init: function () {

        this.el.addEventListener('raycaster-intersection', this.onIntersection.bind(this));



    },

    onIntersection: function (evt) {


        channelsplane = document.querySelectorAll(".channelsplane");
        menuplane = document.querySelectorAll(".menuplane");
        channels = document.querySelectorAll(".channels");
        menuitems = document.querySelectorAll(".menu");


        var timesIntersected;
        var channels;
        var menuitems;
        var channelsplane;
        var menuplane;
        var self = this;
        var cursorEl = this.el;
        var data = this.data;
        var intersectedEl = evt.detail.els[0]; // Grab the closest.

        // Set intersected entity if not already intersecting.
        if (this.intersectedEl === intersectedEl) {





            if (this.intersectedEl.id == 'vidbox') {



                for (i = 0; i < channels.length; i++) {
                    channels[i].emit('fade');
                    channelsplane[i].emit('fade');
                    menuitems[i].emit('fade');
                    menuplane[i].emit('fade');
                }




            } else {


                if (channels[1].getAttribute('material').opacity === 0) {

                    for (i = 0; i < channels.length; i++) {
                        channels[i].emit('unfade');
                        channelsplane[i].emit('unfade');
                        menuitems[i].emit('unfade');
                        menuplane[i].emit('unfade');

                    }

                }
            }

        }


        this.intersectedEl = intersectedEl;




    }
});