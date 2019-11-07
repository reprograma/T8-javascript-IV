# T8-javascript-IV
Turma 8 | Front-end | 2019 | Semana 13 | Javascript IV

> Nessa semana revisaremos o conteúdo de javascript pré react.

---

### [Aula 1](#aula-1)
#### Resumo
Nessa aula vimos:
* [Git-flow](#git-flow)
* [Array](#array)
* [Try e Catch](#try-e-catch)
* [Exercícios](#exercicios)
* [Conteúdo para estudo](#conteúdo-para-estudo)

### [Aula 2](#aula-2)
#### Resumo
Nessa aula vimos:
* [Object](#object)
* [Exercícios 2](#exercicios-2)

## Aula 1
#### Git flow
É um dos modelos existentes para organizar branches.
Tendo como principio: 
- Branch master -> Onde temos o código de produção, com a versão mais estável
- Branch develop -> Código em teste, sendo a etapa pré produção, só mandando para a master quando estiver estável.
- Branch feature/funcionalidade -> Criadas a partir da develop, são branches criadas com o objetivo de entregar 'tarefas', como por exemplo uma branch em que você mexe só no menu.
- Branch hotfix -> Branches para correção de bugs críticos
- Branch release -> branch para lançamento de código na master, essas duas costumam gerar tags.

![Imagem explicativa sobre cada número de uma tag](images/tag.png)
O primeiro número da esquerda para a direita são mudanças grandes que podem pedir que sistemas dependentes se atualizem, sendo a major version, o segundo é a minor, que são modificações que ainda suportam o código antigo e o terceiro é a minor que são correção de bugs

Em aula executamos a criação da develop e fizemos a branch da aula como se fosse uma feature branch, além de solicitar um Pull Request(PR)

```
git clone {repo-novo}
```
Vocês criaram um repositorio no github com a opção de README.md e clonaram. Depois adicionaram um remote desse reposito da reprograma para pegar os arquivos de exercícios:
```
git remote add upstream https://github.com/reprograma/T8-javascript-IV.git
git fetch --all
```
Para vermos se o remote está correto fazemos: 
```
git remote -v
```
![Aqui é listado quais repositorios online nosso repositorio local está observando](images/remote.png)

Caso queira mudar o repositorio de algum dos remotes é só fazer
```
git remote set-url ${nome dado ao remote} ${url de clone}
```
No nosso caso os valores aceitos para ${nome dado ao remote} são `origin` e `upstream` 

Para criar a develop local e depois mandar para o repositorio online fazemos:
```
git checkout -b develop origin/master
git push origin develop
git branch -a //para listar
```
Para criar a feature branch local e depois mandar para o repositorio online fazemos:
```
git checkout -b aula1 origin/develop
git commit -m "[Aula1] Revisão Array e Object" --allow-empty
git push origin aula1 
```
Para pegar arquivos que estão no repositorio da reprograma:
```
git merge upstream/aula1 --allow-unrelated-histories 
```
E resolver os conflitos.
Durante as aulas fomos atualizando nosso remoto com
```
git add .
git commit -m "${informação sobre o andamento da aula}"
git push origin aula1
```
E ao final fizemos o processo de Pull Request pelo github
![Github pull request](images/pull-request.png)

#### Array
- Utilizamos como base dois repositorios da Reprograma para essa revisão: 
- [Reprograma T7 - Javascript III por Bruna Vieira](https://github.com/reprograma/T7-JavaScript-III)
- [Reprograma T7 - Javascript IV por Laís Lima](https://github.com/reprograma/t7-javascript-IV/tree/master/aula01-arrays)

**Principais Métodos**
* [**concat**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) faz cópia simples do Array e adiciona os argumentos 
* [**join**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) cria um string do Array. Adiciona o argumento como cola entre cada membro do Array. 
* [**shift**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) remove e retorna o primeiro elemento 
* [**pop**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) remove e retorna o ultimo elemento 
* [**unshift**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) anexa os argumentos na frente do Array  
* [**push**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) anexa os argumentos no final do Array  
* [**reverse**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) inverte o Array sem copiá-lo 
* [**slice**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) faz cópia simples da porção do Array delimitada por argumentos do índice 
* [**splice**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) remove elementos especificados do Array, e os substitui com argumentos adicionais opcionais 
* [**sort**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) classifica o Array sem copiá-lo, opcionalmente usando um argumento comparador 
* [**toString**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) chama join sem passar um argumento
* [**indexOf**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) retorna o primeiro elemento igual ao valor especificado, ou -1 *se nenhum for encontrado 
* [**lastIndexOf**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) retorna o último elemento igual ao valor especificado, ou -1 se nenhum for encontrado 
* [**forEach**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) aplica a função fornecida para todos elementos do Array
* [**map**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) cria um novo Array contendo os resultados da aplicação da função a todos elementos do Array 
* [**filter**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) cria um novo Array contendo todos os elementos para os quais a função fornecida retorna verdadeiro 
* [**reduce**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) aplica uma função simultaneamente para dois valores do Array (da esquerda para a direita) de forma a reduzi-los a um valor único
* [**some**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) Checa se pelo menos um dos elementos do array obedece a condição passada pela função
* [**every**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) Checa se todos os elementos do array obedecem a condição passada pela função 

#### Try e Catch
- [Documentação mozilla sobre try e catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)
```
try{
    //Aqui vai a tentativa 
}catch(e){
    //Aqui vai o tratamento de quando dá erro.
}
```
Podemos estilizar o erro e lançar exceções utilizando `throw`
```
try{
    if(deuCerto){
        console.log("EBA")
    }else{
        throw "Deu ruim :( a requisição falhou"
    }
}catch(e){  
    console.log(`Tivemos um erro: ${e}`)
}
```
Veja um exemplo de como aplicar no [Exercicio2](array/ex2)

#### Exercicios
- [Exercicio1](array/ex1)
- [Exercicio2](array/ex2)

#### Conteúdo para estudo
- [Documentação mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)
- [Git flow - github](https://datasift.github.io/gitflow/IntroducingGitFlow.html)
- [Git flow - gitlab](https://docs.gitlab.com/ee/workflow/gitlab_flow.html)
- [Git flow - bitbucket](https://br.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

## Aula 2
#### Object
Nessa aula tivemos:
 - [Revisão](#revisão)
 - [Orientação a objetos](#orientação-a-objetos)
 - [Função construtora e Classes](#função-contrutora-e-classes)
 - [Exercícios](#exercicios-2)

##### Revisão
Podemos obter objetos das seguintes formas: 
```
const object = new Object()
```
Podendo declarar também como
```
object.property = "algum valor"
```
Ou também por notação literal:
```
const object2 = {
    property: 1,
    property2: 'valor'
}
```
**Principais Métodos**
Object.
* [**keys**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) retorna um array de propriedades enumeraveis de um determinado objeto. 
* [**values**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values) retorna um array com os valores das propriedades de um dado objeto
* [**entries**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) retorna uma array dos próprios pares  [key, value] enumeráveis de um dado objeto
* [**defineProperty**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade já existente em um objeto, e retorna o objeto
* [**preventExtensions**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) impede que novas propriedades sejam adicionadas a um objeto (isto é, impede futuras extensões ao objeto).
* [**seal**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) sela um Objeto, evitando que novas propriedades sejam adicionadas à ele e marcando todas as propriedades existentes como não configuráveis. Valores das propriedades atuais ainda podem ser alterados desde que essas propriedades sejam graváveis (writable).
* [**freeze**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) congela um objeto: isto é, impede que novas propriedades sejam adicionadas a ele; impede que as propriedades existentes sejam removidas; e impede que propriedades existentes, ou sua inumerabilidade, configurabilidade, ou capacidade de escrita sejam alteradas. Em essência o objeto é efetivamente imutável. O método retorna o objeto congelado.

##### Orientação a objetos
- Utilizamos como base dois repositorios da Reprograma para essa revisão: 
- [Reprograma T7 - Javascript III por Bruna Vieira](https://github.com/reprograma/T7-JavaScript-III)
- [Reprograma T7 - Javascript IV por Laís Lima](https://github.com/reprograma/t7-javascript-IV/tree/master/aula02-orientacao-a-objetos)
- Também utilizamos [documentação mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)

Javascript é uma linguagem multiparadigma, podendo ser orientada a objeto. Nessa semana passamos pelos principais conceitos:
- Abstração: 
    Formar com que um objeto reflita um modelo da realidade
- Encapsulamento:
    Uma maneira de agrupar os dados e os métodos que usam os dados.
- Herança
    Uma classe pode herdar características de outra classe.
- Polimorfismo
    Diferentes classes podem definir o mesmo método ou propriedade.
- Classe
    Define as características do objeto. Uma classe é uma definição modelo das propriedades e métodos de um objeto.
- Objeto
    Um exemplar de uma classe.
- Atributo
    Uma característica do objeto, como cor, modelo, fabricante se estivemos representando um veículo, por exemplo.
- Método
    Uma ação do objeto, como ligar, desligar, frear se estivemos representando um veículo, por exemplo. É uma subrotina ou função associada a uma classe.

##### Função construtora e Classes
```
function Crianca(nome, idade, altura){
    this.nome = nome
    this.idade = idade
    this.altura = altura
    this.podeBrincar = () => {
        return (altura > 1)
    }
}
```
```
class Crianca{
    constructor(nome, idade, altura){
        this.nome = nome
        this.idade = idade
        this.altura = altura
    }
    podeBrincar() {
        return (this.altura > 1)
    }
}
```
[Função construtora vs classes](https://pt.stackoverflow.com/questions/360919/classes-vs-fun%C3%A7%C3%B5es-construtoras-fun%C3%A7%C3%B5es-f%C3%A1brica)

##### Exercícios
- [Exercicio1](objects/ex1)
- [Exercicio2](objects/ex2)
- [Exercicio3](objects/ex3)
- [Exercicio3-componente-geral](objects/ex3-componente-geral)
  > Nesse último exercício vimos como utilizar o componente de forma geral e apenas renderizá-lo chamando pela main, porque aí conseguimos decidir em qual div/tag queremos colocar.

##### Material extra
[slides adicionais da T7-Javascript-IV](https://docs.google.com/presentation/d/1Gkfxzmm3NjleJwvB4yC9k7C_TPa9HloIy0pRO4tLDD0/edit?usp=sharing)