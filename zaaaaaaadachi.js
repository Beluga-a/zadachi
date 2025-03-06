//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~1задание~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//




// const addZero = (number) => (number < 10 ? `0${number}` : `${number}`);

// const getDateFormat = (date, separator = '.') => {
//     const day = addZero(date.getDate());
//     const month = addZero(date.getMonth() + 1);
//     const year = date.getFullYear();

//     return `${day}${separator}${month}${separator}${year}`;
// };

// console.log(getDateFormat(new Date()));
// console.log(getDateFormat(new Date(), '-'));


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~2задание~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


// function getDaysBeforeBirthday(nextBirthdayDate) {
//     const today = new Date();
//     let nextBirthday = new Date(today.getFullYear(), nextBirthdayDate.getMonth(), nextBirthdayDate.getDate());

//     if (nextBirthday < today) {
//         nextBirthday.setFullYear(today.getFullYear() + 1);
//     }

//     const diffMs = nextBirthday - today;
    
//     return convertMsToDays(diffMs);
// }

// function convertMsToDays(milliseconds) {
//     return Math.round(milliseconds / (1000 * 60 * 60 * 24));
// }

// const myBirthday = new Date(1995, 6, 15);
// console.log(getDaysBeforeBirthday(myBirthday));



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~3задание~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//    
// я спать ZZZ