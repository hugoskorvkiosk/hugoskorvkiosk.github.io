// Component to change to color on click.
AFRAME.registerComponent('changeflowchannel', {


    schema: {
        listen: {
            default: 'click'
        },
    },

    update: function () {
        var data = this.data;



        this.el.addEventListener(data.listen, function () {

            var flowchannelbox = document.querySelector('#flowchannelbox1').getAttribute('src');

            var currentflowchannel1 = document.querySelector('#flowchannelbox1').getAttribute('src').split('bigtv')[1];


            console.log(flowchannelbox);
            console.log(currentflowchannel1);
            var newflowchannel;


            if (this.getAttribute('id') == "scrollupchannelflow" && currentflowchannel1 != 1) {

                newflowchannel = (parseInt(currentflowchannel1) - 1);

            } else if (this.getAttribute('id') == "scrolldownchannelflow" && currentflowchannel1 != 5) {
                newflowchannel = (parseInt(currentflowchannel1) + 1);

            } else {
                return;
            }

            for (var i = 0; i < 5; i++) {
                document.querySelector('#flowchannelbox' + (i + 1)).setAttribute('src', '#bigtv' + (i + newflowchannel));
            }


        });


    


    },


});