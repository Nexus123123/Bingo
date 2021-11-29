// zmienne globalne
const lewoiprawo = document.getElementById("lewoiprawo");
const kopia = lewoiprawo.innerHTML;
const wygrana =  document.getElementById("win");
const button1 = document.getElementById("button1");

var speech = new SpeechSynthesisUtterance();
speech.lang = "pl";

function losuj() { 
    tab = [];
    speech.pitch=1;
    speech.rate=2;
    speech.text = "Wylosowałeś liczby równe:";
    window.speechSynthesis.speak(speech);
    // przywracanie układu strony (wszystkich divów na swoje miejsce)
    const clear_lewoiprawo = document.getElementById("lewoiprawo").style.display="inherit";
    document.getElementById("lewoiprawo").innerHTML=clear_lewoiprawo;
    document.getElementById("lewoiprawo").innerHTML=kopia;
    document.getElementById("button").disabled = false;
    document.getElementById("lewoiprawo").style.height="781px";
    document.getElementById("lewoiprawo").style.fontSize="inherit";
    // czyszczenie kul z liczbami po lewej stronie
    document.getElementById("kula1").innerHTML= " ";
    document.getElementById("kule").innerHTML= " ";
    // przywrócenie wyglądu tabeli i napisu "TWOJA KARTA"
    document.getElementById("tabela").style.display = "table";
    document.getElementById("h4").innerHTML = "TWOJA KARTA";
    // czyszczenie napisu "Wygrałeś!"
    wygrana.innerHTML = " ";
    // ustawienie value liczb z tabeli na 0
    for(i = 1; i <= 25; i++) document.getElementById("square" + i).value = 0;
    // ustawienie koloru liczb z tabeli na domyślną (czarną)
    for(i = 1; i <= 25; i++) document.getElementById("square" + i).style.color = "black";
    // losowanie liczb do tabeli "TWOJA KARTA"
    for (let i = 1; i <= 25; i++) {
        let liczba = random_liczba();
        document.getElementById("square" + i).innerHTML = liczba;
    }
    // czyszczenie tablicy
    tab = [];
}


// losowanie liczb i dodawanie div'ów
function losuj_kule() {
    document.getElementById("kula1").innerHTML
    document.getElementById("kule").innerHTML
    let x = random_liczba();
    document.getElementById("kula1").innerHTML = x;
    if(tab.length>1) {
    document.getElementById("kule").innerHTML = "<div class=ballsmall>" + tab[tab.length - 2] + "</div>" + document.getElementById("kule").innerHTML
    }
    speech.pitch=1;
    speech.rate=6;
    speech.text = x;
    window.speechSynthesis.speak(speech);
}


// losowanie randomowej liczby
function random_liczba() {
    let liczba = Math.floor(Math.random() * 75) + 1;
    if (!tab.includes(liczba)) {
        tab.push(liczba);
        return liczba;
    } else return random_liczba();
}

// stworzenie pustej tablicy
let tab = [];


// kolorowanie tła tabeli
function kolor(y) {
    //let a = parseInt(document.getElementById("square"+ y).innerHTML);
    //if(tab.includes(a)) {
    if (document.getElementById("square" + y).value != 1) {
        document.getElementById("square" + y).style.backgroundColor = "#CD5C5C";
        document.getElementById("square" + y).value = 1;
    } else {
        document.getElementById("square" + y).style.backgroundColor = "rgb(138, 150, 31)";
        document.getElementById("square" + y).value = 0;
        }
    //}
    // wywołanie funkcji win() oraz repeat()
    win();
    repeat();
}


function win() {
    let td1 = document.getElementById("square1").value;
    let td2 = document.getElementById("square2").value;
    let td3 = document.getElementById("square3").value;
    let td4 = document.getElementById("square4").value;
    let td5 = document.getElementById("square5").value;

    let td6 = document.getElementById("square6").value;
    let td7 = document.getElementById("square7").value;
    let td8 = document.getElementById("square8").value;
    let td9 = document.getElementById("square9").value;
    let td10 = document.getElementById("square10").value;

    let td11 = document.getElementById("square11").value;
    let td12 = document.getElementById("square12").value;
    let td13 = document.getElementById("square13").value;
    let td14 = document.getElementById("square14").value;
    let td15 = document.getElementById("square15").value;

    let td16 = document.getElementById("square16").value;
    let td17 = document.getElementById("square17").value;
    let td18 = document.getElementById("square18").value;
    let td19 = document.getElementById("square19").value;
    let td20 = document.getElementById("square20").value;

    let td21 = document.getElementById("square21").value;
    let td22 = document.getElementById("square22").value;
    let td23 = document.getElementById("square23").value;
    let td24 = document.getElementById("square24").value;
    let td25 = document.getElementById("square25").value;

    // sprawdzanie czy wygrales
    if (td1 == 1) {
        if (td2 == 1) {
            if (td3 == 1) {
                if (td4 == 1) {
                    if (td5 == 1) {
                        wygrana.innerHTML = "Wygrałeś!";
                    }
                }
            }
        }
        if (td7 == 1) {
            if (td13 == 1) {
                if (td19 == 1) {
                    if (td25 == 1) {
                        wygrana.innerHTML = "Wygrałeś!";
                    }
                }
            }
        }
        if (td6 == 1) {
            if (td11 == 1) {
                if (td16 == 1) {
                    if (td21 == 1) {
                        wygrana.innerHTML = "Wygrałeś!";
                    }
                }
            }
        }
    }
    if (td2 == 1) {
        if (td7 == 1) {
            if (td12 == 1) {
                if (td17 == 1) {
                    if (td22 == 1) {
                        wygrana.innerHTML = "Wygrałeś!"
                    }
                }
            }
        }
    }
    if (td3 == 1) {
        if (td8 == 1) {
            if (td13 == 1) {
                if (td18 == 1) {
                    if (td23 == 1) {
                        wygrana.innerHTML = "Wygrałeś!"
                    }
                }
            }
        }
    }
    if (td4 == 1) {
        if (td9 == 1) {
            if (td14 == 1) {
                if (td19 == 1) {
                    if (td24 == 1) {
                        wygrana.innerHTML = "Wygrałeś!"
                    }
                }
            }
        }
    }
    if (td5 == 1) {
        if (td10 == 1) {
            if (td15 == 1) {
                if (td20 == 1) {
                    if (td25 == 1) {
                        wygrana.innerHTML = "Wygrałeś!"
                    }
                }
            }
        }
    }
    if (td5 == 1) {
        if (td9 == 1) {
            if (td13 == 1) {
                if (td17 == 1) {
                    if (td21 == 1) {
                        wygrana.innerHTML = "Wygrałeś!"
                    }
                }
            }
        }
    }
    if (td6 == 1) {
        if (td7 == 1) {
            if (td8 == 1) {
                if (td9 == 1) {
                    if (td10 == 1) {
                        wygrana.innerHTML = "Wygrałeś!"
                    }
                }
            }
        }
    }
    if (td11 == 1) {
        if (td12 == 1) {
            if (td13 == 1) {
                if (td14 == 1) {
                    if (td15 == 1) {
                        wygrana.innerHTML = "Wygrałeś!"
                    }
                }
            }
        }
    }
    if (td16 == 1) {
        if (td17 == 1) {
            if (td18 == 1) {
                if (td19 == 1) {
                    if (td20 == 1) {
                        wygrana.innerHTML = "Wygrałeś!"
                    }
                }
            }
        }
    }
    if (td21 == 1) {
        if (td22 == 1) {
            if (td23 == 1) {
                if (td24 == 1) {
                    if (td25 == 1) {
                        wygrana.innerHTML = "Wygrałeś!"
                    }
                }
            }
        }
    }

    if(wygrana.innerHTML == "Wygrałeś!") {
        speech.pitch=0;
        speech.rate=10;
        speech.text="Gratulacje, wygrałeś grę w bingo!";
        window.speechSynthesis.speak(speech);
    }

}


// łączenie wszystkich divów w jeden z napisem "Wygrałeś!"
function repeat () {
if(wygrana.innerHTML == "Wygrałeś!") {
    lewoiprawo.style.height="937px";
    lewoiprawo.style.backgroundColor="lightblue";
    lewoiprawo.style.textAlign="center";
    lewoiprawo.style.display="flex";
    lewoiprawo.style.alignItems="center";
    lewoiprawo.style.justifyContent="center";
    lewoiprawo.style.fontFamily="inherit";
    lewoiprawo.style.fontSize="20px";
    lewoiprawo.style.fontWeight="bolder";
    lewoiprawo.innerHTML="WYGRAŁEŚ";
    lewoiprawo.appendChild(button1);
    }

}
const lineBreak = document.createElement('br');