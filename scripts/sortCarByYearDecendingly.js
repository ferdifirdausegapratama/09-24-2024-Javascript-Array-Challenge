function sortCarByYearDecendingly(cars) {
    // Sangat dianjurkan untuk console.log semua hal hehe
    // console.log(cars);
  
    // Clone array untuk menghindari side-effect
    const result = [...cars]; // Menyalin array menggunakan spread operator
  
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
  
    bubbleSort(result); // Memanggil fungsi bubbleSort
  
    console.log(result); // Menampilkan hasil
    return result; // Mengembalikan hasil
}

// Contoh penggunaan
const cars = [
    { make: 'Toyota', model: 'Camry', year: 2020 },
    { make: 'Honda', model: 'Accord', year: 2018 },
    { make: 'Ford', model: 'Mustang', year: 2021 }
];

sortCarByYearDecendingly(cars);

// Masih Eror Bang