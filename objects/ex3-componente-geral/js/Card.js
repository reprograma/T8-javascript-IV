class Card{
    constructor(receita){
        this.receita = receita 
    }
    render(){ 
        const {
            imagem,
            titulo,
            ingredientes
        } = this.receita
        return `<div class="card">
            <img class="imagem" src="${imagem}" />
            <h2>${titulo}</h2>
            <p class="ingredientes">${ingredientes}</p>
        </div>`
    }
}

