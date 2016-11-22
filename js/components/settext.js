AFRAME.registerComponent('settext', {

    schema: {
        previousentity: {
            default: ''
        }

    },

    init: function () {

        var menuitems = [
            'Film',
            'TV',
            'Web TV',
            'Settings',
            'Undecided'
        ];

        
        

console.log("setTEXT");
        
        console.log(this.el.id);
        
        var menunumber = this.el.id.split('menuplanetext')[1];
     

        
        this.el.setAttribute("text", "text", menuitems[menunumber-1]);
             this.el.setAttribute("text", "font", "Open Sans");
               this.el.setAttribute("text", "size", "0.04");

    }

});