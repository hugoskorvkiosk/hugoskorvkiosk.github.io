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




        //        var firstchannel = channelplanes[0];
        //        var lastchannel = channelplanes[channelcount];


        var position;
        var newpositiony;
        this.el.addEventListener(data.listen, function () {

            //                position = thechanneltemplatescene.children[1].childNodes[0].getAttribute('position');
            //                console.log(position);        

            //                scrolldownanimation.setAttribute('from', position.x + ' ' + position.y + ' ' + position.z);



            //            


            var thechanneltemplatescene = document.querySelector('#thechanneltemplatescene');

            console.log(thechanneltemplatescene);

            var channelplanes = thechanneltemplatescene.children[1].childNodes;

            console.log(channelplanes);

            var channelcount = thechanneltemplatescene.children[1].childElementCount;

            console.log(channelcount);


            var firstchannelposy = thechanneltemplatescene.children[1].childNodes[0].getAttribute("position").y;
            var secondchannelposy = thechanneltemplatescene.children[1].childNodes[1].getAttribute("position").y;

         
            var distancetoscroll = parseFloat(secondchannelposy-firstchannelposy).toFixed(9);
            console.log("distancetoscroll " + distancetoscroll);
            
            var lastchannelposy = thechanneltemplatescene.children[1].childNodes[channelcount - 1].getAttribute("position").y;



            var templateposy = document.querySelector('#thechanneltemplatescene').getAttribute("position").y;
            var channelselectedposy = document.querySelector('#channelselectedindication').getAttribute("position").y;



            var heightofplane = thechanneltemplatescene.children[1].childNodes[1].getAttribute("geometry").height;

            var heightoftemplate = parseFloat(lastchannelposy - firstchannelposy);


            // TODO: Om toppen av thechanneltemplateposition är nära channelselectedposy - return; 

            var topoftemplateposy = templateposy + heightoftemplate;
  

            var distancefromselected = parseFloat(channelselectedposy - templateposy).toFixed(3);
            var distancefromtopselected = parseFloat(channelselectedposy - topoftemplateposy).toFixed(3);


            console.log(templateposy);


            position = document.querySelector('#thechanneltemplatescene').getAttribute('position');

            var addordecrease;


            if (this.getAttribute("id") == "scrolldown" ) {
                
              
                
                newpositiony = parseFloat(position.y) + parseFloat(distancetoscroll);
                newpositiony = parseFloat(newpositiony).toPrecision(5);
                  console.log("scrolldown " + newpositiony);
                addordecrease = "1";



            } else if (this.getAttribute("id") == "scrollup" ) {
                newpositiony = parseFloat(position.y - distancetoscroll);
                newpositiony = parseFloat(newpositiony).toPrecision(5);
                console.log("clicked scrollup " + newpositiony);
                addordecrease = "-1";

            } else {
                return;
            }


            var newpos = {
                x: position.x,
                y: newpositiony,
                z: position.z
            };

            console.log(newpos);
            console.log(position);

            document.querySelector('#thechanneltemplatescene').setAttribute('animation', 'to', newpos);
            document.querySelector('#thechanneltemplatescene').setAttribute('animation', 'from', position);
            data.target.emit(data.emit);

            var previouschannelselected = document.querySelector(".previousentityselected").getAttribute("id");

            console.log(previouschannelselected);

            var lastChannelNumber = previouschannelselected[previouschannelselected.length - 1];


            var newtv = parseInt(parseInt(lastChannelNumber)+parseInt(addordecrease));


            var newvidbox = parseInt(lastChannelNumber) + parseInt(addordecrease);

            console.log('#tv' + newtv);

            if (newtv % 3 == 1) {
                document.querySelector("#vidbox").setAttribute('src', '#vidbox3');
            } else if (newtv % 3 == 2) {
                document.querySelector("#vidbox").setAttribute('src', '#vidbox2');
            } else {
                document.querySelector("#vidbox").setAttribute('src', '#vidbox1');
            }

            document.querySelector("#channelbox").setAttribute('src', '#tv' + newtv);


            console.log(document.querySelector("#channelbox").getAttribute('src'));

            document.querySelector(".previousentityselected").setAttribute("id", "channel" + newtv);

            //            position = document.querySelector('#thechanneltemplatescene').getAttribute('animation', 'from');
            //


            //            document.querySelector('#thechanneltemplatescene').emit(data.emit);






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