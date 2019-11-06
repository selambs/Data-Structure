/* eslint-disable require-jsdoc */
"use strict";

// eslint-disable-next-line no-unused-vars
/**
 * Function that search for an element in an array using binary search algorithm
 * 
 * @param {Number or String} value the value to search
 * @param {Array} array array of numbers or strings or objects
 * @returns {Number} the index of an element if found otherwise -1
 */
function binarySearch(value, array) {
    let begin = 0;
    let end = array.length;

    while (end - begin >= 0) {
        let middle = Math.floor((begin + end) / 2);
        if (array[middle] === value) {
            return middle;
        } else if (array[middle] > value) {
            end = middle;
        } else {
            begin = middle;
        }
    }

    return -1;
}

/**
 * Function that search for an element in an array using linear search algorithm
 * 
 * @param {Number or String} value the value to search
 * @param {Array} array array of numbers or strings or objects
 * @returns {Number} the index of an element if found otherwise -1
 */
function linearSearch(value, array) {
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) {
            return i;
        }
    }

    return -1;
}

/**
 * Function that sorts an array in descending order using bubble sort algorithm
 * 
 * @param {Array} array array of numbers or strings or objects
 * @returns {Array} the sorted array
 */
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            let current = array[j];
            if (current > array[j + 1]) {
                array[j] = array[j + 1];
                array[j + 1] = current;
            }
        }
    }

    return array;
}

/**
 * Function that sorts an array in descending order using insertion sort algorithm
 * 
 * @param {Array} array array of numbers or strings or objects
 * @returns {Array} the sorted array
 */
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
            if (array[j - 1] > array[j]) {
                let temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            } else {
                break;
            }
        }
    }

    return array;
}
let arr = [5, 8, 3, 6, 9, 0];
let result = bubbleSort(arr);
console.log(result);