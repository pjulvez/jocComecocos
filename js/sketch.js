  var arrayRocasMapa = new array[]; 
function preload() {
  rocaImage = loadImage("images/roca.bmp");

//  font = loadFont('assets/SourceSansPro-Regular.otf');
}
function setup() {
  createCanvas(COLUMNS*IMAGE_SIZE, ROWS*IMAGE_SIZE +HEIGHT_TEXT);

  myMaze = new Maze();

  for (var i = 0; i < myMaze.rows; i++)
    for (var j = 0; j < myMaze.columns; j++) {
      if (myMaze.mapa[i][j] == 0) {

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
