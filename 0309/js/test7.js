// function sub(x, y, z){
//    const sub = (x+y+z)/3;
//     if(sub >= 90){
//         return 'A';
//     }else if(sub < 90 && sub >= 80){
//         return 'B';
//     }else if(sub < 80 && sub >= 70){
//         return 'C';
//     }else if(sub < 70 && sub >= 60){
//         return 'D';
//     }else{
//         return 'F';
//     }
// }
// console.log(sub(90, 90, 90));
// console.log(sub(80, 80, 80));
// console.log(sub(70, 70, 70));
// console.log(sub(60, 60, 60));
// console.log(sub(50, 50, 50));


function aver(scr){
    // let sum = 0;
    // for(let i = 0; i <scr.length; i++){
    //     sum += scr[i];
    // }

    const sum = scr.reduce((arr, arrc, idx)=>{
        return arr += arrc;
    }, 0);

    const avr = sum/scr.length;
    if(avr > 89){
        return 'A';
    }else if(avr > 79){
        return 'B';
    }else if(avr > 69){
        return 'C';
    }else if(avr > 59){
        return 'D';
    }else{
        return 'F';
    }
}

const stScore =[100, 90, 80, 90, 50];
console.log(aver(stScore));