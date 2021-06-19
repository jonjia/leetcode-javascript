const mergeTwoLists = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;
  let result;
  if (l1.val <= l2.val) {
    result = l1;
    l1 = l1.next;
  } else {
    result = l2;
    l2 = l2.next;
  }

  let current = result;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1) {
    current.next = l1;
  } else {
    current.next = l2;
  }

  return result;
};
