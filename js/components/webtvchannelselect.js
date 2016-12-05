// Component to change to color on click.
AFRAME.registerComponent('webtvchannelselect', {


    schema: {
        listen: {
            default: 'click'
        },
        target: {
            type: 'selector'
        },
        channel: {
            default: '1'
        }
      
    },

    update: function () {
        var data = this.data;


        this.el.addEventListener(data.listen, function () {


 
            
          
             for (var j = 0; j < 5; j++) {
                
                document.querySelector('#' + data.group + 'thumb' + j).setAttribute('src', '#' + data.group + categories[j] + filmindex);

            }
            
            
            var titletext = document.querySelector('#' + data.group + 'title');
            var infotext = document.querySelector('#' + data.group + 'info');
            var filmbox = document.querySelector('#large' + data.group + 'box');
            
            filmbox.setAttribute('src','#' + data.group + categories[2] +filmindex);
            titletext.setAttribute('text', 'text', data.group + categories[2] +filmindex);
            infotext.setAttribute('text', 'text', data.group + categories[2] + filmindex+ ' info');
          

        });

    },


});