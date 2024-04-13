function evalRPN(tokens: string[]): number {
    type BinaryOperation = (a: number, b: number) => number;
    const calculation: Record<string, BinaryOperation> = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc( a / b )
    }
    const stack: number[] = [];
    
    tokens.forEach((char) => {
        if ( char in calculation) {
            let first = stack.pop();
            let second = stack.pop();
            let firstCalc = calculation[char](second!, first!);
            stack.push(firstCalc);
        }
        else{
            stack.push(Number(char));
        }
    })
    return Number(stack.pop());
};

console.log(evalRPN(["2","1","+","3","*"]));
console.log(evalRPN(["4","13","5","/","+"]));
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));