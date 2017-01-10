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
        var el = this.el;


        var thechanneltemplatescene = document.querySelector('#thechanneltemplatescene');



        var templateposition;
        var newpositiony;
        var channelposition;


        this.el.addEventListener(data.listen, function () {


            templateposition = document.querySelector('#thechanneltemplatescene').getAttribute('position');
            channelposition = el.getAttribute('position');


            var realchannelposy = parseFloat(channelposition.y + templateposition.y).toFixed(2);


            var channelindicatorpos = document.querySelector('#channelselectedindication').getAttribute('position').y;
            var frompos = document.querySelector('#channelselectedindication').getAttribute('position');


            var heightofchannelplane = parseFloat (el.getAttribute('geometry').height /2);

            var belowselectedchannelposy = parseFloat( realchannelposy - heightofchannelplane).toFixed(2);
            

            var newpos = {
                x: frompos.x,
                y: belowselectedchannelposy,
                z: frompos.z
            };


            console.log(channelposition);

            console.log(frompos);

            document.querySelector('#channelselectedindication').setAttribute('animation__scroll', 'to', newpos);
            document.querySelector('#channelselectedindication').setAttribute('animation__scroll', 'from', frompos);



            //             console.log(  document.querySelector('#channelselectedindication').setAttribute('animation__scroll').to );
            console.log(document.querySelector('#channelselectedindication').getAttribute('animation__scroll').from);


                        data.target.emit(data.emit);





        });



    },


});