// Component to change to color on click.
AFRAME.registerComponent('changeflowtime', {


    schema: {
        listen: {
            default: 'click'
        },
    },

    update: function () {
        var data = this.data;
        var el = this.el;


        this.el.addEventListener(data.listen, function () {

         


            if (el.getAttribute('id') == "scrollleftchannelflow") {

           

            } else if (el.getAttribute('id') == "scrollrightchannelflow") {
            

            } else {
                return;
            }


        });


    


    },


});