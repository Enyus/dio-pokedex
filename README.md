# <img src="https://avatars.githubusercontent.com/u/108289642?s=200&v=4" alt="Logo Santander" height=24> Santander Bootcamp DIO <img src="https://avatars.githubusercontent.com/u/26231823?s=200&v=4" alt="Logo DIO" height=24> - Pokedex <img src="./public/favicon64x64.png" height=24>
Este repositório tem o objetivo de guardar o meu código do desafio (lab) do curso "Primeiras Páginas Interativas ocm Javascript" do bootcamp santander Java + Angular, ministrado pela [DIO](https://www.dio.me/).

## ⛳ Sobre o Desafio
O desafio consiste em pegar o código previamente feito em curso, pelo expert [Renan Johannsen](https://github.com/RenanJPaula) e forkado diretamente do repositório [js-developer-pokedex](https://github.com/digitalinnovationone/js-developer-pokedex), e adicionar a feature de mostrar os detalhes do pokemon selecionado.

### ⚙ Sobre o Projeto
<img src="https://cdn.dribbble.com/users/1171520/screenshots/6540871/pokedex2.png" height=350><br>

O intuito final é fazer um aplicativo do tipo Pokedex (cujo design foi pego [deste dribble](https://dribbble.com/shots/6540871-Pokedex-App)), aquele equipamento do anime Pokemon que mostrava as informações de um dos "bichinhos de bolso" até hoje amados por muitos. Para isso, além do HTML, CSS e JS iniciais disponibilizados pelo expert, usou-se a [PokeAPI](https://pokeapi.co/), que apresenta diversas informações sobre pokemons através da url: ```https://pokeapi.co/api/v2/pokemon/<numero do pokemon>```.

Para o meu infortúnio, porém, apenas uma chamada da API não é suficiente para consegur todas as informações para as telas acima (pelo menos não para a aba Evolutions), então tive que recorrer a outros dois endpoints da PokeAPI:
- ```https://pokeapi.co/api/v2/pokemon-species/<numero do pokemon>``` - este endpoint permite consultar a "Evolution Chain" de um determinado pokemon, na verdade, apenas dá a URL de outro endpoint que, este sim, dá as informações das evoluções do pokemon.
- ```https://pokeapi.co/api/v2/evolution-chain/<id da evolution chain>``` - este endpoint, veja que ele não depende do id/numero/nome do pokemon, apresenta os nomes das evoluções do pokemon, se existentes. Com estes, tive que fazer novas chamadas no primeiro endpoint para conseguir a imagem das evoluções.

Como custo disso, além de ter sido consideravelmente difícil conseguir povoar a aba de evoluções (já que o resultado estava vindo antes da resolução da promise, por algum motivo que não descobri), a performance do App está péssima, sendo que muitas vezes as imagens de alguns pokemons na aba de evolução não carregam de jeito nenhum.

## 🛠 Teconologias Utilizadas
![HTML5](https://img.shields.io/badge/HTML5-000?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-000?style=for-the-badge&logo=css3&logoColor=264CE4)
![JavaScript](https://img.shields.io/badge/JavaScript-000?style=for-the-badge&logo=javascript)