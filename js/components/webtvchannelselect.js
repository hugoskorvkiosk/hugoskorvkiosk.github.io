// Component to change to color on click.
AFRAME.registerComponent('webtvchannelselect', {


    schema: {
        listen: {
            default: 'click'
        },
        group: {
            default: 'webtv'
        },
        channel: {
            default: '1'
        },
        category: {
            default: 'entertainment'
        },

    },

    update: function () {
        var data = this.data;


        this.el.addEventListener(data.listen, function () {

            var titletext = document.querySelector('#' + data.group + 'title');
            var infotext = document.querySelector('#' + data.group + 'info');
            var filmbox = document.querySelector('#large' + data.group + 'box');


            for (var j = 0; j < 5; j++) {

                document.querySelector('#' + data.group + 'thumb' + j).setAttribute('src', '#' + data.group + data.category + [j + 1] + data.channel);


            }




            filmbox.setAttribute('src', '#' + data.group + data.category + 3 + data.channel);
            titletext.setAttribute('text', 'text', data.channel + data.group + data.category + 3);
            infotext.setAttribute('text', 'text', data.channel + data.group + data.category + 3 + ' info');


        });

    },


});