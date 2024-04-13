"use strict";
class MinStack {
    constructor() {
        this.arr = [];
    }
    push(val) {
        this.arr.push(val);
    }
    pop() {
        this.arr.pop();
    }
    top() {
        return this.arr[this.arr.length - 1];
    }
    getMin() {
        return Math.min(...this.arr);
    }
}
var obj = new MinStack();
console.log(obj.push(-2));
console.log(obj.push(0));
console.log(obj.push(-3));
console.log(obj.getMin());
console.log(obj.pop());
var param_3 = obj.top();
console.log(param_3);
var param_4 = obj.getMin();
console.log(param_4);
