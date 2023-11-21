const catCareInfo = {
  // Informasi perawatan untuk beberapa ras kucing
  persian: {
    description: 'Kucing Persia memiliki bulu panjang dan cenderung membutuhkan grooming yang rajin...',
    care: 'Untuk merawat kucing Persia, pastikan rutin menyisir bulunya...',
  },
  siamese: {
    description: 'Kucing Siam dikenal sebagai kucing yang cerdas dan aktif...',
    care: 'Untuk merawat kucing Siam, berikan stimulasi mental dan latihan fisik yang cukup...',
  },
  maineCoon: {
    description: 'Maine Coon adalah kucing yang besar dan ramah...',
    care: 'Untuk merawat Maine Coon, pastikan memberikan makanan yang sehat dan sesuai ukuran tubuhnya...',
  },
  // Tambahkan informasi perawatan untuk ras kucing lain di sini
};

function getCatInfo(breed) {
  // Mengembalikan informasi perawatan berdasarkan nama ras
  const lowercaseBreed = breed ? breed.toLowerCase() : null;
  return lowercaseBreed ? catCareInfo[lowercaseBreed] : 'Informasi untuk ras ini belum tersedia.';
}

module.exports = { getCatInfo };
