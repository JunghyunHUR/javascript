// function combination(str){
//     let com = [];
//     for(let i = 0; i < str.length; i++){
//         for(let j = i+1; j < str.length+1; j++){
//             com.push(str.slice(i, j));
//         }
//     }return com;
// }
// console.log(combination('Dog'));

// let stringCombinations = (str) => {
//       let strLength = str.length;
//       let result = [];
//       let currentIndex = 0;
//       while (currentIndex < strLength) {
//         let char = str.charAt(currentIndex);
//         let x;
//         let arrTemp = [char];
//         for (x in result) {
//           arrTemp.push("" + result[x] + char);
//         }
//         result = result.concat(arrTemp);
//         currentIndex++;
//       }
//       return result;
//     };
//     console.log(stringCombinations("dog"));

function subs(str){
  const result = [];

  function s_combination(start, curr){
    if(curr.length > 0){
      result.push(curr);
    }
    for(let i = start; i < str.length; i++){
      s_combination(i+1, curr + str[i]);
    }
  }
    s_combination(0,'');
    return result;
}
const str = 'dog';
console.log(subs(str));