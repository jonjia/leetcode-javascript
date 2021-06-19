class MyCircularDeque {
  constructor(k) {
    this.head = null;
    this.tail = null;
    this.length = k;
  }

  insertFront(val) {
    if (this.isFull()) return false;
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return true;
  }

  insertLast(val) {
    if (this.isFull()) return false;
    const newNode = new Node(val);
    if (!this.tail) {
      this.tail = newNode;
      this.head = this.tail;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return true;
  }

  deleteFront() {
    if (this.isEmpty()) return false;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return true;
  }

  deleteLast() {
    if (this.isEmpty()) return false;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    return true;
  }

  getFront() {
    return this.head ? this.head.val : -1;
  }

  getRear() {
    return this.tail ? this.tail.val : -1;
  }

  isEmpty() {
    return this.head === null && this.tail === null;
  }

  isFull() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }

    return count === this.length;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
