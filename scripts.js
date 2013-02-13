var names;

function init() {
    var c = document.getElementById("namebox");
    var canvas = c.getContext("2d");
    
    canvas.fillStyle="black";
    canvas.fillRect(0, 0, c.width, c.width);

    canvas.textBaseline = "middle";
    canvas.textAlign= "center";
    canvas.font = "70px Arial";
    canvas.fillStyle="white";

    canvas.fillText( "Click Here", 250, 250);

    $.post("load.py", { classname : "class" },
	   function( data, status ) {
	       names = eval("(" + data + ")");
	   });
    
    console.log( names );
}

function loadBox() {

    var c = document.getElementById("namebox");
    var canvas = c.getContext("2d");
    
    canvas.fillStyle="black";
    canvas.fillRect(0, 0, c.width, c.width);

    canvas.fillStyle="white";
    canvas.fillText( names[Math.floor(Math.random() * 2)], 250, 250);
}
