// catInfoHandler.js is responsible for handling cat info data
const catCareInfo = [
  // Informasi perawatan untuk beberapa ras kucing
   {    Ras : 'Persian', 
        Deskripsi : 'Kucing Persian adalah ras yang memiliki bulu panjang, wajah datar, dan telinga kecil yang bulat.Bulu Panjang: Bulu mereka panjang, lembut, dan kadang-kadang memerlukan perawatan intensif untuk mencegah kusut dan pembentukan matting. Wajah Datar: Wajahnya datar dengan hidung pesek dan mata besar, sehingga memerlukan perhatian khusus terhadap kebersihan mata dan hidung.Kaki dan Ekor Pendek: Tubuh mereka proporsional dengan kaki dan ekor yang pendek.', 
        Perawatan : 'Grooming Rutin: Sisir bulu Persian setiap hari untuk mencegah kusut dan matting. Mandikan kucing secara teratur, terutama jika bulunya cenderung berminyak.Perhatian pada Mata dan Hidung: Bersihkan mata secara teratur dengan kapas lembut dan air hangat. Periksa hidungnya untuk memastikan tidak ada masalah pernapasan.Kesehatan Mulut: Perhatikan kesehatan gigi dan mulut. Berikan mainan atau makanan yang dapat membantu membersihkan gigi.Pantau Berat -Badan: Hindari obesitas dengan memberikan porsi makan yang sesuai dan aktivitas fisik yang cukup.Pentingnya Kebersihan Telinga: Bersihkan telinga secara teratur untuk mencegah infeksi.Perhatian terhadap Stres: Persian cenderung rentan terhadap stres, jadi sediakan tempat yang nyaman dan tenang untuknya.',
        Kucing : 'https://cahyo-406812.et.r.appspot.com/api/images/anak_kecil.jpg',
        Makanan : 'https://cahyo-406812.et.r.appspot.com/api/images/anak_kecil.jpg',
        Vitamin : 'https://cahyo-406812.et.r.appspot.com/api/images/anak_kecil.jpg', 
    },
    {    Ras : 'Sphynx',
         Deskripsi : 'Kucing Sphynx adalah ras yang unik dengan ciri khas kulit tanpa bulu dan bentuk tubuh yang elegan Kulit Tanpa Bulu: Sphynx memiliki kulit yang halus dan tanpa bulu, sehingga memerlukan perhatian ekstra terhadap suhu dan kebersihan.Tubuh Elegan: Bentuk tubuhnya yang muskulatif dan panjang memberikan kesan elegan.Telah Kecil: Telinganya kecil dan berbentuk segitiga, dengan mata besar dan hidung pesek.',
         Perawatan : 'Pengaturan Suhu: Kucing Sphynx lebih rentan terhadap suhu ekstrem. Pastikan untuk menjaga lingkungan mereka tetap hangat dan menyediakan tempat tidur berlapis untuk kenyamanan ekstra. Mandikan Secara Teratur: Karena tidak memiliki bulu, Sphynx perlu dimandikan secara teratur untuk menghilangkan minyak yang dapat menumpuk di kulit mereka. Perlindungan dari Matahari: Kulit tanpa bulu dapat lebih rentan terhadap paparan sinar matahari langsung. Pastikan mereka memiliki tempat teduh atau gunakan tabir surya khusus untuk kucing.Perhatian pada Kuku: Sphynx tetap perlu mempertahankan kuku mereka, jadi sediakan papan kuku atau mainan yang dapat membantu proses ini.Nutrisi Seimbang: Berikan makanan berkualitas tinggi yang mengandung nutrisi penting seperti protein dan lemak sehat untuk menjaga kesehatan kulit mereka.Pentingnya -Perhatian: Kucing Sphynx umumnya membutuhkan perhatian ekstra dan kehangatan manusia. Berikan waktu untuk bermain dan berinteraksi dengan mereka.',
         Kucing : 'https://cahyo-406812.et.r.appspot.com/api/images/anak_kecil.jpg',
         Makanan : 'https://cahyo-406812.et.r.appspot.com/api/images/anak_kecil.jpg',
         Vitamin : 'https://cahyo-406812.et.r.appspot.com/api/images/anak_kecil.jpg', 
    },
      {   Ras : 'Scotissh fold', 
          Deskripsi : 'Kucing Scottish Fold memiliki ciri khas telinga yang melipat ke depan, memberikan penampilan yang unik.Telinga Melipat: Telinga mereka melipat ke depan, memberikan penampilan yang khas dan unik.Tubuh Sedang: Scottish Fold umumnya memiliki tubuh sedang hingga besar, dengan kaki dan ekor yang seimbang.Bulu yang Beragam: Bulu Scottish Fold bisa pendek atau panjang tergantung pada varietasnya.',
          Perawatan : '-Perhatian pada Telinga: Karena ciri khas mereka adalah telinga yang melipat, perhatikan kebersihan telinga mereka dan bersihkan secara teratur.Grooming Rutin: Sisir bulu Scottish Fold sesuai dengan panjang bulunya. Bulu pendek memerlukan perawatan lebih sedikit dibandingkan dengan bulu panjang.Mainan dan Aktivitas: Scottish Fold suka bermain, sediakan mainan dan aktivitas fisik untuk mencegah kebosananan.Pantau Berat Badan: Hindari obesitas dengan memberikan porsi makan yang sesuai dan memotivasi aktivitas fisik.Kesehatan Gigi: Berikan mainan atau makanan yang membantu membersihkan gigi untuk mencegah masalah kesehatan gigi.Perhatian pada Kesehatan Mata: Beberapa individu Scottish Fold mungkin memiliki risiko lebih tinggi terhadap masalah mata, jadi perhatikan dan konsultasikan dengan dokter hewan jika diperlukan.',
          Kucing : 'https://cahyo-406812.et.r.appspot.com/api/images/anak_kecil.jpg',
          Makanan : 'https://cahyo-406812.et.r.appspot.com/api/images/anak_kecil.jpg',
          Vitamin : 'https://cahyo-406812.et.r.appspot.com/api/images/anak_kecil.jpg', 
      },
      {
          Ras : 'Munchkin',
          Deskripsi : 'Kucing Munchkin dikenal dengan ciri khas kaki pendek mereka yang disebabkan oleh mutasi genetik Kaki Pendek: Ciri paling mencolok adalah kaki pendek mereka, yang disebabkan oleh mutasi genetik yang memengaruhi pertumbuhan tulang.Bentuk Tubuh: Meskipun kaki pendek, tubuh Munchkin proporsional dan otot.Bulu Beragam: Bulu Munchkin bisa pendek atau panjang, tergantung pada varietasnya.',
          Perawatan : 'Perhatian pada Kesehatan Tulang: Karena kaki pendek mereka, hindari aktivitas yang terlalu mengakibatkan tekanan berlebih pada tulang mereka. Mainan dan aktivitas yang sesuai dapat membantu menjaga kesehatan tulang.Grooming Rutin: Sisir bulu Munchkin secara teratur, terutama jika mereka memiliki bulu panjang untuk mencegah kusut dan matting.Pantau Berat Badan: Munchkin rentan terhadap obesitas, jadi pastikan untuk memberikan porsi makan yang sesuai dan mendorong aktivitas fisik.Mainan Interaktif: Munchkin senang bermain, sediakan mainan interaktif yang dapat merangsang kecerdasan mereka.Pemeriksaan Rutin: Lakukan pemeriksaan rutin ke dokter hewan untuk memastikan kesehatan tulang dan umum mereka.',
          Kucing : 'https://cahyo-406812.et.r.appspot.com/api/images/anak_kecil.jpg',
          Makanan : 'https://cahyo-406812.et.r.appspot.com/api/images/anak_kecil.jpg',
          Vitamin : 'https://cahyo-406812.et.r.appspot.com/api/images/anak_kecil.jpg',
      },
      {
        Ras : 'American bobtail',
        Deskripsi : 'Bobtail dikenal dengan ekor pendek dan tubuh yang berotot.Ekor Pendek: Ciri khas utama adalah ekor pendek dan khas yang dapat berbentuk seperti pom-pom.Tubuh Berotot: Mereka memiliki tubuh yang berotot dan kokoh.Bulu Beragam: Bulu American Bobtail dapat berupa pendek atau semi-panjang, dan sering kali memiliki mantel yang tebal.',
        Perawatan : '-Grooming Rutin: Meskipun bulu mereka bisa pendek, melakukan penyisiran rutin membantu mencegah kusut dan menghilangkan bulu mati.Aktivitas Fisik: American Bobtail aktif dan suka bermain. Berikan mainan dan aktivitas fisik yang merangsang untuk menjaga kebugaran dan kebahagiaan mereka.Perhatian pada Kesehatan Ekor: Perhatikan ekor mereka, terutama jika memiliki bentuk khusus. Pastikan tidak ada masalah kesehatan atau cedera pada ekor mereka.Pantau Berat Badan: Kontrol porsi makan dan berikan makanan berkualitas untuk menjaga berat badan yang sehat.Pemeriksaan Rutin: Lakukan pemeriksaan rutin ke dokter hewan untuk memastikan kesehatan umum mereka.',
        Kucing : 'https://cahyo-406812.et.r.appspot.com/api/images/anak_kecil.jpg',
        Makanan : 'https://cahyo-406812.et.r.appspot.com/api/images/anak_kecil.jpg',
        Vitamin : 'https://cahyo-406812.et.r.appspot.com/api/images/anak_kecil.jpg',
    },
  // Tambahkan informasi perawatan untuk ras kucing lain di sini
];

function getCatInfo(breed) {
  // Temukan informasi kucing berdasarkan ras
  const catInfo = catCareInfo.find((item) => item.Ras === breed);

  // Kembalikan objek info kucing jika ditemukan, atau null jika tidak ditemukan
  return catInfo || { Ras: 'Not found', Deskripsi: 'Informasi tidak tersedia untuk ras ini.', Perawatan: '', Kucing: '', Makanan: '', Vitamin: '' };
}


module.exports = { getCatInfo };
