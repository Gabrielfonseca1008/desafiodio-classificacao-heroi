// Coloque o nome do heróis nas apsas
let heroName = "John Wick, o Babayaga" 
//Nivel de experiência do herói
let xp = 11500
//Classificações de cada nível
let nível = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Mestre", "Imortal", "Radiante"]

if(xp < 1000){
    console.log("O herói de nome " + heroName + " está no nível " + nível[0])  
    }else if(xp >= 1001 && xp <= 2000){
    console.log("O herói de nome " + heroName + " está no nível de " + nível[1])
    }else if(xp >= 2001 && xp <= 3000){
    console.log("O herói de nome " + heroName + " está no nível de " + nível[2])
    }else if(xp >= 3001 && xp <= 4000){
    console.log("O herói de nome " + heroName + " está no nível de " + nível[3])
    }else if(xp >= 4001 && xp <= 5000){
    console.log("O herói de nome " + heroName + " está no nível de " + nível[4])
    }else if(xp >= 5001 && xp <= 6000){
    console.log("O herói de nome " + heroName + " está no nível de " + nível[5])
    }else if(xp >= 6001 && xp <= 7000){
    console.log("O herói de nome " + heroName + " está no nível de " + nível[6])
    }else if(xp >= 7001 && xp <= 8000){
    console.log("O herói de nome " + heroName + " está no nível de " + nível[7])
    }else{
        console.log("O herói de nome " + heroName + " está no nível de " + nível[8])
    }

//Fim do código