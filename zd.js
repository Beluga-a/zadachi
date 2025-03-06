//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~1задание~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// const users = [
//     { username: 'David', status: 'online', lastActivity: 10 },
//     { username: 'Lucy', status: 'offline', lastActivity: 22 },
//     { username: 'Bob', status: 'online', lastActivity: 104 }
// ];

// const onlineUsers = users.filter(user => user.status === 'online');

// const usersOnlineNames = onlineUsers.map(user => user.username).join(', ');

// alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~2задание~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// function giveTalonsInOrder(patients, orders) {
//     // Создаем объект, где ключ - id пациента, а значение - объект пациента
//     const patientsMap = patients.reduce((acc, patient) => {
//         acc[patient.id] = patient;
//         return acc;
//     }, {});

//     // Сортируем пациентов в порядке, указанном в orders
//     return orders.map(id => patientsMap[id]);
// }

// const ordersArr = [4, 2, 1, 3];
// const people = [
//     { id: 1, name: "Максим" },
//     { id: 2, name: "Николай" },
//     { id: 3, name: "Ангелина" },
//     { id: 4, name: "Виталий" },
// ];

// const result = giveTalonsInOrder(people, ordersArr);
// console.log('result', result);



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~3задание~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


// function handleObject(obj, key, action) {
//     if (action === 'get') {
//         return obj[key];
//     } else if (action === 'add') {
//         obj[key] = '';
//         return obj;
//     } else if (action === 'delete') {
//         delete obj[key];
//         return obj;
//     } 
//     return obj;
// }

// const student = {
//     name: 'Maxim',
//     programmingLanguage: 'JavaScript',
// };

// const result = handleObject(student, 'programmingLanguage', 'delete');
// console.log('result', result);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~4задание~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//



// function giveJobToStudent(student, jobName) {
//     const updatedStudent = { ...student, job: jobName };

//     alert(`Поздравляем! У студента ${updatedStudent.fullName} появилась новая работа! Теперь он ${updatedStudent.job}`);

//     return updatedStudent;
// }

// const student = {
//     fullName: 'Максим',
//     experienceInMonths: 12,
//     stack: ['HTML', 'CSS', 'JavaScript', 'React'],
// };

// const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
// console.log('updatedStudent', updatedStudent);

