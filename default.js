function add(num1 , num2 =20){ /** set the value num2=20 */
  /**  num2 = num2 || 0;  new method */
    return num1 + num2;
    // old fashion
    // if(num2 == undefined){
    //     num2 = 0;
    // }
}

// if forgot to give values
const total = add(15,1); /** if here 1 is declared the at function num=20 won't count, cause that is backup value. */
console.log(total);