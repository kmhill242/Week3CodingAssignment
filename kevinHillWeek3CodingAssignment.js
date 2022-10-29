//1
//did 1a first, then proceeded with 1b and added a random age to the array. once a new value was added to the array i console.log'ed it to make sure the value was added to the array.
//I proceeded onto 1c and took the average of the array of ages including the new age i just added in 1b.


var ages = [3, 9, 23, 64, 2, 8, 28, 93];
var sum = 0
var first = ages[0]
var last = ages[ages.length - 1];

for (var number of ages) {
    sum += number;
}

//1a finding the sum of last minus first
console.log(last - first);

//1b ages.push to add number to the age array 
ages.push(12)
console.log(ages);

average = sum / ages.length

//1c finding the average
console.log(average + ' is the average age.')


//////////////////////////////////////////////////////////////////
//2 i first created an array for names that i then pushed the string values into the array. I consoled it to make sure the names were pushed into the array
//i then created a loop to calculate the avg number of letters per name, once again consoling it to see if the loop worked. I then made a for loop that returned the amount of letters in each
//name and added it to the previous value to make sure the loop was adding the amount of letters properly. I then console logged the average number of letters per name 
//within the array. 
//2b had me concatenate all the names together so i created a new for loop to combine the names with a space inbetween and concoled it to print the names with a space inbetween
var names = [];
names.push('Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob');
//check with console
console.log(names);
//loop to interate through the array and calculate the avg number of letters per name
var array = [];
for (let i = 0; i < names.length; i++) {
    array.push(names[i].length);
    console.log(array);
}
var arrayTotal = 0
for (let i = 0; i < array.length; i++) {
    arrayTotal += array[i];
    //sum of each element in array and totalling it
    console.log('array total;', arrayTotal);
}
var arrayAvg = arrayTotal / array.length;
console.log(arrayAvg + ' is the average number of letters per name.');

//loop to iterate through array and concatenate all names together
let combinedNames = ''
for (let i = 0; i < names.length; i++) {
    let currName = names[i];
    combinedNames += currName + " ";
}
console.log(combinedNames);

////////////////////////////////////////////////////////////////////////
//5
//I created an array for names length for this problem. I actually did this exact step in problem 2, so i rewrote the for loop but renamed the array for the purpose of this question.
var nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

////////////////////////////////////////////////////////////////////
//6
//similar to problem 5, I had already done this code in problem 2, so i rewrote the for loop and renamed the array for this question
var arrayAdd = 0
for (let i = 0; i < names.length; i++) {
    arrayAdd += array[i];
}
console.log('array total:', arrayAdd);

///////////////////////////////
//7
//for this problem i created a function to repeat the word 'n' number of times.
function repeatWord2(word, n) {
    return word.repeat(n);
}
console.log(repeatWord2('Hello', 3));

/////////////////////////////////////
//8
//for problem 8 i created an arrow function to print the full name with the two parameters of firstName and lastName
const fullName = (firstName, lastName) => firstName + ' ' + lastName;
console.log(fullName('Kevin', 'Hill'));

/////////////////////////////////////
//9
var arr2 = [17, 23, 42, 100];
function arrayAdd1(arr2) {
    var arraySum = 0;
    for (let i = 0; i < arr2.length; i++) {
        arraySum = arraySum + arr2[i];
    };
    if (100 <= arraySum) {
        console.log('true');
        arr2 = true
    }
    else if (100 > arraySum) {
        console.log('false');
        arr2 = false;
    }
    return arr2;
}
arrayAdd1(arr2);

///////////////////////////////////
//10
//i created an array and pushed a random set of numbers into the array. I used an array function of reduce followed by an arrow function to find the average of the number set.
const arr = [];
arr.push(11, 14, 18, 22);
const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(avg);

/////////////////////////////////////////////////////
//11

const num1 = [59, 33, 24, 63];
const num2 = [11, 74, 9, 48];
function isGreaterAvg(num1, num2) {
    var total1 = 0;
    for (let i = 0; i < num1.length; i++) {
        total1 += num1[i];
    }
    var total2 = 0;
    for (let i = 0; i < num2.length; i++) {
        total2 += num2[i];
    }
    var avg1 = total1 / num1.length;
    var avg2 = total2 / num2.length;
    if (avg1 > avg2) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isGreaterAvg(num1, num2));



///////////////////////////////////////////////
//12
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket >= 10.50) {
        //console.log(true);
        return true
    }
    else {
        //console.log(false);
        return false
    }
}
console.log(willBuyDrink(true, 11));




///////////////////////////////////////
//13

//Will I go fly my airplane if weather is nice and if i have gas money?
//i created this function to determine if i will go flying, it all depends on if i have enough gas money, and if the weather is good enough to fly. 
function goFly(goodWeather, enoughGasMoney) {
    if (goodWeather == true && enoughGasMoney == true) {
        return 'I will go fly my plane'
    } else {
        return 'I will not fly today'
    }
}
console.log(goFly(true, false));




