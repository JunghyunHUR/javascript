// 7번
function sp(str){
    if(str.length<4){
        return false;
    }
    const front = str.substring(0,4);
    if(front == 'Java'){
        return true;
    }else{
        return false;
    }
}
console.log(sp('JavaScript'));
console.log(sp('VsScript'));
console.log(sp('TypeScript'));
console.log(sp('Script'));
