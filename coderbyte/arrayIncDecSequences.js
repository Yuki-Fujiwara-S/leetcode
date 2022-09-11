// return index at which increasing - > decreasing and vice verca, return -1 if continues the same

// const findIndex = (arr) => {
//   let increasing;
  
//   if (arr[0] < arr[1]) {
//     increasing = true;
//   } else {
//     increasing = false;
//   }

//   if (increasing && arr[arr.length - 2] < arr[arr.length - 1]) {
//     return -1;
//   }

//   if (!increasing && arr[arr.length - 2] > arr[arr.length - 1]) {
//     return -1;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (increasing) {
//       if (arr[i] > arr[i + 1]) {
//         return i;
//       }
//     }

//     if (!increasing) {
//       if (arr[i] < arr[i + 1]) {
//         return i;
//       }
//     }
//   }
// }

const findIndex = (arr) => {
  if (arr[0] < arr[1])
	{
		for (let i = 0; i < arr.length; i++)
		{
			if ((arr[i] > arr[i + 1]))
			{
				return i;
			}
		}
	}
	else
	{
		for (let i = 0; i < arr.length; i++)
		{
			if ((arr[i] < arr[i + 1]))
			{
				return i;
			}
		}
	}

	return -1;
}




// tests
console.log(findIndex([1, 2, 3, 4, -1, -2]), "should be 3");
console.log(findIndex([1, 2, 3, 4, 5, 6]), "should be -1");
console.log(findIndex([2, 1, 0]), "should be -1");