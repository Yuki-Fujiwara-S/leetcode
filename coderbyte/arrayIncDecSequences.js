// return index at which increasing - > decreasing and vice verca, return -1 if continues the same

const findIndex = (arr) => {
  let increasing;
  
  if (arr[0] < arr[1]) {
    increasing = true;
  } else {
    increasing = false;
  }

  



}

// tests
console.log(findIndex([1, 2, 3, 4, -1, -2]), "should be 3");
console.log(findIndex([1, 2, 3, 4, 5, 6]), "should be -1");