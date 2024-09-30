let playerWin = 0
let comWin = 0
let text = ''
let playerChoice = ''
let result = document.querySelector('#result');
let player = document.querySelector('#player');
let com = document.querySelector('#com');
let round = 0
let playerScore = document.querySelector('#pscore')
let comScore = document.querySelector('#cscore')


const buttons = document.querySelectorAll("button");

Scenario = [' Computer Wins', ' Human Wins', " Its a Tie"]


function play() {

    
    const humanSelection = playerChoice
    const computerSelection = comChoice;
    //console.log(humanSelection);
    //console.log(computerSelection);
    
  

    if (round > 0) {
        result.removeChild(text)
        player.removeChild(playerText)
        com.removeChild(comText)
        playerScore.removeChild(playerWinCount)
        comScore.removeChild(comWinCount)
        
    }




    
        if (humanSelection == computerSelection) {
            text = document.createTextNode(Scenario[2]);
            result.appendChild(text)
            round++
        }
    




        //human win
        if ((humanSelection == 'Rock') && (computerSelection == 'Scissors')) {
            text = document.createTextNode(Scenario[1]);
            result.appendChild(text)
            round++
            playerWin++

        } else if ((humanSelection == 'Paper') && (computerSelection == 'Rock')) {
        
            text = document.createTextNode(Scenario[1]);
            result.appendChild(text)
            round++
            playerWin++

        } else if ((humanSelection == 'Scissors') && (computerSelection == 'Paper')) {
        
            text = document.createTextNode(Scenario[1]);
            result.appendChild(text)
            round++
            playerWin++

        }

        //Com win
        if ((computerSelection == 'Rock') && (humanSelection == 'Scissors')) {
            text = document.createTextNode(Scenario[0]);
            result.appendChild(text)
            round++
            comWin++
        } else if ((computerSelection == 'Paper') && (humanSelection == 'Rock')) {
        
            text = document.createTextNode(Scenario[0]);
            result.appendChild(text)
            round++
            comWin++

        } else if ((computerSelection == 'Scissors') && (humanSelection == 'Paper')) {
        
            text = document.createTextNode(Scenario[0]);
            result.appendChild(text)
            round++
            comWin++

        }
    
    if (playerWin == 5 || comWin == 5) {
        result.remove()
        player.remove()
        com.remove()
          
          
        
    }
    
    playerText = document.createTextNode(" " + humanSelection);
    player.appendChild(playerText)

    comText = document.createTextNode(" " + computerSelection);
    com.appendChild(comText)

    playerWinCount = document.createTextNode(" " + playerWin)
    playerScore.appendChild(playerWinCount)

    comWinCount = document.createTextNode(" " + comWin)
    comScore.appendChild(comWinCount)

    //console.log(round)
    console.log(playerWin)



    }



buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerChoice = button.textContent; 
        play();
        getComputerChoice(1, 3); 
    });
});



function getComputerChoice(min, max) {
    comChoice = ''
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    num = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    //console.log(num)

    
    switch (num) {
        case 1:
            comChoice = "Rock"
            break;
            
        
        case 2:
            comChoice = "Paper"
            break;
            
            
        
        case 3:
            comChoice = "Scissors"
            break;
            
    }

    return comChoice
    
}

getComputerChoice(1, 3)

//function winCount {


