
//Write a JS condition statement to find the largest number 
function numbers(){
let nums = [a=10,b=32,c=56,d=45]
if(a>b && a>c && a>d){
    console.log(a);
}
else if (b>a && b>c && b>d)
{
    console.log(b);
}
else if (c>a && c>b && c>d)
{
    console.log(c);
}
else {
    console.log(d)
}
}
numbers()

//Given a range of numbers from 0 to 100, console”Fizz” 
// if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” 
// if divisible by both 3 and 5.
function numDivisible(){
    for(let i=0;i<=100;i++){
        if (i%3===0 && i%5===0){
            console.log("FizzBuzz");
        }else if(i%3===0){
            console.log("Fizz");
        }else if(i%5===0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}
numDivisible()
// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the
// current number is odd or even,
function oddEven(){
    for(let num=0;num<=15;num++){
        if(num===0){
            console.log( num + "its even");
        }else if (num % 2 ===0){
            console.log( num + "its even");
        }else{
            console.log( num + "its odd");
        }
    }
}
oddEven()
//Write a JavaScript program to sum the multiples of 3 and 5 under 1000
// function addition (){
    let sum = 0
    for(let num =1;num<100;num++){
        if(num%3===0 && num%5===0){
            sum += num
        }
        console.log(sum);

    }
// }
// addition()