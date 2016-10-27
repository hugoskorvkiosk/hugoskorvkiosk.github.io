// Component to change to color on click.
AFRAME.registerComponent('changemovie', {


    schema: {
        listen: {
            default: 'click'
        },
        target: {
            type: 'selector'
        },
        emit: {
            default: 'beginscroll'
        }
    },

    update: function () {
        var data = this.data;


        this.el.addEventListener(data.listen, function () {

            
            console.log(this);
            
            console.log(document.querySelector('#imgfilm1'));

           var filemnumber = document.querySelector('#imgfilm0').getAttribute('src').split('film')[1];

            if(this.getAttribute('id') == "scrollright"){
            
                console.log(filemnumber);
                var newfilenumber = filemnumber % 9;
                
                document.querySelector('#imgfilm0').setAttribute('src', '#film'+parseInt(newfilenumber+1));
                document.querySelector('#imgfilm1').setAttribute('src', '#film'+parseInt(newfilenumber+2));
                document.querySelector('#imgfilm2').setAttribute('src', '#film'+parseInt(newfilenumber+3));
                
                console.log("scrollright");
                
            }
            


        });

        this.el.addEventListener('mouseenter', function () {

        
            this.setAttribute('material', 'color', '#F15A24');
            
            
            
            

        });

        this.el.addEventListener('mouseleave', function () {

            this.setAttribute('material', 'color', '#2D2D2D');

        });


    },


});