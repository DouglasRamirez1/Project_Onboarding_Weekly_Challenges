//JavaScript Coding Challenge One: Write a function that takes a string as an argument and returns a list of all the words inflected by "-ing" (exclude all the mono-syllabic words)

let stringToBeTested = "Letting Ping Basketball Viking Wing Soccer Linger Lingering Going Aging dOing"; //String to be checked
const myArr = stringToBeTested.split(" "); //String split into an array to test each word.
ingExtractor(myArr); //calling the Tester

function ingExtractor(myArr) {

    let displayArr = []; //Successful words to be printed.

    for (let i = 0; i <= myArr.length - 1; i++) {
        
        if(myArr[i].endsWith("ing")){ //Exclusively searches words ending in "-ing"

            for(let f = 0; f < myArr[i].length - 3; f++){ //Loop to iterate through the characters of each words (excluding the "-ing" at the end)

                temp = myArr[i];
                let vowelCheck = temp.charAt(f).match(/[aeiouAEIOU]/); //Looks for vowels at the character index of the string.

                if(vowelCheck != null){ //If a vowel was found, add the word to the array to be displayed.
                    
                    displayArr.push(myArr[i]);
                    break;
                }
            }
        }
    }
    console.log(displayArr);
  }