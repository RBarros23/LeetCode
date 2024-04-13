"use strict";
/**
 * When we find an operator we use that operator to calculate with the
 * top 2 numbers in the stack
 *
 * Need a stack
 * hashmap with all the operators
 * 1 for cycle is enough O(n)
 * In each element of the cycle we confirm in char exist on the hashmap
 * If does, do the calculation with the top 2 elements of the stack
 */
function evalRPN(tokens) {
    const calculation = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b)
    };
    const stack = [];
    tokens.forEach((char) => {
        if (char in calculation) {
            let first = stack.pop();
            let second = stack.pop();
            let firstCalc = calculation[char](second, first);
            stack.push(firstCalc);
        }
        else {
            stack.push(Number(char));
        }
    });
    return Number(stack.pop());
}
;
console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
