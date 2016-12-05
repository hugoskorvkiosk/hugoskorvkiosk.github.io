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

    update: function () {


        var channelimage = document.querySelector("#channelbox");
        var vidbox = document.querySelector('#vidbox');




        this.el.addEventListener('click', function () {



            var channelormenu = this.getAttribute('id').split('plane')[0];
            var planeindex = this.getAttribute('id').split('plane')[1];
            var whichvidbox = planeindex % 3;


            var curvedbg = document.querySelector("#curvedbg");

            console.log(channelormenu);
            console.log(planeindex);
            console.log(whichvidbox);

            if (channelormenu == "channel") {

                document.querySelector('#channelbox').setAttribute('visible', 'true');
                channelimage.setAttribute('src', '#bigtv' + planeindex);

                vidbox.setAttribute('src', '#vidbox' + whichvidbox);


            } else {


                console.log("b4 switch");

                planeindex = parseInt(planeindex);

                switch (planeindex) {
                case 1:
                    document.querySelector("#curvedbg").emit('rotatetoscreen');
                    break;
                case 2:
                    document.querySelector("#curvedbg").emit('rotatetofilm');
                    break;
                case 3:
                    document.querySelector("#curvedbg").emit('rotatetotvflow');
                    break;
                case 4:
                    document.querySelector("#curvedbg").emit('rotatetowebtv');
                    break;
                case 5:
                    document.querySelector("#curvedbg").emit('rotatetosettings');
                    break;

                }


            }



        });


    },

});