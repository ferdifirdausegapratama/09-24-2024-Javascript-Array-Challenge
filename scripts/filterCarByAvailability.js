function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Loop melalui setiap mobil dan periksa ketersediaannya
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].available) {
      result.push(cars[i]);
    }
  }

  // Tampilkan hasil filter
  console.log(result);

  // Kembalikan array hasil filter berdasarkan availability
  return result;
}
