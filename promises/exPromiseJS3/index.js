function criaTexto(texto){
    const div = document.querySelector('#root')
    div.innerHTML += `<h1>${texto}</h1>`
}

const sabao = true
const agua = true

const ensaboar = () => {
    return new Promise((resolve, reject) => {
        if(sabao){
            setTimeout(() => {
                resolve('terminou de ensaboar');
            }, 5000);
        } else {
            reject('não consigo ensaboar')
        }
    })
}

const enxaguar = () => {
    return new Promise((resolve, reject) => {
        if (agua) {
            setTimeout(() => {
                resolve('terminou de enxaguar')
            }, 6000)
        } else {
            reject('não consigo enxaguar')
        }
    })
}

ensaboar().then( res => {
    criaTexto(res)
    return enxaguar()
}).then( res2 => criaTexto(res2)).catch(err => criaTexto(err))

Promise.all([ensaboar(), enxaguar()]).then(resAll => resAll.forEach(resUnica => criaTexto(resUnica))).catch(err => console.log(err))