// catInfoHandler.js is responsible for handling cat info data
const catCareInfo = [
  // Informasi perawatan untuk beberapa ras kucing
   {   Ras : 'Persia', 
      Deskripsi : 'Kucing Persia memiliki bulu panjang dan cenderung membutuhkan grooming yang rajin...', 
   Perawatan : 'Untuk merawat kucing Persia, pastikan rutin menyisir bulunya',
  Images : 'https://cahyo-406812.et.r.appspot.com/api/images/anak_kecil.jpg' },
    { Ras : 'Anggora',
     Deskripsi : 'Kucing Anggora memiliki bulu panjang dan cenderung membutuhkan grooming yang rajin...',
    Perawatan : 'Untuk merawat kucing Anggora, pastikan rutin menyisir bulunya',
  Images : 'https://cahyo-406812.et.r.appspot.com/api/images/anak_kecil.jpg' },
    { Ras : 'Sphynx', 
    Deskripsi : 'Kucing Sphynx tidak memiliki bulu dan cenderung membutuhkan grooming yang rajin...',
    Perawatan : 'Untuk merawat kucing Sphynx, pastikan rutin membersihkan kulitnya',
   Images : 'https://cahyo-406812.et.r.appspot.com/api/images/anak_kecil.jpg' },
  // Tambahkan informasi perawatan untuk ras kucing lain di sini
];

function getCatInfo(breed) {
  // Temukan informasi kucing berdasarkan ras
  const catInfo = catCareInfo.find((item) => item.Ras === breed);

  // Kembalikan objek info kucing, atau null jika tidak ditemukan
  return catCareInfo.find((item) => item.Ras === breed);
}


module.exports = { getCatInfo };
