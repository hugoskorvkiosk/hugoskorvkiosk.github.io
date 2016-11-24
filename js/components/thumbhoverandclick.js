// Component to change to color on click.
AFRAME.registerComponent('thumbhoverandclick', {


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

        var el = this.el;
     

        
     

        this.el.addEventListener(data.listen, function () {

            var clicksrc = el.getAttribute('src');
            var name =  document.querySelector(clicksrc).getAttribute('id');
            document.querySelector('#large'+data.group+'box').setAttribute('src', clicksrc);
            document.querySelector('#'+data.group+'title').setAttribute('text', 'text', name);
            document.querySelector('#'+data.group+'info').setAttribute('text', 'text', name + ' info');
        });

        this.el.addEventListener('mouseenter', function () {

           var hoversrc = el.getAttribute('src');
            var title = document.querySelector(hoversrc).getAttribute('id');
            document.querySelector('#hover' + data.group + 'info').setAttribute('text', 'text', title);

     
        });

        this.el.addEventListener('mouseleave', function () {

            //            var middlefilm = document.querySelector('#' + data.group + 'thumb2').getAttribute('src');
            //            document.querySelector('#hover' + data.group + 'info').setAttribute('text', 'text', hoversrc);


            console.log('remove');
            document.querySelector('#hover' + data.group + 'info').setAttribute('text', 'text', '');


        });

    },


});