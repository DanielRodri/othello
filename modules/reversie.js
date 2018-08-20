
var matriz;
crearTablero(4);

var ficha = 1;

while (true) {
    imprimir(4);
    alert("FICHA: " + ficha);
    var fila = prompt("Ingresa la fila en la desee jugar: ");

    var columna = prompt("Ingresa la columna en la desee jugar: ");

    var game = movimiento(parseInt(fila), parseInt(columna), ficha, 4);

    alert(game);

    if (ficha == 1) {
        ficha = 2;
    }
    else {
        ficha = 1;
    }

    
    var ganadora = ganador(4);


    if (ganadora!="El tablero aun no está lleno") {
       
        alert(ganadora);
        break;
    }
    document.write('<br>');

}

function crearTablero(tam) {
    matriz = new Array(tam);
    for (f = 0; f < tam; f++) {
        matriz[f] = new Array(tam);

        for (c = 0; c < tam; c++) {
            if ((tam / 2 == f) & (tam / 2 == c)) {
                matriz[f][c] = 1;
            } else if ((tam / 2 == f) & (tam / 2 - 1 == c)) {
                matriz[f][c] = 2;
            } else if ((tam / 2 - 1 == f) & (tam / 2 == c)) {
                matriz[f][c] = 2;
            } else if ((tam / 2 - 1 == f) & (tam / 2 - 1 == c)) {
                matriz[f][c] = 1;
            } else {
                matriz[f][c] = 0;
            }
        }
    }
}

function imprimir(tam) {
    document.write("P " + '0' + '  ' + '1' + '  ' + '2' + '  ' + '3' + '  ' + '<br>');
    for (f = 0; f < tam; f++) {
        document.write(f + '  ');

        for (c = 0; c < tam; c++) {
            document.write(matriz[f][c] + '  ');
        }
        document.write('<br>');
    }
    return;
}


function movimiento(fila, columna, ficha, tam) {

    if (fila > tam || columna > tam) {
        return "La fila o columna es mas grande que la matriz creada";
    }
    if (matriz[fila][columna] == 0) {
        if (ficha == 1) {
            jugada = movFichaVerifica(fila, columna, 2, tam);
            if (jugada == true) {
                matriz[fila][columna] = ficha;
                return "La jugada se realizó con exito";
            }
            else {
                return "La jugada es incorrecta";
            }
        }
        else {
            jugada = movFichaVerifica(fila, columna, 1, tam);


            if (jugada == true) {
                return "La jugada se realizó con exito";
            }
            else {
                return "La jugada es incorrecta";
            }
        }
    }
    else {
        return "Esa posicion ya esta ocupada por una ficha";
    }

}

function movFichaVerifica(fila, columna, fichaC, tam) {
    var f = parseInt(fila);
    var c = parseInt(columna);
    var ficha;

    var verifica = false;

    if (fichaC == 1) {
        ficha = 2;

    }
    else {
        ficha = 1;

    }


    if (fila != 0 & columna != 0) {
        if (matriz[fila - 1][columna - 1] == fichaC) {
            while (f != 0 & c != 0) {
                f--;
                c--;
            }

            while (f < fila & c < columna) {
                if (matriz[f][c] == ficha) {
                    while (f != fila & c != columna) {
                        f++;
                        c++;
                        matriz[f][c] = ficha;
                        document.write("FILA: " + f + " COLUMNA: " + c + " ficha: " + ficha);
                        verifica = true;
                    }
                }

                f++;
                c++;
            }

        }
    }

    if (fila != 0) {
        f = fila;
        c = columna;
        if (matriz[fila - 1][columna] == fichaC) {
            f = 0;

            while (f < fila) {

                if (matriz[f][c] == ficha) {
                    //aqui iba
                    while (f != fila) {
                        f++;
                        matriz[f][c] = ficha;
                        document.write("FILA: " + f + " COLUMNA: " + c + " ficha: " + ficha);
                        verifica = true;

                    }
                }
                f++;
            }

        }
    }

    if (fila != 0 & columna != tam - 1) {
        f = fila;
        c = columna;

        if (matriz[fila - 1][columna + 1] == fichaC) {
            while (f != 0 & c != tam - 1) {
                f--;
                c++;
            }

            while (f < fila & c > columna) {
                if (matriz[f][c] == ficha) {
                    while (f != fila & c != columna) {
                        f++;
                        c--;
                        matriz[f][c] = ficha;
                        document.write("FILA: " + f + " COLUMNA: " + c + " ficha: " + ficha);
                        verifica = true;
                    }
                }
                f++;
                c--;
            }

        }
    }



    if (columna != 0) {
        f = fila;
        c = columna;

        if (matriz[fila][columna - 1] == fichaC) {
            c = 0;

            while (c < columna) {
                if (matriz[f][c] == ficha) {
                    while (c != columna) {
                        c++;
                        matriz[f][c] = ficha;
                        document.write("FILA: " + f + " COLUMNA: " + c + " ficha: " + ficha);
                        verifica = true;
                    }
                }
                c++;
            }

        }
    }

    if (columna != tam - 1) {
        f = fila;
        c = columna;
        if (matriz[fila][columna + 1] == fichaC) {
            c = tam - 1;

            while (c > columna) {

                if (matriz[f][c] == ficha) {
                    while (c != columna) {
                        c--;
                        matriz[f][c] = ficha;
                        document.write("FILA: " + f + " COLUMNA: " + c + " ficha: " + ficha);
                        verifica = true;
                    }
                }

            }
            c--;

        }

    }

    if (fila != tam - 1 & columna != 0) {
        f = fila;
        c = columna;
        if (matriz[fila + 1][columna - 1] == fichaC) {
            while (f != tam - 1 & c != 0) {
                f++;
                c--;
            }

            while (f > fila & c < columna) {
                if (matriz[f][c] == ficha) {
                    while (f != fila & c != columna) {
                        f--;
                        c++;
                        matriz[f][c] = ficha;
                        document.write("FILA: " + f + " COLUMNA: " + c + " ficha: " + ficha);
                        verifica = true;
                    }
                }
                f--;
                c++;
            }

        }
    }

    if (fila != tam - 1) {
        f = fila;
        c = columna;
        if (matriz[fila + 1][columna] == fichaC) {
            f = tam - 1;

            while (f > fila) {
                if (matriz[f][c] == ficha) {
                    while (f != fila) {
                        f--;
                        matriz[f][c] = ficha;
                        document.write("FILA: " + f + " COLUMNA: " + c + " ficha: " + ficha);
                        verifica = true;
                    }
                }
                f--;
            }

        }
    }

    if (fila != tam - 1 & columna != tam - 1) {
        f = fila;
        c = columna;

        if (matriz[fila + 1][columna + 1] == fichaC) {
            while (f != tam - 1 & c != tam - 1) {
                f++;
                c++;
            }


            while (f > fila & c > columna) {
                if (matriz[f][c] == ficha) {
                    while (f != fila & c != columna) {
                        f--;
                        c--;
                        matriz[f][c] = ficha;
                        document.write("FILA: " + f + " COLUMNA: " + c + " ficha: " + ficha);
                        verifica = true;
                    }
                }
                f--;
                c--;
            }

        }

    }

    return verifica;

}
function ganador(tam) {
    var a = 0, b = 0;

    for (f = 0; f < tam; f++) {

        for (c = 0; c < tam; c++) {
            if(matriz[f][c] == 0){
                return "El tablero aun no está lleno";
            }
            else if (matriz[f][c] == 1) {
                a++;
            }
            else if (matriz[f][c] == 2) {
                b++;
            }
        }

    }
    if (a > b) {
        return "El ganador es el jugador con ficha 1 " + "\n" +
            "La puntuacion es: " + "\n" +
            "Ficha 1: " + a + " Ficha 2: " + b;

    }
    else if (a < b) {
        return "El ganador es el jugador con ficha 2 " + "\n" +
            "La puntuacion es: " + "\n" +
            "Ficha 1: " + a + " Ficha 2: " + b;
    }
    else {
        return "Empate " + "\n" +
            "La puntuacion es: " + "\n" +
            "Ficha 1: " + a + " Ficha 2: " + b;
    }

}