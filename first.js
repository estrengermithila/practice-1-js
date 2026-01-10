// console.log(22)

// let number = 0
// if(number%2===0){
//     console.log("number is even")
// }
// else if(number===0){
//     console.log("It is a initial nmbr")
// }
// else{
//     console.log("mumber is odd")
// }

// let age = 20

// if(age>=18){
//     console.log("Adult")
// }
// else{
//     console.log("Minor")
// }

// let name = "h";

// if(name===""){
//     console.log("Name's field is empty")
// }
// else{
//     console.log("Names's field is fill up")
// }

// for(let i =1;i<=5;i++){
//     console.log("The numbers are",i)
// }
// let names = ["Asha", "Mina", "Rina"];
// for(let n of names){
//     console.log(n)
// }
// for(let i =0;i<names.length;i++){
//     console.log(i)
//     console.log(names[i])
// }

// let totalAmount = 1500;
// let discount = 0;
// if(totalAmount>1000){
//     discount=totalAmount* 0.10
//     console.log("Discount",discount)
// } 

// let initialAmount = totalAmount-discount
// console.log("Final price",initialAmount)

// let isStudent = true
// if(isStudent){
//     console.log("U have to give 50 tk")
// }
// else{
//     console.log("u have to give 100 tk")
// }

// let prices = [100, 200, 150];
// let sum = 0
// for(let n of prices){
//     console.log(n)
//     sum+=n
//     console.log("the sum of each loop",sum)
// }
// console.log("Total sum", sum)

// let age = 65
// if(age>60){
//     console.log("Senior Citizen")
// }
// else{
//     console.log("Normal")
// }

// let password = ""
// if(password===""){
//     console.log("Password is correct")
// }

// else{
//     console.log("password is incorrect")
// }

// let numbers = [10, 45, 23, 90, 34,670];

// let max = [0]
// for(let n of numbers){
//     if(n>max){
//         max=n
//         console.log("The max number of each loop",max)
//     }
// }

// console.log("The Total Max Is",max)


// let nums = [2, 5, 8, 11, 14];
// let sum = 0
// for(let n of nums){
//     if(n%2===0){
//         //sum+=n
//         sum++
//     }
// }

// console.log("The sum of total number is",sum)

// let number = [300, 50, 120]
// let min =number[0]
// let max = number[0]

// for(let n of number){
//     if(n<max){
//         max=n
//     }
// }

// console.log("The min number is",max)

// let numbers = [10, 45, 23, 90, 34,670];
// let min = numbers[0]
// // let max = [0]
// for(let n of numbers){
//     console.log(n)
//     if(n<min){
//         min = n
//     }
// }

// console.log("total min is",min)

// let text = "javascript";
// let count = 0;
// for(let n of text){
//     console.log(n)
//     count++
// }
// console.log("Total character is",count)

// let nums = [1, 2, 3, 4, 5, 6];
// let even =[]
// let odd=[]

// for(let n of nums){
//     if(n%2===0){
//         even.push(n)
//         console.log("Even Number",n)
//     }
//     else{
//         odd.push(n)
//         console.log("Odd number",n)
//     }
// }
// console.log("The Even Number",even)
// console.log("The Odd Number",odd)


// let arr = [1, 3, 5, 3, 7];
// let hasDuplicate = false;

// for(let i=0 ; i<arr.length;i++){
//     for(let j = i+1;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//             hasDuplicate=true
//         }
//     }
// }

// console.log("Has Duplicate",hasDuplicate)

// let text = "javascript";
// let vowels = "aeiou";
// let count = 0;

// for(let n of text){
//     if(vowels.includes(n)){
//         console.log(n)
//         count++
//     }
// }

// console.log(count)

// let sentence = "I love JavaScript";
// let words = sentence.split(" ");
// console.log(words.length);

let orangePrice = 20
let chocolateOrice = 0.5
let applePrice = parseInt('20')

console.log(orangePrice+applePrice)
console.log(orangePrice+chocolateOrice)