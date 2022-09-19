function FirstReverse(str) { 
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; 
  }

  return reversed;
}
   
// keep this function call here 
console.log(FirstReverse(readline()));