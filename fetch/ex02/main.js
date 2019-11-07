const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
//... continuem a pegar os inputs do index.html para preencher depois com o valor da api

cepInput.addEventListener("blur", ()=>{
    if(cepInput.input){
        fetch(`https://viacep.com.br/ws/${cepInput.value}/json`).then(response => {
            return response.json()
        }).then(json => {
            ///façam aparecer os valores nos inputs

        })
    }
})