//misson
let title = "Второй урок";
console.log(typeof title); //Вывести в консоль тип данных значений переменной title

let screens = "Простые, Сложные, Интерактивные"
console.log(screens.length);   //Вывести в консоль длину строки из переменной screens
//Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(screens.toLowerCase().split())  

let screenPrice = 24;
//Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани”
console.log("Стоимость верстки экранов " + screenPrice + " рублей/долларов/гривен/юани")  //предложение

let rollback  = 20;    

let fullPrice = 50000;
console.log(typeof fullPrice); //Вывести в консоль тип данных значений переменной fullPrice
//Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”
console.log("Стоимость разработки сайта " + fullPrice + " рублей/долларов/гривен/юани") //предложение

let adaptive = true;     
console.log(typeof adaptive);  //Вывести в консоль тип данных значений переменной adaptive

//Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
const result = "Процент отката посреднику за работу " + fullPrice *(rollback / 100)
console.log(result);


