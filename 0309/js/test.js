function max_fo_three(x, y, z){
    let v = 0;
    if(x > y){
        v = x;
    }else{
        v = y;
    }
    if(z > v){
        v = z
    }return v;
}console.log(max_fo_three(50, 205, 480));


function max_fo_three2(x, y, z){
    const arr = [x, y, z]
    let v = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(v < arr[i]){
            v = arr[i];
        }
    }return v;
}console.log(max_fo_three2(50,20,40));

function max_fo_three3(x, y, z){
    return Math.max(x, y, z);
}console.log(max_fo_three3(50, 60, 80));