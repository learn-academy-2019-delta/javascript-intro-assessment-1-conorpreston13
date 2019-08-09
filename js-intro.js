// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// ---------------------------------------------
// Consider this variable:

    var mantra = "Be the dev"

// 1a. Write the code that returns 'B' from mantra.
    function change(yes){
        return "B"
    } console.log(change(mantra))
// // 1b. Write the code that determines if there is an 'x' in mantra.
    function findX(find){
        if(find.includes('x')){
            return 'Mantra includes X'
        } else {
            return 'Mantra does not include X'
        }
    }
    console.log(findX(mantra))
// 1c. Write the code that determines if there is a 'v' in mantra.
    function findV(findit){
        if(findit.includes('v')){
            return 'Mantra includes v'
        } else {
            return 'Mantra does not include v'
        }
    }
    console.log(findV(mantra))
// 1d. Stretch: Write a function that can take any letter as an argument and returns if it exists within the given string.


// ---------------------------------------------------
// Consider the following variables:

    var myDog = "Snoopy"
    var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"
    function testLength(str1, str2){
        if(str1.length > str2.length){
            return str1
        } else if (str1.length < str2.length){
            return str2
        } else {
            return 'The strings are equal length'
        }
    }
    console.log(testLength(myDog, myCat))
// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]
    function mkArr(string1, string2){
        let newArr = []
        newArr.push(string1, string2)
        return newArr
    }
    console.log(mkArr(myDog, myCat))
// 2c. Stretch: Write a function that returns the two variables in all lowercase letters.
    function mkLowerCase(lower){
        return lower.toLowerCase()
    }
    console.log(mkLowerCase(myDog))
    console.log(mkLowerCase(myCat))
// -----------------------------------------------
// Consider this variable:

    var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.
    function loop1(letters){
        for(let i = 0; i < letters.length; i++){
            return letters.split('');
        }
    }
    console.log(loop1(myMessage))
// 4b. Stretch: Write the code that logs each letter of the message using a while loop.

// 4c. Super Stretch: Write the code that logs each letter of the message using forEach().


// ----------------------------------------------
// Consider the following variable:

    var testString = "thisisateststring"

// 5a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"
    function removeVow(string3){
        return string3.replace(/[aeiou]/g, '');
    }
    console.log(removeVow(testString));
// 5b. Stretch: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.


// ----------------------------------------------
// Consider the following variable:

    var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 6a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

    function getCats(name1){
        let newCats = toonimals.filter(value => value.animal === 'cat')
        return newCats
    }
    console.log(getCats(toonimals))

//6b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

function noCats(name2){
        let notCats = toonimals.filter(value => value.animal !== 'cat')
        return notCats
        return notCats.name
    }
    console.log(noCats(toonimals))
    // I cannot get the retuen of just the name
//6c. Stretch: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"
