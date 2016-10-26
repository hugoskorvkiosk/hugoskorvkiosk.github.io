AFRAME.registerComponent('unfade-channelmenu', {
    schema: {
        listen: {
            default: ''
        },
        emit: {
            default: ''
        }
    },

    update: function () {
       

        var isanimationdone =   document.querySelector(".isanimationdone").getAttribute("id");
        

        this.el.addEventListener('mouseleave', function () {


            console.log("mouseleave");

            var fadewhenvidobjects = document.querySelectorAll('.fadewhenvid');

          

            console.log("before if opacity");




            console.log("is animation done? " + isanimationdone);
            
            

//            if (document.querySelectorAll('.fadewhenvid')[1].getAttribute('material').opacity == '0' ) {

                console.log("opacity is not 1");

                for (var i = 0; i < fadewhenvidobjects.length; i++) {

                    console.log("unfade");

                    document.querySelectorAll('.fadewhenvid')[i].emit('unfade');


                }


//            }
            
            



        });

        
           this.el.addEventListener('mouseenter', function () {

            console.log("mouseenter");


//            if(document.querySelectorAll('.fadewhenvid')[1].getAttribute('material').opacity == '1' ){
                
                

                var fadewhenvidobjects = document.querySelectorAll('.fadewhenvid');


                console.log("fade");
                
                for (var i = 0; i < fadewhenvidobjects.length; i++) {

                    document.querySelectorAll('.fadewhenvid')[i].emit('fade');
                }

//            }


        });



    }
});