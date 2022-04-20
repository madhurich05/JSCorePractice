Reverse Linked List

const reverseList = head => {
    let [prev, curr] = [null, head];
    while(curr) {
        [curr.next, prev, curr] = [prev, curr, curr.next];
    }
    
    return prev;
};

———————————————————————————

Add two numbers

var addTwoNumbers = function(l1, l2) {

    let head = new ListNode(),
        cur = head,
        carry = 0,
        ptr1 = l1,
        ptr2 = l2;
    
    while (ptr1 || ptr2) {
        let sum = (ptr1?.val??0) + (ptr2?.val??0) + carry;
        cur = cur.next = new ListNode(sum % 10);    
        carry = sum > 9 ? 1 : 0;
    
        ptr1 = ptr1?.next;
        ptr2 = ptr2?.next;

    }
  
  if (carry === 1)  cur.next = new ListNode(1); 
    
  return head.next;
};

———————————————————————————
