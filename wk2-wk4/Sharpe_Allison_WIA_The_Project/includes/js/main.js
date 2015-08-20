/*
     Name: Allison Sharpe
     Date: 08-07-15
     Class & Section:  WIA-01
     Comments: "WIA - The Project"
 */


/**************** JQuery Effects ****************/ //Edit

//JQuery - FadeTo

$(function() { //Use for something else, possibly the canvas?

    $("#fadeMe").click(function(){

        $("#fadeTo").fadeTo(2000, .3);

    })

});

//JQuery - Animate

$(function() { //Interactive map?

    $("#right").click(function(){

        $("#theDiv").animate({width:"500px"}, 1000);

    });

    $("#text").click(function(){

        $("#theDiv").animate({fontSize:"24pt"}, 1000);

    });

    $("#reset").click(function(){

        //Reset to all the inital values
        $("#theDiv").animate({height:"180px", width:"250px", left:"0", fontSize:"16pt"}, 1000, "swing");


    });

});

//JQuery - Show/Hide

$(function() { //Use for image gallery?

    //Add a click function to our button
    $("#hide").click(function(){
        $("#show-hide").hide(2000);


    });

    $("#show").click(function(){

        $("#show-hide").show(2000, function(){

            $("#show-hide").css("background-color", "red");

        });

    });

    $("#toggle").click(function(){

        $("#show-hide").toggle("slow");

    });

});








