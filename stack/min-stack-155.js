class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [Infinity];
  }

  push(val) {
    this.stack.push(val);
    this.minStack.push(Math.min(this.getMin(), val));
  }

  pop() {
    const value = this.stack.pop();
    this.minStack.pop();
    return value;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
