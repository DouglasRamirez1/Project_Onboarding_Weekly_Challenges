package com.revature;

public class Main {

    public static void main(String[] args) {

    	String str = "Hello world!"; //string to be reversed
		char[] strCharArr = str.toCharArray(); //string as an array of char values
		char mirroredChar; //the individual reversed char values to be printed
		System.out.println("Original String: " + str);
		System.out.print("Mirror String: ");
		for (char character : strCharArr){ //enhanced for-loop to iterate through the char array

			//checking if the char is a character between 'a' and 'z'
			if(Character.isLowerCase(character)){
				mirroredChar = (char) ('z' - ((int) character - 97)); //creates a counter ranging from 'a'(0) to 'z'(26) and counts back from 'z'
				System.out.print(mirroredChar);
			}

			//checking if the char is a character between 'A' and 'Z'
			else if(Character.isUpperCase(character)){
				mirroredChar = (char) ('Z' - ((int) character - 65));//creates a counter ranging from 'A'(0) to 'Z'(26) and counts back from 'Z'
				System.out.print(mirroredChar);
			}

			//All other char values are printed normally.
			else{
				System.out.print(character);
			}
		}
		}
}
