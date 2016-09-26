// Component to change to color on click.
AFRAME.registerComponent('channel-selection', {
    init: function () {


    },

    update: function (oldData) {

        var el = this.el;
        var data = this.data;


        //var diffData = diff(data, oldData || {});
        // console.log("diffData " + diffData); 


        var channels;


        this.el.addEventListener('click', function () {

            channels = document.querySelectorAll(".channels");

            for (i = 0; i < channels.length; i++) {
                channels[i].setAttribute('material', 'color', 'red');
            }


            this.setAttribute('material', 'color', 'orange');

        });


    }
});