Jogo MATA AS MOSCAS

Jogo de browser, desenvolvido por Gabriel Alencar nas suas aulas do curso de Desenvolvimento Web 2022 - Udemy.

Aqui constarão todo o desenvolvimento por escrito do jogo, assim como os comentários do desenvolvedor do game.

O jogo é um exercício de aprendizado de JS do curso de Desenvolvimento WEB na Udemy.

O objetivo do jogo é matar as moscas que aparecem na tela o mais rápido possível, basta apenas clicar com o mouse em cima das moscas. As moscas são geradas em posições randômicas na tela. O jogo conta com 3 níveis de dificuldade, quanto maior o nível mais rápido as moscas aparecem e desaparecem na tela.

Abaixo está o passo a passo do desenvolvimento do jogo.

----------------------------------------------------------------------------------------------------------
Primeiro temos que DETERMINAR O TAMANHO DA ÁREA DE VISUALIZAÇÃO DO USUÁRIO PARA O JOGO NÃO GERAR POSIÇÕES RANDÔMICAS FORA DESSA ÁREA.
Para isso devemos recuperar a largura e altura da área de visualização do usuário (body) para que as posições randômicas não sejam geradas fora dessa área.


        var altura 
        var largura

        function refreshScreenGame(){
            altura = window.innerHeight //Recupera a altura do browser e atribui a variável altura
            largura = window.innerWidth //Recupera a largura do browser e atribui a variável largura
        }

No body, basta adicionar o atributo: onresize="refreshScreenGame()". Toda vez que tela é redimensionada a função é executada, resgatando os valores das dimensões da tela.

----------------------------------------------------------------------------------------------------------