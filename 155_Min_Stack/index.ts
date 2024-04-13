class MinStack {
    stack: number[];
    minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val: number): void {
        this.stack.push(val);

        if (this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val);
        }
    }

    pop(): void {
        if (this.stack.pop() === this.getMin()) {
            this.minStack.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

var obj = new MinStack()
console.log(obj.push(-2));
console.log(obj.push(0));
console.log(obj.push(-3));
console.log(obj.getMin());
console.log(obj.pop());
var param_3 = obj.top();
console.log(param_3);
var param_4 = obj.getMin();
console.log(param_4);