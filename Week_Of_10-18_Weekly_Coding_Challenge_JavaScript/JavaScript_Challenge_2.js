//JavaScript Challenge 2: Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.

console.log(doesTriangleFit([1,1,1],[1,1,1])); //Returns true as the first triangle is the same size as the second.
console.log(doesTriangleFit([1,1,1],[2,2,2])); //Returns true as the first triangle is smaller than the second.
console.log(doesTriangleFit([1,2,3],[1,2,2])); //Returns false as the first triangle has invalid dimensions.
console.log(doesTriangleFit([1,2,4],[1,2,6])); //Returns fasle as the first and second triangles have invalid dimensions.

function doesTriangleFit(triangle1 = [], triangle2 = []){
    console.log("First Triangle", triangle1);
    console.log("Second Triangle", triangle2);

    //Checks if the first triangle has valid dimensions.
    if(triangle1[0] + triangle1[1] > triangle1[2] && triangle1[1] + triangle1[2] > triangle1[0] && triangle1[0] + triangle1[2] > triangle1[1]){

        //Checks if the second triangle has valid dimensions.
        if(triangle2[0] + triangle2[1] > triangle2[2] && triangle2[1] + triangle2[2] > triangle2[0] && triangle2[0] + triangle2[2] > triangle2[1]){

            //Returns the boolean result of whether the first triangle can fit in the second triangle or not.
            for(let i = 0; i < 3; i++){

                //If all indexes of the first array are smaller than the second, then it fits. Otherwise it rotates until it reaches the end of the loop and returns false.
                if((triangle1[i%3] <= triangle2[0]) && (triangle1[(i+1)%3] <= triangle2[1]) && (triangle1[(i+2)%3] <= triangle2[2])){
                    return true;
                }
            }
            //Returns false if both triangles had valid dimensions but triangle one could not fit into triangle two in any rotation.
            return false;
        }
        else{
            //Returns false if the second triangle has invalid dimentions.
            return false;
        }
    }
    else{
        //Returns false if the first triangle has invalid dimensions.
        return false;
    }
    
}