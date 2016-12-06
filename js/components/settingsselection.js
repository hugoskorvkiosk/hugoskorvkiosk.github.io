// Component to change to color on click.
AFRAME.registerComponent('settingsselection', {


    schema: {
        listen: {
            default: 'click'
        },
        target: {
            type: 'selector'
        },

        active: {
            type: 'boolean'
        },
        setting: {
            default: 'fade'
        }

    },

    update: function () {
        var data = this.data;
        var el = this.el;
        

        this.el.addEventListener(data.listen, function () {

            var newbgopacity;
           
            var fadewhenvidobjects = document.querySelectorAll('.fadewhenvid');
            if (data.active) {

                console.log("deactivating");

                newbgopacity = '1';
          

            } else {

                console.log("activating");

                newbgopacity = '0.55';
       
            }


            el.setAttribute('settingsselection', 'active', !data.active);

            switch (data.setting) {
            case "fade":
                document.querySelector('#vidbox').setAttribute('unfade-channelmenu', 'active', !data.active);
                document.querySelector('#settinghidechannels').setAttribute('material', 'color', '#6F6F6F');
                document.querySelector('#settinghidechannels').setAttribute('settingsselection', 'active', false);
                break;
            case "transparent":
                document.querySelector('#curvedbg').setAttribute('material', 'opacity', newbgopacity);
                break;
            case "hide":
                for (var i = 0; i < fadewhenvidobjects.length; i++) {
                    document.querySelectorAll('.fadewhenvid')[i].setAttribute('visible', 'false');
                    }
                    document.querySelector('#vidbox').setAttribute('unfade-channelmenu', 'active', false);
                    document.querySelector('#settingfadechannels').setAttribute('material', 'color', '#6F6F6F');
                    document.querySelector('#settingfadechannels').setAttribute('settingsselection', 'active', false);
                break;

            }



        });


        this.el.addEventListener('mouseenter', function () {



            if (data.active) {
                console.log('active: true ' + data.active);
                el.setAttribute('material', 'color', '#F19A24');
            } else {
                el.setAttribute('material', 'color', '#F15A24');
            }


        });

        this.el.addEventListener('mouseleave', function () {



            if (data.active) {
                console.log(data.active);
                el.setAttribute('material', 'color', '#A43D18');
            } else {
                el.setAttribute('material', 'color', '#6F6F6F');
            }





        });

    },


});