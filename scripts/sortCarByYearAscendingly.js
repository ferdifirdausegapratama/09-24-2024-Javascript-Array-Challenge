function sortCarByYearAscendingly(cars) {
  // Initialize an empty array for results
  const result = []; // 
  // Sort in ascending order
  function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        // Change condition to be greater for ascending sorting
        if (arr[j].year > arr[j + 1].year) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  // Call the bubbleSort function
  bubbleSort(cars); 
  // Store results into the result array
  for (let i = 0; i < cars.length; i++) {
    result.push(cars[i]);
  }
  // Display results
  console.log(result); 
  // Return results
  return result; 
}

// Example usage
const cars = [
  { make: 'Toyota', model: 'Camry', year: 2020 },
  { make: 'Honda', model: 'Accord', year: 2018 },
  { make: 'Ford', model: 'Mustang', year: 2021 }
];
sortCarByYearAscendingly(cars);
