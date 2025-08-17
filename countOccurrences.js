// Problem statement
// You are given a sorted array 'ARR' and a number 'X'. Your task is to count the number of occurrences of 'X' in 'ARR'.

// Note :
// 1. If 'X' is not found in the array, return 0.
// 2. The given array is sorted in non-decreasing order.
// Detailed explanation ( Input/output format, Notes, Images )
// Constraints :
// 1 <= T <= 10^2
// 1 <= N <= 10^4
// 0 <= ARR[i], X <= 10^9

// Time Limit : 1 sec
// Sample Input 1 :
// 2
// 7
// 1 1 2 2 2 2 3
// 2
// 5
// 1 2 2 3 3
// 4
// Sample Output 1 :
// 4
// 0
// Explanation For Sample Input 1 :
// For the first test case, the target element 2 occurs four times in the array at indexes from 2 to 5. 

// For the second test case, the target element 4 doesn’t occur in the array.
// Sample Input 2 :
// 2
// 4
// 2 3 4 4
// 4
// 6
// 5 7 7 8 8 10
// 10
// Sample Output 2 :
// 2
// 1


function firstOccurrence(arr, x) {
    let low = 0, high = arr.length - 1;
    let first = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === x) {
            first = mid;
            high = mid - 1; // search left
        } else if (arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return first;
}

function lastOccurrence(arr, x) {
    let low = 0, high = arr.length - 1;
    let last = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === x) {
            last = mid;
            low = mid + 1; // search right
        } else if (arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return last;
}

function countOccurrences(arr, x) {
    let first = firstOccurrence(arr, x);
    if (first === -1) return 0; // not found
    let last = lastOccurrence(arr, x);
    return last - first + 1;
}

