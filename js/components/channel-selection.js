// Component to change to color on click.
AFRAME.registerComponent('channel-selection', {
    init: function () {


    },

    update: function (oldData) {

        var el = this.el;
        var data = this.data;


        //var diffData = diff(data, oldData || {});
        // console.log("diffData " + diffData); 


        var channelsplane;
        var menuplane;
        channelsplane = document.querySelectorAll(".channelsplane");
        menuplane = document.querySelectorAll(".menuplane");



        this.el.addEventListener('click', function () {

            console.log("clicked on channel");

            for (i = 0; i < channelsplane.length; i++) {
                channelsplane[i].setAttribute('material', 'color', '#2D2D2D');
                menuplane[i].setAttribute('material', 'color', '#2D2D2D');
            }


            this.setAttribute('material', 'color', '#F15A24');

        });


    }
});