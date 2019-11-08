class Card{
    constructor(card){
        this.card = card
    }
     
    render(){
        const {
            nome,
            imagem,
            tipo,
            descricao,
            link
        } = this.card
        return `
        <div class="content">   
            <h2 class="titulo">${nome}</h2>
            <img class="image" src="${imagem}" />
            <h3 class="tipo">${tipo}</h3>
            <p class="descricao">${descricao}</p>
            <a href="${link}" target="_blank" class="saiba-mais">Saiba mais</a>
        </div>`
    }
}