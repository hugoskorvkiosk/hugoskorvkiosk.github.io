// Component to change to color on click.
AFRAME.registerComponent('secondmenuselection', {


    schema: {
        listen: {
            default: 'click'
        },
        target: {
            type: 'selector'
        },
        emit: {
            default: 'moveindication'
        },
        group: {
            default: 'film'
        },
        selection: {
            default: 'new'
        }

    },

    update: function () {
        var data = this.data;


        this.el.addEventListener(data.listen, function () {

            var category;

            var categories = [
                    "romance",
                    "drama",
                    "action",
                    "comedy",
                    "animated"
                ];


            if (data.group == "webtv") {

                categories = [
                    "documentary",
                    "news",
                    "sports",
                    "films",
                    "weather"
                ];
            }

            var filmindex;



            if (data.selection == "new") {

                category = 'all';

                //                  for (var i = 0; i < 5; i++) {
                //                    document.querySelector('#' + data.group + 'thumb' + i).setAttribute('src', '#film' + 'all' + (i + 1));
                //                }
                //                document.querySelector('#large' + data.group + 'box').setAttribute('src', '#film' + 'all' + 3);
                //                document.querySelector('#' + data.group + 'title').setAttribute('text', 'text', 'all' + 3);
                //                document.querySelector('#' + data.group + 'info').setAttribute('text', 'text', 'all' + 3 + ' info');

             

            } else if (data.selection == "top") {

                //                filmindex= 1;

                category = 'animated';
            } else {

                //                filmindex = 5;   
                category = 'action';
            }


            
            document.querySelector('#' + data.group + 'scrollleft').setAttribute('currentcategory', 'category', category);
            document.querySelector('#' + data.group + 'scrollright').setAttribute('currentcategory', 'category', category);
            
            console.log("category changed to " +  document.querySelector('#' + data.group + 'scrollleft').getAttribute('scrollfilmandtv').category);
            
            console.log("b4 for");
            for (var j = 0; j < 5; j++) {

                console.log(" change " + j +" " + category); 
                
                document.querySelector('#' + data.group + 'thumb' + j).setAttribute('src', '#' + data.group + category + (j + 1));
                document.querySelector('#' + data.group + 'thumb' + j).setAttribute('visible', 'true');

            }


            document.querySelector('#large' + data.group + 'box').setAttribute('src', '#' + data.group + category + 3);
            document.querySelector('#' + data.group + 'title').setAttribute('text', 'text', data.group + category + 3);
            document.querySelector('#' + data.group + 'info').setAttribute('text', 'text', data.group + category + 3 + ' info');


            

        });

    },


});