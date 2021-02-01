// function doubleIt(num){
//     return num * 2;
// }
// const doubleIt = function(num){
//     return num *2;
// }

const doubleIt = num => num *2; /** arrow , 1st way*/
const add = (x ,y) => x + y; /** 2nd way */
const give5 = () =>5; /** 3rd way */
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x-y;
    const result = sum * diff;
    return result; /** 4th way */
}

const result = add(50, 70);
const result2 =give5();
const result3 =doMath(7, 5)
console.log(result3);