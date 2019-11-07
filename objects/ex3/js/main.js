let resultados = [
    {
        titulo: "Ginger Champagne",
        ingredientes: "champagne, ginger, ice, vodka",
        imagem: "http://img.recipepuppy.com/1.jpg"
    },
    {
        titulo: "Potato and Cheese Frittata",
        ingredientes: "cheddar cheese, eggs, olive oil, onions, potato, salt",
        imagem: "http://img.recipepuppy.com/2.jpg"
    },
    {
        titulo: "Eggnog Thumbprints",
        ingredientes: "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
        imagem: "http://img.recipepuppy.com/3.jpg"
    },
    {
        titulo: "Succulent Pork Roast",
        ingredientes: "brown sugar, garlic, pork chops, water",
        imagem: "http://img.recipepuppy.com/4.jpg"
    },
    {
        titulo: "Irish Champ",
        ingredientes: "black pepper, butter, green onion, milk, potato, salt",
        imagem: "http://img.recipepuppy.com/5.jpg"
    }
];


const renderNavbar = new Navbar

renderNavbar.render()

resultados.map(receita => {
    new Card(receita).render()
})

document.querySelector('.button__search').addEventListener('click', function(){
    let inputValue = document.querySelector('.input__search').value.toUpperCase()
    let achados = resultados.filter(receita => {
        // o meu inputValue está incluso em alguma parte do título OU dos ingredientes.
        return receita.titulo.toUpperCase().includes(inputValue) || receita.ingredientes.toUpperCase().includes(inputValue)
    })

    document.querySelector('.cards').innerHTML = ""
    achados.map(encontrado => {
        new Card(encontrado).render()
    })
})
