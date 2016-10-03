AFRAME.registerComponent('collide-check', {
    dependencies: ['raycaster'],


    init: function () {

        this.el.addEventListener('raycaster-intersection', this.onIntersection.bind(this));

        this.maskEl = this.el.sceneEl.querySelector('#thescene');

    },

    onIntersection: function (evt) {



        var channels;
        var menuitems;
        var channelsplane;
        var menuplane;

        var currentscene;

        //  currentscene = document.querySelector('#thescene');
        channelmenuplanes = document.querySelector('#thetemplatescene');

        channelsplane = document.querySelectorAll(".channelsplane");
        menuplane = document.querySelectorAll(".menuplane");
        /*
        channels = document.querySelectorAll(".channels");
        menuitems = document.querySelectorAll(".menu");
        */

        var self = this;
        var cursorEl = this.el;
        var data = this.data;
        var intersectedEl = evt.detail.els[0]; // Grab the closest.

        // Set intersected entity if not already intersecting.




        if (this.intersectedEl === intersectedEl) {

            if (this.intersectedEl.id == 'vidbox') {




                //currentscene.setAttribute('visible', 'false');


                // currentscene.children[1].setAttribute('material', 'opacity', '0');

                // console.log(currentscene.children[1]);

                //currentscene[1].emit('fade');

                //  currentscene.children[1].emit('fade');
                // self.maskEl.emit('fade');


                if (channelsplane[1].getAttribute('material').opacity != 0) {
                    
                   // channelsplane[i].setAttribute('material', 'opacity', '0');
                  //  console.log(channelmenuplanes.children[1].getAttribute('material').opacity);
                   // channelmenuplanes.children[1].setAttribute('material', 'opacity', '0');
                //    channelmenuplanes.children[1]('material').opacity = 0;
                    
                    
                    /*
                    for (i = 0; i < channelsplane.length; i++) {


                        console.log("fading");
                        channelsplane[i].emit('fade');

                        // channelsplane[i].setAttribute('material', 'opacity', '0');
                        //  menuplane[i].setAttribute('material', 'opacity', '0');

                    }
                    
                    */
                }

            } else  {

              

             if (channelsplane[1].getAttribute('material').opacity != 1) {
                 
                 
                 /*
                    for (i = 0; i < channelsplane.length; i++) {



                        channelsplane[i].setAttribute('material', 'opacity', '1');
                        //  menuplane[i].setAttribute('material', 'opacity', '0');

                    }
                    */
                }

            }

        }
        
        
        this.intersectedEl = intersectedEl;

    }
});