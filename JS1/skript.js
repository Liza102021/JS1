console.log("Задание 1");
var i;
for (i=0; i<=10; i++){
    if (i%2==0)
    console.log(i + " ");
}

var i, sum;
console.log("Задание 2")
i=1;
sum=0;
while(sum<10){
    if(i%2==0){
        console.log(i);
        sum++;
    }
    i++;
}

var userPass = '';
var currentPass = '.';
console.log("Задание 3")
do {
    userPass = prompt("Введите пароль");
} 
while (userPass != currentPass);
console.log("Вы авторизованы");


console.log("Задание 4");
var a;
for (a=0; a<=10; a++){
    if (a%2==0)
    console.log(a + " ");
}

console.log("Задание 5")
var c =1
let q = prompt("Введите число:");
do {
    console.log("*");
    c++;
} while (c<=q);