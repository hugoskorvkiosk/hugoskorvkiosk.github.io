// Component to change to color on click.
AFRAME.registerComponent('movechannelclicked', {


    schema: {
        listen: {
            default: 'click'
        },
        target: {
            type: 'selector'
        },
        emit: {
            default: 'beginscroll'
        }
    },

    update: function () {
        var data = this.data;



        var thechanneltemplatescene = document.querySelector('#thechanneltemplatescene');



        var position;
        var newpositiony;
        var channelposition;
        this.el.addEventListener(data.listen, function () {



            // position på channel: 2.8
            // ultimat position: 2.4
            // 2.4 - position på channel = movement
            // movement = -0.4
            // position på template= 0.2
            // Vi vill  till -0.2 med template
            // oldpositiontemplate + movement

            //-0.2
            // vi vill till -0.6
            // 



            position = document.querySelector('#thechanneltemplatescene').getAttribute('position');


            channelposition = this.getAttribute('position');
            var realchannelposy = channelposition.y + position.y;

            console.log(channelposition);
            
            var channelindicatorpos = document.querySelector('#channelselectedindication').getAttribute('position').y;

            var movement = channelindicatorpos - realchannelposy;


            var posy = position.y;

            newpositiony = parseFloat(posy + movement).toFixed(2);


            var newpos = {
                x: position.x,
                y: newpositiony,
                z: position.z
            };




            document.querySelector('#thechanneltemplatescene').setAttribute('animation__scroll', 'to', newpos);

            document.querySelector('#thechanneltemplatescene').setAttribute('animation__scroll', 'from', position);


            data.target.emit(data.emit);





        });



    },


});