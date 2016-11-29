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

            
            var filenumbers = [];

            for (var i = 0; i < 5; ++i) {
                
        
                var groupthumbimage = document.querySelector('#' + data.group + 'thumb' + i);
         
                
                filenumbers[i] = groupthumbimage.getAttribute('src').split(data.category)[1];
            }

    
            
            var nextnumber= parseInt(filenumbers[4]) + 1;
            var previousnumber= parseInt(filenumbers[0]) - 1;

            console.log(filenumbers[4]);
            console.log(filenumbers[0]);
            
            var nextfilm = document.querySelector('#' + data.group + data.category + nextnumber);
            var previousfilm = document.querySelector('#' + data.group + data.category + previousnumber);

            console.log('#' + data.group + data.category + previousnumber);
            

            console.log(nextfilm);
            console.log(previousfilm);
            var decreaseandincrease;
            
            
            
            if (el.getAttribute('id') == data.group+"scrollright" && nextfilm != null) {
                
                console.log('add');
                decreaseandincrease = parseInt(filenumbers[0])+1;
                
                
            } else if (el.getAttribute('id') == data.group+"scrollleft" && previousfilm != null) {

                decreaseandincrease = parseInt(filenumbers[0])-1;
            }
            else{
                
                return;
            }


            for (var j = 0; j < 5; j++) {
                

                document.querySelector('#' + data.group + 'thumb' + j).setAttribute('src', '#' + data.group + data.category + (decreaseandincrease+j));

            }
            
            
                var titletext = document.querySelector('#' + data.group + 'title');
            var infotext = document.querySelector('#' + data.group + 'info');
            var filmbox = document.querySelector('#large' + data.group + 'box');
            
            filmbox.setAttribute('src','#' + data.group + data.category + (decreaseandincrease+2));

       
            titletext.setAttribute('text', 'text', data.group + data.category + (decreaseandincrease+2));
               infotext.setAttribute('text', 'text', data.group + data.category + (decreaseandincrease+2) + ' info');



        });
    

    },


});