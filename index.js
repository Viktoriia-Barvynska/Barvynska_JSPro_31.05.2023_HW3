//=================HW2==================
/*Напишіть скрипт, який рахує кількість секунд за годину.

Запросити у користувача кількість годин
Порахувати скільки секунд у цій кількості годин
Записати обчислене значення у змінну
Вивести цю змінну користувачу в alert
*/


let WhatTimeIsIt = prompt('Яка година?');

let secondsInMinute = 60; 
let minutesInHour = 60; 

let secondsInHour = secondsInMinute * minutesInHour;

console.log(secondsInHour);
let secondsNow = secondsInHour * WhatTimeIsIt;
console.log(secondsNow)

