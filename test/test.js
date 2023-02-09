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

console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2));