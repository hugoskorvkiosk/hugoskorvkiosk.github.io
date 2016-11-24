// Component to change to color on click.
AFRAME.registerComponent('cursorover', {


    update: function () {


        this.el.addEventListener('mouseenter', function () {


            this.setAttribute('material', 'color', '#F15A24');



        });

        this.el.addEventListener('mouseleave', function () {

            if (this.classList.contains("leftanddown")) {
                this.setAttribute('material', 'color', '#6F6F6F');
            } else if(this.classList.contains("rightandup")) {
                this.setAttribute('material', 'color', '#9F9F9F');
            }
            else{this.setAttribute('material', 'color', '#2D2D2D');}


        });


    },


});