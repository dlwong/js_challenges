var middleNode = function(head) {
  let length = 1;
  let count = 1;
  let mid = 0;
  let dummy = head;

  while (dummy.next){
    length++;
    dummy = dummy.next;
  }
  debugger;
  if (length % 2 === 0) {
    mid = (length/2) + 1;
  } else {
    mid = Math.ceil(length/2);
  }
  
  dummy = head;
  
  while (dummy){
    if (count === mid){
      return dummy;
    }
    count++;
    dummy = dummy.next;
  }

};


class ListNode {
  constructor (val){
    this.val = val;
    this.next = null;
  }
}

const a = new ListNode(1)
a.next = new ListNode(2)
a.next.next = new ListNode(3)
a.next.next.next = new ListNode(4)
a.next.next.next.next = new ListNode(5)
a.next.next.next.next.next = new ListNode(6)
console.log(middleNode(a))