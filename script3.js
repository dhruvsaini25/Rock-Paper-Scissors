document.addEventListener('DOMContentLoaded', () => {
    const userScoreV = document.getElementById('userscore');
    const aiScoreV = document.getElementById('aiscore');
    const resultV = document.getElementById('myInput');
    const choicesV = document.querySelectorAll('.buttonchoices');
    let userScore = 0;
    let aiScore = 0;

    choicesV.forEach(choice => {
        choice.addEventListener('click', (event) => {
            const userChoice = event.currentTarget.id;
            console.log(`User choice: ${userChoice}`);
            playGame(userChoice);
        });
    });

    function playGame(userChoice) {
        const aiChoice = getAIChoice();
        const winner = determineWinner(userChoice, aiChoice);
        scoreupdate(winner);
        displayResult(userChoice, aiChoice, winner);
    }
    function getAIChoice() {
        const choices = ['r', 'p', 's'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }
    function determineWinner(userChoice, aiChoice) {
        if (userChoice === aiChoice) {
            return 'draw';
        } else if (
            (userChoice === 'r' && aiChoice === 's') ||
            (userChoice === 'p' && aiChoice === 'r') ||
            (userChoice === 's' && aiChoice === 'p')
        ) {
            return 'user';
        } else {
            return 'ai';
        }
    }
    function scoreupdate(winner) {
        if (winner=== 'user') {
            userScore++;
            userScoreV.value = userScore;
        } else if (winner=== 'ai') {
            aiScore++;
            aiScoreV.value = aiScore;
        }
    }



    function displayResult(userChoice, aiChoice, winner) {
        const choicesMap = {
            'r': 'Rock',
            'p': 'Paper',
            's': 'Scissors'
        };

        if (winner === 'draw') {
            resultV.value = `It's a draw! You both chose ${choicesMap[userChoice]}.`;
        } else if (winner === 'user') {
            resultV.value = `You win! ${choicesMap[userChoice]} beats ${choicesMap[aiChoice]}.`;
        } else {
            resultV.value = `You lose! ${choicesMap[aiChoice]} beats ${choicesMap[userChoice]}.`;
        }
    }
});