function ListNode(val) {
    this.val = val;
    this.next = null;
}

const mergeLists = (a,b) => {
  const dummy = new ListNode(0);
  let temp = dummy;

  while (a && b) {
    if (a.val < b.val) {
      temp.next = a;
      a = a.next;
    }else {
      temp.next = b;
      b = b.next;
    }
    temp = temp.next;
  }
  if (a) {
    temp.next = a;
  }
  if (b) {
    temp.next = b;
  }
  return dummy.next;
}

const mergeKLists = (lists) => {
  if (lists.length === 0) {
    return null;
  }

  while (lists.length > 1) {
    const a = lists.shift();
    const b = lists.shift();
    lists.push(mergeLists(a,b));
  }
  return lists[0];
}


const a = new ListNode(1);
a.next = new ListNode(4);
a.next.next = new ListNode(5);
const b = new ListNode(1);
b.next = new ListNode(3);
b.next.next = new ListNode(4);
const c = new ListNode(2);
c.next = new ListNode(6);
lists = [a,b,c]

console.log(mergeKLists(lists)) 
//[
//   1->4->5,
//   1->3->4,
//   2->6
// ]
//1->1->2->3->4->4->5->6