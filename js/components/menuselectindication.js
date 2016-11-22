// Component to change to color on click.
AFRAME.registerComponent('menuselectindication', {


    schema: {
        listen: {
            default: 'click'
        },
        target: {
            type: 'selector'
        },
        emit: {
            default: 'moveindication'
        }
    },

    update: function () {
        var data = this.data;


        this.el.addEventListener(data.listen, function () {



            var buttonindication = data.target;

            
            buttonindication.emit(data.emit);

         




        });

        this.el.addEventListener('mouseenter', function () {


            this.setAttribute('material', 'color', '#F15A24');



        });

        this.el.addEventListener('mouseleave', function () {

            this.setAttribute('material', 'color', '#2D2D2D');

        });


    },


});