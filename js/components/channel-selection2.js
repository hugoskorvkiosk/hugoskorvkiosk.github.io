// Component to change to color on click.
AFRAME.registerComponent('channel-selection', {


    update: function (oldData) {


        var thescene;
        var channelsplane;
        var menuscene;
        var templatescene;


      //  channelsplane = document.querySelectorAll(".channelsplane");
    //    thetemplatescene = document.querySelector("#thetemplatescene");
    //    menuscene = document.querySelector("#menuscene");
        thescene = document.querySelector("#thescene");

        //  menuplane = document.querySelectorAll(".menuplane");



        this.el.addEventListener('click', function () {

            //   console.log("clicked on channel");


            /*

            for (i = 0; i < channelsplane.length; i++) {

                channelsplane[i].setAttribute('material', 'color', '#2D2D2D');
                //   menuplane[i].setAttribute('material', 'color', '#2D2D2D');


            }
            
            */


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
            case '1plane6':
              
            }


            /*
            if (thescene.getAttribute('template').src == 'scenes/channelplanes.html') {
                thescene.setAttribute('template', 'src', 'scenes/newscene.html');
            }
*/

        });


    }
});