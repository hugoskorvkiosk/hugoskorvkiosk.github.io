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


        var channelplanes = document.querySelector('#thechanneltemplatescene').children[1];
     
        var channelcount = channelplanes.length;
//        var firstchannel = channelplanes[0];
//        var lastchannel = channelplanes[channelcount];


        var position;
        var newpositiony;
        this.el.addEventListener(data.listen, function () {

            //                position = thechanneltemplatescene.children[1].childNodes[0].getAttribute('position');
            //                console.log(position);        

            //                scrolldownanimation.setAttribute('from', position.x + ' ' + position.y + ' ' + position.z);

            
            var firstchannelposy = thechanneltemplatescene.children[1].childNodes[0].getAttribute("position").y;
            var lastchannelposy = thechanneltemplatescene.children[1].childNodes[channelcount].getAttribute("position").y;
            
            
            
            var templateposy = document.querySelector('#thechanneltemplatescene').getAttribute("position").y;
            var channelselectedposy = document.querySelector('#channelselectedindication').getAttribute("position").y;
            
            var distancefromselected = parseFloat(channelselectedposy - templateposy).toFixed(3);
            
            
            // TODO: Om toppen av thechanneltemplateposition är nära channelselectedposy - return; 
            if(  distancefromselected > 0.15 || distancefromselected < ){
               
               
               
               return;
               
               
               
               }
            
            
            // firstchannel pos == 2
            // channelcount == 9
            // lastchannel pos == 3.8 == firstchannelpos + channelcount * channelplanes[0].getAttribute('property').height;
            
           
            
//            var chtemplateheight = channelcount * channelplanes[0].getAttribute('property').height;
            
//             console.log(chtemplateheight);
            

//            var chtemplateposition = thechanneltemplatescene.getAttribute('position');
//            
//            
//            
//            var firstchannelpos = firstchannel.getAttribute('position');
//            var lastchannelpos = lastchannel.getAttribute('position');

         
            


            console.log(event);

            position = document.querySelector('#thechanneltemplatescene').getAttribute('position');


            if (this.getAttribute("id") == "scrolldown") {
                newpositiony = parseFloat(position.y) + 0.2;
                newpositiony = parseFloat(newpositiony).toPrecision(5);



            } else {
                newpositiony = parseFloat(position.y) - 0.2;
                newpositiony = parseFloat(newpositiony).toPrecision(5);
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