function remplissage() {
    let i = 0;
    for (i = 0; i < 7; i++) {
        modifier(i, 5);
    }
    for (i = 7; i < 14; i++) {
        modifier(i, 5);
    }
    modifier(14, 0);
    modifier(15, 0);
    modifier(16, 1);
    modifier(17, 0);
}
remplissage();







// //(a) Une méthode qui retourne le nombre de pions du joueur idJ.
function nbPoints(idj) {
    let points = document.getElementById(idj).value;
    if (idj == 14) {
        document.write("le nombre de points du joueur " + 1 + " est " + points + "<br/>");
    } else {
        document.write("le nombre de points du joueur " + 2 + " est " + points);
    }
}





function total_de_pions(id) {
    let total_pions = 0;
    if (id == 14) {
        for (i = 0; i < 7; i++) {
            total_pions = eval(total_pions) + eval(return_value(i));
        }
        return total_pions;
    } else {
        for (i = 7; i < 14; i++) {
            total_pions = eval(total_pions) + eval(return_value(i));
        }
        return total_pions;
    }
}





// //(b) Une fonction qui dit si le joueur idJ est bloqué en retournant 0 ou 1.
function estBloque(id) {
    if (id < 7 && return_value(16) == 1) {
        modifier(16, 0)
        modifier(17, 1)
            // alert(return_value(16), " ", return_value(17))
        return 0
    }
    if (id < 7 && return_value(16) == 0) {
        alert(return_value(16), " ", return_value(17))
        return 1
    }
    if (id >= 7 && return_value(17) == 1) {
        modifier(16, 1)
        modifier(17, 0)
            // alert(return_value(16), " ", return_value(17))
        return 0
    }
    if (id >= 7 && return_value(17) == 0) {
        alert(return_value(16), " ", return_value(17))
        return 1
    }
}


function prisse(id_case) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "distribution.php?id_case=" + id_case, true);
    xhr.send();
    return (id_case + return_value(id_case)) % 14;
}




//(e) Proposer une méthode qui dit si le jeu se poursuit (0 comme retour) ou bien si le jeu s’arrête (i comme retour si le joueur i gagne).
function poursuiteJeu() {
    if (return_value(14) >= 35) {
        alert("victoire joueur 1 :)")
        alert(" FIN DU JEUX, MERCI D'Y AVOIR PARTICIPE :)")
        modifier(16, 0);
        modifier(17, 0);
        nbPoints(14);
        nbPoints(15);
        return 1;

    } else if (return_value(15) >= 35) {
        alert("victoire joueur 2 :)")
        alert(" FIN DU JEUX, MERCI D'Y AVOIR PARTICIPE :)")
        nbPoints(14);
        nbPoints(15);
        modifier(16, 0);
        modifier(17, 0);
        return 1;
    } else if (return_value(14) + return_value(15) < 10) {
        if (total_de_pions(14) + return_value(14) > 35) {
            alert("victoire joueur 1 :)")
            alert(" FIN DU JEUX, MERCI D'Y AVOIR PARTICIPE :)")
            nbPoints(14);
            nbPoints(15);
            modifier(16, 0);
            modifier(17, 0);
            return 1;

        } else if (total_de_pions(15) + return_value(15) > 35) {
            alert("victoire joueur 2 :)")
            alert(" FIN DU JEUX, MERCI D'Y AVOIR PARTICIPE :)")
            nbPoints(14);
            nbPoints(15);
            modifier(16, 0);
            modifier(17, 0);
            return 1;
        }
    } else {
        return 0;
    }
}





function interdit(id) {
    if (id == 6 || id == 13) {
        if (return_value(id) == 1 && id < 7) {
            if (total_de_pions(14) == 0) {
                distribution(id);
            } else {
                alert("deplacement impossible , veillez choisir une autre case")
            }
        } else if (return_value(id) == 1 && id > 7) {
            if (total_de_pions(15) == 0) {
                distribution(id);
            } else {
                alert("deplacement impossible , veillez choisir une autre case")
            }
        }
    }
}






function manger1(id) {
    let temp = 0;
    if (id < 7) {
        temp = return_value(14);
        modifier(14, temp + 1);
        temp = return_value(id);
        modifier(id, temp - 1);
    } else {
        temp = return_value(15);
        modifier(15, temp + 1);
        temp = return_value(id);
        modifier(id, temp - 1);
    }

    for (i = id + 1; i <= id + 13; i++) {
        temp = return_value(i % 14);
        modifier((i % 14), temp + 1);
        temp = return_value(id);
        modifier(id, temp - 1);
    }
}







function manger_j1(idfin) {
    let possibilite = true
    let temp1 = 0;
    for (i = idfin; i >= 7; i--) {
        if ((return_value(i) >= 2) && (return_value(i) <= 4) && (possibilite == true)) {
            alert("joueur1 mange :)")
            temp1 = return_value(i) + return_value(14);
            modifier(14, temp1);
            // game.pointJoueur1 = game.pointJoueur1 + eval(document.getElementById(i).value)
            // document.getElementById(i).value = 0;
            modifier(i, 0);
        } else {
            possibilite = false;
        }
    }

}

function manger_j2(idfin) {
    let possibilite = true;
    let temp2 = 0;
    for (i = idfin; i >= 0; i--) {
        if ((return_value(i) >= 2) && (return_value(i) <= 4) && (possibilite == true)) {
            alert("joueur2 mange :)")
            temp2 = return_value(i) + return_value(15);
            modifier(15, temp2);
            // game.pointJoueur2 = game.pointJoueur2 + eval(document.getElementById(i).value)
            // document.getElementById(i).value = 0;
            modifier(i, 0);
        } else {
            possibilite = false;
        }
    }
}




function prise1(id) {
    let temp3 = 0;
    if (return_value(id) < 14) {
        fin = distribution(id);
        if (id < 7 && fin >= 7) {
            manger_j1(fin);
        }
        if (id >= 7 && fin < 7) {

            manger_j2(fin);
        }
    } else if (return_value(id) == 14) {
        if (id < 7) {
            alert("joueur1 mange :)")
        } else {
            alert("joueur2 mange :)")
        }
        manger1(id);
    } else {
        // total = return_value(id);
        for (i = id + 1; i <= id + 13; i++) {
            temp3 = return_value(i % 14) + 1;
            modifier(i % 14, temp3);
            // document.getElementById(i % 14).value = eval(document.getElementById(i % 14).value) + 1
            // document.getElementById(id).value = eval(document.getElementById(id).value) - 1
            temp3 = return_value(id) - 1;
            modifier(id, temp3);
        }
        total = total - 13;


        if (id >= 7) {
            for (i = 0; i < total; i++) {
                temp3 = return_value(i % 7) + 1;
                modifier(i % 7, temp3);
                // document.getElementById(i % 7).value = eval(document.getElementById(i % 7).value) + 1
                temp3 = return_value(id) - 1;
                modifier(id, temp3);
                // document.getElementById(id).value = eval(document.getElementById(id).value) - 1
            }
            fin = i;
            manger_j2(fin);
        } else {
            //id<7
            let z = 0;
            for (i = 0; i < total; i++) {
                if (z == 0) {
                    z = 7;
                }
                temp3 = return_value(z) + 1;
                modifier(z, temp3);
                // game.coteJoueur2[i % 7] = game.coteJoueur2[i % 7] + 1
                // document.getElementById(id).value = eval(document.getElementById(id).value) - 1
                temp3 = return_value(id) - 1;
                modifier(id, temp3);
                z = (z + 1) % 14;
            }
            fin = z - 1;
            // for (i = 0; i <= 6; i++) {
            //     document.getElementById(13 - i).value = game.coteJoueur2[i];
            // }
            manger_j1(fin);

        }
    }
}






function prise(id) {
    if (estBloque(id) == 0) {
        prise1(id)
    } else if (estBloque(id) == 1) {
        alert("attention :( ce n'est pas votre tour")
    }
    poursuiteJeu();
}


//this function is to update the first an second line of the game board
function update(idj) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(idj).value = this.response;
        }
    }
    xhr.open("GET", "songo.php?idj=" + idj, true);
    xhr.send();
}

function return_value(idr) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            k = this.response;
        }
    }
    xhr.open("GET", "songo.php?idj=" + idr, true);
    xhr.send();
    return k;
}
//this function is to update the mark of the first gamer


function ac() {
    for (i = 0; i <= 15; i++) {
        update(i);
    }
}

function actualiser() {
    setInterval(ac, 1000);
}

function modifier(id, valeur) {
    let xh = new XMLHttpRequest();
    xh.open("GET", "modifier.php?id=" + id + "&valeur=" + valeur, true);
    xh.send();
    ac();
}