const reverseKGroup = (head, k) => {
  const prevHead = new ListNode(0, head);
  let prev = prevHead;
  while (head) {
    let end = getEnd(head, k);
    if (!end) break;
    const next = end.next;
    [head, end] = reverseList(head, end);
    prev.next = head;
    end.next = next;
    prev = end;
    head = next;
  }

  return prevHead.next;
};

const getEnd = (head, k) => {
  while (head) {
    k--;
    if (k === 0) break;
    head = head.next;
  }
  return head;
};

const reverseList = (head, tail) => {
  let prev = null;
  // 不能直接修改 head
  let current = head;
  while (prev !== tail) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return [tail, head];
};
