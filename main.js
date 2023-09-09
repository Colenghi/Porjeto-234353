statuss = "";

function preload(){
    img = loadImage('BedRoom.webp');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("statuss").innerHTML = "Status: Detectando Objetos";
  }
