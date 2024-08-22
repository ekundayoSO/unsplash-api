"use strict";

const { sum, subtract } = require("../calclibrary");

describe("Testing sum with integers", () => {
  test("sum(1,1) returns 2", () => {
    expect(sum(1, 1)).toBe(2);
  });

  test("sum(2,3) returns 5", () => {
    expect(sum(2, 3)).toBe(5);
  });

  const testValues = [
    // a, b, result
    [-2, -4, -6],
    [-2, 4, 2],
    [2, -4, -2],
    [0, 0, 0],
    [0, 3, 3],
    [3, 0, 3],
    [0, -3, -3],
    [-3, 0, -3],
    [123, 200, 323],
    [-500, -500, -1000],
    [500, 500, 1000],
    [500, -500, 0],
    [-500, 500, 0],
  ];

  test.each(testValues)("sum(%s, %s) = %s", (a, b, result) => {
    expect(sum(a, b)).toBe(result);
  });
});

describe('Testing with floats', () => {
  const testValues = [
    // a,b, result
    [10, 11.5, 21.5],
    [2.5, 3, 5.5],
    [-2.5, 3, 0.5],
    [3, -2.5, 0.5],
    [-2.5, -3, -5.5],
    [-2.5, 2.5, 0],
    [2.4, -2.5, -0.1],
    [499.9, 500.0, 999.9],
    [-499.9, -500.0, -999.9],
    [-499.9, 500.0, 0.1],
    [-499.9, 500, 0.1],
  ];

  test.each(testValues)("sum(%s, %s) = %s", (a, b, result) => {
    expect(sum(a, b)).toBeCloseTo(result);
  });
});

describe('Testing missing parameter', () => {
  test('sum() throws an exception', () => {
    expect(() => sum()).toThrow('parameter missing');
  });

  test('sum(1) throws an exception', () => {
    expect(() => sum(1)).toThrow('parameter missing');
  });
});

describe('parameters are not number', () => {
  const testValues = [
    // label, a, b
    ["sum('1','2')", '1', '2'],
    ["sum('1',2)", "1", 2],
    ["sum(1,'2')", 1, "2"],
    ["sum('a','b')", 'a', 'b'],
    ["sum('','')", '', ''],
    ["sum(true,true)", true, true],
    ["sum(false,false)", false, false],
    ["sum(true,false)", true, false],
    ["sum(false,true)", false, true]
  ];

  test.each(testValues)('%s throws "only numbers allowed"', (label, a, b) => {
    expect(() => sum(a, b)).toThrow("only numbers allowed");
  });
})

describe("Test parameters not between -500 and 500", () => {
  const testValues = [
    // a, b
    [1000, 500],
    [500, 501],
    [-500.1, 200],
    [300, 500.1],
  ];

  test.each(testValues)('sum(%s, %s) throws exception', (a, b) => {
    expect(() => sum(a, b)).toThrow("numbers not between -500 and 500");
  });
});

describe("Test parameters not between -500 and 500", () => {
  const testValues = [
    // a, b
    [1000, 500],
    [500, 501],
    [-500.1, 200],
    [300, 500.1],
  ];

  test.each(testValues)("subtract(%s, %s) throws exception", (a, b) => {
    expect(() => subtract(a, b)).toThrow("numbers not between -500 and 500");
  });
});

