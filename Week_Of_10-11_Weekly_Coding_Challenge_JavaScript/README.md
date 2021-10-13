# JavaScript Challenges (Week of October 11)

## Challenge 1: Write a function that takes a string as an argument and returns a list of all the words inflected by "-ing".
* Your function should also exclude all the mono-syllabic words ending in "-ing"

## Challenge 2: Create a function that simulates a vending machine.
* Given an amount of money and a productNumber, the vending machine should output the correct product name and give back the correct amount of change.
* The coins used for the change are the following: [500, 200, 100, 50, 20, 10]
* The return value is an object with 2 properties:
  *   product: the product name that the user selected.
  *   change: an array of coins (can be empty, must be sorted in descending order).
* Notes:
  *  If productNumber is invalid (out of range) you should return the string: "Enter a valid product number".
  *  If money is not enough to buy a certain product you should return the string: "Not enough money for this product".
  *  If there's no change, return an empty array as the change.
