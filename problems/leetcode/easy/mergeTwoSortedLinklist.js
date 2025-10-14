function mergeTwoLists(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let list = null;
  let tail = null;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      list.next = list1;
      tail = list1.next;
    } else {
      list.next = list2;
      tail = list2.next;
    }
    list = list.next;
  }

  if (list1) {
    list.next = list1;
  }

  if (list2) {
    list.next = list2;
  }
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])); // [1,1,2,3,4,4]
console.log(mergeTwoLists([], [])); // []
console.log(mergeTwoLists([], [0])); // [0]
