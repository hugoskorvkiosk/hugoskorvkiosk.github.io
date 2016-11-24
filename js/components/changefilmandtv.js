// Component to change to color on click.
AFRAME.registerComponent('changefilmandtv', {


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

              for (var i = 0; i <= 5; ++i) {
                  filenumbers[i] = document.querySelector('#'+data.group+(i+1)).getAttribute('src').split(data.group)[1];
              }
            

            var titletext = document.querySelector('#' + data.group + 'title');
            var infotext = document.querySelector('#' + data.group + 'info');
            var filmbox = document.querySelector('#large' +data.group+ 'box');

            var filmtitle;
            var filminfo;



            if (this.getAttribute('id') == "scrollright" ) {


            } else {

            }
            

            for(var i = 0; i < 5; i++){
             
                document.querySelector('#'+data.group+(i+1)).setAttribute('src', '#'+data.group+category+(i+1));
                
            }




            filmbox.setAttribute('src', '#film' + thirdfilmboxnumber);

    
            console.log(filmtitle);

            filmtitleentity.setAttribute('text', 'text', filmtitle);
            filminfoentity.setAttribute('text', 'text', filminfo);



        });

       


    },


});