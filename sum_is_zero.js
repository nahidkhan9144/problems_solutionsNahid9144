
//find whose sum is 0, find the indexes
function sum(arr){
    let map = [];
    var array_to_return = [];
    for(let i=0; i<=arr.length-1;i++){
        //here we first negate the current element
        // like -1+1 = 0
         let num = -(arr[i])
        if(arr[i] in map){
            let first = map.indexOf(arr[i]);
                array_to_return = [first,i]
             console.log(array_to_return)
             return;
        }else{
            map[num] = i; 
        }
    }
}
let arr = [-1,0,2,1,4]
sum(arr);