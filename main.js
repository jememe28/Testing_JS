/*
- Вывод в консоль - ( console.log() )
*/

// Вывод оскарбления в консоль :)
console.log("If you read it, you are shit :)") ;

// =========================Переменые=====================//
let LoxName = "Костя" ;
console.log(LoxName + " иди нахуй") ;

//Типы переменных 

//let - может менятся на протяжении выполнения програмы
// С let можно делать так = let name, status, bsrsday = и так далие
LoxName = "Егор" ;
console.log("И ещё, " + LoxName + " ты тоже иди нахуй") ;

//const - не может менятся на протяжении выполнения програмы
const EgorStatus = "Лох" ;

// var - устаревший тип данных и ещё ему похуй на локальный блок кода
var Choto_tam = 1234 ;

// function ( Название функции() ) - как в питоне просто функция
function LoxNames() {
    let Lox1, Lox2 ;
    Lox1 = "Kostia" ;
    Lox2 = "Egor" ;
    console.log(Lox1 + " " + Lox2) ;
} ;
LoxNames() ;

// Блок кода {  } - Локальный блок кода
{
    let LocalTest = "Test" ;
    console.log(LocalTest);
    var LocTest2 = "Nika lox x2" ;
}

console.log(LocTest2) ;

// null - пишится в переменных для её обнуления
let NameTest = "Petia" ;
NameTest = null ;
console.log(NameTest) ;

// typeof - оператор определяющий тип данных в перемнной
const Value = 4123 ;
console.log(typeof Value) ;

/*
Операторы 
==
===
!=
!==
<=
>=
*/

console.log(4 > 5) ;
let Optest = 4 == 0 ;
console.log(Optest) ;

// if (условиу) {дуействие}
// else {} and elxe if () {}

number = 76 ;

if (number == 76) {
    console.log("Work") ;

} else if (number => 76) {
    console.log("WW") ;

} else{
    console.log("It realy work") ;

}

// && - и ; || - или ; !true - логическое не ;
// Тернальный оператор 
100 > 109 ? console.log("True") : console.log("false") ;
let Time = 9 ;
let tertest = Time < 12 ? console.log("Good morning") : console.log("Good day") ;

// Шаблонные строки `Hi ${Название переменной}! How are you?`
const UserNam = "Vova" ;
console.log(`Hi ${UserNam}!`) ;

// DRY - don"t repeat yoroself
// function - как в питоне def
// function decloration
function GoAway(){
    console.log("Иди нахуй сука") ;
}
GoAway() ;

// function expression
// alert - Открывает на сайте окно с текстом
const GoAway2 = function() {
    alert("Сайт в альфа  тесте") ;
}
GoAway2() ;
// Так тоже можно
function FuckAll(Names) {
    console.log(`Fuck you ${Names}! `) ;
    return(Names) ;
}

FuckAll(`Nigga`) ;
FuckAll(`Egor`) ;

// вот для этого нужны скобкт в функции
function  sum(a, b) {
    return a + b ;
}
console.log( sum(13, 12) ) ;

let resaut = sum(15, 40) + sum(80, 15) ;
console.log(resaut) ;

// вызов функции в функции
function fif(func) {
    n1 = 40 ;
    n2 = 90 ;
    console.log(func(n1, n2)) ;
}
fif(sum) ;
fif(min) ;
function min(s, f) {
    return s - f ;
}

// само вызов () В конце для запуска
(function () {
    console.log("Anonim") ;
}) () ;

// стрелочная функция (иногда можно всё вмистить в одну строку)
const ArrF = (Object) => console.log(`${Object} лежит на полу`) ;
// пробел обязателен
ArrF("Govno") ;



