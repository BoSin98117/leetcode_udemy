const eraseOverlapIntervals = intervals => {
    if (intervals.length === 0) return 0;

    let count = 0;
    intervals.sort(function (a, b) { return a[0] - b[0] });
    let end = intervals[0][1];

    console.log("Sorted intervals array = " + intervals);

    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        const intervalStart = interval[0];
        const intervalEnd = interval[1];

        console.log("intervalStart = " + intervalStart);
        console.log("intervalEnd = " + intervalEnd);

        if (intervalStart < end) {
            count++
            end = Math.min(intervalEnd, end);
            console.log("count = " + count + "\n");
        } else {
            end = intervalEnd;
            console.log("end = " + end + "\n");
        }
    }

    return count;
};

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]));