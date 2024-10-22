let compScore = 0;
        let playerScore = 0;
        let winningScore = 5;


        function getRandomInt(max)
        {
            return Math.floor(Math.random() * max);
        }
        function getComputerChoice()
        {
            let choice = getRandomInt(3);
            let output = "NA"
            if (choice == 0) {output = "rock";}
            if (choice == 1) {output = "paper";}
            if (choice == 2) {output = "scissors";}
            
            return output;
        }

        function getHumanChoice()
        {
            let output = "";
            do
            {
                output = prompt("Would you like to choose Rock, Paper or scissors?");
                output = output.toLowerCase()
            } while (output !== "rock" && output !== "paper" && output !== "scissors");
            return output;
        }

        function PlayRound(compChoice = getComputerChoice(), humanChoice = getHumanChoice())
        {
            console.log("Your choice was " + humanChoice + "     The computers choice was " + compChoice)
            if (humanChoice == compChoice) {console.log("Tie, no points added")}
            if (compChoice == "rock" && humanChoice != compChoice) 
            {
                if (humanChoice == "paper") {console.log("Human wins, 1 point added"); playerScore++;}
                if (humanChoice == "scissors") {console.log("Computer wins, 1 point added"); compScore++;}
            }
            if (compChoice == "paper" && humanChoice != compChoice) 
            {
                if (humanChoice == "scissors") {console.log("Human wins, 1 point added"); playerScore++;}
                if (humanChoice == "rock") {console.log("Computer wins, 1 point added"); compScore++;}
            }
            if (compChoice == "scissors" && humanChoice != compChoice) 
            {
                if (humanChoice == "rock") {console.log("Human wins, 1 point added"); playerScore++;}
                if (humanChoice == "paper") {console.log("Computer wins, 1 point added"); compScore++;}
            }
        }

        function playgame()
        {
            do
            {
                
                PlayRound();
                if (playerScore == winningScore) {console.log("The player has won!!!")}
                if (compScore == winningScore) {console.log("The computer has won!!!")}
                
                
            } while (playerScore < winningScore && compScore < winningScore)
        }

        

        playgame();