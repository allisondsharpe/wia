function onScroll(items, trigger) { /* function set for trigger items */
  	items.each(function() {
    var exAnimation = $(this),
        exAnimationClass = exAnimation.attr('data-ex-animation'), /* enables animation */
        exAnimationDelay = exAnimation.attr('data-ex-animation-delay'); /* enables a delay in animation */
   
        var exTrigger = (trigger) ? trigger : exAnimation; /* triggers animation waypoint */
        
        exTrigger.waypoint(function() { /* function for waypoint */
          exAnimation.addClass('animated').addClass(exAnimationClass);
          },{
              trigger: true,
              offset: '960px;' /* offset for animation waypoint: set to 100px */
    	});
  });
} 

 onScroll( $('.example-animation') ); 
