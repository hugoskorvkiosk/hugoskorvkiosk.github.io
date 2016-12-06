// Component to change to color on click.
AFRAME.registerComponent('tvflowcategoryselection', {


    schema: {
        listen: {
            default: 'click'
        },
        category: {
            default: 'all'
        }
    },

    update: function () {
        var data = this.data;
        var el = this.el;


        this.el.addEventListener(data.listen, function () {


            var selectedprograms = document.querySelectorAll('.' + data.category);



            var allprograms = document.querySelectorAll('.tvflowprograms');

            for (var i = 0; i < allprograms.length; i++) {

                allprograms[i].setAttribute('material', 'color', 'black');

            }
            
            if (data.category == "none") {
                return;
            }

            for (var j = 0; j < selectedprograms.length; j++) {

                console.log('.' + data.category);

                selectedprograms[j].setAttribute('material', 'color', '#F15A24');

            }





        });


    },


});