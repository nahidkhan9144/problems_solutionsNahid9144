let arr = [2,5,3,9,7,8,5];
var count = 0;

function trap(arr){
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i]> arr[i+1]){
            count+= arr[i+1] + arr[i];
        }else{
            count+=arr[i] -arr[i+1];
        }
    }
    return count;
}

res = trap(arr);
console.log(res);

