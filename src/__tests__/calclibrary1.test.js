"use strict";

const { subtract } = require("../calclibrary");

describe("Testing subtract with integers", () => {
  test("subtract(1,1) returns 2", () => {
    expect(subtract(1, 1)).toBe(0);
  });

  test("subtract(2,3) returns -1", () => {
    expect(subtract(2, 3)).toBe(-1);
  });

  const testValues = [
    // a, b, result
    [-2, 4, -6],
    [-2, -4, 2],
    [2, -4, 6],
    [0, 0, 0],
    [0, 3, -3],
    [3, 0, 3],
    [0, -3, 3],
    [-3, 0, -3],
    [123, 200, -77],
    [-500, -500, 0],
    [500, 500, 0],
    [500, -500, 1000],
    [-500, 500, -1000],
  ];

  test.each(testValues)("subtract(%s, %s) = %s", (a, b, result) => {
    expect(subtract(a, b)).toBe(result);
  });
});

describe('Testing subtract with floats', () => {
  const testValues = [
    // a,b, result
    [10, 11.5, -1.5],
    [2.5, 3, -0.5],
    [-2.5, 3, -5.5],
    [3, -2.5, 5.5],
    [-2.5, -3, 0.5],
    [-2.5, 2.5, -5],
    [2.4, -2.5, 4.9],
    [499.9, 500.0, -0.1],
    [-499.9, -500.0, 0.1],
    [-499.9, 500.0, -999.9],
    [-499.9, 500, -999.9],
  ];

  test.each(testValues)("subtract(%s, %s) = %s", (a, b, result) => {
    expect(subtract(a, b)).toBeCloseTo(result);
  });
});

describe('Testing missing parameter', () => {
  test('sum() throws an exception', () => {
    expect(() => subtract()).toThrow('parameter missing');
  });

  test('sum(1) throws an exception', () => {
    expect(() => subtract(1)).toThrow('parameter missing');
  });
});

describe('parameters are not number', () => {
  const testValues = [
    // label, a, b
    ["subtract('1','2')", '1', '2'],
    ["subtract('1',2)", "1", 2],
    ["subtract(1,'2')", 1, "2"],
    ["subtract('a','b')", 'a', 'b'],
    ["subtract('','')", '', ''],
    ["subtract(true,true)", true, true],
    ["subtract(false,false)", false, false],
    ["subtract(true,false)", true, false],
    ["subtract(false,true)", false, true]
  ];

  test.each(testValues)('%s throws "only numbers allowed"', (label, a, b) => {
    expect(() => subtract(a, b)).toThrow("only numbers allowed");
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

  test.each(testValues)('subtract(%s, %s) throws exception', (a, b) => {
    expect(() => subtract(a, b)).toThrow("numbers not between -500 and 500");
  });
});

