
let min = window.prompt("Donne un nombre minimum");
let max = window.prompt("Donne un nombre maximum");
let current = window.prompt("Donne un nombre");

    if ((current > min) && (current < max)){
        console.log(current + " est entre " + min + " et " + max);
    }
    if ((current < min) || (current > max)) {
        console.log("Tu as créé une erreur. Recommence avant que j'appelle mon grand frêre, il va te faire la tête au carré");
    }
    if (current === min){
        console.log(current + " est égal au minimum");
    }
    if (current === max){
        console.log(current + " est égal au maximum");
    }

