"use strict";
/* global describe */
/* global it */
/* global assert */
/* global checkForSum */

describe("checkForSum function", function() {
    it("correctly sees when a sum can be found", function() {
        assert.isTrue(checkForSum([3, 5, 8, 4], 9));
    });
    
    it("correctly sees when a sum cannot be found", function() {
        assert.isFalse(checkForSum([3, 5, 8, 4], 15));
    });

});