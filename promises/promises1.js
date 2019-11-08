// function falarDepoisDe(segundos, frase){
//     return new Promise((resolve, reject) => {
//         if (segundos > 10){
//             reject("Muito tempo para esperar")
//         }
//         setTimeout(() => {
//             resolve(frase)
//         }, segundos * 1000)
//     })
// }

// falarDepoisDe(11, "Hm, esperei para falar").then(frase => console.log(`${frase} - vim da promise`)).catch(e => console.log(e))

function assarPizza(segundos){ 
    return new Promise((resolve, reject) => {
        if(segundos > 15){
            reject("A pizza queimou")
        }
        setTimeout(()=>{
            resolve("Pizza pronta, nham")
        }, segundos * 1000)
    })
}

function irPraCasaDosAmigos() {
    cheguei = true;
    return cheguei
}
function comprarEmOutroLugar(){
    console.log("To sem comida, não dá pra ir sem nada")
}

assarPizza(10).then(resposta => irPraCasaDosAmigos()).then( respostaDosAmigos => console.log(`${respostaDosAmigos ? "Vamos chamar o uber" : "Calmae, já to chegnado"}`)).catch(erro => comprarEmOutroLugar())
let condicao = false
console.log(`${ condicao ? 'Verdade' : 'Mentira'}`)