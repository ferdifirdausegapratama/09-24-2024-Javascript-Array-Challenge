function sortCarByYearDescendingly(cars) {
	// Sangat dianjurkan untuk console.log semua hal hehe
	// console.log(cars);
  
	// Clone array untuk menghindari side-effect
	const result = []; // Inisialisasi array kosong untuk hasil
  
	// Tulis code-mu disini
	// Fungsi bubbleSort untuk mengurutkan
	function bubbleSort(arr) {
	  for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
		  // Mengubah kondisi menjadi lebih kecil untuk sorting descending
		  if (arr[j].year < arr[j + 1].year) {
			let temp = arr[j];
			arr[j] = arr[j + 1];
			arr[j + 1] = temp;
		  }
		}
	  }
	}
  

	bubbleSort(cars); // Memanggil fungsi bubbleSort
  
	// Menyimpan hasil ke dalam array result
	for (let i = 0; i < cars.length; i++) {
	  result.push(cars[i]);
	}
  
	console.log(result); // Menampilkan hasil
	return result; // Mengembalikan hasil
  }