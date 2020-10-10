//function preload() {
    //img = loadImage('map.jpg');
//}

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(21);
    //image(img, 0, 0);
    let img = createImage(66, 66);
    img.loadPixels();
    for (let i = 0; i < img.width; i++) {
      for (let j = 0; j < img.height; j++) {
        img.set(i, j, color(0, 90, 102, (i % img.width) * 2));
      }
    }
    img.updatePixels();
    image(img, 17, 17);
    image(img, 34, 34);
}
