'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 * @return 
 */
 
 
                function each(collection, action) {
                    if(Array.isArray(collection)) {
                        for(var i = 0; i < collection.length; i++) {
                            action(collection[i], i, collection);
                        }
                    } else {
                        for (var key in collection) {
                            action(collection[key], key, collection);
                        }
                    }
                }
                
                module.exports.each = each;


/*
 * identity: returns value unchanged
 * 
 * @param {value} value: any value
 * @param {value} value: return value unchanged
 */

                     function identity(value){
                         //return value unchanged
                         return value;
                     }
                     
                     module.exports.identity = identity

/*
* typeOf : Returns a value as a string
* 
* @param {value} value: This function identifies value's data type
*
*/
function typeOf(value){
    if (Array.isArray(value)){
        return 'array';
    } if (value === null){
        return 'null';
    }
    return typeof identity(value);
};
                                                
                    // _.typeOf = function(value){
                    //     //takes a single value, currently we dont know what kind
                    //         if(Array.isArray(value)){
                    //             //check to see if value is an array, if so:
                    //         return 'array';
                    //         //return 'array' as a string
                    //         } else if (value === null){
                    //             // checks if value is absent of any value
                    //             return 'null';
                    //                 //return null 
                    //         } return typeof value;
                    //                 // returns value's data type
                    //                     };
                    
                            module.exports.typeOf = typeOf;

/*
* first : Designed to check an array's type and return an array with new values
* 
* @param {array} array: Checks if the array is an array, returns a new array
* @param {number} number: Checks if number is not given or not a number

 */

             function first(array, number){
                 //declare a function that takes an array and a number
                if(!Array.isArray(array) || number < 0){
                    //if the array is not an array or if the number is less than zero
                    return []; 
                        //return a a new array
                } else if (typeof number !== 'number') {
                        // if the data type of number is not strictly equal to a number
                    return array[0];
                        //return the original array at it's index position
                    }
                    return array.slice(0, number);
                }; //return the original array from the index to the given number
             
              module.exports.first = first;

 
 /*
 * last : takes an array and returns an empty array, elements of an array, or
 * an array with new values
* 
* @param {array} array : checks for an array, returns an empty array if not
* @param {number}  number : a number to be checked
 */


function last(array, number){
    //declare a function that takes an array and a number as a parameter
    if(!Array.isArray(array) || number < 0){
    //Checks if 'array' is NOT an array, or if number is less than zero 
        return []; 
        //return an empty array
            } else if (typeof number !== 'number') {
            //if the data type of number is not strictly equal to a number
                return array[array.length - 1];
                //return the value at the at the array's final position
                   }
                return array.slice(-number);
                //return the array with 
    };          
    
     module.exports.last = last;
/*
 * indexOf : Takes an array and returns the first occurence of a specific value
*  in the array. 
* 
* @param {array} : an array to be iterated over
* @param {value} : a value te be compared to during the iteration
 */


 function indexOf(array, value) {
    //Declared a function that takes an array and a value,
    for(var i = 0; i < array.length; i++){
        //during the iteration of this loop, 
        if(array[i] === value){
            //if the iteration index value is the same as value
            return i; 
            //return the iteration index position
        }
    }
    return -1; 
};//if not, return negativate 1

 module.exports.indexOf = indexOf;


/*
 * contains : Designed to iterate over an array and return a boolean value based
 *          on the comparison of an iteration index value and a given value
* 
* @param {array} : an array to be checked if it contains a specific value
* @param {value} : a value to be checked during the iteration
 */


function contains(array, value){
    let result = false;
    //declare a variable with a boolean value
    for( var i = 0; i < array.length; i++){
     // the iteration over the array
            result = value === array[i] ? true : result;
            //while iterating, check if result(which is false) is the same as the iteration's current index position
            // if they are the same, return true, if it is the opposite, return result(false)
        }
        return result;
}       //return the result outside of the iteration

 module.exports.contains = contains;


/*
 * each : This function takes an array object, and runs a function on the iteration
         index value, the array's index, and the array object itself
* 
* @param {collection} collection : An array object to be iterated over with a Loop
*       based on it's type (A For or a For In Loop)
* @param {function} action: A function to run on multiple elements and properties
 */

function each(collection, action){
    if (Array.isArray(collection)){
         //if collection is an array, 
        for (let i = 0; i < collection.length; i++){
        action(collection[i], i, collection);
    } //iterate through the array and call the action function once on the specified values 
    } else {
        for (var key in collection){
            //if collection is an object, 
            action(collection[key], key, collection);
        } /*iterate through the object then, call the function for the iteration index position, 
         the keys in the object, and the object itself */
    }
    
};

 module.exports.each = each;


/*
 * unique : Takes an array, looks through it to find duplicates, 
 *          and returns a new array with the duplicates removed
 * 
 * @param {array} array : An array full of elements, the duplicates of which will be removed
 */

function unique(array) {
    //declared a function that takes an array as the parameter
    var newArr = [];
    //declared a new array literal in which to copy into with duplicate values removed
    for (var i = 0; i < array.length; i++){
        //iterating through the array to check elements
         if(newArr.includes(array[i])){
             /*conditional statement : if the new array already includes the 
             element at the current iteration index position, continue in the iteration*/
            } else {
                newArr.push(array[i]);
            } /* if the new array does NOT include an element that is the same as the iteration
            index position, push the element at the index position into the new array*/
    } return newArr;
}; //Finally, return the new array with no duplicate elements

 module.exports.unique = unique;


/*
 * filter : Calls a function for each element in array and returns a new array based
 *          on a boolean value
* 
* @param {array} array : an array to be iterated over while calling a function on itself and it's elements
* @param {function} action : a function to be called on an array and it's elements
 */


function filter(array,action){
    let newArr = [];
    //Declare a new array in which to print the values from the function call on the array
    if (Array.isArray(array)){
        //Tests in the array is an array, if so:
        for (let i = 0; i < array.length; i++){
        // during the iteration of the array:
        if (action(array[i], i, array) === true){ 
            //test the function on the array in the specified elements, if the return value is a truthy
        newArr.push(array[i]);
        }// push the iteration index postion into the new array
        }
        return newArr;
    }// return the new array outside of the iteration

}

 module.exports.filter = filter;

/*
* reject : Calls a function for each element in an array and returns a new array of the
*        false values in the array
* 
* @param {array} array : an array to be iterated through with a function call on specified
*               elemenets in the array
* @param {function} function : a function to be called on elements during the iteration,
                             used to return falsey values
*/
function reject(array,action){
  return  filter(array, function(element, index, array){
                // return elements that fail action
            return !action(element, index, array);
  });
  }

 module.exports.reject = reject;

/*
 * parition : Loops through an array and calls a function for spec. elements, returns
 *          a new array of 2 subarrays
* 
* @param {array} : an array to be tested and split into two sub arrays
* @param {function} : a function to be called on specified elements in an array
 */

function partition(array, func){
    let myArr = [[], []];
     
     each(array, function(element, index, array){
        if (func(element, index, array)){
                myArr[0].push(element);
        } else {        
            myArr[1].push(element);
        }
     });
     return myArr;
};


 module.exports.partition = partition;

/*
* map : Designed to iterate over a an array object, call a function for each iteration index postion, 
*       and returns a new array
* 
* @param {collection} : Collection to be iterated over which calls a function and returns the value
*                        in a new array
* @param {function} : a function to be called on the specified elements of an array object
*/

function map(collection, action){
    let myArr = [];
     if (Array.isArray(collection)){
     for (let i = 0; i < collection.length; i++){
        myArr.push(action(collection[i], i, collection));
     }
        } else {
        for (var key in collection){
            myArr.push(action(collection[key], key, collection));
        }
     }
      return myArr;
};

 module.exports.map = map;

/*
 * pluck: Designed to iterate through a collection and return an array containing 
         the value
 * 
 * @param {collection} collection: An array object to be iterated over
 * @param {property} value: The property to be printed to the new array
 */

/** _.pluck
* Arguments:
*   1) An array of objects //collection
*   2) A property
* Objectives:
*   1) Return an array containing the value
*  of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
 
function pluck(){}

//takes an array and a prop
//create result array
//loop over array
//return result
// _.pluck = function(array, prop){
//     let myArr = [];
//      for (let i = 0; i < array.length; i++){
//          array.push(array[i][prop]);
//              }
//          return myArr;
// };


function pluck(array, prop){
return map(array, function(element, index, collection){
    return element[prop];
});
}

 module.exports.pluck = pluck;


/*
 * some : Calls a function on the elements of a collection and returns a boolean value
* 
* @param {collection} collection : The collection to be iterated over 
* @param {function} function: The function to be called on elements in the collection 
*                           and returns a boolean based on the results
 */


 module.exports.some = some;


/*
 * reduce: 
 * 
 * @param {array} value:
 * @param {function} value: 
 * @param {a seed}
 */
 
 /*
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index

*   2) Use the return value of <function> as the "previous result"
*      for the next iteration

*   3) On the very first iteration, use <seed> as the "previous result"

*   4) If no <seed> was given, use the first element/value of <collection> as <seed> 
*   and continue to the next element

*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:

*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

/*
 * extend: 
 * 
 * @param {object} value: 
 * @param {object} value: 
 */
  function extend(){
      
  }
  
/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

module.exports.extend = extend;

