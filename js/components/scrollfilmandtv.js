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

            console.log("SCROLLFILMANDTV");




            var titletext = document.querySelector('#' + data.group + 'title');
            var infotext = document.querySelector('#' + data.group + 'info');
            var filmbox = document.querySelector('#large' + data.group + 'box');

            var filenumbers = [];
            var groupthumbimages = [];



            var currentcategory = el.getAttribute('currentcategory').category;

            
            console.log("category " + currentcategory);
            
            for (var i = 0; i < 5; ++i) {


                groupthumbimages[i] = document.querySelector('#' + data.group + 'thumb' + i);


                filenumbers[i] = groupthumbimages[i].getAttribute('src').split(currentcategory)[1];
            }


            var nextnumber = parseInt(filenumbers[4]) + 1;
            var previousnumber = parseInt(filenumbers[0]) - 1;

            var firstfilmindex = parseInt(filenumbers[0]);
            var lastfilmindex = parseInt(filenumbers[4]);
            var secondfilmindex = parseInt(filenumbers[1]);
            var fourthfilmindex = parseInt(filenumbers[3]);


            //            console.log(filenumbers[4]);
            //            console.log(filenumbers[0]);


            var nextfilm = document.querySelector('#' + data.group + currentcategory + nextnumber);
            var previousfilm = document.querySelector('#' + data.group + currentcategory + previousnumber);


            var leftfilm = document.querySelector('#' + data.group + currentcategory + firstfilmindex);
            var middleleftfilm = document.querySelector('#' + data.group + currentcategory + secondfilmindex);


            var rightfilm = document.querySelector('#' + data.group + currentcategory + lastfilmindex);
            var middlerightfilm = document.querySelector('#' + data.group + currentcategory + fourthfilmindex);



            var decreaseandincrease;

            var changethumbnails = false;


            if (el.getAttribute('id') == data.group + "scrollleft") {
                console.log("scrollleft");

                if (middleleftfilm != null) {

  

                    decreaseandincrease = parseInt(filenumbers[2]) - 3;

                    if (previousfilm == null) {

                        groupthumbimages[0].setAttribute('visible', false);
                        if (leftfilm == null) {
                            groupthumbimages[1].setAttribute('visible', false);
                            el.setAttribute('material','opacity','0.2');
                        }

                    }
                    if (groupthumbimages[3].getAttribute('visible') == true) {
                        groupthumbimages[4].setAttribute('visible', true);
                    }
                    groupthumbimages[3].setAttribute('visible', true);
                    document.querySelector('#'+data.group+'scrollright').setAttribute('material','opacity','1');



                } else {
        
                    return;
                }


            } else if (el.getAttribute('id') == data.group + "scrollright") {

          


                if (middlerightfilm != null) {

                 

                    decreaseandincrease = parseInt(filenumbers[2]) - 1;

                    if (nextfilm == null) {

                        groupthumbimages[4].setAttribute('visible', false);
                        if (rightfilm == null) {
                            groupthumbimages[3].setAttribute('visible', false);
                            el.setAttribute('material','opacity','0.2');
                        }

                    }
                    if (groupthumbimages[1].getAttribute('visible') == true) {
                        groupthumbimages[0].setAttribute('visible', true);
                    }
                    groupthumbimages[1].setAttribute('visible', true);
                      document.querySelector('#'+data.group+'scrollleft').setAttribute('material','opacity','1');


                } else {
                    
                    return;
                }



            }

            for (var j = 0; j < 5; j++) {

                console.log(groupthumbimages[j]);

                groupthumbimages[j].setAttribute('src', '#' + data.group + currentcategory + (j + decreaseandincrease));



            }

            document.querySelector('#large' + data.group + 'box').setAttribute('src', '#' + data.group + currentcategory + (decreaseandincrease + 2));
      
            document.querySelector('#' + data.group + 'title').setAttribute('text', 'text', data.group + currentcategory + (decreaseandincrease + 2));
            document.querySelector('#' + data.group + 'info').setAttribute('text', 'text', data.group + currentcategory + (decreaseandincrease + 2) + ' info');

            
        
            console.log(groupthumbimages[1].getAttribute('material'));


        });


    },



});