var img = new Image();
img.crossOrigin = 'anonymous';   //
img.src = 'map.jpg';
var canvas = document.getElementById('canvas');
canvas.style.display = 'none';
var ctx = canvas.getContext('2d');
img.onload = function() {
  ctx.drawImage(img, 0, 0);
  img.style.display = 'none';
};

function getColor(x, y) {
    var pixel = ctx.getImageData(x, y, 1, 1);
    var data = pixel.data;

    return color(data[0], data[1], data[2])
}

function setup() {
    createCanvas(600, 600);

    background(21);
}

function draw() {
    background(21);

    let display = createImage(img.width, img.height);
    display.loadPixels();
    for (let i = 0; i < display.width; i++) {
      for (let j = 0; j < display.height; j++) {
        //getColor(i, j);
        display.set(i, j, getColor(i, j));
      }
    }
    display.updatePixels();
    image(display, 17, 17);

    noLoop();
}
