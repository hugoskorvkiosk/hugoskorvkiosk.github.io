AFRAME.registerComponent('fade-channelmenu', {
    schema: {
        listen: {
            default: 'mouseenter'
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

            console.log("mouseenter");


//            if(document.querySelectorAll('.fadewhenvid')[1].getAttribute('material').opacity == '1')
//            {
//
//                var fadewhenvidobjects = document.querySelectorAll('.fadewhenvid');
//
//
//                console.log("fade");
//                
//                for (var i = 0; i < fadewhenvidobjects.length; i++) {
//
//                    document.querySelectorAll('.fadewhenvid')[i].emit('fade');
//                }
//
//            }


        });
    }
});