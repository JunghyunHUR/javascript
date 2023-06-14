function upper_lower(str){
    if(str.length <= 3){
        return str.toUpperCase();
    }
    const front_part = (str.substring(0, 3)).toLowerCase();
    const back_part = str.substring(3, str.length);
    return front_part + back_part;

}
console.log(upper_lower('pet'));
console.log(upper_lower('JAVAscript'));