function middleValue(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.val;
}

console.log(
  middleValue({ val: 1, next: { val: 3, next: { val: 5, next: null } } })
);
console.log(
  middleValue({
    val: 1,
    next: { val: 3, next: { val: 5, next: { val: 7, next: null } } },
  })
);
