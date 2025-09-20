class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  isEmpty() {
    return this.front - this.rear === 0;
  }

  dequeue() {
    if (!this.isEmpty()) {
      const item = this.items[this.front];
      delete this.items[this.front];
      this.front++;
      return item;
    } else {
      return "Queue is empty";
    }
  }

  peak() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    } else {
      return "Queue is empty";
    }
  }

  print() {
    return this.items;
  }
}

const queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.peak());
console.log(queue.print());
console.log(queue.dequeue());
console.log(queue.peak());
console.log(queue.print());
