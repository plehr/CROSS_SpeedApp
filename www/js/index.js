document.addEventListener('deviceready', init, false);

function init() {
    document.getElementById("startSpeed").addEventListener('click', measure);
    console.log("INIT()");
}
function measure() {
    console.log("Messung gestartet");
    var options = { enableHighAccuracy: true };
    navigator.geolocation.getCurrentPosition(posSuccess, posError, options);
}

function posSuccess(pos) {
    var speed = pos.coords.speed;
    console.log("Hardware sagt: " + speed);
    speed=document.getElementById("fakeSpeed").value;
    console.log("Software sagt: " + speed);

    console.log("POS-Success: " + speed)
    document.getElementById("speedNum").innerHTML = ((speed > 0) ? speed : 0) + " km/h";
    speedBar(speed);
    new Promise(r => setTimeout(r, 2000));
    measure();
}

function posError(err) {
    console.log("ERROR" + err);
    alert("Position nicht gefunden :(");
}