//JavaScript Coding Challenge 2: Your task is to create a function that simulates a vending machine.
//Given an amount of money and a productNumber, the vending machine should output the correct product name and give back the correct amount of change.
//The return value is an object with 2 properties: The product (name) and the change (array of coins).

//Notes:
//If productNumber is invalid (out of range) you should return the string: "Enter a valid product number".
//If money is not enough to buy a certain product you should return the string: "Not enough money for this product".
//If there's no change, return an empty array as the change.

let products = [ //Array of products in the vending machine.
    {
        productId: 1,
        productName: "Chips",
        productPrice: 100
    },
    {
        productId: 2,
        productName: "Crackers",
        productPrice: 500
    },
    {
        productId: 3,
        productName: "Cookies",
        productPrice: 200
    }
]

console.log(vendingMachine(products, 680, 2)); //Will return a successful object with properties for Product Name and Change array.
console.log(vendingMachine(products, 200, 3)); //Will return a successful object with properties for Product Name and an empty Change array (exact change was used).
console.log(vendingMachine(products, 100, 3)); //Will return an error message as the money provided is lower than the price of the product selected.
console.log(vendingMachine(products, 500, 5)); //Will return an error message as the product selected is invalid (out of range).

function vendingMachine(products, money, selection){

    selection = selection - 1; //Adjusts the secetion by 1 to accomodate the Array Index and the Selection ID.

    let acceptableCoins = [500, 200, 100, 50, 20, 10]; //Array of coins to be used on the machine

    if(money % 10 != 0){ //Checks if an invalid number of currency was inserter, as everything must be divisible by 10.
        return "Invalid money value used."; 
    }

    if(selection <= 0 || selection > products.length){ //Checks if the selection ID is invalid (out of range).
        return "Enter a valid product number.";
    }

    if(money < products[selection].productPrice){ //Checks if the money inserted is less than the price of the product selected.
        return "Not enough money for this product.";
    }

    else{

        let change = money - products[selection].productPrice; //Defines the total change to be given.
        let changeArray = []; //Array to represent the change in the correct coin format.

        //If the change is 0 (exact change), the array representing change in coins will be empty.
        if(change > 0){
            for(let changeChecker of acceptableCoins){ //Divides the change into the acceptable coins
                while(change >= changeChecker){
                    change = change - changeChecker;
                    changeArray.push(changeChecker);
                };
            };
        };

        //Object to be returned with product name and change as an array of coins.
        let returnValues = {
            Product: products[selection].productName,
            Change: changeArray
        };
        return returnValues; //return the object with properties representing product name and change as an array of coins.
    }
} 