// solutions using for loop
function FirstFactorial(num) {
  let result = 1;

  for (let i = 1; i < num + 1; i++) {
    result = result * i;
  }

  return result; 

}

// solutions using recursion
function FirstFactorial(num) {

  if (num === 1) {
    return 1;
  } else {
    return num * FirstFactorial(num - 1);
  }

}