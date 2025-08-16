// const distinct (unique) elements in an array

function find_unique(arr) {
    let char = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        if (!char.includes(arr[i])) {
            char.push(arr[i]);
        }
    }
    return char
}


function find_unique_number(arr) {
    let char = {};
    let unique = [];
    for (ch of arr) {
        char[ch] = (char[ch] || 0) + 1
    }
    // console.log(char)
    for (find_unique in char) {
        if (char[find_unique] == 1) {
            unique.push(find_unique)
        }
    }
    return unique;
}


arr = [10, 20, 20, 10, 30, 10]
res = find_unique(arr)
unique_number = find_unique_number(arr)
console.log(res) //returns [10, 20, 30]
console.log(unique_number) //returns [30]
