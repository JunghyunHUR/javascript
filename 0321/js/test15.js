function str(x){
    let str2 = x.split(' ');
    let x1 = '';
    for(let i = 0; i < str2.length; i++){
        let str3 = str2[i];
        str3 = str3[0].toUpperCase() + str3.substring(1, str3.length);
        x1 += str3 + ' ';
    }return x1;
}
console.log(str('hello java world!'));

// let str = 'hello java world';
// let x = str.split(' ')
// console.log(x);