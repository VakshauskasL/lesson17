"use strict"; /*
контролирует ошибки в браузере
 */



/*alert(3+
    1
    + 2);*/

var message; /*переменная+название*/ //undefined
message='Привет';

//alert(message);/*выводит модальное окно*/

var age='20';

var username='Вася',height=200, message2='Привет';

console.log(username + ' ' + height + ' ' + message2);

var hello='Привет Сергей';

var chat;

chat=hello;

console.log(chat);

var SRC_BD='192.11.11.11';

const COLOR='#fff';

//Number


var firstDayLiter=10;

var d=12.123;

/*Infinity -бесконечное значение*/

var num=1 / 0;/*Infinity*/

console.log(num);

//NaN

console.log('sdfsdf'*10);/*текст*число-ошибка*/


//String Строки

var str='Мама мыла раму';

var str2='Текст"sdfsdf"';/*написание правильности текста в кавычках*/

//Булевый boolean-правда и неправда

var ledOn=true;/*не всегда 1, что-то существует */

ledOn=false;

//null -переменная где-то хранится.онопреденный, не хранит ссылку он не undefined

var noIndex = null;

//undefined

var good=undefined;

//object объект

var man={
    nam:'Вася',
    age:30
};

//Оператор type of-возвращает тип данных в переменных

console.log ( typeof(man) );
console.log ( typeof 'fdsfds' );



///Операторы
//Унарный,бинарный,операнд =-термины используются при работе с операторами
//Операнды 10 * 2- то что участвует в операции(Аргументы оператора)
//Знак умножения это оператор

//Унарный оператор применяются к одному операнду
var x = 1;
x = -x;//Унарный минус
console.log(x);

//Бинарные операторы применяются к нескольким двум операндам
var y=1, z=3;

console.log( y - z );

//Сложение строк, бинарный плюс

var a='10'+'10';

console.log(a);

//Преобразование к числу

console.log(+1);

console.log(+(1-2) );

console.log( +'10' + + '10' );

console.log( +a );

//Присваивания

 x= 2 * 2 + 1;

 var a,b,c;

 a = b= c = 2 + 2;

 console.log(a);

 console.log(b);

 console.log(c);

 var a = 1;//3
 var b = 2;
 var c = 3 -(a = b + 1);// 0

 //Взятие остатка или %

 console.log( 5 % 2 );//1
 console.log( 6 % 3 );//0

 //Инкримент , декремент ++ -- можно использовать только к переменным!!!!!!!

 var number=1;
 number ++;
 console.log(number);// 2

 var number=1;
 number --;
 console.log(number);// 0

 //Постфиксная и префиксная форма

 number++; //постфиксная

 ++number; //префиксная

 var i = 1;
 var a = i++;
 console.log(a);//1
 console.log(i);//2

 var i = 1;
 var a = ++i;

 console.log(a); //2
 console.log(1);//2

 var i=0;
 console.log(i++);//0
 //Сокращенная арифметика += -= *= /=  %=

 var i=10;

 i+=3;
 //Оператор запятая (последнее число перед запятой)

 var a=(5, 6,10,5);

 console.log(a);




 











