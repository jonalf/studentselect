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
	       console.log("data: " + data );
	       classes = eval(data);
	       console.log("classes: " + classes );
	   });
    console.log( classes );

    var options = "";
    
    for (c in classes)
	options+= "<option value=\"" + c + "\">" + c + "</option>"
    //    console.log( options );
    $("#cname").html( options );

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
