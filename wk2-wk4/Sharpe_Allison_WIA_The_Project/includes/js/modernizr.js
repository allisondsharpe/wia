$(function() {

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

});