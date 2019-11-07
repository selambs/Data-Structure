"use strict";
/**Checks the sum of two numbers in an array equal to the value
 * @param  {Array} numList array of list of numbers
 * @param  {number} numZ the value of sum of two numbers
 * @returns {Boolean} returns true of false
 */
function checkForSum(numList, numZ){
    let num = new Map();

    for (let i = 0; i < numList.length; i++) {
        num.set(numList[i], numZ - numList[i]);   
    }

    for (const [key, value] of num) {
        if (num.has(value)) {
            return true;
        }
    }

    return false;
}

// let forCheck = checkForSum([1, 2, 3, 4], 7);
// console.log(forCheck);