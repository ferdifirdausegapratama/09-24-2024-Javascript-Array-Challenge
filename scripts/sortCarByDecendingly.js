function sortCarByYearDescendingly(cars) {
	// Clone the array to avoid side effects
	const result = [...cars];
  
	// Bubble sort algorithm
	for (let i = 0; i < result.length; i++) {
	  for (let j = 0; j < result.length - i - 1; j++) {
		if (result[j].year < result[j + 1].year) {
		  let temp = result[j];
		  result[j] = result[j + 1];
		  result[j + 1] = temp;
		}
	  }
	}

	console.log(result);
	return result;
}