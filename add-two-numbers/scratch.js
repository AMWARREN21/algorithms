//You are given two non-empty linked lists representing two non-negative integers. 
//The digits are stored in reverse order, and each of their nodes contains a single digit. 
//Add the two numbers and return the sum as a linked list.

//You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers = function (l1, l2) {
    //create empty node list
    let head = new ListNode()
    //assign varibale for first node
    let current = head
    //assign variable to carry over
    let carryOver = 0
    //loop through both lists as long as one is true
    while (l1 || l2) {
        //assign value if exists or 0 if not
        let l1Value = l1 ? l1.val : 0
        let l2Value = l2 ? l2.val : 0
        //add all values with carry over amount
        let sum = l1Value + l2Value + carryOver
        //if sum is greater than 9 carry the one if not theres nothing to carry
        carryOver = sum > 9 ? 1 : 0
        //if l1 exists get the remainder and assign the currents next to current l1
        if (l1) {
            l1.val = sum % 10
            current.next = l1
            //if l1 doesn't exists get the remainder and assign the currents next to current l2
        } else {
            l2.val = sum % 10
            current.next = l2
        }
        //assign current to current.next value
        current = current.next;
        //push node list to next node
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    //if carry over then add the 1 to the end of the list
    if (carryOver > 0) {
        current.next = new ListNode(1)
    }
    //return node list
    return head.next
};
