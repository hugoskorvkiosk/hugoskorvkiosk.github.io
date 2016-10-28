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

            console.log(document.querySelector('#imgfilm0'));

            var filenumber = document.querySelector('#imgfilm0').getAttribute('src').split('film')[1];
            var filenumber1 = document.querySelector('#imgfilm1').getAttribute('src').split('film')[1];


            var filmtitleentity = document.querySelector('#textfilmtitle');
            var filminfoentity = document.querySelector('#textfilminfo');
          
            var filmtitle;
            var filminfo;

            var firstfilmboxnumber;
            var secondfilmboxnumber;
            var thirdfilmboxnumber;
            var newfirstfilm;


            if (this.getAttribute('id') == "scrollright") {

                console.log("scrollright");
                console.log(filenumber);
                firstfilmboxnumber = ((parseInt(filenumber) + 1) % 10);
                secondfilmboxnumber = ((parseInt(filenumber) + 2) % 10);
                thirdfilmboxnumber = ((parseInt(filenumber) + 3) % 10);


                console.log(firstfilmboxnumber);




            } else {


                firstfilmboxnumber = ((parseInt(filenumber) + 9) % 10);
                console.log(firstfilmboxnumber);
                secondfilmboxnumber = parseInt(filenumber);
                thirdfilmboxnumber = parseInt(filenumber1);
                //

                //                
                //                firstfilmboxnumber = ((parseInt(filenumber) + 1 % 10) +10 )%10;
                //                secondfilmboxnumber = ((parseInt(filenumber1) + 1 % 10) +10 )%10;
                //                thirdfilmboxnumber = ((parseInt(filenumber2) + 1 % 10) +10 )%10;
                //                
                //                


            }


            document.querySelector('#imgfilm0').setAttribute('src', '#film' + firstfilmboxnumber);
            document.querySelector('#imgfilm1').setAttribute('src', '#film' + secondfilmboxnumber);
            document.querySelector('#imgfilm2').setAttribute('src', '#film' + thirdfilmboxnumber);

   

            console.log(   document.querySelector('#imgfilm1').getAttribute('src'));
            
            console.log(secondfilmboxnumber);
            
            switch (secondfilmboxnumber) {
            case 0:
                filmtitle = "En man som heter Ove";
                filminfo = "Film about a man that is grumpy";
                break;
            case 1:
                filmtitle = "Zootroplis";
                filminfo = "Film about a fox and a rabbit";
                break;
            case 2:
                filmtitle = "Snow White";
                filminfo = "Film om en man som ofta sur";
                break;
            case 3:
                filmtitle = "Flaskpost";
                filminfo = "Film om t";
                break;
            case 4:
                filmtitle = "Superman and Batman";
                filminfo = "Film om two superguys";
                break;
            case 5:
                filmtitle = "Eye&Sky";
                filminfo = "Film om två män och en kvinna";
                break;
            case 6:
                filmtitle = "London has fallen";
                filminfo = "Film om en man som är britt";
                break;
            case 7:
                filmtitle = "Deadpool";
                filminfo = "Film om en man som ofta är farlig";
                break;
            case 8:
                filmtitle = "The revenant";
                filminfo = "Film om en man som är DiCaprio";
                break;
            case 9:
                filmtitle = "Tom Hanks the movie";
                filminfo = "Film om en man som är ryss";
                break;

            }
            console.log(filmtitle);
            
            filmtitleentity.setAttribute('text', 'text' , filmtitle);
            filminfoentity.setAttribute('text', 'text' , filminfo);


            // leftscroll: 0->9
            // document.querySelector('#imgfilm0').setAttribute('src', '#film', '9');
            // leftscroll: 1->0
            // document.querySelector('#imgfilm1').setAttribute('src', '#film', '0');
            // leftscroll: 2->1
            // document.querySelector('#imgfilm1').setAttribute('src', '#film', '1');

            // leftscroll: 9->8
            // document.querySelector('#imgfilm0').setAttribute('src', '#film', '9');
            // leftscroll: 1->9
            // document.querySelector('#imgfilm0').setAttribute('src', '#film', '9');
            // leftscroll: 2->1
            // document.querySelector('#imgfilm0').setAttribute('src', '#film', '9');


            //
            //            if (this.getAttribute('id') == "scrollright") {
            //
            //                console.log(filenumber);
            //                firstfilmboxnumber = (parseInt(filenumber + 1) % 10);
            //                secondfilmboxnumber = (parseInt(filenumber + 2) % 10);
            //                thirdfilmboxnumber = (parseInt(filenumber + 3) % 10);
            //
            //
            //                console.log("scrollright");
            //
            //            } else {
            //                
            //                console.log("scrollleft");
            //                console.log(filenumber);
            //                
            //                //
            //                
            //           
            //                if(filenumber=='0'){
            //                     newfirstfilm = '9';
            //                       firstfilmboxnumber = newfirstfilm;
            //                }
            //                else{
            //                
            //                    firstfilmboxnumber = (parseInt(filenumber)-parseInt(1) % 10);
            //                }
            //                secondfilmboxnumber = (parseInt(filenumber) % 10);
            //                thirdfilmboxnumber = (parseInt(filenumber)+parseInt(1) % 10);
            //
            //
            //                console.log("firstfilm " + firstfilmboxnumber);
            //                console.log("secfilm " + secondfilmboxnumber);
            //                console.log("thfilm " + thirdfilmboxnumber);
            //            }




        });

        this.el.addEventListener('mouseenter', function () {


            this.setAttribute('material', 'color', '#F15A24');





        });

        this.el.addEventListener('mouseleave', function () {

            this.setAttribute('material', 'color', '#2D2D2D');

        });


    },


});