// catInfoHandler.js is responsible for handling cat info data
const catCareInfo = [
  // Informasi perawatan untuk beberapa ras kucing
   {    Ras : 'Persian', 
        Deskripsi : 'Kucing Persian adalah ras yang memiliki bulu panjang, wajah datar, dan telinga kecil yang bulat.Bulu Panjang: Bulu mereka panjang, lembut, dan kadang-kadang memerlukan perawatan intensif untuk mencegah kusut dan pembentukan matting. Wajah Datar: Wajahnya datar dengan hidung pesek dan mata besar, sehingga memerlukan perhatian khusus terhadap kebersihan mata dan hidung.Kaki dan Ekor Pendek: Tubuh mereka proporsional dengan kaki dan ekor yang pendek.', 
        Perawatan : 'Grooming Rutin: Sisir bulu Persian setiap hari untuk mencegah kusut dan matting. Mandikan kucing secara teratur, terutama jika bulunya cenderung berminyak.Perhatian pada Mata dan Hidung: Bersihkan mata secara teratur dengan kapas lembut dan air hangat. Periksa hidungnya untuk memastikan tidak ada masalah pernapasan.Kesehatan Mulut: Perhatikan kesehatan gigi dan mulut. Berikan mainan atau makanan yang dapat membantu membersihkan gigi.Pantau Berat -Badan: Hindari obesitas dengan memberikan porsi makan yang sesuai dan aktivitas fisik yang cukup.Pentingnya Kebersihan Telinga: Bersihkan telinga secara teratur untuk mencegah infeksi.Perhatian terhadap Stres: Persian cenderung rentan terhadap stres, jadi sediakan tempat yang nyaman dan tenang untuknya.',
        Kucing    : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Makanan_Kucing/Persian/persian.png',
        Makanan1  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Makanan_Kucing/Persian/Hill_s_Science_Diet_Hairball_Control_persian.png',
        Makanan2  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Makanan_Kucing/Persian/Iams_ProActive_Health_persian.png',
        Makanan3  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Makanan_Kucing/Persian/Royal_Canin_persian.png',
        Vitamin1  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Vitamin_Kucing/Persian/Nutramax_Cosequin_Joint_Health_Supplement.png',
        Vitamin2  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Vitamin_Kucing/Persian/VetriScience_NuCat_Multivitamin.png',
        Vitamin3  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Vitamin_Kucing/Persian/Welactin_Omega-3_Fatty_Acid_Supplement.png', 
    },
    {    Ras : 'Sphynx',
         Deskripsi : 'Kucing Sphynx adalah ras yang unik dengan ciri khas kulit tanpa bulu dan bentuk tubuh yang elegan Kulit Tanpa Bulu: Sphynx memiliki kulit yang halus dan tanpa bulu, sehingga memerlukan perhatian ekstra terhadap suhu dan kebersihan.Tubuh Elegan: Bentuk tubuhnya yang muskulatif dan panjang memberikan kesan elegan.Telah Kecil: Telinganya kecil dan berbentuk segitiga, dengan mata besar dan hidung pesek.',
         Perawatan : 'Pengaturan Suhu: Kucing Sphynx lebih rentan terhadap suhu ekstrem. Pastikan untuk menjaga lingkungan mereka tetap hangat dan menyediakan tempat tidur berlapis untuk kenyamanan ekstra. Mandikan Secara Teratur: Karena tidak memiliki bulu, Sphynx perlu dimandikan secara teratur untuk menghilangkan minyak yang dapat menumpuk di kulit mereka. Perlindungan dari Matahari: Kulit tanpa bulu dapat lebih rentan terhadap paparan sinar matahari langsung. Pastikan mereka memiliki tempat teduh atau gunakan tabir surya khusus untuk kucing.Perhatian pada Kuku: Sphynx tetap perlu mempertahankan kuku mereka, jadi sediakan papan kuku atau mainan yang dapat membantu proses ini.Nutrisi Seimbang: Berikan makanan berkualitas tinggi yang mengandung nutrisi penting seperti protein dan lemak sehat untuk menjaga kesehatan kulit mereka.Pentingnya -Perhatian: Kucing Sphynx umumnya membutuhkan perhatian ekstra dan kehangatan manusia. Berikan waktu untuk bermain dan berinteraksi dengan mereka.',
         Kucing    : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Makanan_Kucing/Sphynx/sphynx.png',
         Makanan1  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Makanan_Kucing/Sphynx/Hill_s_Science_Diet_Adult_Sensitive_Stomach_and_Skin_Sphynx.png',
         Makanan2  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Makanan_Kucing/Sphynx/Purina_Pro_Plan_Focus_Sensitive_Skin_and_Stomach_Sphynx.png',
         Makanan3  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Makanan_Kucing/Sphynx/Royal_Canin_Sphynx.png',
         Vitamin1  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Vitamin_Kucing/Sphynx/Omega-3-Fatty-Acid-Supplement.png',
         Vitamin2  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Vitamin_Kucing/Sphynx/Suplemen_taurin.png',
         Vitamin3  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Vitamin_Kucing/Sphynx/VetriScience_NuCat_Multivitamin.png', 
    },
      {   Ras : 'Scotissh fold', 
          Deskripsi : 'Kucing Scottish Fold memiliki ciri khas telinga yang melipat ke depan, memberikan penampilan yang unik.Telinga Melipat: Telinga mereka melipat ke depan, memberikan penampilan yang khas dan unik.Tubuh Sedang: Scottish Fold umumnya memiliki tubuh sedang hingga besar, dengan kaki dan ekor yang seimbang.Bulu yang Beragam: Bulu Scottish Fold bisa pendek atau panjang tergantung pada varietasnya.',
          Perawatan : 'Perhatian pada Telinga: Karena ciri khas mereka adalah telinga yang melipat, perhatikan kebersihan telinga mereka dan bersihkan secara teratur.Grooming Rutin: Sisir bulu Scottish Fold sesuai dengan panjang bulunya. Bulu pendek memerlukan perawatan lebih sedikit dibandingkan dengan bulu panjang.Mainan dan Aktivitas: Scottish Fold suka bermain, sediakan mainan dan aktivitas fisik untuk mencegah kebosananan.Pantau Berat Badan: Hindari obesitas dengan memberikan porsi makan yang sesuai dan memotivasi aktivitas fisik.Kesehatan Gigi: Berikan mainan atau makanan yang membantu membersihkan gigi untuk mencegah masalah kesehatan gigi.Perhatian pada Kesehatan Mata: Beberapa individu Scottish Fold mungkin memiliki risiko lebih tinggi terhadap masalah mata, jadi perhatikan dan konsultasikan dengan dokter hewan jika diperlukan.',
          Kucing    : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Makanan_Kucing/Scotissh_fold/scottish%20fold.png',
          Makanan1  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Makanan_Kucing/Scotissh_fold/Hill_s_Science_Diet-Adult_Indoor_Scotissh_fold.png',
          Makanan2  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Makanan_Kucing/Scotissh_fold/Iams_ProActive_Health_Indoor_Weight_and_Hairball_Control_Scotissh_Fold.png',
          Makanan3  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Makanan_Kucing/Scotissh_fold/Royal_Canin_Scottish_Fold.png',
          Vitamin1  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Vitamin_Kucing/scotissh_fold/Suplemen_Glukosamin_dan_Kondroitin.png',
          Vitamin2  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Vitamin_Kucing/scotissh_fold/Suplemen_taurin.png',
          Vitamin3  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Vitamin_Kucing/scotissh_fold/Vitamin-D_dan_Kalsium.png', 
      },
      {
          Ras : 'Munchkin',
          Deskripsi : 'Kucing Munchkin dikenal dengan ciri khas kaki pendek mereka yang disebabkan oleh mutasi genetik Kaki Pendek: Ciri paling mencolok adalah kaki pendek mereka, yang disebabkan oleh mutasi genetik yang memengaruhi pertumbuhan tulang.Bentuk Tubuh: Meskipun kaki pendek, tubuh Munchkin proporsional dan otot.Bulu Beragam: Bulu Munchkin bisa pendek atau panjang, tergantung pada varietasnya.',
          Perawatan : 'Perhatian pada Kesehatan Tulang: Karena kaki pendek mereka, hindari aktivitas yang terlalu mengakibatkan tekanan berlebih pada tulang mereka. Mainan dan aktivitas yang sesuai dapat membantu menjaga kesehatan tulang.Grooming Rutin: Sisir bulu Munchkin secara teratur, terutama jika mereka memiliki bulu panjang untuk mencegah kusut dan matting.Pantau Berat Badan: Munchkin rentan terhadap obesitas, jadi pastikan untuk memberikan porsi makan yang sesuai dan mendorong aktivitas fisik.Mainan Interaktif: Munchkin senang bermain, sediakan mainan interaktif yang dapat merangsang kecerdasan mereka.Pemeriksaan Rutin: Lakukan pemeriksaan rutin ke dokter hewan untuk memastikan kesehatan tulang dan umum mereka.',
          Kucing    : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Makanan_Kucing/Munchkin/munchkin.png',
          Makanan1  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Makanan_Kucing/Munchkin/Hill_s_Science_Diet-Adult_Indoor_Munchkin.png',
          Makanan2  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Makanan_Kucing/Munchkin/Royal_Canin_Munchkin.png',
          Makanan3  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Makanan_Kucing/Munchkin/Iams_ProActive_Health_Indoor_Weight_and_Hairball_Control_Munchkin.png',
          Vitamin1  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Vitamin_Kucing/munchkin/Suplemen_taurin.png',
          Vitamin2  : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Vitamin_Kucing/munchkin/Vitamin-D_dan_Kalsium.png',
      },
      {
        Ras : 'American bobtail',
        Deskripsi : 'Bobtail dikenal dengan ekor pendek dan tubuh yang berotot.Ekor Pendek: Ciri khas utama adalah ekor pendek dan khas yang dapat berbentuk seperti pom-pom.Tubuh Berotot: Mereka memiliki tubuh yang berotot dan kokoh.Bulu Beragam: Bulu American Bobtail dapat berupa pendek atau semi-panjang, dan sering kali memiliki mantel yang tebal.',
        Perawatan : 'Grooming Rutin: Meskipun bulu mereka bisa pendek, melakukan penyisiran rutin membantu mencegah kusut dan menghilangkan bulu mati.Aktivitas Fisik: American Bobtail aktif dan suka bermain. Berikan mainan dan aktivitas fisik yang merangsang untuk menjaga kebugaran dan kebahagiaan mereka.Perhatian pada Kesehatan Ekor: Perhatikan ekor mereka, terutama jika memiliki bentuk khusus. Pastikan tidak ada masalah kesehatan atau cedera pada ekor mereka.Pantau Berat Badan: Kontrol porsi makan dan berikan makanan berkualitas untuk menjaga berat badan yang sehat.Pemeriksaan Rutin: Lakukan pemeriksaan rutin ke dokter hewan untuk memastikan kesehatan umum mereka.',
        Kucing   : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Makanan_Kucing/American_bobtail/american_bobtail-removebg-preview.png',
        Makanan1 : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Makanan_Kucing/American_bobtail/Hill_s_Science_Diet_Adult_Hairball_Control_American_bobtail.png',
        Makanan2 : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Makanan_Kucing/American_bobtail/Iams_ProActive_Health_Hairball_Care_American_Bobtail-removebg-preview.png',
        Vitamin1 : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Vitamin_Kucing/American_Bobtail/Omega-3_Fatty_Acid_Supplement.png',
        Vitamin2 : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Vitamin_Kucing/American_Bobtail/Suplemen_taurin.png',
        Vitamin3 : 'https://storage.googleapis.com/bucket_makanan_vitamin/Makanan%20dan%20Vitamin/Vitamin_Kucing/American_Bobtail/Vitamin-E.png',
    },
  // Tambahkan informasi perawatan untuk ras kucing lain di sini
];

function getCatInfo(breed) {
  // Temukan informasi kucing berdasarkan ras
  const catInfo = catCareInfo.find((item) => item.Ras === breed);

  // Kembalikan objek info kucing jika ditemukan, atau null jika tidak ditemukan
  return catInfo || { Ras: 'Not found', Deskripsi: 'Informasi tidak tersedia untuk ras ini.', Perawatan: '', Kucing: '', Makanan1: '',Makanan2: '',Makanan3: '', Vitamin1: '',Vitamin2: '',Vitamin3: '' };
}
function getAllCatInfo() {
  return catCareInfo; // This function returns all cat care information
}


module.exports = { getCatInfo,getAllCatInfo };
