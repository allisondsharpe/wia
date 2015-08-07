/*
     Name: Allison Sharpe
     Date: 08-07-15
     Class & Section:  WIA-01
     Comments: "WIA - The Project"
 */


window.onload = function () {

    var recCanvas = document.getElementById('canvas1');
    if (recCanvas && recCanvas.getContext) {
        var ctx = recCanvas.getContext("2d");
        if (ctx) {

            ctx.strokeStyle = "black";
            ctx.fillStyle = "blue";
            ctx.lineWidth = 5;

            //Draw Rectangle
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.strokeRect(0, 0, 50, 100);
            ctx.fillRect(0, 0, 50, 100);
        }

    }

    var cirCanvas = document.getElementById('canvas2');
    if (cirCanvas && cirCanvas.getContext) {
        var ctx2 = cirCanvas.getContext("2d");
        if (ctx2) {

            //Set Style
            ctx2.fillStyle = "rgba(255, 0, 0, .5)";
            ctx2.strokeStyle = "black";
            ctx2.lineWidth = 2;

            //Draw Circle
            ctx2.beginPath();
            ctx2.arc(50, 50, 20, 0, Math.PI * 2, true);

            ctx2.beginPath();
            ctx2.arc(50, 50, 30, 0, Math.PI * 2, true);
            ctx2.stroke();
            ctx2.closePath();
            ctx2.fill();
        }

    }

/*******************************************
 Code for Modernizer
 ********************************************/

    if (Modernizr.canvas) {
        //Canvas is supported
        var exampleCanvas = document.getElementById("exCanvas");
        var ctxmod = exampleCanvas.getContext("2d");

        ctxmod.font = "35pt sans-serif";
        ctxmod.fillText("Canvas is supported!", 20, 100);
    } else {
        //Canvas is not supported
        alert("Canvas is not supported");
    }

    if (Modernizr.draganddrop) {
        ctxmod.font = "25pt sans-serif";
        ctxmod.fillText("Drag and Drop Works!", 60, 230);
    } else {
        //Poly-fills would go here
    }

};
