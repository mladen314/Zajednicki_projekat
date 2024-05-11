document.getElementById('saberi').addEventListener('click', function() {
    izracunaj('+');
});

document.getElementById('oduzmi').addEventListener('click', function() {
    izracunaj('-');
});

document.getElementById('pomnozi').addEventListener('click', function() {
    izracunaj('*');
});

document.getElementById('podijeli').addEventListener('click', function() {
    izracunaj('/');
});

function izracunaj(operator) { // do sad smo koristili let za deklarisanje promjenljive
    var broj1 = parseFloat(document.getElementById('broj1').value);
    var broj2 = parseFloat(document.getElementById('broj2').value);
    var rezultatElement = document.getElementById('rezultat');
    var rezultat;

    switch (operator) {
        case '+':
            rezultat = broj1 + broj2;
            break;
        case '-':
            rezultat = broj1 - broj2;
            break;
        case '*':
            rezultat = broj1 * broj2;
            break;
        case '/':
            if(broj2==0){
                rezultat = "Ne moze se dijeliti sa nulom!"
            }
            else{
                rezultat = broj1/broj2;

            }
            break;
        default:
            rezultat = "Nepoznat operator";
    }

<<<<<<< Updated upstream

    display () {
        question_field.innerHTML = this.question
        for (let i = 0; i < this.answers.length; i += 1) {
            answer_buttons[i].innerHTML = this.answers[i]
        }
    }
}
let current_question
let correct_answers_given
let total_answers_given
start_button.addEventListener('click', function() {
    container_main.style.display = 'flex'
    container_start.style.display = 'none'
    current_question = new Question()
    current_question.display()


    correct_answers_given = 0
    total_answers_given = 0


    setTimeout(function() {
        let new_cookie = `numbers_high_score=${total_answers_given}/${correct_answers_given}; max-age=10000000000`
        document.cookie = new_cookie
        
container_main.style.display = 'none'
container_start.style.display = 'flex'
container_start_h3.innerHTML = `<h3>You have given ${correct_answers_given} correct answers out of ${total_answers_given}. Accuracy is ${Math.round(correct_answers_given * 100 / total_answers_given)}%.</h3>`
    }, 10000)
})
for (let i = 0; i < answer_buttons.length; i += 1) {
    answer_buttons[i].addEventListener('click', function() {
        if (answer_buttons[i].innerHTML == current_question.correct) {
            correct_answers_given += 1
            answer_buttons[i].style.background = '#00FF00'
            anime({
                targets: answer_buttons[i],
                background: '#FFFFFF',
                duration: 500,
                delay: 100,
                easing: 'linear'
            })
        } else {
            answer_buttons[i].style.background = '#FF0000'
            anime({
                targets: answer_buttons[i],
                background: '#FFFFFF',
                duration: 500,
                delay: 100,
                easing: 'linear'
            })
        }
        total_answers_given += 1


        current_question = new Question()
        current_question.display()
    })
}

let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('calculator-display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('calculator-display').value = '';
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('calculator-display').value = displayValue;
    } catch (error) {
        document.getElementById('calculator-display').value = 'Error';
    }
}

=======
    rezultatElement.textContent = rezultat;
}
>>>>>>> Stashed changes
