// Fazer o fetch pra ver se carregamos o array de cartas
const cardSection = document.getElementById('cards-section')
const errorSection = document.getElementById('error')
const loading = document.getElementById('spinner')
// Caso os cards não carreguem, mostraremos isso:
const placeholderCard = {
    nome: "Carta não carregada",
    tipo: "Arcano Maior",
    descricao: "Sem descrição",
    imagem: "http://via.placeholder.com/250X500",
    link: "https://www.astrolink.com.br/"
}

renderizaCarta = carta => {
    const novaCarta = new Card(carta).render()
    cardSection.innerHTML = novaCarta 
    // cardSection.innerHTML = new Card(carta).render()
}

// fetch('tarot.json').then(response => {
//     return response.json()
// }).then(json => {
//     console.log(json)
//     renderizaCarta(selecionaCartaAleatoria(json))
// })

//Fazer função para tirar uma nova carta aleatoria
selecionaCartaAleatoria = cartas => {
    let numeroAletorio = Math.floor(Math.random() * cartas.length)
    return cartas[numeroAletorio]
}

function ativaSpinner(){ 
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("Ativa Spinner")
        }, 3000)
    })
}


//Transformas nosso fetch num async await
async function carregaCartas() {
    errorSection.innerHTML = ""
    loading.style.display = "block"
    try{
        const response = await fetch('tarot.json')
        console.log(response)
        if(!response.ok) throw `com o status: ${response.status}`
        const json = await response.json()
        renderizaCarta(selecionaCartaAleatoria(json))
        const espera = await ativaSpinner()
        console.log(espera)
        loading.style.display = "none"
    }catch(e){
        renderizaCarta(placeholderCard)
        errorSection.innerHTML = `A requisição falhou:  ${e}`
        loading.style.display = "none"
    }
}

carregaCartas()

novaCarta = () => {
    carregaCartas()
}

// Quando não carregar, teremos como expor informações fixas.