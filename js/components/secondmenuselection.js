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
        group:{
            default: 'film'
        }
        ,
        selection:{
            default: 'new'    
        }
        
    },

    update: function () {
        var data = this.data;


        this.el.addEventListener(data.listen, function () {


               var categories = [
                    "romance",
                    "drama",
                    "action",
                    "comedy",
                    "animated"
                ];
            
                 
         if(data.group == "webtv"){
                
                categories = [
                    "documentary",
                    "news",
                    "sports",
                    "films",
                    "weather"
                ];    
            }
         
            var filmindex;
            
            console.log(categories[3]);
   
            if(data.selection == "new"){
            
                  for (var i = 0; i < 5; i++) {
                    document.querySelector('#' + data.group + 'thumb' + i).setAttribute('src', '#film' + 'all' + (i + 1));
                }
                document.querySelector('#large' + data.group + 'box').setAttribute('src', '#film' + 'all' + 3);
                document.querySelector('#' + data.group + 'title').setAttribute('text', 'text', 'all' + 3);
                document.querySelector('#' + data.group + 'info').setAttribute('text', 'text', 'all' + 3 + ' info');

            return;

            }
            else if(data.selection == "top"){
            
                filmindex= 1;
            
            }
            else{
            
                filmindex = 5;   
            
            }
            
          
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