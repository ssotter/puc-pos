class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
     return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }clear() {
        this.items = [];
    }
    size() {
        return this.items.length;
    }
}

var myStack = new Stack();

myStack.push(5);
console.log(myStack.peek());

myStack.push(8);
console.log(myStack.size());

myStack.push(11);
console.log(myStack.isEmpty());

myStack.pop();
console.log(myStack.size());

myStack.clear();
console.log(myStack.isEmpty());