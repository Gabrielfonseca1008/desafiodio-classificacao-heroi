// Coloque o nome do heróis nas apsas
let heroName = " John Wick, o Babayaga" 
//Nivel de experiência do herói
let xp = 950

//Classificações de cada nível
let classe = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Mestre", "Imortal", "Radiante"]
//Limites de xp
let niveisXp = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000]

for(let i = 0; i < niveisXp.length; i++){
    if(xp <= niveisXp[i]){
        console.log("O herói de nome " + heroName + "está no nível " + classe[i])
        break
    }else if (xp >= niveisXp[7]){
        console.log("O herói de nome" + heroName + "está no nível " + classe[8])
        break
    }
}

//Fim do código