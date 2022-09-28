//list possible choices//
const choices = ["Rock", "Paper", "Scissors"];

//create button queries//
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const userScoreSpan = document.querySelector('.user_score')
const cpuScoreSpan = document.querySelector('.cpu_score')

//create scores for user and cpu//
let user_Score = 0
let cpu_Score = 0

//make a function that gets and returns cpu choice//
function get_computer_choice() {
    let cpu_choice = Math.floor(Math.random() * choices.length);
    return choices[cpu_choice].toLowerCase();
}


//make a function that keeps a running score total//
function keep_score(user_Score, cpu_Score) {
    userScoreSpan.innerText = `User Score: ${user_Score}`
    cpuScoreSpan.innerText = `CPU Score: ${cpu_Score}`
}

//make a function that plays a round and compares the choices//
// function get_user_choice() {
//     return prompt('Which do you choose? Rock, Paper, or Scissors?').toLowerCase()
// }


let game_over = false;
let user_choice
let cpu_choice

//compare choices and declare winner//
function declare_winner(user_choice, cpu_choice) {
    // console.log(`You chose ${user_choice}!`)
    // console.log(`The computer chose ${cpu_choice}!`)
    const p = document.createElement('p')
    p.innerText = `You chose ${user_choice}!`
    outcomeDiv.append(p)
    const p2 = document.createElement('p')
    p2.innerText = `Cpu chose ${cpu_choice}!`
    outcomeDiv.append(p2)

    //make win events for user//
    if (user_choice == cpu_choice) {
        const p = document.createElement('p')
        p.innerText = 'It\'s a draw!'
        outcomeDiv.appendChild(p)
    }
    else if (user_choice == "rock" && cpu_choice == "scissors") {
        const p = document.createElement('p')
        p.innerText = 'You Win!'
        outcomeDiv.appendChild(p)
        user_Score += 1
    }
    else if (user_choice == "paper" && cpu_choice == "rock") {
        const p = document.createElement('p')
        p.innerText = 'You Win!'
        outcomeDiv.appendChild(p)
        user_Score += 1
    }
    else if (user_choice == "scissors" && cpu_choice == "paper") {
        const p = document.createElement('p')
        p.innerText = 'You Win!'
        outcomeDiv.appendChild(p)
        user_Score += 1
    }
    //make win events for cpu//
    else if (cpu_choice == "paper" && user_choice == "rock") {
        const p = document.createElement('p')
        p.innerText = 'You Lose!'
        outcomeDiv.appendChild(p)
        cpu_Score += 1
    }
    else if (cpu_choice == "rock" && user_choice == "scissors") {
        const p = document.createElement('p')
        p.innerText = 'You Lose!'
        outcomeDiv.appendChild(p)
        cpu_Score += 1

    }
    else if (cpu_choice == "scissors" && user_choice == "paper") {
        const p = document.createElement('p')
        p.innerText = 'You Lose!'
        outcomeDiv.appendChild(p)
        cpu_Score += 1

    }
    else {
        const p = document.createElement('p')
        p.innerText = 'You selected an invalid option!'
        outcomeDiv.appendChild(p)
    }
    // let play_again = prompt('Do you want to play again? Type "Yes" or "No".').toLowerCase()
    // if (play_again == "yes") {
    //     game_over = false;
    // }
    // else {
    //     game_over = true;
    // }


    if (user_Score === 5){
        const h1 = document.createElement('h1')
        h1.innerText = 'YOU BEAT THE CPU!'
        outcomeDiv.append(h1)
        alert ('GAME OVER!')
        user_Score = 0
        cpu_Score = 0
    }
    else if (cpu_Score === 5){
        const h1 = document.createElement('h1')
        h1.innerText = 'YOU LOST TO THE CPU!'
        outcomeDiv.append(h1)
        alert ('GAME OVER!')
        user_Score = 0 
        cpu_Score = 0
    }

}


// while (!game_over) {
//     cpu_choice = get_computer_choice()
//     user_choice = get_user_choice()
//     declare_winner(user_choice, cpu_choice);
// }


//adding UI to the game//
rockButton.addEventListener('click', () => {
    const user_choice = 'rock'
    const cpu_choice = get_computer_choice()
    declare_winner(user_choice, cpu_choice)
    keep_score(user_Score, cpu_Score)
})

paperButton.addEventListener('click', () => {
    const user_choice = 'paper'
    const cpu_choice = get_computer_choice()
    declare_winner(user_choice, cpu_choice)
    keep_score(user_Score, cpu_Score)
})

scissorsButton.addEventListener('click', () => {
    const user_choice = 'scissors'
    const cpu_choice = get_computer_choice()
    declare_winner(user_choice, cpu_choice)
    keep_score(user_Score, cpu_Score)
})