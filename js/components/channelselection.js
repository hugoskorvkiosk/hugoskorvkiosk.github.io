AFRAME.registerComponent('channelselection', {

    schema: {
        previousentity: {
            default: ''
        }

    },

    init: function () {

        var el = this.el;
        this.channelselection = null;


    },

    update: function (oldData) {



        var channelsplane;



        

        channelsplane = document.querySelectorAll(".channelplane");
        //    thetemplatescene = document.querySelector("#thetemplatescene");
        var menuscene = document.querySelector("#menuscene");

        var channelscene = document.querySelector("#channelscene");
        var channelimage = document.querySelector("#channelbox");
        var vidbox = document.querySelector('#vidbox');



        this.el.addEventListener('click', function () {


            console.log("click");

            var fadewhenvidobjects = document.querySelectorAll('.fadewhenvid');


//            if (document.querySelectorAll('.fadewhenvid')[1].getAttribute('material').opacity != '1') {

                console.log("opacity is not 1");

                for (var i = 0; i < fadewhenvidobjects.length; i++) {

                    console.log("unfade");

                    document.querySelectorAll('.fadewhenvid')[i].emit('unfade');


                }


//            }



            console.log(this);


            // should be added

            // if(this.getAttribute('material').opacity != "1"){
            // return;
            // }

            var channelormenu = this.getAttribute('id').split('plane')[0];
            var planeindex = this.getAttribute('id').split('plane')[1];
            var whichvidbox = planeindex % 3;
            
        

            console.log(channelormenu);
            console.log(planeindex);
            console.log(whichvidbox);

            if (channelormenu == "channel") {

                channelimage.setAttribute('src', '#bigtv' + planeindex);

                vidbox.setAttribute('src', '#vidbox' + whichvidbox);
                

            } else {

                menuscene.setAttribute('template', 'src', 'scenes/menuscene' + planeindex + '.template');

            }



            //            switch (this.getAttribute('id')) {
            //            case 'menuplane1':
            //                menuscene.setAttribute('template', 'src', 'scenes/menuscene1.template');
            //                break;
            //            case 'menuplane2':
            //                menuscene.setAttribute('template', 'src', 'scenes/menuscene2.template');
            //                break;
            //            case 'menuplane3':
            //                menuscene.setAttribute('template', 'src', 'scenes/menuscene3.template');
            //                break;
            //            case 'menuplane4':
            //                menuscene.setAttribute('template', 'src', 'scenes/menuscene4.template');
            //                break;
            //            case 'menuplane5':
            //                menuscene.setAttribute('template', 'src', 'scenes/menuscene5.template');
            //                break;
            //            case 'menuplane6':
            //                menuscene.setAttribute('template', 'src', 'scenes/menuscene6.template');
            //                break;
            //            case 'channelplane1':
            //                channelimage.setAttribute('src', '#tv1');
            //                vidbox.setAttribute('src', '#vidbox1');
            //                break;
            //            case 'channelplane2':
            //                channelimage.setAttribute('src', '#tv2');
            //                vidbox.setAttribute('src', '#vidbox2');
            //                break;
            //            case 'channelplane3':
            //                channelimage.setAttribute('src', '#tv3');
            //                vidbox.setAttribute('src', '#vidbox3');
            //                break;
            //            case 'channelplane4':
            //                channelimage.setAttribute('src', '#tv4');
            //                vidbox.setAttribute('src', '#vidbox1');
            //                break;
            //            case 'channelplane5':
            //                channelimage.setAttribute('src', '#tv5');
            //                vidbox.setAttribute('src', '#vidbox2');
            //                break;
            //            case 'channelplane6':
            //                channelimage.setAttribute('src', '#tv6');
            //                vidbox.setAttribute('src', '#vidbox3');
            //                break;
            //            case 'channelplane7':
            //                channelimage.setAttribute('src', '#tv7');
            //                vidbox.setAttribute('src', '#vidbox1');
            //                break;
            //            case 'channelplane8':
            //                channelimage.setAttribute('src', '#tv8');
            //                vidbox.setAttribute('src', '#vidbox2');
            //                break;
            //            case 'channelplane9':
            //                channelimage.setAttribute('src', '#tv9');
            //                vidbox.setAttribute('src', '#vidbox3');
            //                break;
            //            case 'channelplane10':
            //                channelimage.setAttribute('src', '#tv10');
            //                vidbox.setAttribute('src', '#vidbox1');
            //                break;
            //
            //            }

            document.querySelector(".previousentityselected").setAttribute("id", this.getAttribute('id'));

            /*
            if (thescene.getAttribute('template').src == 'scenes/channelplanes.html') {
                thescene.setAttribute('template', 'src', 'scenes/newscene.html');
            }
*/



        });
        //
        //        this.el.addEventListener('mouseenter', function () {
        //
        //            this.setAttribute('material', 'color', '#F15A24');
        //
        //        });
        //        
        //        this.el.addEventListener('mouseleave', function () {
        //
        //            this.setAttribute('material', 'color', '#2D2D2D');
        //
        //        });
    },

});