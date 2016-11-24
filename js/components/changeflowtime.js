// Component to change to color on click.
AFRAME.registerComponent('changeflowtime', {


    schema: {
        listen: {
            default: 'click'
        },
    },

    update: function () {
        var data = this.data;



        this.el.addEventListener(data.listen, function () {

         


            if (this.getAttribute('id') == "scrollleftchannelflow") {

           

            } else if (this.getAttribute('id') == "scrollrightchannelflow") {
            

            } else {
                return;
            }


        });


    


    },


});