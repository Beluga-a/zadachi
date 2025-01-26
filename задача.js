/*const name = 'Максим';
const job = 'Front-End разработчик';
const result1 = name + '' + job;
const result2 = ${name} ${job};*/

/*
const myName = "Костян";
const programmingLanguage = "Js code";
const couserCreatorName = "Nikita Chebotov";
const reasonText = "Мне это нравиТСЯ";
const numberOfMonth = "0";

const okak =
  "Всем привет! Меня зовут, " +
  myName +
  ". Сейчас я изучаю язык програмирование " +
  programmingLanguage +
  " на курсе по " +
  programmingLanguage +
  " у " +
  couserCreatorName;

console.log(okak);

const okaka = `\Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данных курс до конца!`

console.log(okaka);
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~2задание~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//




/*
let myInfoText = 'JavaScript'
myInfoText2 = myInfoText.replaceAll("JavaScript", 'JAVASCRIPT'.toUpperCase())

myInfoTextLenght = myInfoText.length

firstChar = myInfoText.charAt(0)
lastChar = myInfoText.charAt(myInfoTextLenght -1)

console.log(myInfoText2)

console.log(myInfoText[0]);
console.log(myInfoText[myInfoText.length - 1]);
*/



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~3задание~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/*const userName = prompt("Как вас зовут?");
const formattedUserName = userName.trim().toLowerCase();
alert(`Вас зовут ${formattedUserName}`);*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~4задание~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/*
let userName = prompt("Как вас зовут?").trim();

let userAge = prompt("Сколько вам лет?").trim();

userAge = Number(userAge);

if (userName && !isNaN(userAge)) {
    alert(`Вас зовут ${userName} и вам ${userAge} лет`);
} else {
    alert("Некорректный ввод данных");
}  
*/


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~5задание~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


/*let userString = prompt("Введите текст для обрезки").trim();

let startSliceIndex = prompt("Введите индекс, с которого нужно начать обрезку строки").trim();

let endSliceIndex = prompt("Введите индекс, которым нужно закончить обрезку строки").trim();

startSliceIndex = Number(startSliceIndex);
endSliceIndex = Number(endSliceIndex);

if (userString && !isNaN(startSliceIndex) && !isNaN(endSliceIndex)) {
    let resultString = userString.slice(startSliceIndex, endSliceIndex);
    alert(`Результат: ${resultString}`);
} else {
    alert("Некорректный ввод данных");
}*/


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~6задание~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/*let userText = prompt("Введите текст").trim();

let wordsFromText = prompt("Введите слово из текста").trim();

let. indexOfWord = userText.indexOf(wordsFromText);

if (userText && wordsFromText && indexOfWord !== -1) {
    let resultString = userText.slice(0, indexOfWord);
    alert(`Результат: ${resultString}`);
} else {
    alert("Некорректный ввод данных или слово не найдено в тексте");
}*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~6задание~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/*let javaScriptDescription = "JavaScript - мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.";

let midIndex = Math.floor(javaScriptDescription.length / 2);
let slicedString = javaScriptDescription.slice(0, midIndex);

let replacedString = slicedString.replace(/а/g, "А");

let stringWithoutSpaces = replacedString.replace(/\s/g, "");

let tripledString = stringWithoutSpaces.repeat(3);

let middleCharIndex = Math.floor(tripledString.length / 2);
let middleChar = tripledString.charAt(middleCharIndex);

console.log(tripledString);
alert(`Символ в середине строки: ${middleChar}`);*/
