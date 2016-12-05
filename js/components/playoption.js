AFRAME.registerComponent('playoption', {
    schema: {
        listen: {
            default: ''
        },
        emit: {
            default: ''
        },
        group: {
            default: 'film'
        }
    },

    update: function () {
        var el = this.el;
        var data = this.data;



        this.el.addEventListener('click', function () {

            var currentoption = document.querySelector('#large'+data.group+'box').getAttribute('src');
            
            document.querySelector('#vidbox').setAttribute('src',currentoption);

             document.querySelector("#curvedbg").emit('rotatetoscreen');
             document.querySelector("#bgtitlemenuindication").emit('movetobutton1');
        
            
             document.querySelector('#channelbox').setAttribute('visible','false');


        });



    }
});