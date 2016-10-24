AFRAME.registerComponent('menuselected', {
    schema: {
        listen: {
            default: 'click'
        },
        target: {
            type: 'selector'
        },
        emit: {
            default: ''
        }
    },

    update: function () {
        var data = this.data;
        this.el.addEventListener(data.listen, function () {


            
            document.querySelector('#themenutemplatescene').emit('menuitemselect');
            
            var themenuplanes = document.querySelectorAll('.menuplane');
            
            
            //TODO - Move the menuitem slected so that it is more visible
            // and move away the menuselections
            
            
            for(var i=0; i < themenuplanes.length; i++){
                
                //themenuplanes[i].emit('getminimized');
            }
            
            

        });
    }
});