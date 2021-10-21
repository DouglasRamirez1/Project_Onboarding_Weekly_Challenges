package com.revature;

public class Main {

    public static void main(String[] args) {
//Create a function that takes a string and applies the Atbash cipher to it.
//The Atbash cipher is an encryption method in which each letter of a word is replaced with its "mirror" letter in the alphabet:

    	String str = "Hello world!"; //string to be reversed
		char[] strCharArr = str.toCharArray(); //string as an array of char values
		char mirroredChar; //the individual reversed char values to be printed
		System.out.println("Original String: " + str);
		System.out.print("Mirror String: ");
		for (char character : strCharArr){ //enhanced for-loop to iterate through the char array

			//checking if the char is a lowercase character between 'a' and 'z'
			if(Character.isLowerCase(character)){
				mirroredChar = (char) ('z' - ((int) character - 97)); //creates a count value ranging from 'a'(0) to 'z'(26) and counts back from 'z'
				System.out.print(mirroredChar);
			}

			//checking if the char is an uppercase character between 'A' and 'Z'
			else if(Character.isUpperCase(character)){
				mirroredChar = (char) ('Z' - ((int) character - 65));//creates a count value ranging from 'A'(0) to 'Z'(26) and counts back from 'Z'
				System.out.print(mirroredChar);
			}

			//All other char values are printed normally.
			else{
				System.out.print(character);
			}
		}
		}
}
