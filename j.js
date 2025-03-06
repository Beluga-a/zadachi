//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~1задание~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/*function getName1(name) {
    return `Вы зарегистрировались как ${name}`;
}

const getName2 = function(name) {
    return `Вы зарегистрировались как ${name}`;
};

const getName3 = (name) => `Вы зарегистрировались как ${name}`;

console.log(getName1("Алексей"));
console.log(getName2("Мария"));
console.log(getName3("Иван"));*/
    

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~2задание~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//



/*function getSumOfNumbers(number, type = 'odd') {
    let sum = 0;

    for (let i = 0; i <= number; i++) {
        if (type === 'odd' && i % 2 !== 0) {
            sum += i;
        } else if (type === 'even' && i % 2 === 0) {
            sum += i;
        } else if (type === '') {
            sum += i;
        }
    }

    return sum;
}

console.log(getSumOfNumbers(10, 'odd'));
console.log(getSumOfNumbers(10, 'even'));
console.log(getSumOfNumbers(10, ''));*/



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~3задание~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//



/*function getDivisorsCount(number = 1) {
    if (!Number.isInteger(number) || number <= 0) {
        alert("number должен быть целым числом и больше нуля!");
        return;
    }

    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }

    return count;
}

console.log(getDivisorsCount(4));
console.log(getDivisorsCount(5));
console.log(getDivisorsCount(12));*/


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~4задание~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


/*const checkQuestionAnswer = (question, correctAnswer) => {
    const userAnswer = prompt(question).trim().toLowerCase();
    if (userAnswer === correctAnswer.toLowerCase()) {
        console.log("Ответ верный!");
    } else {
        console.log("Ответ неверный!");
    }
};

checkQuestionAnswer("Поедишь в Казахстан?", "Да");
checkQuestionAnswer("Что будет если негров напоить негров", "Они вырастут");
checkQuestionAnswer("Сколько надо денег чтоб выкупить планету", "не знаю");*/