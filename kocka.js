/*global document: false */
/*jshint esversion: 6 */

var bekezd;
var randSzam;
var x;
var Ar = [];
var i;

// Jobbat nem tudtam kitalálni, az új játékhoz frissítek!!!
function torol() {
    location.reload();
}
document.getElementById("ujgomb").addEventListener("click", torol);

function tomb() {
    var ul = document.getElementById("lista");
    for (i = 0; i < Ar.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = Ar[i];
        ul.appendChild(li);
    }
}
function kattintas() {
    randSzam = Math.floor(Math.random() * 6) + 1;
    bekezd = document.getElementById("demo");
    bekezd.innerHTML = randSzam;

    // A dobott szám hozáadása a tömbhöz
    Ar.push(randSzam);

    // A dobások száma
    x = document.getElementById("kattint").innerHTML;
    x++;
    document.getElementById("kattint").innerHTML = " " + x + "";


    // A feltétel, mikor álljon le -- 5 dobás
    if (x < 5) {



        // A kocka képei

        if (randSzam == 1) {
            document.getElementById("kep").src = "/IMG/kocka_1.JPG";
        }
        if (randSzam == 2) {
            document.getElementById("kep").src = "/IMG/kocka_2.JPG";
        }
        if (randSzam == 3) {
            document.getElementById("kep").src = "/IMG/kocka_3.JPG";
        }
        if (randSzam == 4) {
            document.getElementById("kep").src = "/IMG/kocka_4.JPG";
        }
        if (randSzam == 5) {
            document.getElementById("kep").src = "/IMG/kocka_5.JPG";
        }
        if (randSzam == 6) {
            document.getElementById("kep").src = "/IMG/kocka_6.JPG";
        }

    }

    else {
        // Betölti az utolsó dobás kockáját! Nem ment a do-while ciklussal! 
        if (randSzam == 1) {
            document.getElementById("kep").src = "/IMG/kocka_1.JPG";
        }
        if (randSzam == 2) {
            document.getElementById("kep").src = "/IMG/kocka_2.JPG";
        }
        if (randSzam == 3) {
            document.getElementById("kep").src = "/IMG/kocka_3.JPG";
        }
        if (randSzam == 4) {
            document.getElementById("kep").src = "/IMG/kocka_4.JPG";
        }
        if (randSzam == 5) {
            document.getElementById("kep").src = "/IMG/kocka_5.JPG";
        }
        if (randSzam == 6) {
            document.getElementById("kep").src = "/IMG/kocka_6.JPG";
        }

        // A Guríts! gomb letiltása
        document.getElementById("gur").disabled = true;

        // A dobások száma -- szöveg -- vége
        document.getElementById("kat_utolso").innerHTML =
            "Csak 5 dobása lehet! Az eddig kapott számok:";

        // A tömb kiírása - nem ezt kérik!!
        //document.getElementById("szamok").innerHTML = "A gurított számok:"+" "+Ar;

        // A tömb kiírása listába!
        tomb();

        // Új BUTTON létrehozása
        var bn;
        var gomb;
        bn = document.createElement("button");
        bn.appendChild(document.createTextNode("Új játék?"));
        gomb = document.getElementById("ujgomb");
        gomb.appendChild(bn);
        console.log(bn);
    }

}
