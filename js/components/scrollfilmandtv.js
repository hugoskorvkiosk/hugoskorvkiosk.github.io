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




            //            console.log('#' + data.group + data.category + previousnumber);
            //            console.log(nextfilm);
            //            console.log(previousfilm);


            var decreaseandincrease;

            var changethumbnails = false;


          


           

            if (el.getAttribute('id') == data.group + "scrollright") {


                if (nextfilm == null) {
                    document.querySelector('#' + data.group + 'thumb' + 4).setAttribute('visible', 'false');
                }
                if (rightfilm == null) {
                    document.querySelector('#' + data.group + 'thumb' + 3).setAttribute('visible', 'false');
                      document.querySelector('#' + data.group + 'scrollright').setAttribute('visible', 'false');
                }
                
                  if( document.querySelector('#' + data.group + 'thumb' + 1).getAttribute('visible') == true ){
                        console.log('1 is visible true');
                       document.querySelector('#' + data.group + 'thumb' + 0).setAttribute('visible', 'true');
                       
                }

                if (middlerightfilm != null) {

                    document.querySelector('#' + data.group + 'thumb' + 1).setAttribute('visible', 'true');
                    document.querySelector('#' + data.group + 'scrollleft').setAttribute('visible', 'true');
                    
                    decreaseandincrease = parseInt(filenumbers[0]) + 1;

                    console.log(middlerightfilm);

                } else {
                    console.log("middleright == null .. return");
                    return;
                }

                console.log("decreaseandincrease " + decreaseandincrease);

            } else if (el.getAttribute('id') == data.group + "scrollleft") {

                if (previousfilm == null) {
                    document.querySelector('#' + data.group + 'thumb' + 0).setAttribute('visible', 'false');
                }
                if (leftfilm == null) {
                    document.querySelector('#' + data.group + 'thumb' + 1).setAttribute('visible', 'false');
                    document.querySelector('#' + data.group + 'scrollleft').setAttribute('visible', 'false');
                    
                }
                
                if( document.querySelector('#' + data.group + 'thumb' + 3).getAttribute('visible') == true ){
                    console.log('3 is visible true');
                     document.querySelector('#' + data.group + 'thumb' + 4).setAttribute('visible', 'true');
                  
                    
                }

                if (middleleftfilm != null) {
                    console.log(middleleftfilm);
                    document.querySelector('#' + data.group + 'thumb' + 3).setAttribute('visible', 'true');
                       document.querySelector('#' + data.group + 'scrollright').setAttribute('visible', 'true');

                    decreaseandincrease = parseInt(filenumbers[0]) - 1;
                    console.log("decreaseandincrease " + decreaseandincrease);
                } else {
                    console.log("middleleft == null .. return");




                    return;
                }
            }



            //            if (el.getAttribute('id') == data.group + "scrollright") {
            //
            //                
            //               
            //                if (nextfilm != null) {
            //                    decreaseandincrease = parseInt(filenumbers[1]) + 1;
            //                      changethumbnails = true;
            //                   
            //                } else if (nextfilm == null && rightfilm != null) {
            //                      changethumbnails = true;
            //                     console.log( "rightfilm !null");
            //                     decreaseandincrease = parseInt(filenumbers[1]) + 1;
            //
            //                } else if (nextfilm == null && rightfilm == null && middlerightfilm != null) {
            //                      changethumbnails = true;
            //                     decreaseandincrease = parseInt(filenumbers[1]) + 1;
            //
            //                     console.log( "rightfilm null");
            //                } else {
            //                    return;
            //
            //
            //                }
            //
            //
            //
            //            } else {
            //
            //               
            //                 
            //                if (previousfilm != null) {
            //                    changethumbnails = true;
            //                     decreaseandincrease = parseInt(filenumbers[1]) - 1;
            //      
            //                } else if (previousfilm == null && leftfilm != null) {
            //                      console.log( "leftfilm !null");
            //                    changethumbnails = true;
            //                    decreaseandincrease = parseInt(filenumbers[1]) - 1;
            //
            //                } else if (previousfilm == null && leftfilm == null && middleleftfilm != null) {
            //                    console.log( "leftfilm null & middleleftfilm !=null");
            //                    changethumbnails = true;
            //                    decreaseandincrease = parseInt(filenumbers[1]) - 1;
            //                } 
            //                else {
            //                    return;
            //
            //
            //                }
            //            }



            for (var j = 0; j < 5; j++) {


                document.querySelector('#' + data.group + 'thumb' + j).setAttribute('src', '#' + data.group + data.category + (decreaseandincrease + j));
            }





            filmbox.setAttribute('src', '#' + data.group + data.category + (decreaseandincrease + 2));
            titletext.setAttribute('text', 'text', data.group + data.category + (decreaseandincrease + 2));
            infotext.setAttribute('text', 'text', data.group + data.category + (decreaseandincrease + 2) + ' info');


        });


    },


});