console.log("Print all numbers between -10 and 19");
var num = -10;

while (num < 20) {
    console.log(num);
    num++
};

console.log('Print all even number between 10 and 40');

var number = 10;
while (number <= 40) {
    if(number % 2 ===0)
    console.log(number);
    number++
};

 console.log("Print all odd numbers between 300 and 333")
var oddNum = 300;
 while (oddNum <= 333) {
     if (oddNum % 2  !== 0) 
        console.log(oddNum);
        oddNum++
     
}

 console.log('Print all number divided by 5 and 3 between 5 and 50');

var divisiable = 5;
while (divisiable <= 50) {
     if (divisiable % 3 === 0 && divisiable % 5 === 0) 
         console.log(divisiable);
        divisiable++
    
};