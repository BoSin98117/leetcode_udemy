/*
Given the head of a linked list, remove the nth node from the end of the list and return its head. 

Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1] 

Constraints:
The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
*/


function removeNthFromEnd(head, n) {
    let dummyHead = { next: head };

    // Create a SLOW and FAST pointer
    let slow = dummyHead;
    let fast = dummyHead;

    // Move Fast N nodes ahead of Slow
    for (let i = 1; i <= n; i++) {
        fast = fast.next;
    }

    // Move Fast and Slow up one node at a time until Fast is at the last node
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    // After While Loop completes, Fast will be at the last node.
    // Connect Slow to the node that is 2 nodes away, deleting the node Next to it.
    slow.next = slow.next.next;

    // Return the Head of the linked list with the node removed. 
    return dummyHead.next;
}

module.exports = removeNthFromEnd;

/*
Time Complexity: O(n) - We traverse through the Linked List once.
Space Complexity: O(1) - We always use 2 nodes, regardless of size of Linked List.
*/