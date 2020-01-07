class Navbar{
    render() {
        const nav = `<img class="navbar__logo" src="./imgs/logo.png" alt="Logo" />
        <div class="group__input">
            <input class="input__search" onKeyUp="limpar(this.value)" type="search" placeholder="Search" aria-label="Search">
            <button class="button__search" onclick="searchPorBotao()"> Search </button>
        </div>`
        document.querySelector('.navbar').innerHTML = nav   
    }
}