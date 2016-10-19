AFRAME.registerComponent('collide-check', {
    dependencies: ['raycaster'],


    init: function() {

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

    onIntersection: function(evt) {

        var self = this;
        var cursorEl = this.el;
        var data = this.data;
        var intersectedEl = evt.detail.els[0]; // Grab the closest.

        var channels;
        var menuitems;
        var channelsplane;
        var menuplane;

        var currentscene;
        var templatescene;

        //  currentscene = document.querySelector('#thescene');
        var thechanneltemplatescene = document.querySelector('#thechanneltemplatescene');
        var themenutemplatescene = document.querySelector('#themenutemplatescene');
        var themenutemplate = document.querySelector('#themenutemplate');
        var menuplanes = document.querySelectorAll('.menuplane');
        var channelplanes = document.querySelectorAll('.channelplane');


        // channelsplane = document.querySelectorAll(".channelsplane");
        //    menuplane = document.querySelectorAll(".menuplane");


        intersectedEl.setAttribute('previousentity', intersectedEl.getAttribute('id'));


        if (this.intersectedEl === intersectedEl) {

            console.log("intersecting same as last time");

            if (this.intersectedEl.id == 'vidbox') {

                //  thechanneltemplatescene.emit('fade');

                /*
            for (i=0; i < channelplanes.length; i++ ){

               channelplanes[i].emit('fade');
                menuplanes[i].emit('fade');
            }
*/

                /*

                 if (thechanneltemplatescene.getAttribute('template').src == 'scenes/channelplanes.template') {

                     console.log("is the template channelplanestemplate");

                     thechanneltemplatescene.setAttribute('template', 'src', 'scenes/empty.template');
                      themenutemplatescene.setAttribute('template', 'src', 'scenes/empty.template');
                 }

                 */

            } else {

            }

        }


        this.intersectedEl = intersectedEl;

    },

    /**
     * Handle intersection cleared.
     */
    onIntersectionCleared: function(evt) {
        var cursorEl = this.el;
        var intersectedEl = evt.detail.el;

        var menuplanes = document.querySelectorAll('.menuplane');
        var channelplanes = document.querySelectorAll('.channelplane');
        var thechanneltemplatescene = document.querySelector('#thechanneltemplatescene');
        var themenutemplatescene = document.querySelector('#themenutemplatescene');
        var themenutemplate = document.querySelector('#themenutemplate');




        // thechanneltemplatescene.emit('unfade');



        // Not intersecting.
        if (!intersectedEl || !this.intersectedEl) {



            /*
                        for (i = 0; i < channelplanes.length; i++ ){

                           channelplanes[i].emit('unfade');
                            menuplanes[i].emit('unfade');
                        }
            */

            /*

                        if (thechanneltemplatescene.getAttribute('template').src == 'scenes/empty.template') {

                            console.log("is this working?");

                            thechanneltemplatescene.setAttribute('template', 'src', 'scenes/channelplanes.template');
                            themenutemplatescene.setAttribute('template', 'src', 'scenes/menuplanes.template');
                        }

            */

        }

        // Unset intersected entity (after emitting the event).
        this.intersectedEl = null;

    }




});
