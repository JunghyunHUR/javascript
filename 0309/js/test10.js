const listSearch = (arr, item) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === item){
            return +i;
        }
    }
    return -1;
}

function listSearch_2(arr, item){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === item){
            return +i;
        }
    }
    return -1;
}
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(listSearch(nums, 4));
console.log(listSearch_2(nums, 4));

function listSearch2(arr, item){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === item ? c = +i : c = -1){
            return c;
        }
    }
}
console.log(listSearch2(nums, 4));