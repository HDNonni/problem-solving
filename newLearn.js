var newLearnTech = ['practice', 'morePractice', 'lotsPatience'];

var books = 'scary';

var learn = 'practice';

const constellation = 'stars';

let stores = ['oshKosh', 'carters', 'walmart', 'target'];

var coffee = ['greenMtn', 'dunkin', 'starbucks', 'NewEngland'];

var holiday = 'Christmas';

var cars = ['honda', 'ford', 'chevy'];

var lessons = ['read', 'write', 'math'];

var job = 'stayHome';

var cup = new Object()
cup.type = 'mug';
cup.color = 'black';
cup.size = 'tall';

//objects are variables that can contain many values (properties/ methods; name:value)
//methods are actions  that can be performed  on objects
//below object literal
var carTypes = { type: 'honda', color: 'grey', size: 'midSize' };

var seasons = { cool: 'fall', cold: 'winter', warm: 'spring', hot: 'summer' };
console.log(seasons.hot);

document.write('There is a ' + coffee[2] + ' at ' + stores[3] + '.' + "<br>");
//variables are containers to store data
var cost1 = 14;
var cost2 = 23;

console.log(cost1 + cost2);

var coffeeMugs = new Object()
coffeeMugs.size = 'large';
coffeeMugs.shape = 'unusual';
coffeeMugs.design = ['Christmas', 'Easter', 'personalized', 'crazy']

document.write('I would like a ' + coffeeMugs.size + ' mug with a ' + coffeeMugs.design[2] + ' design on it.' + "<br>")

var dailySky = new Object()
dailySky.morning = 'colorful';
dailySky.afternoon = 'bright';
dailySky.night = ['stars', 'moon', 'planets'];

document.write('I love the ' + dailySky.night[0] + "<br>")

var frames = {
    color: 'black',
    size: 'medium',
    purpose: 'picture'
}

document.write(frames.purpose + "<br>")

var notePads = {
    lined: 'multi',
    unRuled: 'large',
    decor: 'flowers'
}
console.log(notePads.decor);

var books = {
    children: 'short',
    adult: 'scary',
    any: 'fiction'
}
console.log('I want a ' + books.children + ' book that is ' + books.any + '.')

var holidayGifts = {
    Christmas: 'clothes',
    Easter: 'candy',
    Birthday: 'toys'
}

console.log('I get ' + holidayGifts.Christmas + ' ' + holidayGifts.Birthday + ' for gifts.')

var toDoList = new Object()
toDoList.addTodo = ['new item1', ' new item2', ' new item3'];
toDoList.changeTodo = 'change';
toDoList.deleteTodo = 'delete';
toDoList.toggleTodo = 'toggle';
document.write('Add todos with ' + toDoList.addTodo + '.' + "<br>")

//find the problem
function newList() {

}
console.log(toDoList.addTodo[0]);


//find the sum of multiples of 3 or 5 below 1000

var sum = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log(sum);


function isDivisible(num, divisor) {
    return num % divisor == 0;
}
var i = 0;
var problemTracker = [];
problemTracker[i] = function () {
    var sum = 0;
    for (var i = 0; i < 1000; i++) {
        if (isDivisible(i, 3) || isDivisible(i, 5)) {
            sum += i;

        }
    }
    return sum
};
console.log(sum);

var reminders = {
    keep: 'daily stuff',
    calendar: 'appointments',
    notes: 'todo List'
}

console.log(reminders.keep + ' ' + toDoList.addTodo.push(['new item4']))

var streetlights = {
    type: 'halogen',
    color: 'white',
    hue: 'yellow'

}
console.log("the streetlights look" + " " + streetlights.hue);

var riverCross = {
    boatSize: 'small',
    toCross: ['farmer', 'duck', 'fox', 'corn']
}

function getAllAcross(obj0, obj1) {
    console.log(arguments);
    // console.log(object1,object2)

    // if (object1 === "farmer" && object2 === "fox") {
    //     console.log("All okay");
    // }

    //for(var i=0 ; i < riverCross; i++)
    // console.log(riverCross.toCross[2]);
    if (obj1 == true) {
        console.log('no one makes it but the' + ' ' + riverCross.toCross[0]);
    } else if (obj0 == true) {
        console.log('he will watch them');
    } else if (obj0 || obj1 == false) {
        console.log('the' + " " + riverCross.toCross[1] + ' eats all the corn.');
    } else {

        console.log('No one gets across');
    }

}

getAllAcross(false, false);

function numCheck(number) {
    // numCheck = function (number) {
    if (number < 70) {
        console.log('poor');
    } else if (number > 70 && number < 80) {
        console.log('fair')
    } else {
        console.log('great')
    }
}

numCheck("not a number");

numCheck(75);

numCheck(10);

numCheck(70);

numCheck(88);

//change number to letter grade and letter to number grade

function gradeChange(number, letter) {
    if (number < 60) {
        console.log('F');
    } else if (letter == 'F') {
        console.log('below 60')
    }
    if (number > 60 && number < 70) {
        console.log('You get a "D"');
    } else if (letter == 'D') {
        console.log(' between 60 and 70')
    }
    if (number >= 70 && number < 80) {
        console.log('You get a "C"');
    } else if (letter == 'C') {
        console.log('between 70 & 80')
    }
    if (number >= 80 && number < 90) {
        console.log('Wow a "B"');
    } else if (letter == 'B') {
        console.log('between 80 & 90')
    }
    if (letter == 'A') {
        console.log('between 90 and 100')
    } else if (number >= 90 && number <= 100) {
        console.log('Way to go, you get an"A"');
    }
}
gradeChange(80, 'B');

function convertNumberGradeToLetterGrade(number) {
    if (number < 60) {
        return 'F';
    } else if (number > 60 && number < 70) {
        return 'D'
    } else if (number >= 70 && number < 80) {
        return 'C'
    } else if (number >= 80 && number < 90) {
        return 'B'
    } else {
        return 'A'
    }
}

var myGrade = convertNumberGradeToLetterGrade(70);
console.log('Your grade: ' + myGrade); // Should print 'Your grade: C'
myGrade = convertNumberGradeToLetterGrade(91);
console.log('Your grade: ' + myGrade); // Should print 'Your grade: A'
myGrade = convertNumberGradeToLetterGrade(59);
console.log('Your grade: ' + myGrade); // Should print 'Your grade: A'

function convertLetterToNumberGrade(letter) {
    if (letter == 'A') {
        return 100;
    } else if (letter == 'B') {
        return 89;
    } else if (letter == 'C') {
        return 79;
    } else if (letter == 'D') {
        return 69;
    } else {
        return 59;
    }
}

var myNumberGrade = convertLetterToNumberGrade('G')
console.log('Your Number Grade: ' + myNumberGrade); // should print a number grade 89


function averageOfNumbers(arrayOfNumbers) {
    var sum = 0;

    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i]
    }
    return sum / arrayOfNumbers.length;
}

console.log('The average of numbers is ' + averageOfNumbers([2, 6, 9]))


var resolutions = {
    realistic: 'exercise more',
    notRealistic: 'win lottery',
    possible: 'learn'
}
console.log('A good New Year resolution is ' + resolutions.realistic)

//standard deviation
//step 1 ; need a data set
//2. find the mean of the data set
//3. find distance from each data set to the mean 
//4. square each of those distances
//5. sum each of those values
//6. divide by number of data points
//7. take square root of ans

function calculateStdDev(dataSet) {
    console.log('the average of numbers is ' + averageOfNumbers([]));
    var average = averageOfNumbers(dataSet);
    console.log(average);
    var sum = 0;
    for (var i = 0; i < dataSet.length; i++) {
        console.log('i: ' + i)
        console.log('dataSet: ' + dataSet[i])

        var ans = dataSet[i] - average;
        console.log('dataSet -average ' + ans);

        ans *= ans;
        console.log('square dataSet: ' + ans);

        sum += ans;
        console.log('sum of values: ' + sum)
    }
    total = sum / dataSet.length
    console.log('points divided by length: ' + total)
    var StdDev = Math.sqrt(total)
    console.log('standard deviation : ' + StdDev);

    return StdDev;

}
console.log('The standard Deviation is: ' + calculateStdDev([3, 5, 7, 9]))


//functions to calculate how many days old
// find leap years
//TODO: refactor and set up html inputs

function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    } else if (year % 100 == 0) {
        return false;
    } else if (year % 400 != 0) {
        return false;
    } else return true;
}
console.log(isLeapYear(2000));
console.log(isLeapYear(2011));



function ageInDays(current_year, birth_year) {
    //loop through array to filter leap years and calculate days
    // accumulator pattern
    var totalDays = 0;
    for (var year = birth_year; year < current_year; year++) {
        // console.log(year);
        // console.log(birth_year)
        // console.log(current_year)
        amountOfDaysInYear = 365
        if (isLeapYear(year)) {
            amountOfDaysInYear = 366
        }
        totalDays += amountOfDaysInYear
    }
    return totalDays
}

console.log("Print age in days: " + ageInDays(2019, 2000));

//return amount of days from month, day, year to end of year
function totalDaysToEndOfYear(month, day, year) {
    let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDays = 0;

    console.log(typeof daysInMonths)
    // TODO: Do not re-use variables as the for loop variable, so
    // don't use month here
    //add -1 to month to include april(4th) month
    if (isLeapYear(year)) {
        daysInMonths[1] = 29
        console.log("this is leap year test:" + isLeapYear(year))
    }
    for (var currentMonth = month - 1; currentMonth < daysInMonths.length; currentMonth++) {
        console.log("days remaining 1: " + totalDays)
        totalDays = totalDays + daysInMonths[currentMonth]
        console.log(daysInMonths[currentMonth]);
    }
    var remainingDays = totalDays - day;
    //????
    console.log("this is days in months:" + daysInMonths);
    console.log("days remaining 2: " + totalDays)
    return remainingDays;
}

console.log("days left in year: " + totalDaysToEndOfYear(12, 29, 2000));



function getPreviousDays(month, day, year) {
    let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let previousDays = 0;
    if (isLeapYear(year)) {
        daysInMonths[1] = 29
        console.log("this is leap year test:" + isLeapYear(year))
    }
    // given month, day and year get previous days to beginning of year
    //copied to modify from above
    //set currentMonth to 0 and increment to month
    for (var currentMonth = 0; currentMonth < month -1; currentMonth++) {
        console.log("this is current Month: " + currentMonth)
        //add previousDays t
        previousDays  += daysInMonths[currentMonth] ;
        console.log(daysInMonths[currentMonth] );
        console.log("this is previous days "+ previousDays);
        
    }
    var actualPreviousDays = previousDays + day;
    return actualPreviousDays;

}
console.log("Test previous days: " + getPreviousDays(8, 21, 2015));


