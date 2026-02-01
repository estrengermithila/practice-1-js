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

// let orangePrice = 20
// let chocolateOrice = 0.5
// let applePrice = parseInt('20')

// console.log(orangePrice+applePrice)
// console.log(orangePrice+chocolateOrice)

// let marks = [75.25, 65, 80, 35.45, 99.50]
// let max = marks[0]
// let sum = 0
// for(let n of marks){
//     sum+=n
//     console.log("Each sum",sum)
   
// }
// let total = sum/marks.length
// console.log("total max",total.toFixed(2))

// var a = isNaN(‘11’);

// console.log(a)


// let money = 300
// let riceCost = 2.5*80
// let sugarCost = 1.2*60
// let totalCost = riceCost+sugarCost
// console.log(totalCost)
// let finalCost = money-totalCost
// console.log(finalCost)

// let orange = 120
// let money1 = 500
// let totalCost1 = money1-orange
// console.log(totalCost1)

// let items = [
//   {name:"Orange", kg:1, price:120},
//   {name:"Apple", kg:2, price:150}
// ];
// let money = 600
// let totalCost = 0
// for(let n of items){
//     totalCost+=n.kg*n.price
//     console.log("totalcost",totalCost)
// }
// let finalCost = money-totalCost
// console.log("FinalCost",finalCost)


// let numbers = [5, 10, 15, 20, 25];
// let sum = 0

// for(let n of numbers){
//   sum+=n
// }

// console.log(sum)

// let basicSalary =60000
// let allowances = 8000
// let bonus = 0

// if(basicSalary>5000){
//   bonus*=0.10
// }


// function calculateTotal(items,pricePerItem){
//   let total = items * pricePerItem
//   let discount = 0
//   if(items>=5){
//     discount = total *0.10
//   }
//   else if(items>=3){
//     discount = total*0.05
//   }

//   else if(items<3){
//     console.log("no discount")
//   }
// return total - discount
// }
// console.log(calculateTotal(6, 200)); // Output: 1080
// console.log(calculateTotal(4, 150));


// let waterIntake = [250, 300, 200, 400, 350, 300, 250];
// let total = 0;

// for(let n of waterIntake){
//   total+=n
// }

// console.log(total)

// let marks = [55, 38, 70, 29, 40, 88, 33];
// let pass =[]
// let fail = []


// for(let n of marks){
//   if(n>=40){
//     pass.push(n)
//     pass++
//   }
//   else{
//     fail.push(n)
//     fail++
//   }
// }

// console.log(pass)
// console.log(fail)

// let score = parseInt("80");

// if (score > 60) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }


// let attendance = [1, 1, 0, 1, 1, 1];
// let presentDays = 0;

// for(let n of attendance){

// }

// let units = [4, 6, 5, 7, 10, 9];
// let highUsage = false;

// for (let u of units) {
//     if (u > 8) {
//         highUsage = true;
        
//     }
// }

// if (highUsage) {
//     console.log("⚠️ High electricity usage detected");
// } else {
//     console.log("Usage is normal");
// }



// let numbers = [10, 5, 8, 21, 7];
// let max = 0;

// for (let i = 0; i <= numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
// }

// console.log("Maximum number is:", max);


// let temps = [28, 32, 30, 35, 29, 31, 33];
// let max = temps[0]
// let count = 0

// for(let n of temps){
//   if(n>max){
//     max=n
//   }

//   if(n>30){
//     count++
//   }
// }

// console.log(max)
// console.log(count)



//let marks = [40, 50, 60, 70];
// let sum = 0;

// for(let n of marks){
//   sum+=n

// }
// console.log(sum)
// let total = sum/marks.length
// console.log(total)

// let reverse = []

// for(let v of marks){
//   reverse.unshift(v)[0]
// }
// console.log(reverse)


// let fruits = ["apple", "banana", "cherry", "kiwi"];
// let maxLength = 0
// let longestWord =""

// for(let n of fruits){
//   if(n.length>maxLength){
//     maxLength=n.length
//     longestWord=n
//   }
// }

// console.log(longestWord)

// let nums = [12, 7, 9, 20, 5];
// let sum=0
// let evenCount = []
// let oddCount =[]
// for(let n of nums){
//   sum+=n
//   if(n%2===0){
//     evenCount++
//   }
//   else{
//     oddCount++
//   }
// }

// console.log(sum)
// let avg = sum/nums.length
// console.log(avg)
// console.log(evenCount)
// console.log(oddCount)
// if(evenCount>oddCount){
//   console.log("the biggest number is even")
// }
// else{
//   console.log("Odd is more")
// }

// let numbers = [45, 12, 78, 34, 90];
// let max = numbers[0]
// for(let n of numbers){
//   if(n>max){
//     max=n
//   }
// }

// console.log(`the biggest number is ${max}`)

// let str = "javascript";
// let charCount ="a"
// let count = 0
// for(let n of str){
//   if(n===charCount){
//     count++
//   }

// }

// console.log(count)

// let words = ["cat", "elephant", "dog", "giraffe"];

// let result = []

// for(let n of words){
//   if(n.length>3){
//     result.push(n)
//   }
// }
// console.log(result)

// let arr = ["js", "html", "css"];
// let result = []
// for(let n of arr){
//   result.push(n.toUpperCase())
// }
// console.log(result)

// let cart = [
//   { name: "Pen", price: 10, qty: 3 },
//   { name: "Book", price: 100, qty: 2 }
// ];
// let totalBil = 0

// for(let n of cart){
//   totalBil+=n.price*n.qty
// }

// console.log(totalBil)


// let text = "education";
// let vowels = "aeiou";
// let checkVowel = false
// for(let n of text){
//   console.log(vowels.includes(n))
  
// }

//console.log(checkVowel)

// let text = "tttttttttttdddd";
// let vowels = "aeiou";
// let checkVowel = false;

// for (let ch of text) {
//   for (let v of vowels) {
//     if (ch === v) {
//       checkVowel = true;
//       break;
//     }
//   }
  
// }

// console.log(checkVowel);
// let str = "hello";
// let reversed = "";
// for(let n of str){
//   reversed = n+reversed
// }
// console.log(reversed)


// let words = ["JS", "JavaScript", "HTML", "CSS"];
// let maxLength = []
// let wordsLength =""
// for(let n of words){
//   if(n>maxLength){
//     maxLength = n
//     wordsLength=n
//   }
// }
// console.log(wordsLength.length)
// console.log(maxLength)



// let arr = [1, 2, 2, 3, 4, 4, 5];
// let unique = [];

// for(let n of arr){
//   if(!unique.includes(n)){
//     unique.push(n)
//   }
// }

// console.log(unique)


// let arr = [1,2,3,4,5];
// let reversed = [];

// for (let n of arr) {
//   reversed=n+reversed
// }

// console.log(reversed);


// let arr = [10, 5, 8, 21, 7, 3];
// let filtered = [];

// for(let n of arr){
//   if(n>10){
//     filtered.push(n)
//   }
// }

// console.log(filtered)


// let text = "javascript";
// let vowels = "aeiou";
// let result = "";
// let isVowel = false

// for(let n of text){
//   let c = n
//   for(let v of vowels){
//     if(n===v){
//       isVowel = true
//        c = n.toUpperCase()
//        break
//       console.log(c)
//     }
//   }
//   result=n+result
// }
// console.log(isVowel)
// console.log(result)


// let arr = [10, "hello", 20, "JS", 5];
// let sum = 0
// let count = 0
// for(let n of arr){
//   if(typeof n==='number'){
//     sum+=n
//     count++
//   }
// }
// console.log(sum)
// console.log(count)


// let words = ["JS","JavaScript","HTML","CSS"];

// for(let i =0 ;i<words.length;i++){
//   for(let j =i+1;j<words.length;j++){
//     let temp = words[i]
//     words[i]=words[j]
//     words[j]=temp
//   }
// }
// console.log(words)


// let text = "education";
// let vowels ="aeiou"
// let vCount = 0
// let cCount =0
// for(let n of text){
//   for(let v of vowels){
//     if(n===v){
//       vCount++
//     }
//     else{
//       cCount++
      
//     }
//   }
// }
// console.log(vCount)
// console.log(cCount)


// let data = [
//   {value: 10, type:"num"},
//   {value:"JS", type:"str"},
//   {value:20, type:"num"},
//   {value:"HTML", type:"str"}
// ];

// let sum =0

// for(let n of data){
//   if(n.type==="num"){
//     sum+=n.value
//   }
// }
// console.log(sum)

// let str = "JS2023rocks";
// let digitCount = 0
// let letterCount =0
// for(let s of str){
//   if(s>=0&&s<=9){
//     digitCount++
//   }
//   else if((s>='a'&&s<='z')||(s>='A'&&s<='Z')){
//     letterCount++
//   }
// }
// console.log(digitCount)
// console.log(letterCount)


// let words = ["apple","banana","orange","grape","umbrella"];
// let vowels = "aeiou";
// let count = 0;
// for(let w of words){
//   for(let v of vowels){
//     if(w[0]===v){
//       count++
//     }
//   }
// }
// console.log(count)

// let arr = [1,2,3,4];
// let result = [];
// let reverse=[]

// for (let n of arr){
//   reverse.unshift(n*2)
  

// }
// console.log(reverse)


// let arr = [1,2,3,4,5];
// let result = [];
// for(let n of arr){
//   if(n%2===0){
//     result.unshift(n*3)
//   }
// }
// console.log(result)

// let products = [
//   {name:"Pen", price:10},
//    {name:"Bag", price:300},
//   {name:"Book", price:120},
//   {name:"Pencil", price:5},
//   {name:"Bag", price:300},
// ];
// let sum = 0
// let filtered = []
// for(let p of products){
//   if(p.price>=50){
//     filtered.push(p)
//     sum+=p.price
//   }
// }
// console.log(filtered)
// console.log(sum)

// for(let i = 0 ; i<filtered.length;i++){
//   for(let j = i+1;j<filtered.length;j++){
//    if(filtered[i].name<filtered[j].name){
//      let temp = filtered[i].name
//     filtered[i] = filtered[j]
//     filtered[j]= temp
//    }
//   }
// }

// console.log(filtered)
// console.log(sum)


// let students = [
//   {name:"Rafi", marks:80},
//   {name:"Sadia", marks:45},
//   {name:"Nila", marks:90},
//   {name:"Imran", marks:55}
// ];

// let filtered = []

// for(let s of students){
//   if(s.marks>=50){
//     filtered.push(s)
//   }
// }
// console.log(filtered)

// for(let i = 0 ;i<filtered.length;i++){
//   for(let j = i+1 ; j<filtered.length;j++){
//     if(filtered[i].marks<filtered[j].marks){
//       let temp = filtered[i]
//       filtered[i] = filtered[j]
//       filtered[j] = temp
//     }
//   }
// }
// console.log(filtered)

// let names = []
// for(let s of filtered){
//   names.push(s.name)
// }
// console.log(names)


// let students = [
//   { name: "Rafi", marks: 85, skills: ["JS", "HTML"] },
//   { name: "Sadia", marks: 45, skills: ["CSS"] },
//   { name: "Nila", marks: 90, skills: ["JS", "React", "HTML"] },
//   { name: "Imran", marks: 60, skills: ["JS"] }
// ];

// let filtered = []
// let total = 0
// let skilledList =[]
// let reverse = ''
// let name1 = []

// for(let s of students){
//   if(s.marks>=50){
   
//     filtered.push(s)
//      total += s.marks
//   }
//   for(let sk of s.skills){
//     if(sk === "JS"){
//       skilledList.push(s.name)
//     }
//   }
//   for(let rv of s.name){
//     reverse =rv+reverse
//   }
//   name1.push(reverse)
  
// }
// console.log(filtered)

// for(let i = 0 ; i<filtered.length;i++){
//   for(let j = i+1;j<filtered.length;j++){
//     if(filtered[i].marks<filtered[j].marks){
//       let temp = filtered[i]
//       filtered[i] = filtered[j]
//       filtered[j] = temp
//     }
//   }
// }
// console.log(filtered)
// console.log(total)
// console.log(skilledList)
// console.log("Reverse",reverse)


// let marks = [78,85,92]
// let sum = 0


// for(let m of marks){
//   sum+=m



// }
// console.log(sum)
// let total = sum/marks.length
// console.log(total)
// if(total>=90){
//   console.log('goldenA+')
// }
// else if(total>=80){
//   console.log("A+")
// }

// else if(total>=70){
//   console.log("c")
// }

// else if(total<70){
//   console.log("D")
// }



// let numbers = [10, 23, 36, 41, 52];
// let evenCount = []
// let oddCount = []

// for(let n of numbers){
//   if(n%2===0){
//     evenCount.push(n)
//   }
//   else{
//     oddCount.push(n)
//   }
// }
// console.log(evenCount)
// console.log(oddCount)

// let numbers = [8, 15, 3, 22, 10];
//  let max = numbers[0]
//  let min = numbers[0]


//  for(let n of numbers){
//   if(n>max){
//     max= n
//   }
//   else if(n<min){
//     min= n
//   }
//  }

//  console.log(max)
//  console.log(min)

//  let differ = max-min
//  console.log(differ)

// let array = [1, 2, 3, 4, 5];
// let reverse = []

// for(let n of array){
//   //reverse = n+reverse
//   reverse.unshift(n)
// }
// console.log(reverse)


// let arr2 = [29, 10, 14, 37, 13];

// for(let i = 0 ; i<arr2.length;i++){
//   for(let j = i+1;j<arr2.length;j++){
//     if(arr2[i]>arr2[j]){
//       let temp = arr2[i]
//       arr2[i]=arr2[j]
//       arr2[j]=temp
//     }
//   }
// }

// console.log(arr2)

// let fruits = ["apple", "banana", "cherry", "kiwi"];
// let maxWord = fruits[0]
// let longestWord= ""

// for(let n of fruits){
//   console.log(n.length,n)
//   if(n.length>maxWord.length){
//     maxWord = n.length
//     longestWord =n
//   }
// }

// console.log(`Maximum length ${maxWord}`)
// console.log(longestWord)


// let str = "javascript";
// let charToCount = "a";
// let count = 0;
// for(let n of str){
//   if(n === charToCount){
//     count++
//   }
// }

// console.log(count)

// let words = ["hello", "world", "js"];

// let combined = ''

// for(let n of words){
//   combined+=n+' '
// }

// console.log(combined.toUpperCase())


// let mixed = [5, "hello", 12, "js", 7, "world"];
// let numbersSum = 0;
// let stringsCombined = "";

// for(let n of mixed){
//   if (typeof n === 'number'){
//     numbersSum+=n
//   }

//   else if(typeof n === 'string'){
//     stringsCombined+=n.toUpperCase()+' '
//   }
// }
// console.log(numbersSum)
// console.log(stringsCombined)


// let words = ["apple", "banana", "kiwi", "strawberry"];

// let maxLength = words[0]
// let longWord = '' 


// for(let n of words){
//   if(n>maxLength){
//     maxLength = n.length
//     longWord = n
//   }
// }

// console.log(`max length is ${maxLength}`)
// console.log(`Longest word is ${longWord}`)


// let sentence = "I love JavaScript";
// let reverse = [];

// for(let s of sentence){
//   //reverse = s+reverse
//   reverse.unshift(s)
// }

// console.log(reverse)

// let arr = [2, 4, 6, 8];

// for(let n of arr){
//  let sqr = n*n
//  console.log(sqr)
// }

// let str = "javascript";
// let count = 0;
// let vCount = 'aeiou'

// for(let n of str){
//   if(vCount.includes(n)){
//     count++
//   }
// }

// console.log(count)

// let s = "hello";
// let rev = "";

// for(let n of s){
//   rev = n+rev
// }

// console.log(rev)

// let text = "education";
// let vowels = "aeiou";

// for(let n of text){
//   if(vowels.includes(n)){
//     console.log(n)
//   }
// }

// let nums = [-3, 4, -1, 6, 0, 2];

// for(let n of nums){
//   if(n>0){
//     console.log(n)
//   }
// }


// let students = [
//     { name: "Rafi", marks: 78 },
//     { name: "Sadia", marks: 45 },
//     { name: "Nila", marks: 92 },
//     { name: "Imran", marks: 50 }
// ];

// let total = 0

// for(let n of students){
//   if(n.marks>=50){
//     console.log(n.name)
//     total++
//   }
// }

// console.log(total)


// let words = ["JS", "JavaScript", "HTML", "CSS"];

// let maxLength = words[0]

// for(let n of words){
//   if(n>maxLength){
//     maxLength = n.length
//     console.log(`the longest word is ${n}`)
//   }
// }

// console.log(maxLength)



// let employees = [
//     { name: "A", salary: 20000 },
//     { name: "B", salary: 25000 },
//     { name: "C", salary: 30000 }
// ];

// let totalSalary = 0

// for(let n of employees){
//   totalSalary+=n.salary
// }

// console.log(totalSalary)


// let arr = [1, 2, 2, 3, 4, 4, 5];
// let unique = [];

// for(let n of arr){
//   if(!unique.includes(n)){
//     unique.push(n)
//   }
// }
// console.log(unique)


// let cart = [
//     { name: "Pen", price: 10, qty: 3 },
//     { name: "Book", price: 120, qty: 2 }
// ];

// let total = 0;

// for(let n of cart){
//   total+=n.price*n.qty
// }

// console.log(total)


// let text = "education";
// let vowels = "aeiou";
// let isVowel = false


// for(let n of text){
//   if(vowels.includes(n)){
//     isVowel = true
   
//   }
// }

// console.log(isVowel)


// let transactions = [
//   { type: "income", amount: 500 },
//   { type: "expense", amount: 200 },
//   { type: "income", amount: 300 },
//   { type: "expense", amount: 150 }
// ];


// let income =0
// let expense =0

// for(let n of transactions){
//   if(n.type === 'income'){
//     income+=n.amount
//   }
//   else{
//     expense+=n.amount
//   }
// }

// console.log(income)
// console.log(expense)

// let finalBalanace = income-expense

// console.log(finalBalanace)


// let nums = [1,2,3,2,4,5,1,6];

// let unique = []

// for(let n of nums){
//   if(!unique.includes(n)){
//     unique.push(n)
//   }
// }

// console.log(unique)


// let employees = [
//   { name: "Rafi", salary: 18000 },
//   { name: "Nila", salary: 25000 },
//   { name: "Imran", salary: 15000 }
// ];
// let update = []


// for(let n of employees){
//   let newSalary = n.salary
//   if(n.salary<20000){
//     newSalary+=n.salary*0.20
    

//   }
//   else{
//     newSalary+=n.salary*0.1
//   }
//   update.push({
//     name:n.name,
//     salary:newSalary
//   })
// }

// console.log(update)


// let employees = [
//   { name: "Rafi", salary: 12000 },
//   { name: "Nila", salary: 20000 },
//   { name: "Imran", salary: 30000 }
// ];

// let update = []

// for(let n of employees){
//   let bonus = 0

//   if(n.salary<15000){
//     bonus=n.salary*0.3
//   }
//   else if(n.salary>=15000 && n.salary<25000){
//     bonus=n.salary*0.15
//   }
//   else if(n.salary>=25000){
//     bonus=n.salary*0.8
//   }

//   update.push({
//     name:n.name,
//     salary:n.salary+bonus
//   })
// }

// console.log(update)

// let nums = [1,0,2,0,3,0,4];
// let result = [];

// for (let n of nums) {
//   if (n !== 0) {
//     result.push(n);
//   }
// }
// console.log(result)
// let zeroCount = nums.length - result.length;
// for (let i = 0; i < zeroCount; i++) {
//   result.push(0);
// }

// console.log(result);


// function checkDigitsInName(name) {
//     if(typeof name !== 'string'){
//         return "invalid input"
//     }
//        for(let n of name){
//         if (n >= '0' && n <= '9'){
//             return true
//         }
     
//        }  
//        return false
// }
// console.log(checkDigitsInName("!@#"))

// function calculateFinalScore(student){
//     if(typeof student !== 'object'){
//         return "Invalid Input"
//     }
//     let finalScore =0 
//     finalScore += student.testScore;
//   finalScore += student.schoolGrade;

// }


// function isEligibleVoter(voter){
//     if(typeof voter !== 'object'){
//         return "invalid voter"
//     }
//     let hasNID= false
//     const {name,age,hasNID} = voter
//     for(let n of voter){
//         if(n.age>=18){
//             hasNID = true
//         }
//     }
// }


// function calculateBonus(employee){
//     if(typeof employee !== 'object' || typeof employee === null){
//         return "Invalid Input"
//     }

//     const {name,basicSalary,performanceRating} = employee

//     if(name !== 'string' && basicSalary !== 'number' && performanceRating !== 'number'){
//          return "Invalid Input"
//     }
// }

// function calculateCartTotal(cart){
//     if(!Array.isArray(cart)){
//         return "Invalid Input"

//     }

//     let total = 0
    
//     for(let item of cart){
//        if(typeof item.name === 'string' && typeof item.price === 'number' && typeof item.quantity === 'number'){
//         total+=item.price*item.quantity
//     }
    
//     }
//     return total

// }

// console.log(calculateCartTotal([
//   { name: "Shirt", price: 500, quantity: 2 },
//   { name: "Pant", price: 800, quantity: 1 }
// ]));


// function checkPasswordStrength(password){
//     if(typeof password !== 'string'){
//         return "Invalid Input"
//     }

//     const hasLength = password.length>=8
//     const hasCapital = /[A-Z]/.test(password);
//     const hasNumber = /[0-9]/.test(password);
//     const hasSpecial = /[!@#$%^&*]/.test(password); 

//     return hasLength && hasCapital && hasNumber && hasSpecial
// }

// console.log(checkPasswordStrength("Rahim@123")); // true
// console.log(checkPasswordStrength("rahim123")); // false
// console.log(checkPasswordStrength(12345)); // Invalid Input

// function checkAttendance(students){
//     if(!Array.isArray(students)){
//         return "Invalid Input"
//     }

//     const absent = []
//     for(let n of students){
//         if(!n.present){
//             absent.push(n.name)
//         }
//     }
//     return absent
// }

// console.log(checkAttendance([
//   { name: "Rahim", present: true },
//   { name: "Karim", present: false }
// ]));



// const money = "25"
// const rich = money+25
// console.log(rich)

// const numbers = [23,25,26,28,30,32,33]
// numbers[2] = 27
// numbers.push(25)
// console.log(numbers)

// function add(num1,num2){
//     return num1+num2
// }
// const result = add(5,2)
// console.log(result)

// const student ={
//     name:"Mithila",
//     age:22
// }

// student.name="Amily"
// console.log(student)


// const getPi = ()=> Math.PI
// console.log(getPi())


// const js = "js"
// const chars = [...js]
// console.log(chars)
// console.log(...js)


//  let numbers = [23,25,26,28,30,32,33]
// const arrayMax = Math.max(...numbers)
// console.log(arrayMax)

// let max = numbers[0]

// for(let n of numbers){
//     if(n>max){
//         max=n
//     }
// }

// console.log("Max",max)
//   let numbers = [23,25,26,28,30,32,33]

//   let nums = [...numbers]

//   nums.push(40,45,50)
//   console.log(nums)


// const evenLenghtsName = (friends)=>{
//     let result = []

//     for(let name of friends){
//         if(name.length%2===0){
//             result.push(name)
//         }
//     }
//     return result
// }

// let friends = ["Rafi", "Sadia", "Nila", "Imran", "Mithila"];

// // Function call
// let output = evenLenghtsName(friends);

// // Print result
// console.log(output);


// const findLongestName = (names)=>{
//     let max = 0
//     let result = []

//     for(let n of names){
//         if(n.length>max){
//             max=n.length
//             result =[n]
//         }
//         else if(n.length===max){
//             result.push(n)
//         }
//     }
//     return result
// }

// let friends1 = ["Rafiiiiiii", "Sadia", "Mithila", "Imran", "Ahmedullah"];
// console.log(findLongestName(friends1));



// let numbers = [10, 23, 36, 41, 52];
// let evenCount = 0
// let oddCount = 0

// for(let n of numbers){
//     if(n%2===0){
//         //console.log("Even numbers: ",n)
//         evenCount++
//     }
//     else{
//         //console.log("Odd numbers :",n)
//         oddCount++
//     }
// }
// console.log(evenCount)
// console.log(oddCount)



// let arr = [12, 45, 23, 67, 34];
// let sum = 0;

// for(let n of arr){
//     sum+=n
// }
// console.log(sum)
// let total = sum/arr.length
// console.log(total.toFixed(5))


// console.log(number)

// let number = 25

// let numbers = [8, 15, 3, 22, 10];
// let max = numbers[0]
// let min = numbers[0]

// for(let n of numbers){
//     if(n>max){
//         max=n
//     }
//     else if(n<min){
//         min+=n
//     }
// }


// console.log(max)
// console.log(min)
// let differ = max-min
// console.log(differ)

// let arr = [1, 2, 3, 4, 5];

// let reverse = []

// for(let n of arr){
//     reverse.unshift(n)
// }

// console.log(reverse)


// let matrix = [[3, 5, 9], [12, 4, 7], [1, 8, 6]];
// let max = matrix[0][0]
// for(let i = 0 ;i<matrix.length;i++){
//     for(let j = 0 ; j<matrix.length;j++){
//         if(matrix[i][j]>max){
//             max= matrix[i][j]
//         }
//     }
// }
// console.log(max)

// let words = ["apple", "banana", "kiwi", "strawberry"];
// let maxLength = 0

// let longestWord= ""

// for(let n of words){

//     if(n>words){
//         maxLength = n.length
//         longestWord = n
//     }
// }

// console.log(longestWord)
// console.log(maxLength)


// let arr2D = [[2, 3, 4], [5, 6, 7], [8, 9, 10]];
// let sumEven = 0;

// for(let i = 0 ; i<arr2D.length;i++){
//     for(let j = 0 ; j < arr2D.length;j++){
//         if(arr2D[i][j]%2===0){
//             sumEven+=arr2D[i][j]
//         }
//     }
// }

// console.log(sumEven)


// let mixedArr = [10, "JS", 20, "Python", 30];
// let sumNumbers = 0
// let combinedStr =  ""

// for(let n of mixedArr){
//     if(typeof n === 'number'){
//         sumNumbers+=n
//     }
//     else{
//         combinedStr+=n.toUpperCase()+" "
//     }
// }
// console.log(sumNumbers)
// console.log(combinedStr)


// let fruits2 = ["apple", "banana", "cherry","strawberry"];
// let result = [];
// for(let n of fruits2){
//     for(let ch of n){
//         if(ch==='a'){
//             result.push(n)
//             break

//         }
//     }
// }
// console.log(result)

// let numbers = [1, 2, 3, 4];
// let sum = 0;
// for(let n of numbers){
//     // if(n%2===0){
//     //     sum+=n*n
//     // }
//     sum+=n*n
// }
// console.log(sum)

// let students = [
//     { name: "Rafi", marks: 78 },
//     { name: "Sadia", marks: 45 },
//     { name: "Nila", marks: 92 }
// ];

// for(let n of students){
//     if(n.marks>=50){
//         console.log(`${n.name} = pass`)
//     }
//     else{
//         console.log(`${n.name} = fail`)
//     }
// }


// let cart = [
//     { name: "Pen", price: 10, qty: 5 },
//     { name: "Book", price: 120, qty: 2 },
//     { name: "Bag", price: 450, qty: 1 }
// ];

// let total = 0;


// for(let n of cart){
//     total+=n.price*n.qty
// }

// console.log(total)


// let employees = [
//     { name: "Rahim", salary: 30000, exp: 6 },
//     { name: "Karim", salary: 25000, exp: 4 },
//     { name: "Salma", salary: 22000, exp: 2 }
// ];
// let bonus = 0
// for (let n of employees){


//     if(n.exp>5){
//         bonus=n.salary*0.20
//     }

//     else if(n.exp>=3){
//         bonus=n.salary*0.10
//     }
//      console.log(
//         n.name +
//         " Bonus: " +
//         bonus +
//         " Total Salary: " +
//         (n.salary + bonus)
//     );
// }

// console.log(`${employees.salary}`)


// let text = "education";
// let vowels = "aeiou";
// for(let n of text){
//     if(n==vowels){
//         vowels.pu
//     }
// }

// function calculateFinalScore(student){

// }



// function checkAgeValidity(age){
//     if(age !== 'number' && age<0){
//         return "Invalid Input"
//     }
//     return "valid Age"
// }

// let personAge = checkAgeValidity(-25)
// console.log(personAge)

// function isAdult(person){
//     const {name,age} = person
//     if(typeof name!=='string' || typeof age !=='number' || typeof person!=='object'|| age<=0 ||age<18){
//         return "Invalid Input"
//     }
//     return true
    
// }
// console.log(isAdult({ name: "Raju", age: 20 })); 
// console.log(isAdult({ name: "Rani", age: 15 }));  // false
// console.log(isAdult({ name: "Ali", age: "20" }));

// function checkPositiveNumber(value){
//     if(typeof value!== 'number' && value>=0){
//         return "Invalid Input"
//     }
//    else if(typeof value==="number" && value>=0){
//         return "Valid Number"
//     }
//     else if(value<0){
//         return "Negative Number"
//     }
// }

// console.log(checkPositiveNumber(10));   // Valid Number
// console.log(checkPositiveNumber(-5));   // Negative Number
// console.log(checkPositiveNumber("5"));  // Invalid Input
// console.log(checkPositiveNumber(0));

// function validateProduct(product){
//     if(typeof product !== "object" || product === null || Array.isArray(product)){
//         return "Invalid Input"
//     }
//     const {name,price,quantity} = product
//     if(typeof name !== "string" || typeof price !== "number" || typeof quantity !== "number" || price<0 || quantity<0){
//         return "Invalid Input"
//     }
//     else if(typeof name === "string" || price>=0 || quantity>=0){
//         return "Valid Product"
//     }
// }

console.log(validateProduct({ name: "Laptop", price: 1000, quantity: 5 })); // Valid Product
console.log(validateProduct({ name: "Laptop", price: -100, quantity: 5 }));  // Invalid Input
console.log(validateProduct(["Laptop", 1000, 5]));                           // Invalid Input
console.log(validateProduct(null)); 


// console.log(validateProduct({ name: "Laptop", price: 1000, quantity: 5 })); // Valid Product
// console.log(validateProduct({ name: "Laptop", price: -100, quantity: 5 }));  // Invalid Input
// console.log(validateProduct(["Laptop", 1000, 5]));                           // Invalid Input
// console.log(validateProduct(null)); 


// console.log(validateProduct({ name: "Laptop", price: 1000, quantity: 5 })); // Valid Product
// console.log(validateProduct({ name: "Laptop", price: -100, quantity: 5 }));  // Invalid Input
// console.log(validateProduct(["Laptop", 1000, 5]));                           // Invalid Input
// console.log(validateProduct(null)); 
// console.log(validateProduct({ name: "Laptop", price: 1000, quantity: 5 })); // Valid Product
// console.log(validateProduct({ name: "Laptop", price: -100, quantity: 5 }));  // Invalid Input
// console.log(validateProduct(["Laptop", 1000, 5]));                           // Invalid Input
// console.log(validateProduct(null)); 

// console.log(validateProduct({ name: "Laptop", price: 1000, quantity: 5 })); // Valid Product
// console.log(validateProduct({ name: "Laptop", price: -100, quantity: 5 }));  // Invalid Input
// console.log(validateProduct(["Laptop", 1000, 5]));                           // Invalid Input
// console.log(validateProduct(null)); // console.log(validateProduct({ name: "Laptop", price: 1000, quantity: 5 })); // Valid Product
// console.log(validateProduct({ name: "Laptop", price: -100, quantity: 5 }));  // Invalid Input
// console.log(validateProduct(["Laptop", 1000, 5]));                           // Invalid Input
// console.log(validateProduct(null)); 


// console.log(validateProduct({ name: "Laptop", price: 1000, quantity: 5 })); // Valid Product
// console.log(validateProduct({ name: "Laptop", price: -100, quantity: 5 }));  // Invalid Input
// console.log(validateProduct(["Laptop", 1000, 5]));                           // Invalid Input
// console.log(validateProduct(null)); 
// console.log(validateProduct({ name: "Laptop", price: 1000, quantity: 5 })); // Valid Product
// console.log(validateProduct({ name: "Laptop", price: -100, quantity: 5 }));  // Invalid Input
// console.log(validateProduct(["Laptop", 1000, 5]));                           // Invalid Input
// console.log(validateProduct(null)); 

// console.log(validateProduct({ name: "Laptop", price: 1000, quantity: 5 })); // Valid Product
// console.log(validateProduct({ name: "Laptop", price: -100, quantity: 5 }));  // Invalid Input
// console.log(validateProduct(["Laptop", 1000, 5]));                           // Invalid Input
// console.log(validateProduct(null)); // console.log(validateProduct({ name: "Laptop", price: 1000, quantity: 5 })); // Valid Product
// console.log(validateProduct({ name: "Laptop", price: -100, quantity: 5 }));  // Invalid Input
// console.log(validateProduct(["Laptop", 1000, 5]));                           // Invalid Input
// console.log(validateProduct(null)); // console.log(validateProduct({ name: "Laptop", price: 1000, quantity: 5 })); // Valid Product
// console.log(validateProduct({ name: "Laptop", price: -100, quantity: 5 }));  // Invalid Input
// console.log(validateProduct(["Laptop", 1000, 5]));                           // Invalid Input
// console.log(validateProduct(null)); 


// console.log(validateProduct({ name: "Laptop", price: 1000, quantity: 5 })); // Valid Product
// console.log(validateProduct({ name: "Laptop", price: -100, quantity: 5 }));  // Invalid Input
// console.log(validateProduct(["Laptop", 1000, 5]));                           // Invalid Input
// console.log(validateProduct(null)); 
// console.log(validateProduct({ name: "Laptop", price: 1000, quantity: 5 })); // Valid Product
// console.log(validateProduct({ name: "Laptop", price: -100, quantity: 5 }));  // Invalid Input
// console.log(validateProduct(["Laptop", 1000, 5]));                           // Invalid Input
// console.log(validateProduct(null)); 


// console.log(validateProduct({ name: "Laptop", price: 1000, quantity: 5 })); // Valid Product
// console.log(validateProduct({ name: "Laptop", price: -100, quantity: 5 }));  // Invalid Input
// console.log(validateProduct(["Laptop", 1000, 5]));                           // Invalid Input
// console.log(validateProduct(null)); 
// console.log(validateProduct({ name: "Laptop", price: 1000, quantity: 5 })); // Valid Product
// console.log(validateProduct({ name: "Laptop", price: -100, quantity: 5 }));  // Invalid Input
// console.log(validateProduct(["Laptop", 1000, 5]));                           // Invalid Input
// console.log(validateProduct(null)); 

// console.log(validateProduct({ name: "Laptop", price: 1000, quantity: 5 })); // Valid Product
// console.log(validateProduct({ name: "Laptop", price: -100, quantity: 5 }));  // Invalid Input
// console.log(validateProduct(["Laptop", 1000, 5]));                           // Invalid Input
// console.log(validateProduct(null)); 
// console.log(validateProduct({ name: "Laptop", price: 1000, quantity: 5 })); // Valid Product
// console.log(validateProduct({ name: "Laptop", price: -100, quantity: 5 }));  // Invalid Input
// console.log(validateProduct(["Laptop", 1000, 5]));                           // Invalid Input
// console.log(validateProduct(null)); 