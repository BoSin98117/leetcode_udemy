// Given an array of meeting time intervals consisting of start and end
// times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.
// ---------------------------
// canAttendMeetings([[0, 30], [5, 10], [15, 20]]) --> false
// canAttendMeetings([[7, 10], [2, 4]]) --> true

const canAttendMeetings = intervals => {
    const starts = [];
    const ends = [];

    // Fill up STARTS and ENDS
    for (let i = 0; i < intervals.length; i++) {
        const subArray = intervals[i];
        starts.push(subArray[0]);
        ends.push(subArray[1]);
    }
    // Sort STARTS and ENDS array from least to greatest.
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);

    // If the start of the second meeting is LESS THAN the end of the first meeting, then return false.
    for (let i = 0; i < starts.length; i++) {
        if (starts[i + 1] < ends[i]) return false;
    }

    return true;
};

module.exports = canAttendMeetings;


/*
Time Complexity: O(n log n) - We use a SORTING ALGORITHM for STARTS and ENDS array (we do  have a FOR LOOP which is O(n) but we simplify this to O(n log n) due to sorting algorithm).
Space Complexity: O(n) - STARTS and ENDS array.
*/