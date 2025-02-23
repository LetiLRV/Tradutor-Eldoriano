let espaco = "";

function addLetra(letra) {
    let eldoriano = document.getElementById("eldoriano");
    let nossaLingua = document.getElementById("nossaLingua");

    if (letra === ' ') {
        if (espaco.length === 0 || espaco.slice(-1) !== ' ') {
            espaco += letra;
        }
    } else {
        espaco += letra;
    }

    eldoriano.innerText = espaco;
    nossaLingua.innerText = espaco; 
}

function apagarLetra() {
    let eldoriano = document.getElementById("eldoriano");
    let nossaLingua = document.getElementById("nossaLingua");

    espaco = espaco.slice(0, -1); 
    eldoriano.innerText = espaco;
    nossaLingua.innerText = espaco;
}
