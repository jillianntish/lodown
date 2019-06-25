'use strict';

// YOU KNOW WHAT TO DO //

/*******************************************************************************
 * 
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 *  
 *
 ******************************************************************************/
 
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
                
/*******************************************************************************
 * 
 * identity: THe identity function returns value unchanged
 * 
 * @param {value} value: any value
 * @return {value} : a value unchanged
 *
 ******************************************************************************/
    function identity(value){
        return value;
            }
/*******************************************************************************
*
* typeOf : The typeOf function returns a value as a string
* 
* @param {value} value: A Data type to be checked and returned
*
* @return {String} value : The value is returned as a String
*******************************************************************************/
    
    function typeOf(value){
        if (Array.isArray(value)){
            return 'Array';
        } if (value === null){
            return 'Null';
        }
        return typeof identity(value);
        }
                   

/*******************************************************************************
* 
* first : Designed to check a data type and return an array with new values
* 
* @param {Array} array: Checks if the value is NOT an array and returns a new array
*                       if it is true that it is NOT an array.
* 
* @param {number} number: Checks if number is less than zero or if the given number
*                       is not a Number. If it is not a number, return the given 
*                       array at the zero-index position. If the number IS a number
*                       return a new array with the first instance of a number.
*
* @return {Array} array: Returns a new array with some of the values from the
*                       old array from the beginning to the first instance of a
*                       number
*******************************************************************************/

    function first(array, number){
        if(!Array.isArray(array) || number < 0){
            return []; 
                } else if (number !== 'Number') {
                return array[0];
                }
                return array.slice(0, number);
                }
                    
 
/*******************************************************************************
* last : takes an array and returns an empty array, elements of an array, or
* an array with new values
* 
* @param {array} array : checks for an array, returns an empty array if not
* @param {number}  number : a number to be checked
* 
* @return {array} array : returns a new array with values from the old array 
*                       starting from the END of the array to the first instance
*                       of a number
***************************************************************************** */


    function last(array, number){
        if(!Array.isArray(array) || number < 0){
            return []; 
                } else if (number !== 'Number') {
                    return array[array.length - 1];
                       }
                    return array.slice(-number);
                       }          
        
/*******************************************************************************
* 
* indexOf : Takes an array and returns the first occurence of a specific value
*  in the array. 
* 
* @param {array} : an array to be iterated over
* @param {value} : a value te be compared to during the iteration
* 
* @return {value} : Returns the index of a value an array or -1 if it is not in the
*                   array
*   
*******************************************************************************/

    function indexOf(array, value) {
         for(var i = 0; i < array.length; i++){
            if(array[i] === value){
                return i; 
                }
                }
                return -1; 
                }

/*******************************************************************************
* 
* contains :  Designed to check if an element is present in an array and returns 
* true if it exists, or false otherwise. 
* 
* @param {array} : an array to be checked if it contains a specific value
* @param {value} : a value to be checked during the iteration
* 
* @return {boolean} result : A boolean value that is returned based on conditions
*                           in the array.
*
*******************************************************************************/

    function contains(array, value){
        let result = false;
        for( var i = 0; i < array.length; i++){
                result = value === array[i] ? true : result;
            }
            return result;
            }


/*******************************************************************************
 * unique : Takes an array, looks through it to find duplicates, 
 *          and returns a new array with the duplicates removed
 * 
 * @param {array} array : An array full of elements, the duplicates of which 
 *                       will be removed
 * 
 * @return {array} array : Returns a new array of the old array in which all 
 *                          elements from have been duplicates removed
 * 
 ******************************************************************************/

    function unique(array) {
        var newArr = [];
            for (var i = 0; i < array.length; i++){
                if(newArr.includes(array[i])){
                     } else {
                    newArr.push(array[i]);
             } return newArr;
             }
             }


/*******************************************************************************
* filter : Calls a function for each element in array and returns a new array 
*          based on a boolean value
* 
* @param {array} array : an array to be iterated over while calling a function 
*                        on itself and it's elements
* 
* @param {function} action : a function to be called on an array and it's elements
* 
* @return {array} newArr: Filters through a collection, and returns a new array,
*                       based on truthy values in the collection
* 
*******************************************************************************/


    function filter(array,action){
        let newArr = [];
        if (Array.isArray(array)){
            for (let i = 0; i < array.length; i++){
            if (action(array[i], i, array) === true){ 
            newArr.push(array[i]);
            }
            }
            return newArr;
            }
            }


/*******************************************************************************
* 
* reject : Calls a function for each element in an array and returns a new array 
*       of the false values in the array
* 
* @param {array} array : an array to be iterated through with a function call on
* specified elements in the array
* 
* @param {function} action : a function to be called on elements during the
* iteration, used to return falsey values
* 
* @return {array} array : Returns a new array of values that return falsey values 
* after having a mutation performed on them
*                             
*******************************************************************************/
    function reject(array,action){
        return  filter(array, function(element, index, array){
            return !action(element, index, array);
                });
                }

/*******************************************************************************
* 
* partition : Loops through an array and calls a function for spec. elements, 
*            returns a new array of 2 subarrays
* 
* @param {array} array : an array to be tested and split into two sub arrays
* @param {function} action : a function to be called on specified elements in an
*                           array
* 
* @return {two arrays} : Returns two arrays, one based on truthy values and one 
*                       based on falsey values
*
*******************************************************************************/
 
 
    function partition (array, action){
        let myArr = [[], []];
         each(array, function(element, key, array){
            if (action(element, key, array)){
                    myArr[0].push(element);
            } else {        
                myArr[1].push(element);
            }
         });
         return myArr;
        }


/*******************************************************************************
* 
* map : Designed to iterate over a an array object, call a function for each 
*       iteration index postion, and return a new array
* 
* @param {collection} collection : Collection to be iterated over which calls a 
* function and returns the value in a new array
* @param {function} action : a function to be called on the specified elements of an
*                       array object
* 
* @return {array} : Filters through an array or an object and returns mutated values
*                   in a new element
*
*******************************************************************************/

   function map(collection, action){
    let myArr = [];
    each(collection, function(element, index, collection){
       myArr.push(action(element, index, collection))
    });
return myArr;
}
                   

/*******************************************************************************
 *
 *
 * pluck: Designed to iterate through a collection and return an array containing 
 *        the value
 * 
 * @param {collection} collection: An array object to be iterated over
 * @param {property} prop : The property to be printed to the new array
 *
 *@return {value} prop : 'Plucks' a mutated value from an array or object and 
 *                       returns it
 *
 ******************************************************************************/

    function pluck(collection, prop){
        return map(collection, function(element, index, collection){
            return element[prop];
                });
                }
                
                
/*******************************************************************************
 *
 *
 * every: Designed to iterate through a collection and return a truthy value based
 *      on values that have passed a certain test
 * 
 * @param {collection} collection: An array object to be iterated over
 * @param {function} action: 
 *
 * @return {boolean} bool : Returns a boolean value based on whether or a not a 
 * function has been defined and if the mutations on the elements and the collection
 *  return a truthy value
 * 
 *
 ******************************************************************************/
             
function every(collection, action){
       let bool = true;
        each(collection, function(element, index, collection) {
        if (typeof action === 'function' && !action(element, index, collection)){
            bool = false;
            }
            else if (typeof action !== 'function' && !element) {
            bool = false;
            }
            });
            return bool;
    }

/*******************************************************************************
* 
* some : Calls a function on the elements of a collection and returns a falsey
*       value based on values that have failed a certain test
* 
* @param {collection} collection : The collection to be iterated over 
* @param {function} action: The function to be called on elements in the 
* collection and returns a boolean based on the results
* 
* @return {boolean} bool : Returns a boolean value based on whether or a not a 
 * function has been defined and if the mutations on the elements and the collection
 * return a falsey value
*******************************************************************************/

    function some(collection, action){
       let bool = false;
        each(collection, function(element, index, collection) {
        if (typeof action === 'function' && action(element, index, collection)){
            bool = true;
            }
            else if (typeof action !== 'function' && element) {
            bool = true;
            }
            });
            return bool;
             }


/*******************************************************************************
 * reduce: Designed to reduce an array of values into a single value.
 *
 * 
 * @param {array} array: an array to be iterated through
 * 
 * @param {function} action: a function to be called on spec. values using the
 * arguments to represent the previous result(seed), current result (element),
 * index, and the array or object itself
 * 
 * @param {accumulator} seed : An accumulator that collects the values being 
 *                          iterated through
 * 
 * @return {accumulator} seed : If seed is not defin
 * 
 *
 ******************************************************************************/
 

function reduce(array, action, seed) {
    if (seed === undefined) {
        seed = array[0];
        for (let i = 1; i < array.length; i++) {
            seed = action(seed, array[i], i);
        }
    }
    else {
        for (let i = 0; i < array.length; i++) {
            seed = action(seed, array[i], i);
        }
    }
    return seed;
}

/*******************************************************************************
 * extend: a function that copies one object into another plus whatever new objects
 *         that may come after it
 * 
 * @param {object} object1: A target object for object2 and it's future arguments 
 *                          to copied INTO.
 * @param {object} object2: The source object which properties and future arguments
 *                          will be copied FROM
 * 
 * @return {object} object1 : Returns the target object with values from the source
 *                          object copied into it.
 */
 
 
    function extend(object1, object2) {
        return Object.assign(object1, ...arguments);
            }


////////////////////////////////////////////////////////////////////////////////
module.exports.each = each;
module.exports.identity = identity;
module.exports.typeOf = typeOf;
module.exports.first = first;
module.exports.last = last;
module.exports.indexOf = indexOf;
module.exports.contains = contains;
module.exports.unique = unique;
module.exports.filter = filter;
module.exports.reject = reject;
module.exports.partition = partition;
module.exports.map = map;
module.exports.pluck = pluck;
module.exports.some = some;
module.exports.reduce = reduce;
module.exports.extend = extend;