function solution(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    const avg = sum / arr.length;

    if(avg > 89){
        return 'A';
    }else if(avg > 79){
        return 'B';
    }else if(avg > 69){
        return 'C';
    }else if(avg > 59){
        return 'D';
    }else{
        return 'F';
    }
}
let score = [90, 90];
console.log(solution(score));