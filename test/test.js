function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        console.log("fast = " + fast);
        console.log("slow = " + slow);

        if (slow === fast) {
            return true;
        }
    }
    return false;
}

console.log(hasCycle([3, 2, 0, -4]));