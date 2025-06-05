const MaxVal = [1,2,3,4,5,6,78,9,0,98,45];
const data = Math.max(...MaxVal);
console.log(data);
// or

const maxLetter = [23,534,76,57,867,8976,976,9];

let max = maxLetter[0];

for (let i = 1; i < maxLetter.length; i++){
    if(maxLetter[i] > max) {
        max = maxLetter[i];
    }
}
console.log("Maximum value is : ", max);