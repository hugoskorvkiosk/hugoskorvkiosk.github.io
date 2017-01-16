AFRAME.registerComponent('scrollfilmandtv', {


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

       

            var titletext = document.querySelector('#' + data.group + 'title');
            var infotext = document.querySelector('#' + data.group + 'info');
            var filmbox = document.querySelector('#large' + data.group + 'box');

            var filenumbers = [];

            for (var i = 0; i < 5; ++i) {


                var groupthumbimage = document.querySelector('#' + data.group + 'thumb' + i);


                filenumbers[i] = groupthumbimage.getAttribute('src').split(data.category)[1];
            }



            var nextnumber = parseInt(filenumbers[4]) + 1;
            var previousnumber = parseInt(filenumbers[0]) - 1;

            var firstfilmindex = parseInt(filenumbers[0]);
            var lastfilmindex = parseInt(filenumbers[4]);
            var secondfilmindex = parseInt(filenumbers[1]);
            var fourthfilmindex = parseInt(filenumbers[3]);


            //            console.log(filenumbers[4]);
            //            console.log(filenumbers[0]);


            var nextfilm = document.querySelector('#' + data.group + data.category + nextnumber);
            var previousfilm = document.querySelector('#' + data.group + data.category + previousnumber);



            var leftfilm = document.querySelector('#' + data.group + data.category + firstfilmindex);
            var middleleftfilm = document.querySelector('#' + data.group + data.category + secondfilmindex);


            var rightfilm = document.querySelector('#' + data.group + data.category + lastfilmindex);
            var middlerightfilm = document.querySelector('#' + data.group + data.category + fourthfilmindex);



            var decreaseandincrease;

            var changethumbnails = false;


            console.log("SCROLLFILMANDTV");


            if (el.getAttribute('id') == data.group + "scrollright") {

                console.log("Scrollright");

                if (nextfilm == null) {
                    document.querySelector('#' + data.group + 'thumb' + 4).setAttribute('visible', 'false');
                    console.log("No nextfilm");

                }
                if (rightfilm == null) {
                    document.querySelector('#' + data.group + 'thumb' + 3).setAttribute('visible', 'false');
                    document.querySelector('#' + data.group + 'scrollright').setAttribute('opacity', '0.3');
                    console.log("No rightfilm");
                }

                if (document.querySelector('#' + data.group + 'thumb' + 1).getAttribute('visible') == true) {
                    console.log('thumbnail 1 is visible true');

                    document.querySelector('#' + data.group + 'thumb' + 0).setAttribute('visible', 'true');


                }

                if (middlerightfilm != null) {

                    document.querySelector('#' + data.group + 'thumb' + 1).setAttribute('visible', 'true');
                    document.querySelector('#' + data.group + 'scrollleft').setAttribute('opacity', '1');

                    decreaseandincrease = parseInt(filenumbers[0]) + 1;

                    console.log("middlerightfilm finns true");

                    for (var j = 0; j < 5; j++) {


                        document.querySelector('#' + data.group + 'thumb' + j).setAttribute('src', '#' + data.group + data.category + (decreaseandincrease + j));
                    }





                    filmbox.setAttribute('src', '#' + data.group + data.category + (decreaseandincrease + 2));
                    titletext.setAttribute('text', 'text', data.group + data.category + (decreaseandincrease + 2));
                    infotext.setAttribute('text', 'text', data.group + data.category + (decreaseandincrease + 2) + ' info');

                } else {
                    console.log("middleright Finns inte .. return");
                    return;
                }

                console.log("decreaseandincrease " + decreaseandincrease);

            } else if (el.getAttribute('id') == data.group + "scrollleft") {

                console.log("Scrollleft");

                if (previousfilm == null) {
                    document.querySelector('#' + data.group + 'thumb' + 0).setAttribute('visible', 'false');
                    console.log("No previousfilm");
                }
                if (leftfilm == null) {
                    document.querySelector('#' + data.group + 'thumb' + 1).setAttribute('visible', 'false');
                    document.querySelector('#' + data.group + 'scrollleft').setAttribute('opacity', '0.3');
                    console.log("No leftfilm");

                }

                if (document.querySelector('#' + data.group + 'thumb' + 3).getAttribute('visible') == true) {

                    document.querySelector('#' + data.group + 'thumb' + 4).setAttribute('visible', 'true');

                    console.log('thumbnail 3 is visible true');
                }

                if (middleleftfilm != null) {
                    console.log(middleleftfilm);
                    document.querySelector('#' + data.group + 'thumb' + 3).setAttribute('visible', 'true');
                    document.querySelector('#' + data.group + 'scrollright').setAttribute('opacity', '1');

                    decreaseandincrease = parseInt(filenumbers[0]) - 1;
                    console.log("middleleftfilm FINNS");

                    for (var j = 0; j < 5; j++) {


                        document.querySelector('#' + data.group + 'thumb' + j).setAttribute('src', '#' + data.group + data.category + (decreaseandincrease + j));
                    }





                    filmbox.setAttribute('src', '#' + data.group + data.category + (decreaseandincrease + 2));
                    titletext.setAttribute('text', 'text', data.group + data.category + (decreaseandincrease + 2));
                    infotext.setAttribute('text', 'text', data.group + data.category + (decreaseandincrease + 2) + ' info');

                } else {
                    console.log("middleleft finns Inte .. return");

                    return;
                }
            }
            
            
        




        });


    },


});