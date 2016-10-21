/**
 * Listen to an event.
 * When that event is emitted, emit an event on another entity.
 */
AFRAME.registerComponent('event-proxy', {
  schema: {
    listen: {default: 'animation-complete'},
    target: {type: 'selector'},
    emit: {default: ''}
  },

  update: function () {
    var data = this.data;
    this.el.addEventListener(data.listen, function () {
        
        
      
        
        
        
//        data.target.emit(data.emit);
    
    
//        document.querySelector('#thescene').setAttribute('material', 'opacity', '0.99');
        
        
//         document.querySelector('#thechanneltemplatescene').emit('animationover');
        
//      data.target.emit(data.emit);
        
        
    });
  }
});