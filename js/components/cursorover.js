// Component to change to color on click.
AFRAME.registerComponent('cursorover', {

    
  schema: {
        color: {
            default: '#242424'
        },
    },

    update: function () {
        var data = this.data;
        var el = this.el;
        
        this.el.addEventListener('mouseenter', function () {

            

            this.setAttribute('material', 'color', '#F15A24');



        });

        this.el.addEventListener('mouseleave', function () {
            
          
            
            el.setAttribute('material', 'color', data.color);

            
            

        });


    },


});