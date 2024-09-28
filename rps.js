let playerWin = 0
let comWin = 0
const buttons = document.querySelectorAll("button");
let playerChoice = ''


function play() {
    const humanSelection = playerChoice
    const computerSelection = comChoice;

    console.log(humanSelection);
    console.log(computerSelection);

    if (humanSelection == computerSelection) {
        console.log ('Tie')
    }
    
    //human win
    if ((humanSelection == 'Rock') && (computerSelection == 'Scissors')) {
        console.log('Human Wins')
        playerWin++
    } else if ((humanSelection == 'Paper') && (computerSelection == 'Rock')) {
        
        console.log('Human Wins')
        playerWin++

    } else if ((humanSelection == 'Scissors') && (computerSelection == 'Paper')) {
        
        console.log('Human Wins')
        playerWin++

    }

     //Com win
    if ((computerSelection == 'Rock') && (humanSelection == 'Scissors')) {
        console.log('Computer Wins')
        comWin++
    } else if ((computerSelection == 'Paper') && (humanSelection == 'Rock')) {
        
        console.log('Computer Wins')
        comWin++

    } else if ((computerSelection == 'Scissors') && (humanSelection == 'Paper')) {
        
        console.log('Computer Wins')
        comWin++

    }

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




