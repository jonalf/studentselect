var names;
var classes;

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

    $.post("load.py", { type : "classes" },
	   function( data, status ) {
	       classes = eval(data);
	       console.log("classes: " + classes );
	       var options = "";
    
	       for (c in classes) {
		   console.log("c: " + c);
		   options+= "<option value=\"" + classes[c] + "\">" + classes[c] + "</option>"
	       }
	       $("#cname").html( options );
	   });

    $.post("load.py", { type : "students" },
	   function( data, status ) {
	       names = eval(data);
	   });
}

function loadBox() {

    var c = document.getElementById("namebox");
    var canvas = c.getContext("2d");
    
    canvas.fillStyle="black";
    canvas.fillRect(0, 0, c.width, c.width);

    canvas.fillStyle="white";
    canvas.fillText( names[Math.floor(Math.random() * names.length)], 250, 250);
}
