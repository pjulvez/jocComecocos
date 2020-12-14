function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(220);
  //  roca.show();
  //with i i count the rows, with j the columns
  for (var i = 0; i < arrayRocasMapa.length; i++) {
    console.log("Imprimo una roca:" + i);
    arrayRocasMapa[i].show();
  }

array Maze = new Array[0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1];
