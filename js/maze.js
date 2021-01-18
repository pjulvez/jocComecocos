const ROWS = 5;
const COLUMNS = 5;
const IMAGE_SIZE = 32; //Icons size in pixels

class Maze {
    constructor() {
      this.rows = ROWS;
      this.columns = COLUMNS;
      this.imageSize = IMAGE_SIZE;
      this.maze = [
                     [0, 2, 1, 2, 0],
                     [0, 3, 0, 0, 0],
                     [1, 1, 0, 2, 2],
                     [0, 1, 0, 0, 0],
                     [1, 1, 1, 1, 1],

                 ];
      }
  /*   constructor(ROWS,COLUMNS){
        this.rows = ROWS;
        this.columns = COLUMNS;
        this.image_size = IMAGE_SIZE


     }*/




}
