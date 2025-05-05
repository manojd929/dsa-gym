/*
Meeting Rooms
Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), determine if a person could add all meetings to their schedule without any conflicts.

Example 1:

Input: intervals = [(0,30),(5,10),(15,20)]

Output: false

Explanation:

(0,30) and (5,10) will conflict
(0,30) and (15,20) will conflict

Example 2:

Input: intervals = [(5,8),(9,15)]

Output: true

Note:

(0,8),(8,10) is not considered a conflict at 8
Constraints:

0 <= intervals.length <= 500
0 <= intervals[i].start < intervals[i].end <= 1,000,000
*/

const solution = (schedule) => {
    if (schedule.length <= 1) {
        return true
    }

    const sortedSchedule = schedule.sort((a, b) => a[0] - b[0])

    for (let i = 1; i < sortedSchedule.length; i++) {
        if (sortedSchedule[i][0] < sortedSchedule[i - 1][1]) {
            return false;
        }
    }

    return true;
}
describe('Meeting Rooms', () => {
    it('Test', () => {
        expect(solution([[0, 30], [5, 10], [15, 20]])).toBe(false)
        expect(solution([[5, 8], [9, 15]])).toBe(true)
    })
})