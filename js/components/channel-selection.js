// Component to change to color on click.
AFRAME.registerComponent('channel-selection', {


    update: function (oldData) {


        var thescene;
        var channelsplane;
        var menuscene;
        var templatescene;


        channelsplane = document.querySelectorAll(".channelsplane");
        //    thetemplatescene = document.querySelector("#thetemplatescene");
        //    menuscene = document.querySelector("#menuscene");
        thescene = document.querySelector("#thescene");
        var channelimage = document.querySelector("#channelbox");
        var vidbox = document.querySelector('#vidbox');

        //  menuplane = document.querySelectorAll(".menuplane");



        this.el.addEventListener('click', function () {

            //   console.log("clicked on channel");




            for (i = 0; i < channelsplane.length; i++) {

                channelsplane[i].setAttribute('material', 'color', '#2D2D2D');
                //   menuplane[i].setAttribute('material', 'color', '#2D2D2D');


            }



            console.log("clicked on channel");

            this.setAttribute('material', 'color', '#F15A24');


            //depending on which button is clicked a scene is loaded
            console.log(this.getAttribute('id'));

            switch (this.getAttribute('id')) {
            case '1plane0':
                thescene.setAttribute('template', 'src', 'scenes/menuscene1.template');
                break;
            case '1plane1':
                thescene.setAttribute('template', 'src', 'scenes/menuscene2.template');
                break;
            case '1plane2':
                thescene.setAttribute('template', 'src', 'scenes/menuscene3.template');
                break;
            case '1plane3':
                thescene.setAttribute('template', 'src', 'scenes/menuscene4.template');
                break;
            case '1plane4':
                thescene.setAttribute('template', 'src', 'scenes/menuscene5.template');
                break;
            case '1plane5':
                thescene.setAttribute('template', 'src', 'scenes/menuscene6.template');
                break;
            case '0plane0':
                channelimage.setAttribute('src', '#tv5');
                vidbox.setAttribute('src', '#vidbox3');
                break;
            case '0plane1':
                channelimage.setAttribute('src', '#tv5');
                vidbox.setAttribute('src', '#vidbox2');
                break;
            case '0plane2':
                channelimage.setAttribute('src', '#tv4');
                vidbox.setAttribute('src', '#vidbox1');
                break;
            case '0plane3':
                channelimage.setAttribute('src', '#tv3');
                vidbox.setAttribute('src', '#vidbox3');
                break;
            case '0plane4':
                channelimage.setAttribute('src', '#tv2');
                vidbox.setAttribute('src', '#vidbox2');
                break;
            case '0plane5':
                channelimage.setAttribute('src', '#tv1');
                vidbox.setAttribute('src', '#vidbox1');
                break;



            }


            /*
            if (thescene.getAttribute('template').src == 'scenes/channelplanes.html') {
                thescene.setAttribute('template', 'src', 'scenes/newscene.html');
            }
*/

        });


    }
});