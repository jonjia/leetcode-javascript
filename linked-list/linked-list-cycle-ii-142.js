const detectCycle = (head) => {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      while (head !== slow) {
        head = head.next;
        slow = slow.next;
      }
      return head;
    }
  }
  return null;
};
