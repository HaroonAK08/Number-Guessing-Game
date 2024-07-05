let buttons = document.getElementById('button');
// Initialize the counter
let counter = 3;
let score = document.getElementById('scores')



// To Generate Random Number
let secretNumber = Math.trunc(Math.random() * 15) + 1;
console.log(secretNumber);

// For Game Button
buttons.addEventListener('click', () => {
    let input = document.getElementById('input').value;
    document.getElementById('guessNumberAre').innerHTML = `Guessed numbers are: ${input}`;

    // If Input is Empty
    if (!input) {
        document.getElementById('lowHigh').innerHTML = 'Input Empty 😡';
    } else {
        // For Correct Guess & Reset
        if (parseInt(input) === secretNumber) {
            document.getElementById('lowHigh').innerHTML = 'Congratulations 🥳';
            reset();
        } else if (parseInt(input) > secretNumber) { // For Input greater than secret number
            document.getElementById('lowHigh').innerHTML = 'Your guess is too High 👆';
            counter--;
            score.textContent = counter;

        } else if (parseInt(input) < secretNumber) { // For Input lower than secret number
            document.getElementById('lowHigh').innerHTML = 'Your guess is too Low 👇';
            
            counter--;
            score.textContent = counter;
        }
        
        // Decrease the counter

        // Check if counter is zero
        if (counter === 0) {
            document.getElementById('lowHigh').innerHTML = 'Game Over 🤙';
            reset();
        }
    }
});

// Reset function
let reset = () => {
    setTimeout(() => {
        document.getElementById('input').value = '';
        document.getElementById('guessNumberAre').innerHTML = 'Guessed numbers are: ';
        secretNumber = Math.trunc(Math.random() * 15) + 1;
        counter = 3;
        score.textContent = counter;
       
        console.log(secretNumber);
        document.getElementById('lowHigh').innerHTML = 'Try Guess 🤔';
    }, 2000);
};
