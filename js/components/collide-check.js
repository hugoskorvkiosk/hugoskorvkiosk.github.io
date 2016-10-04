AFRAME.registerComponent('collide-check', {
    dependencies: ['raycaster'],


    init: function () {

        var cursorEl = this.el;
        var canvas = cursorEl.sceneEl.canvas;

        if (!canvas) {
            cursorEl.sceneEl.addEventListener('render-target-loaded', this.init.bind(this));
            return;
        }


        this.el.addEventListener('raycaster-intersection', this.onIntersection.bind(this));
        this.el.addEventListener('raycaster-intersection-cleared',
            this.onIntersectionCleared.bind(this));


        // this.maskEl = this.el.sceneEl.querySelector('#thescene');

    },

    onIntersection: function (evt) {



        var thetemplatescene;
        var channels;
        var menuitems;
        var channelsplane;
        var menuplane;

        var currentscene;
        var templatescene;

        //  currentscene = document.querySelector('#thescene');
        thetemplatescene = document.querySelector('#thetemplatescene');

        // channelsplane = document.querySelectorAll(".channelsplane");
        //    menuplane = document.querySelectorAll(".menuplane");


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

                if (thetemplatescene.getAttribute('template').src == 'channelplanes.html') {
                    thetemplatescene.setAttribute('template').src == 'empty.html'
                }

            } else {

            }

        }


        this.intersectedEl = intersectedEl;

    },

    /**
     * Handle intersection cleared.
     */
    onIntersectionCleared: function (evt) {
        var cursorEl = this.el;
        var intersectedEl = evt.detail.el;


        // Not intersecting.
        if (!intersectedEl || !this.intersectedEl) {

            console.log("not intersecting");
            

            if (thetemplatescene.getAttribute('template').src == '') {
                
                console.log("is this working?");
                
                thetemplatescene.setAttribute('template').src == 'channelplanes.html'
            }

        }

        // Unset intersected entity (after emitting the event).
        this.intersectedEl = null;

    }




});