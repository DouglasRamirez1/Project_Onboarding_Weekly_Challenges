package com.revature;

import java.util.HashMap;

public class Main {

    public static void main(String[] args) {
//Coding Challenge One:
//Write a Java Program to iterate HashMap using While and advance for loop.

        System.out.println("JAVA CODING CHALLENGE 1: Write a Java Program to\n" +
                            "iterate HashMap using while and advanced for loop.\n");

        HashMap<Integer, String> students = new HashMap<Integer, String>();
        students.put(1, "Douglas");
        students.put(2, "John");
        students.put(3, "Eric");
        students.put(4, "David");
        students.put(5, "Richard");

        int key = 1;
        System.out.println("While loop output (size of " + students.size() + "):");
        while(key <= students.size()){
            System.out.println(students.get(key));
            key++;
        }

        System.out.println("\nEnhanced for-loop output (size of " + students.size() + "):");
        for (String i : students.values()) {
            System.out.println(i);
        }
        System.out.println("////////////////////////////////////////////////////////////////////////////////////////");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Coding Challenge 2
//Write a program which accepts two given String and checks if they are the rotation of each.

        System.out.println("\nJAVA CODING CHALLENGE 2: Write a program which accepts two given String\n" +
                            "and checks if they are the rotation of each.\n");

        String s1 = "abcd";
        String s2 = "bcda";
        String s3 = "dbac";
        String s4 = "abc";

        //Checks if S1 and S2 are rotations of each other and prints the results
        RotationChecker.printIfTheyAreRotations(s1, s2, RotationChecker.isRotation(s1, s2));

        //Checks if S1 and S3 are rotations of each other and prints the results
        RotationChecker.printIfTheyAreRotations(s1, s3, RotationChecker.isRotation(s1, s3));

        //Checks if S1 and S4 are rotations of each other and prints the results
        RotationChecker.printIfTheyAreRotations(s1, s4, RotationChecker.isRotation(s1, s4));

    }
}

class RotationChecker{

    public static boolean isRotation(String first, String second){

        //If they are rotations of each other, the second string will be found within here.
        String temp = first + first;

        //Checks if the lengths are equal and if second string is found in the temp string made of the first.
        return (first.length() == second.length() && temp.contains(second));
    }
    public static void printIfTheyAreRotations(String first, String second, boolean areTheyRotations){
        if (areTheyRotations){
            System.out.println("The strings '" + first + "' and '" + second + "' are rotations of each other.");
        }
        else {
            System.out.println("The strings '" + first + "' and '" + second + "' are NOT rotations of each other.");
        }
    }
}
