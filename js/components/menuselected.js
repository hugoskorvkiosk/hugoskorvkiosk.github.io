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

//
//            thescene = document.querySelector("#thescene");
//            thescene.setAttribute('template', 'src', 'scenes/menuscene3.template');

//            document.querySelector('#menuscene').emit('menuitemselect');



            var themenuplanes = document.querySelectorAll('.menuplane');


            //TODO - Move the menuitem slected so that it is more visible
            // and move away the menuselections


            for (var i = 0; i < themenuplanes.length; i++) {



                //themenuplanes[i].emit('getminimized');
            }



        });
    }
});