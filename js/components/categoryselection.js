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
        var el = this.el;



        this.el.addEventListener(data.listen, function () {

            console.log("category listen");

            if (data.selected == 'true') {

                el.setAttribute('categoryselection', 'selected', 'false');
                el.setAttribute('material', 'color', '#2D2D2D');

            } else {

                el.setAttribute('categoryselection', 'selected', 'true');
                el.setAttribute('material', 'color', '#F15A24');
                document.querySelector('#' + data.group + 'scrollleft').setAttribute('scrollfilmandtv','category',data.category);
                document.querySelector('#' + data.group + 'scrollright').setAttribute('scrollfilmandtv','category',data.category);


                for (var i = 0; i < 5; i++) {
                    document.querySelector('#' + data.group + 'thumb' + i).setAttribute('src', '#film' + data.category + (i + 1));
                }
                document.querySelector('#large' + data.group + 'box').setAttribute('src', '#film' + data.category + 3);
                document.querySelector('#' + data.group + 'title').setAttribute('text', 'text', data.category + 3);
                document.querySelector('#' + data.group + 'info').setAttribute('text', 'text', data.category + 3 + ' info');



            }

        });

        this.el.addEventListener('mouseenter', function () {


            if (data.selected == 'true') {

                el.setAttribute('material', 'color', '#F14000');
            } else {

                el.setAttribute('material', 'color', '#F15A24');
            }

        });

        this.el.addEventListener('mouseleave', function () {

            if (data.selected == 'true') {
                el.setAttribute('material', 'color', '#F15A24');

                return;
            } else {

                el.setAttribute('material', 'color', '#2D2D2D');
            }
        });


    },


});