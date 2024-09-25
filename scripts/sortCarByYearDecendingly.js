function sortCarByYearDescendingly(cars) {
	// Sangat dianjurkan untuk console.log semua hal hehe
	// console.log(cars);

	// Clone array untuk menghindari side-effect
	// Apa itu side effect?
	//! Cara 1
	// const result = [...cars];

	//! Cara 2
	const result = [];

	// Tulis code-mu disini
	// Rubah code ini dengan array hasil sorting secara descending
	//! Cara 1
	// result.sort((a, b) => b.year - a.year);

	//! Cara 2
	function bubbleSort(arr) {
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length - i - 1; j++) {
				if (arr[j].year < arr[j + 1].year) {
					let temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}
	}

	bubbleSort(cars);

	for (let i = 0; i < cars.length; i++) {
		result.push(cars[i]);
	}

	console.log(result);
	return result;
}