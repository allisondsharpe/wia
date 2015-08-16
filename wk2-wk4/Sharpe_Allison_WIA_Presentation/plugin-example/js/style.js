/************ example one **************/

$(function() { /* alert + offset */

	$('.notify').waypoint(function(direction) {
  		alert('Here is the alert box for our first waypoint.');
	},{ offset:'100%'}); /* offset goes from bottom to top */

}); 

/************ example two **************/

$(function() { /* console */

    $('#one').waypoint(function() {
        console.log('this is waypoint one');
    });

     $('#two').waypoint(function() {
        console.log('this is waypoint two');
    });
    
     $('#three').waypoint(function() {
        console.log('this is waypoint three');
    });
    
     $('#four').waypoint(function() {
        console.log('this is waypoint four');
    });

});

/************ example three **************/
/* $(function() { /* console + offset */

    /* $('#one').waypoint(function() {
        console.log('this is waypoint one');
    }, { offset: '-20%' });
    
     $('#two').waypoint(function() {
        console.log('this is waypoint two');
    }, { offset: '-30%' });
    
     $('#three').waypoint(function() {
        console.log('this is waypoint three');
    }, { offset: '-40%' });
    
     $('#four').waypoint(function() {
        console.log('this is waypoint four');
    }, { offset: '-50%' });

}); */