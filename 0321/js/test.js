//8번문제
function sub(scr){
    const sum = scr.reduce(function(arr, arrc){
        return arr += arrc;
    });

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
const stScore =[100, 90, 80, 90];
console.log(sub(stScore));