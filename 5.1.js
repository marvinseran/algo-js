
function askTvSerie(){
    let nom = window.prompt("Nom de la série");
    let year = window.prompt("Année de création");
    let casts = [];
    while(true){
    
    let cast = window.prompt("Acteur. (si vous avez fini écrivez 'fini').");
    if (cast === 'fini'){
        break;
    }
    casts.push(cast);
}
    let serie= {
        nom: nom,
        année: year,
        acteurs: casts
    };
    return serie;
}
console.log(askTvSerie());