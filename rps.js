let playerWin = 0
let comWin = 0

function getHumanChoice() {
    let select = prompt('Chose Rock Paper or Scissors')
    firstlet = select.charAt(0)
    capfirst = firstlet.toUpperCase()
    rest = select.slice(1)
    goodword = (capfirst + rest)
    //console.log(goodword)

    if ((goodword == 'Rock') ||( goodword == 'Paper') || (goodword == 'Scissors')) {
        return goodword
    } else {
        alert('Not a valid choice') 
    }

}


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




function playRound() {

    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(1, 3);

    console.log(humanSelection)
    console.log(computerSelection)

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

console.log(`Human has won ${playerWin} times`)
console.log(`Computer has won ${comWin} times`)
