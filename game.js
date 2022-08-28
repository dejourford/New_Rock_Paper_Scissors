//list possible choices//
const choices = ["Rock", "Paper", "Scissors"];

//make a function that gets and returns cpu choice//
function get_computer_choice()
{
let cpu_choice = Math.floor(Math.random() * choices.length);
return choices[cpu_choice].toLowerCase();
}

//make a function that plays a round and compares the choices//
function get_user_choice()
{
return prompt('Which do you choose? Rock, Paper, or Scissors?').toLowerCase()
}


let game_over = false;
let user_choice
let cpu_choice 

//compare choices and declare winner//
function declare_winner(user_choice, cpu_choice)
{
console.log(`The computer chose ${cpu_choice}!`)
console.log(`You chose ${user_choice}!`)

//make win events for user//
if (user_choice == cpu_choice)
{
    console.log('It\'s a draw!')
}
else if (user_choice == "rock" && cpu_choice == "scissors")
{
    console.log('You Win!')
}
else if (user_choice == "paper" && cpu_choice == "rock")
{
    console.log('You Win!')
}
else if (user_choice == "scissors" && cpu_choice == "paper")
{
    console.log('You Win!')
}
//make win events for cpu//
else if (cpu_choice == "paper" && user_choice == "rock")
{
    console.log('You Lose!')
}
else if (cpu_choice == "rock" && user_choice == "scissors")
{
    console.log('You Lose!')
}
else if (cpu_choice == "scissors" && user_choice == "paper")
{
    console.log('You Lose!')
}

let play_again = prompt('Do you want to play again? Type "Yes" or "No".').toLowerCase()
if (play_again == "yes")
{
    game_over = false;
}
else
{
    game_over = true;
}

}


while (!game_over)
{
cpu_choice = get_computer_choice()
user_choice = get_user_choice()
declare_winner(user_choice, cpu_choice);
}
