
var prevSpeed=0;
function speedBar(speed) {
    var canvas = document.getElementById('cv1');
    var context = canvas.getContext('2d');
    
    clearCanvas(context, canvas);

    context.fillStyle = "rgb(200,0,11)";
    context.fillRect(0,0,speed,canvas.height);
    prevSpeed=speed;
}


function clearCanvas(context, canvas) {
    context.fillStyle ="rgb(0,0,0)";
    context.clearRect(0, 0, canvas.width, canvas.height);
    var w = canvas.width;
    canvas.width = 1;
    canvas.width = w;
  }