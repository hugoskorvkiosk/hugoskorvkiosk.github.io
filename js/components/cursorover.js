// Component to change to color on click.
AFRAME.registerComponent('cursorover', {

    
  schema: {
        color: {
            default: 'black'
        },
    },

    update: function () {
        var data = this.data;
        var el = this.el;
        
            
        this.el.addEventListener('click', function () {

            

           var entity = document.querySelector('[sound]');
            entity.components.sound.playSound();


        });
        
        this.el.addEventListener('mouseenter', function () {

            

            el.setAttribute('material', 'color', '#F15A24');



        });

        this.el.addEventListener('mouseleave', function () {
            
          
            
            el.setAttribute('material', 'color', data.color);

            
            

        });


    },


});