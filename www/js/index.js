document.addEventListener('deviceready', init, false);

function init() {
    document.getElementById("startSpeed").addEventListener('click', measure);

}
function measure() {
    var options = { enableHighAccuracy: true };
    navigator.geolocation.getCurrentPosition(posSuccess, posError, options);
}

function posSuccess(pos) {
    var crd = pos.coords;
    document.getElementById("speed").innerHTML = (crd.speed > 0) ? crd.speed : 0;
    console.log(crd);
    new Promise(r => setTimeout(r, 2000));
    measure();
}

function posError(err) {
    alert("Position nicht gefunden :(");
}