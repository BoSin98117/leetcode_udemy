/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list. 

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/


function mergeTwoLists(l1, l2) {
    // Create a dummyHead so that we can compensate for empty linked list or a linked list with only 1 node.  We do not need to write a bunch of If/ELSE statements to handle these cases.
    const dummyHead = { next: null };

    let tail = dummyHead;

    // While both linked lists has not been exhausted yet.
    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            tail = tail.next;
            l1 = l1.next;
        } else {
            tail.next = l2;
            tail = tail.next;
            l2 = l2.next;
        }
    }

    // Tail is equal to whichever list that still has nodes in it
    tail.next = l1 || l2;

    return dummyHead.next;
}

module.exports = mergeTwoLists;

/*
Time Complexity: O(n + m) - Where N and M are lengths of Linked Lists
Space Complexity: O(1) - We always use 3 nodes, regardless of size of Linked List
*/