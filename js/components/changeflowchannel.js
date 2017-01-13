// Component to change to color on click.
AFRAME.registerComponent('changeflowchannel', {


    schema: {
        listen: {
            default: 'click'
        },
    },

    update: function () {
        var data = this.data;
        var el = this.el;


        this.el.addEventListener(data.listen, function () {
            
            var scrollup = document.querySelector('#scrollupchannelflow');
            var scrolldown = document.querySelector('#scrolldownchannelflow');
            
            var flowcontentcontainer1 = document.querySelector('#flowcontentcontainer1');
            var flowcontentcontainer2 = document.querySelector('#flowcontentcontainer2');

            var currentflowchannel1 = document.querySelector('#flowchannelbox1').getAttribute('src').split('bigtv')[1];


//            console.log(flowchannelbox);
//            console.log(currentflowchannel1);
            var newflowchannel;


            if (el.getAttribute('id') == "scrollupchannelflow" && currentflowchannel1 != 1) {

              
                newflowchannel = (parseInt(currentflowchannel1) - 4);
                scrolldown.setAttribute('visible','true');
                scrollup.setAttribute('visible','false');
                
                flowcontentcontainer1.setAttribute('visible','true');
                flowcontentcontainer2.setAttribute('visible','false');
                
            } else if (el.getAttribute('id') == "scrolldownchannelflow" && currentflowchannel1 != 6) {
                newflowchannel = (parseInt(currentflowchannel1) + 4);
                scrollup.setAttribute('visible','true');
                scrolldown.setAttribute('visible','false');
                
                
                
                flowcontentcontainer1.setAttribute('visible','false');
                flowcontentcontainer2.setAttribute('visible','true');
                
            } else {
                return;
            }
            
            

            for (var i = 0; i < 5; i++) {
                document.querySelector('#flowchannelbox' + (i + 1)).setAttribute('src', '#bigtv' + (i + newflowchannel));
            }


        });


    


    },


});