// Component to change to color on click.
AFRAME.registerComponent('scrollchannel', {


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
        
//        console.log(document.querySelector('#thescene').getAttribute('material').opactiy);
        


        var thechanneltemplatescene = document.querySelector('#thechanneltemplatescene');

        //        var themenutemplatescene = document.querySelector('#themenutemplatescene');
        //        var themenutemplate = document.querySelector('#themenutemplate');
        //        var menuplanes = document.querySelectorAll('.menuplane');
        //        var channelplanes = document.querySelectorAll('.channelplane');
        //        var scrollbuttons = document.querySelectorAll('.scrollbuttons');
        //        var scrollup = document.querySelector('#scrollup');
        //        var scrolldownanimation = document.querySelector('#scrolldownanimation');

        var position;
        var newpositiony;
        this.el.addEventListener(data.listen, function () {

            //                position = thechanneltemplatescene.children[1].childNodes[0].getAttribute('position');
            //                console.log(position);        

            //                scrolldownanimation.setAttribute('from', position.x + ' ' + position.y + ' ' + position.z);

            
            console.log(event);

            position = document.querySelector('#thechanneltemplatescene').getAttribute('position');


            if (this.getAttribute("id") == "scrolldown") {
                newpositiony = parseFloat(position.y) + 0.2;
                newpositiony = parseFloat(newpositiony);


            } else {
                newpositiony = parseFloat(position.y) - 0.2;
                newpositiony = parseFloat(newpositiony);
                console.log("clicked scrollup");
              
            }

            var newpos = {
                x: position.x,
                y: newpositiony,
                z: position.z
            };

            console.log(newpos);
            console.log(position);

            document.querySelector('#thechanneltemplatescene').setAttribute('animation', 'to', newpos);

            //            position = document.querySelector('#thechanneltemplatescene').getAttribute('animation', 'from');
            //
            document.querySelector('#thechanneltemplatescene').setAttribute('animation', 'from', position);

            //            document.querySelector('#thechanneltemplatescene').emit(data.emit);

            data.target.emit(data.emit);

          


            //            
            //             document.querySelector('#thechanneltemplatescene').setAttribute('animation', 'from', newpos);



            //            console.log(document.querySelector('#channelbox').childNodes[0]);
            //
            //            document.querySelector('#channelbox').childNodes[0].setAttribute('from', '0 0 0');
            //
            //            document.querySelector('#channelbox').childNodes[0].setAttribute('to', '0 2 0');
            //
            //            console.log(document.querySelector('#channelbox').childNodes[0].getAttribute('to'));
            //
            //            document.querySelector('#channelbox').emit('scroll');




            //            document.querySelector('#scrollanimation').setAttribute( 'from', '0 0 0');
            //
            //            document.querySelector('#scrollanimation').setAttribute( 'to', '0 2 0');



            //            document.querySelector('#thechanneltemplatescene').emit('beginscroll');


            //
            //
            //                console.log(newpositiony);
            //            
            //                scrolldownanimation.setAttribute('from', position.x + ' ' + position.y + ' ' + position.z);
            //            
            //                console.log(scrolldownanimation.getAttribute('from'));
            //            
            //                scrolldownanimation.setAttribute('to', position.x + ' ' + newpositiony + ' ' + position.z);
            //            
            //                scrolldownanimation.setAttribute('to',  position.x + ' ' + newpositiony + ' ' + position.z );
            //            
            //                console.log(scrolldownanimation.getAttribute('to'));
            //            
            //                thechanneltemplate.emit("scroll");
            //
            //                console.log(thechanneltemplate.getAttribute('position'));

            //            
            //                position = thechanneltemplatescene.getAttribute('position');
            //                console.log(position);
            //                scrolldownanimation.setAttribute('from', position.x + ' ' + position.y + ' ' + position.z);

            // console.log(menuplanes);




            //        for (var i = 0; i < thechanneltemplatescene.children[1].childNodes.length; i++) {
            //
            //            
            //            currentposition = thechanneltemplatescene.children[1].childNodes[i].getAttribute("position");
            //            console.log(currentposition.y);
            //            

            //            
            //
            //        }



            // for (i = 0; i < channelsplane.length; i++) {
            //
            //     console.log('b4 emit');
            //     channelsplane[i].emit('scroll');
            // }


        });

   

    },


});