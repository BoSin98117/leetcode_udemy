// Use a QUEUE data structure

breadthFirstSearch() {
    let currentNode = this.root;

    // The list that is returned from the Breadth First Search
    let list = [];

    // QUEUE used to keep track of the level and the nodes
    let queue = [];

    // add the first item into our queue
    queue.push(currentNode);

    while (queue.length > 0) {

        // shift() = remove the FIRST item in the queue
        currentNode = queue.shift();
        list.push(currentNode.value);

        // If there are any children on the left or right, push it into the queue
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }

    return list;
}
/*
      9
  4       20
1   6   15  170

list = [9, 4, 20, 1, 6, 15, 170]
*/