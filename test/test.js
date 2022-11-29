const eraseOverlapIntervals = intervals => {
    if (intervals.length === 0) return 0;

    console.log("intervals = " + intervals);

    let count = 0;
    intervals.sort(function (a, b) { return a[0] - b[0] });
    let end = intervals[0][1];

    console.log("sorted intervals = " + intervals + "\n");

    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        const intervalStart = interval[0];
        const intervalEnd = interval[1];

        console.log("interval = " + interval);
        // console.log("end = " + end);
        console.log("end = " + end);
        console.log("intervalEnd = " + intervalEnd);

        if (intervalStart < end) {
            count++
            end = Math.min(intervalEnd, end);
        } else {
            end = intervalEnd;
        }

        console.log("end2 = " + end + "\n");

    }

    return count;
};

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]));