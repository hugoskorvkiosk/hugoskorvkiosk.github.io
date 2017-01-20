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


        var position;
        var newpositiony;
        this.el.addEventListener(data.listen, function () {


            document.querySelector('#channelbox').setAttribute('visible','true');
                


            var thechanneltemplatescene = document.querySelector('#thechanneltemplatescene');

            console.log(thechanneltemplatescene);

            var channelplanes = thechanneltemplatescene.children;

            console.log(channelplanes);

            var channelcount = thechanneltemplatescene.children.length;

            console.log(channelcount);

            
            

            var firstchannelposy = thechanneltemplatescene.children[0].childNodes[0].getAttribute("position").y;
            var secondchannelposy = thechanneltemplatescene.children[1].childNodes[0].getAttribute("position").y;
            
    
            console.log( thechanneltemplatescene.children[1].childNodes[0].getAttribute("position").y);


            var distancetoscroll = parseFloat(secondchannelposy - firstchannelposy).toFixed(9);

            var lastchannelposy = thechanneltemplatescene.children[channelcount - 1].childNodes[0].getAttribute("position").y;

            var templateposy = document.querySelector('#thechanneltemplatescene').getAttribute("position").y;
            
            var channelselectedposy = document.querySelector('#channelselectedindication').getAttribute("position").y;

            var heightofplane = thechanneltemplatescene.children[1].childNodes[0].getAttribute("geometry").height;

            var heightoftemplate = parseFloat(lastchannelposy - firstchannelposy);

            var topoftemplateposy = templateposy + heightoftemplate;

            var vidbox = document.querySelector('#vidbox');
            var distancefromselected = parseFloat(channelselectedposy - templateposy).toFixed(3);
            var distancefromtopselected = parseFloat(channelselectedposy - topoftemplateposy).toFixed(3);


            console.log(templateposy);


            position = document.querySelector('#thechanneltemplatescene').getAttribute('position');

            var addordecrease;


            if (this.getAttribute("id") == "scrolldown") {

                newpositiony = parseFloat(position.y) + parseFloat(distancetoscroll);
                newpositiony = parseFloat(newpositiony).toPrecision(5);
                console.log("scrolldown " + newpositiony);
                addordecrease = "1";



            } else if (this.getAttribute("id") == "scrollup") {
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

            
            var previouschannelselected = document.querySelector(".previousentityselected").getAttribute("id");

            console.log(previouschannelselected);

            var lastChannelNumber = previouschannelselected[previouschannelselected.length - 1];
         
            var newtv = parseInt(parseInt(lastChannelNumber) + parseInt(addordecrease));

            if(newtv === 0 || newtv === 10){
                return;
            }
            
            
            console.log(newpos);
            console.log(position);

            document.querySelector('#thechanneltemplatescene').setAttribute('animation__scroll', 'to', newpos);
            document.querySelector('#thechanneltemplatescene').setAttribute('animation__scroll', 'from', position);
            data.target.emit(data.emit);

        
                
            var newvidbox = parseInt(lastChannelNumber) + parseInt(addordecrease);

            console.log('#tv' + newtv);

            var whichvidbox = newtv % 3;

            vidbox.setAttribute('src', '#vidbox' + newtv);


            document.querySelector("#channelbox").setAttribute('src', '#bigtv' + newtv);


            console.log(document.querySelector("#channelbox").getAttribute('src'));

            document.querySelector(".previousentityselected").setAttribute("id", "channel" + newtv);



        });



    },


});