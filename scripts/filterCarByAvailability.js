function filterCarByAvailability(cars) {
  // highly recommended to console.log everything
  console.log(cars);

  // Place to store the results
  const result = [];

  // Loop through each car and check its availability
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].available) {
      result.push(cars[i]);
    }
  }

  // Display the filtered result
  console.log(result);

  // Return the array of results filtered by availability
  return result;
}
