
AFRAME.registerComponent('changevid', {
    
    schema: { 
            default: ''
            },

  init() {
    const video = document.querySelector('a-video');
    
    this.el.addEventListener('click', () => {
        
        //video.setAttribute('src', this.data);
        //video.autoplay = "true";
       
    
        console.log("changevid");
    });
  }
});
