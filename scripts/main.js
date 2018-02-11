const hyRPS = {};

hyRPS.getUserChoice = () => {
    const start = document.getElementById('initial-form');
    start.addEventListener('submit', function(){
        event.preventDefault();
        const selected = document.querySelectorAll('input:checked')[0].value;
        if(selected.length){
            hyRPS.evaluateChoices(selected);
        }
    });
}

hyRPS.botChoices = ['rock', 'paper', 'scissors'];

hyRPS.getBotChoice = () => {
    const randomIndex = Math.floor(Math.random() * (hyRPS.botChoices.length));
    return hyRPS.botChoices[randomIndex];
}

hyRPS.evaluateChoices = (selected) => {
    const botChoice = hyRPS.getBotChoice();
    let results = null;

    if(selected === botChoice) {
        results = `It's a tie!`;
    }
    if(selected === 'rock' && botChoice === 'paper') {
        results = `You lose :(`;
    }
    if(selected === 'rock' && botChoice === 'scissors') {
        results = `You win :)`;
    }
    if(selected === 'paper' && botChoice === 'rock') {
        results = `You win :)`;
    }
    if(selected === 'paper' && botChoice === 'scissors') {
        results = `You lose :(`;
    }
    if(selected === 'scissors' && botChoice === 'rock') {
        results = `You lose :(`;
    }
    if(selected === 'scissors' && botChoice === 'paper') {
        results = `You win :)`;
    }
    if(results){
        hyRPS.displayResults(results, selected, botChoice);
    }
}

hyRPS.displayResults = (results, selected, botChoice) => {
    console.log(results, selected, botChoice);
}

(function(){
    console.log('ready');
    hyRPS.getUserChoice();
})();

