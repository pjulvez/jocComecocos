//Declaramos el array bidimensional
var Mapa = new Array(2);
Mapa[0] = new Array(2);
Mapa[1] = new Array(2);
Mapa[2] = new Array(2);
Mapa[3] = new Array(2);
Mapa[4] = new Array(2);
Mapa[5] = new Array(2);
Mapa[6] = new Array(2);
Mapa[7] = new Array(2);
Mapa[8] = new Array(2);
Mapa[9] = new Array(2);
Mapa[10] = new Array(2);
Mapa[11] = new Array(2);
Mapa[12] = new Array(2);
Mapa[13] = new Array(2);
Mapa[14] = new Array(2);
Mapa[15] = new Array(2);


Mapa[0][0] = 0;
Mapa[0][1] = 0;
Mapa[0][2] = 0;
Mapa[0][3] = 1;

Mapa[1][0] = 1;
Mapa[1][1] = 1;
Mapa[1][2] = 0;
Mapa[1][3] = 0;

Mapa[2][0] = 0;
Mapa[2][1] = 0;
Mapa[2][2] = 0;
Mapa[2][3] = 0;

Mapa[3][0] = 1;
Mapa[3][1] = 1;
Mapa[3][2] = 1;
Mapa[3][3] = 1;

for(var i=0; i<Mapa.length; i++) {
    //Bucle que recorre el array que está en la posición i
    for(var j=0; j<Mapa[i].length; j++) {
        document.write(Mapa[i][j]);
    }
}
