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

            console.log(this.getAttribute('id'));
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

//                menuscene.setAttribute('template', 'src', '#menuitemtemplate' + planeindex);
            
                
                
                menuscene.setAttribute('visible', 'true');
                
                
                menuscene.setAttribute('template', 'src', '#menuscene' + planeindex );

                
                
                
                
                
            }




            document.querySelector(".previousentityselected").setAttribute("id", this.getAttribute('id'));

            /*
            if (thescene.getAttribute('template').src == 'scenes/channelplanes.html') {
                thescene.setAttribute('template', 'src', 'scenes/newscene.html');
            }
*/



        });
        
                this.el.addEventListener('mouseenter', function () {
        
                    this.setAttribute('material', 'color', '#F15A24');
        
                });
                
                this.el.addEventListener('mouseleave', function () {
        
                    this.setAttribute('material', 'color', '#2D2D2D');
        
                });
    },

});