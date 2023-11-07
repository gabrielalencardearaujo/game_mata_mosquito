let altura;
let largura;
let vidas = 1;
let tempo = 30;
let lvl = 0;

const resize = () => {
    //Resgata as dimensões altura/largura toda vez que a página é redimensionada.
    altura = window.innerHeight
    largura = window.innerWidth
}
resize()

let lvl_choice = window.location.search //Recebe apenas os parametros URL apos o .html?
lvl_choice = lvl_choice.replace('?', '')

if (lvl_choice === 'normal') {
    lvl = 2000
} else if (lvl_choice === 'hard') {
    lvl = 1000
} else if (lvl_choice === 'rambo') {
    lvl = 750
}

//-----------------------------------------------------------------------------------------
//Cronômetro (ESTRUTURA PADRÃO)
let cronometro = setInterval(function () {

    if (tempo == 0 && vidas < 3) {
        window.location.href = 'winner.html' //Redirecional a página para a página de vitória.
    } else {
        tempo--
        document.getElementById('cronometro').innerHTML = tempo //Adicionando o contador ná pagina HTMl via .innerHTML
    }
}, 1000)
//-------------------------------------------------------------------------------------------

//GERANDO AS IMAGENS DAS MOSCAS EM POSIÇÕES RANDÔMICAS
function pos_random() {
    //removendo as moscas caso exista.
    if (document.getElementById('id_mosca')) {
        document.getElementById('id_mosca').remove() //Seleciona o elemento com o id_mosca e o remove.
        if (vidas > 3) {
            window.location.href = 'gameover.html'
        } else {
            document.getElementById('v' + vidas).src = './imagens/coracao_vazio.png'
            vidas++
        }
    }

    let positionX = Math.floor(Math.random() * largura - 100); //Gera um número randômico de 0 a 1 que é multiplicado pela largura da tela
    let positionY = Math.floor(Math.random() * altura - 100);  //Gera um número randômico de 0 a 1 que é multiplicado pela altura da tela

    positionX = positionX < 0 ? 0 : positionX;  //Se positionX for menor que 0 então atibui 0 a positionX, senão atribui ele mesmo.
    positionY = positionY < 0 ? 0 : positionY; //Se positionY for menor que 0 então atibui 0 a positionY, senão atribui ele mesmo.

    let mosca = document.createElement('img') //Criando a tag <img> pelo JS, acessando o DOM. E atribuindo essa criação a uma variável.

    mosca.src = 'imagens/mosca.png' //Acessando o atributo src da variável mosca (que é uma tag HTML) e atribuindo a ela o diretório da imagem.
    mosca.className = randomSizeMosca() + ' ' + randomSide() //Chamando a função size_mosca() para definir o tamanho da img, aleatoriamente.
    mosca.style.left = positionX + 'px' //Modificando o estilo do elemento mosca. 
    mosca.style.top = positionY + 'px'  //Modificando o estilo do elemento mosca. 
    mosca.style.position = 'absolute'  //Para modificar a posição da imagem, ela precisa estar com position: absolute.
    mosca.id = 'id_mosca'  //Adicionando o id mostra para posteriormente podermos remover a mosca para adicionar outra.
    mosca.onclick = function () { //Acessa o atributo onclick do elemento contido em mosca.

        this.remove() //Remove o elemento que está executando esse comando.
    }

    document.body.appendChild(mosca) //Criando um filho dentro do body, este filho é a variável mosca que é uma img definida anteriormente.
}
//-------------------------------------------------------------------------------------------

//Função para gerar tamanhos diferentes da imagem mosquito.
function randomSizeMosca() {
    let size_mosca = Math.floor(Math.random() * 3) //3 tamanhos diferentes.

    switch (size_mosca) { //Sem uso do break, a função ao identificar um return automaticamente retorna seu valor para a chamada da função.
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}

//Função para inverter a imagem da mosca
function randomSide() {
    let side_mosca = Math.floor(Math.random() * 2) //São apenas dois lados. Dois valores: 0 ou 1

    switch (side_mosca) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}

setInterval(function () { pos_random() }, lvl)
