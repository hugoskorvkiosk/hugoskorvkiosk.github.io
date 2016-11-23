// Component to change to color on click.
AFRAME.registerComponent('categoryselection', {


    schema: {
        listen: {
            default: 'click'
        },
        group: {
            default: 'film'
        },
        selected: {
            default: 'false'
        },
        category: {
            default: 'all'   
        }
    },

    update: function () {
        var data = this.data;
        
        


        this.el.addEventListener(data.listen, function () {

            console.log("category listen");

            if (data.selected == 'true') {
             
                this.setAttribute('categoryselection', 'selected', 'false');
                this.setAttribute('material', 'color', '#2D2D2D');

            } else {
              
                this.setAttribute('categoryselection', 'selected', 'true');
                this.setAttribute('material', 'color', '#F15A24');
                
                for(var i = 0; i < 5; i++){
                    document.querySelector('#imgfilm'+i).setAttribute('src', '#film' + data.category + (i+1));
                }
                
                   
       
            }

        });

        this.el.addEventListener('mouseenter', function () {


            if (data.selected == 'true') {
           
                this.setAttribute('material', 'color', '#F14000');
            } else {
               
                this.setAttribute('material', 'color', '#F15A24');
            }

        });

        this.el.addEventListener('mouseleave', function () {

            if (data.selected == 'true') {
                this.setAttribute('material', 'color', '#F15A24');
               
                return;
            } else {
                
                this.setAttribute('material', 'color', '#2D2D2D');
            }
        });


    },


});