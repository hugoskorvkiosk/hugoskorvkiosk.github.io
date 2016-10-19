
AFRAME.registerComponent('channelselection', {

    schema: {
        previousentity: {
            default: ''
        }

    },

    init: function() {

        var el = this.el;
        this.channelselection = null;


    },

    update: function(oldData) {
        var data = this.data;
        var channelselection = this.channelselection;

        var thescene;
        var channelsplane;
        var menuscene;
        var templatescene;
        var previousid;

        


        //channelselection.color = data.color;

        // console.log(oldData.userHeight);

        var menuplanes = document.querySelectorAll('.menuplane');

        channelsplane = document.querySelectorAll(".channelplane");
        //    thetemplatescene = document.querySelector("#thetemplatescene");
        //    menuscene = document.querySelector("#menuscene");
        thescene = document.querySelector("#thescene");
        var channelimage = document.querySelector("#channelbox");
        var vidbox = document.querySelector('#vidbox');

        //  menuplane = document.querySelectorAll(".menuplane");

        //this.userHeight.set(this.el.getAttribute('id'));

        //this.userHeight = this.el.getAttribute('id');


        //     this.el.setAttribute('userHeight', 'opacity', '3');

        // console.log(this.el.getAttribute('userHeight').opacity);

        //this.data.userHeight = this.el.getAttribute('id');

        this.el.addEventListener('click', function() {


            //                console.log("hej");
            //    console.log(oldData.color);


            console.log(this);



            //        console.log(oldData.userHeight);

            //   console.log("clicked on channel");


            /*

                        for (i = 0; i < channelplane.length; i++) {

                            channelplane[i].setAttribute('material', 'color', '#2D2D2D');
                            //   menuplane[i].setAttribute('material', 'color', '#2D2D2D');
                        }

            */

            //   console.log("clicked on channel");



            // console.log(theOldData);
            //      console.log(previousid);

            /*
            if(typeof previousid !== "undefined"){
              //  console.log("trying to set previous entity color");

                    console.log(document.querySelector('#'+previousid));

                    document.querySelector('#'+previousid).setAttribute('material', 'color', '#2D2D2D');
                    //  previousthis.setAttribute('material', 'color', '#2D2D2D');
            }
      */

            //    oldData.this.setAttribute('material', 'color', '#2D2D2D');

            //console.log(oldData);


            //console.log(previousid);

            //depending on which button is clicked a scene is loaded
            // console.log(this.getAttribute('id'));

            switch (this.getAttribute('id')) {
                case 'menuplane0':
                    thescene.setAttribute('template', 'src', 'scenes/menuscene1.template');
                    break;
                case 'menuplane1':
                    thescene.setAttribute('template', 'src', 'scenes/menuscene2.template');
                    break;
                case 'menuplane2':
                    thescene.setAttribute('template', 'src', 'scenes/menuscene3.template');
                    break;
                case 'menuplane3':
                    thescene.setAttribute('template', 'src', 'scenes/menuscene4.template');
                    break;
                case 'menuplane4':
                    thescene.setAttribute('template', 'src', 'scenes/menuscene5.template');
                    break;
                case 'menuplane5':
                    thescene.setAttribute('template', 'src', 'scenes/menuscene6.template');
                    break;
                case 'channelplane0':
                    channelimage.setAttribute('src', '#tv5');
                    vidbox.setAttribute('src', '#vidbox3');
                    break;
                case 'channelplane1':
                    channelimage.setAttribute('src', '#tv5');
                    vidbox.setAttribute('src', '#vidbox2');
                    break;
                case 'channelplane2':
                    channelimage.setAttribute('src', '#tv4');
                    vidbox.setAttribute('src', '#vidbox1');
                    break;
                case 'channelplane3':
                    channelimage.setAttribute('src', '#tv3');
                    vidbox.setAttribute('src', '#vidbox3');
                    break;
                case 'channelplane4':
                    channelimage.setAttribute('src', '#tv2');
                    vidbox.setAttribute('src', '#vidbox2');
                    break;
                case 'channelplane5':
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


    },
    setColor: function(data) {

        data.setAttribute('material', 'color', '#F15A24');
        console.log("in setColor function");

    },

});
