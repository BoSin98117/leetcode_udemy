function exist(board, word) {
    let found = false;

    console.log(board);

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {

            console.log("board[" + row + "][" + col + "] = " + board[row][col]);

            // if (board[row][col] === word[0]) {
            //     dfs(row, col, 0, word);
            // }
        }
    }

    function dfs(row, col, count, word) {
        if (count === word.length) {
            found = true;
            return;
        }

        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== word[count] || found) {
            return;
        }

        let temp = board[row][col];
        board[row][col] = "";

        // Traverse cells top, bottom, left, right
        dfs(row + 1, col, count + 1, word);
        dfs(row - 1, col, count + 1, word);
        dfs(row, col + 1, count + 1, word);
        dfs(row, col - 1, count + 1, word);

        board[row][col] = temp;
    }

    return found;
}

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"));