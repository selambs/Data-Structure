"use strict";
/* global describe */
/* global it */
/* global assert */
/* global Employee */
/* global nameComparator */
describe("Employee sorter", function () {

    describe("nameComparator", function () {
        let employees = [
            new Employee("George", 40000, 1996, 11, 5),
            new Employee("Dave", 50000, 2000, 1, 3),
            new Employee("Richard", 45000, 2001, 2, 7)
        ];
        employees.sort(nameComparator);
        it("Sorts Employees by name", function () {
            assert.equal(employees[0].name, "Dave");
            assert.equal(employees[1].name, "George");
            assert.equal(employees[2].name, "Richard");
        });
    });

    describe("salaryComparator", function () {
        let employees = [
            new Employee("George", 40000, 1996, 11, 5),
            new Employee("Dave", 50000, 2000, 1, 3),
            new Employee("Richard", 45000, 2001, 2, 7)
        ];
        employees.sort(salaryComparator);
        it("Sorts Employees by salary", function () {
            assert.equal(employees[0].salary, 40000);
            assert.equal(employees[1].salary, 45000);
            assert.equal(employees[2].salary, 50000);
        });
    });

    describe("hireDateComparator", function () {
        let employees = [
            new Employee("George", 40000, 1996, 11, 5),
            new Employee("Dave", 50000, 2000, 1, 3),
            new Employee("Richard", 45000, 2001, 2, 7)
        ];
        employees.sort(hireDateComparator);
        it("Sorts Employees by hiredate", function () {
            assert.equal(employees[0].name, "George");
            assert.equal(employees[1].name, "Dave");
            assert.equal(employees[2].name, "Richard");
        });
    });
})
