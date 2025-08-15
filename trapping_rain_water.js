// let arr = [2,5,3,9,7,8,5];
// var count = 0;

// function trap(arr){
//     for(let i = 0; i < arr.length - 1; i++) {
//         if(arr[i]> arr[i+1]){
//             count+= arr[i+1] + arr[i];
//         }else{
//             count+=arr[i] -arr[i+1];
//         }
//     }
//     return count;
// }

// res = trap(arr);
// console.log(res);

function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let totalWater = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                totalWater += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                totalWater += rightMax - height[right];
            }
            right--;
        }
    }

    return totalWater;
}

let arr = [2,5,3,9,7,8,5];
let res = trap(arr);
console.log(res);  // Correct trapped water amount
