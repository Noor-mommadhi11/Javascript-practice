//Task 1: Username Formatter

function formatusername(name){
    return name.trim().toLowerCase();
}
console.log(formatusername("  noor ashik ")); // Output: "noor ashik"


//Task 2: Email Validator

function validateEmail(email) {
    if (email.includes("@") && email.endsWith(".com")) {
        return "Valid Email";
    }
    return "Invalid Email";
}

console.log(validateEmail("test@gmail.com")); // Output: "Valid Email"


//Task 3: Word Counter

function wordCounter(str){
    return str.trim().split(" ").length;
}
console.log(wordCounter("i m learning javascript"));

//Task 4: Replace Second Word Only

function replaceSecondWord(str) {
    let words = str.split(" ");
    if (words.length > 1) {
        words[1] = "javascript";
    }
    return words.join(" ");
}

console.log(replaceSecondWord("python python developer"));

//Task 5: Password Strength Checker

function checkPassword(password) {
    let hasUpper = /[A-Z]/.test(password);
    let hasLower = /[a-z]/.test(password);
    let hasNumber = /[0-9]/.test(password);

    if (password.length >= 8 && hasUpper && hasLower && hasNumber) {
        return "Strong";
    }
    return "Weak";
}

console.log(checkPassword("Test1234"));

//Task 6: Reverse a String

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));


//Task 7: Find Day of Birth
function findDay(year, month, date) {
    if (month < 1 || month > 12 || date < 1 || date > 31) {
        return "Invalid Date";
    }

    let d = new Date(year, month - 1, date);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return "You were born on " + days[d.getDay()];
}

console.log(findDay(2000, 5, 15));


//Task 8: Live Digital Clock


setInterval(() => {
    let now = new Date();
    let time = now.toLocaleTimeString();
    console.log(time);
}, 1000);

//Task 9: Date Difference Calculator

function dateDiff(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);

    let diff = Math.abs(d2 - d1);
    let days = diff / (1000 * 60 * 60 * 24);

    return days;
}

console.log(dateDiff("2025-03-01", "2025-03-10"));


//Task 10: Character Frequency Counter


function charFrequency(str) {
    let result = {};

    for (let char of str) {
        result[char] = (result[char] || 0) + 1;
    }

    return result;
}

console.log(charFrequency("javascript"));