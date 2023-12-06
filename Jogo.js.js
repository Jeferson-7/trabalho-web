const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0                                                   /*variavel */
let machineScoreNumber = 0

const playHuman = (humanChoice) =>{                                       /*pegando a escolha do usuario */
   
playTheGame(humanChoice, playMachine())
}

const playMachine = () => {                                                  /*escolha da maquina */
    const choices = ['rock','paper','scissors']
    const randomNumber = Math.floor(Math.random() * 3)                      /* aredondando meu numero para baixo e jerando numero aleatorio */
    
    return choices[randomNumber]
}

const playTheGame = (human, machine) =>{
    console.log('Humano:' + human + "Maquina:" + machine)

    if(human === machine){
        result.innerHTML = "Deu empate!"
    }else if (
    (human === 'paper' && machine === 'rock') || 
    (human === 'rock' && machine === 'scissors') ||
    (human === 'scissors' && machine === 'paper')
    ){
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "voçê ganhou!"
    }else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "voçê perdeu para a Alexa!"
    }
}