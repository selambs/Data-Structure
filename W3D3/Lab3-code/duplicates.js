"use strict";

/**
 * Function that removes duplicated values of an array of numbers
 * 
 * @param {Array} numList array of numbers with duplicate value
 * @returns {Array} arry of numbers with out duplicated values
 */
function removeDups(numList){
    let mySet = new Set();
    for (let i = 0; i < numList.length; i++) {
        mySet.add(numList[i]);
    }

    let nodups = [];
    for (const num of mySet) {
        nodups.push(num);
    }
    return nodups;
}
// let numList=[1,2,3,4,2,3,5,4,4,3];
// console.log(...new Set(numList));