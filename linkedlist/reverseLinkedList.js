// Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  let prev = null;
  while (head) {
      // temp variable
      let next = head.next;
      head.next = prev;
      prev = head;
      head = next;
  }
  
  return prev;
};


// recursive solution
function reverseList(head) {
  if (!head || !head.next) {
      return head;
  }
  var newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}