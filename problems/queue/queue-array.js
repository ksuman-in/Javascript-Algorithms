class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.items.shift();
    }
    return "Queue is empty";
  }

  peak() {
    if (!this.isEmpty()) {
      return this.items[0];
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
console.log(queue.print());

console.log(queue.dequeue());
console.log(queue.print());
console.log(queue.peak());
