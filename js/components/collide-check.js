AFRAME.registerComponent('collide-check', {
    dependencies: ['raycaster'],


    init: function () {

        this.el.addEventListener('raycaster-intersection', this.onIntersection.bind(this));



    },

    onIntersection: function (evt) {


    
        var channels;
        var menuitems;
        var channelsplane;
        var menuplane;
        
        
        channelsplane = document.querySelectorAll(".channelsplane");
        menuplane = document.querySelectorAll(".menuplane");
        channels = document.querySelectorAll(".channels");
        menuitems = document.querySelectorAll(".menu");

        
        var self = this;
        var cursorEl = this.el;
        var data = this.data;
        var intersectedEl = evt.detail.els[0]; // Grab the closest.

        // Set intersected entity if not already intersecting.
        if (this.intersectedEl === intersectedEl) {

            




            if (this.intersectedEl.id == 'vidbox') {



                for (i = 0; i < channelsplane.length; i++) {
                    
             
                    channels[i].setAttribute('material', 'opacity', '0');
                    channelsplane[i].setAttribute('material', 'opacity', '0');
                    menuitems[i].setAttribute('material', 'opacity', '0');
                    menuplane[i].setAttribute('material', 'opacity', '0');

                    /*
                    channels[i].emit('fade');
                    channelsplane[i].emit('fade');
                    menuitems[i].emit('fade');
                    menuplane[i].emit('fade');
                    */
                }




            } else{
                
          

                if (channels[1].getAttribute('material').opacity == 0) {
                    

                    for (i = 0; i < channelsplane.length; i++) {

                        
                        channels[i].setAttribute('material', 'opacity', '1');
                        channelsplane[i].setAttribute('material', 'opacity', '1');
                        menuitems[i].setAttribute('material', 'opacity', '1');
                        menuplane[i].setAttribute('material', 'opacity', '1');


                        /*

                        channels[i].emit('unfade');
                        channelsplane[i].emit('unfade');
                        menuitems[i].emit('unfade');
                        menuplane[i].emit('unfade');
                        
                        */

                    }

                }
            }

        }


        this.intersectedEl = intersectedEl;




    }
});