var names = ["Rebecca", "Tyler"];

function loadBox() {

    var c = document.getElementById("namebox");
    var canvas = c.getContext("2d");
    
    canvas.fillStyle="black";
    canvas.fillRect(0, 0, c.width, c.width);

    canvas.textBaseline = "middle";
    canvas.textAlign= "center";
    canvas.font = "36px Arial";
    canvas.fillStyle="white";
    canvas.fillText( names[Math.floor(Math.random() * 2)], 250, 250);
}
