//Declaramos el aconst ROWS = 12;
const COLUMNS = 12;
const HEIGHT_TEXT = 64;
const SPEED = 1.0;
const MAX_LIVES = 5;
const IMAGE_SIZE = 32; //Icons size in pixels

class Maze {
    constructor() {
      this.rows = ROWS;
      this.columns = COLUMNS;
      this.mapa = [
                     [0, 0, 2, 0, 0, 0, 0, 0, 1,1,0,1],
                     [0, 0, 0, 0, 0, 0, 1, 1, 1,1,0,1],
                     [1, 1, 0, 0, 2, 1, 1, 0, 1,1,0,1],
                     [0, 1, 0, 0, 0, 0, 0, 0, 1,1,0,1],
                     [0, 1, 1, 1, 1, 0, 0, 0, 1,1,0,1],
                     [0, 0, 1, 0, 1, 0, 0, 0, 1,1,0,1],
                     [0, 0, 1, 0, 0, 1, 0, 0, 1,1,0,1],
                     [2, 0, 1, 1, 2, 1, 3, 1, 1,1,0,1],
                     [0, 1, 1, 1, 1, 0, 0, 0, 1,1,0,1],
                     [0, 0, 1, 0, 1, 0, 0, 0, 1,1,0,1],
                     [0, 1, 1, 1, 1, 0, 0, 0, 1,1,0,1],
                     [0, 0, 1, 0, 1, 0, 0, 0, 1,1,0,1],
                   ];
    }

}s
