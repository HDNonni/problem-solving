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
    //attempting input
    document.getElementById("birthday").value;
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
    for (var currentMonth = 0; currentMonth < month - 1; currentMonth++) {
        console.log("this is current Month: " + currentMonth)
        //add previousDays t
        previousDays += daysInMonths[currentMonth];
        console.log(daysInMonths[currentMonth]);
        console.log("this is previous days " + previousDays);

    }
    var actualPreviousDays = previousDays + day;
    document.getElementById("today").value;
    return actualPreviousDays;

}
console.log("Test previous days: " + getPreviousDays(8, 21, 2015));


//given above functions, how many days old?
//TODO make HTML inputs

function howManyDaysOld(currentMonth, currentDay, currentYear, birthMonth, birthDay, birthYear) {
    if (currentMonth && currentDay && currentYear) {
        var dayEndTotal = totalDaysToEndOfYear(birthMonth, birthDay, birthYear);
    }
    if (birthMonth && birthDay && birthYear) {
        var dayPrevious = getPreviousDays(currentMonth, currentDay, currentYear);
    }
    var yearTotals = ageInDays(currentYear - 1, birthYear + 1);
    var daysOld = yearTotals + dayEndTotal + dayPrevious;

    document.getElementById("answer").innerHTML = "You are " + daysOld + " days old today!"
    return daysOld;
}
console.log("This is how many days old , hopefully!: " + howManyDaysOld(5, 1, 2019, 1, 8, 2000));

