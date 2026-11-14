/**
 * data.js
 * Single source of truth for destinations, journeys, culinary, products, timeline and events.
 * Every page (home, map, detail, tracker, search, AI links) reads from these records.
 *
 * ─── HOW TO ADD PHOTOS LATER ───────────────────────────────────────────────
 *  1. Copy the photo into the path shown in `coverSuggested` / `gallerySuggested`.
 *  2. In the record, set  cover: "<that path>"  and/or  gallery: ["<path>", ...].
 *  While `cover` is null (or the file is missing) a CSS placeholder is shown, so there
 *  are never broken images. Never reuse one figure's photo for another figure.
 *
 * ─── HOW TO VERIFY COORDINATES LATER ───────────────────────────────────────
 *  Set  coords: [lat, lng]  (tomb-complex or checkpoint point), coordsSource: "<URL>",
 *  coordsStatus: "verified". Only then are the map pin shown as exact and GPS auto-stamping
 *  enabled for that destination. Until then the map shows an approximate area (areaCoords)
 *  and the visitor uses manual check-in. radiusMeters is configurable per destination.
 *
 * Fields with {id, en} are bilingual; use loc(value) to read the current language.
 * Historical content follows docs: facts[].type is fact | academic | tradition.
 * See CONTENT_SOURCES.md for the sources behind each profile.
 */

import { DESTINATION_COMPLETION } from './destination-completion.js'

const DESTINATION_BASE = [
  {
    "id": "sunan-ampel",
    "order": 1,
    "kind": "walisongo",
    "name": "Makam Sunan Ampel",
    "nameFull": "Raden Rahmat (Raden Mohammad Ali Rahmatullah)",
    "titles": "Sunan Ampel; Raden Rahmat; Sunan Ampel Denta",
    "otherNames": [
      "Raden Mohammad Ali Rahmatullah"
    ],
    "period": {
      "id": "Abad ke-15 M. Tahun lahir sering ditulis sekitar 1401 dan kedatangan ke Majapahit 1443, tetapi angka ini berasal dari sumber sekunder tanpa rujukan primer dan belum dapat dipastikan; tahun wafat tidak ditemukan pada sumber yang dibuka.",
      "en": "15th century CE. A birth around 1401 and arrival in Majapahit in 1443 are often cited, but come from secondary sources without primary references and cannot be confirmed; no death year was found in the sources opened.",
      "certainty": "local_tradition"
    },
    "category": "Wali Songo Journey",
    "categoryIcon": "moon-star",
    "province": "Jawa Timur",
    "regionKey": "east-java",
    "regency": "Kota Surabaya",
    "city": "Surabaya",
    "coords": null,
    "coordsStatus": "unverified",
    "areaCoords": [
      -7.23,
      112.743
    ],
    "coordsSource": null,
    "mapsQuery": "Makam Sunan Ampel Surabaya",
    "radiusMeters": 250,
    "duration": null,
    "cover": null,
    "coverSuggested": "assets/images/walisongo/sunan-ampel/cover.jpg",
    "gallery": [],
    "gallerySuggested": [
      "assets/images/walisongo/sunan-ampel/gallery-1.jpg",
      "assets/images/walisongo/sunan-ampel/gallery-2.jpg",
      "assets/images/walisongo/sunan-ampel/gallery-3.jpg"
    ],
    "excerpt": {
      "id": "Sunan Ampel dikenal sebagai tokoh Wali Songo yang berbasis di Ampel Denta, Surabaya, tempat ia disebut mendirikan pesantren dan masjid. Banyak guru Wali Songo dikaitkan dengannya; data biografinya sebagian besar bersumber dari tradisi.",
      "en": "Sunan Ampel is remembered as a Wali Songo figure based at Ampel Denta, Surabaya, where he is said to have founded a pesantren and a mosque. Much of his biography rests on tradition."
    },
    "sections": {
      "background": {
        "id": [
          "Menurut sumber populer yang dikutip media dan skripsi, ia putra Ibrahim Zainuddin Al-Akbar (Ibrahim Asmarakandi, disebut sebagai tokoh dari Champa yang kemudian menetap di Tuban) dan Dewi Candra Wulan. Detik.com bahkan menyebutnya putra Maulana Malik Ibrahim; sumber-sumber ini tidak seragam.",
          "Silsilah tersebut berasal dari babad dan tradisi, bukan dokumen sezaman, sehingga diperlakukan sebagai tradisi."
        ],
        "en": [
          "According to popular sources cited by media and a thesis, he was the son of Ibrahim Zainuddin Al-Akbar (Ibrahim Asmarakandi, described as a figure from Champa who later settled in Tuban) and Dewi Candra Wulan. Detik.com instead calls him a son of Maulana Malik Ibrahim; the sources do not agree.",
          "This genealogy comes from chronicles and tradition, not contemporary documents, so it is treated as tradition."
        ]
      },
      "life": {
        "id": [
          "CNN Indonesia dan skripsi UMM menyebut kelahirannya sekitar 1401 di Champa; detik.com, mengutip UIN Sunan Ampel, menyebut ia datang ke Majapahit pada 1443. Sekitar usia 20 tahun ia disebut pindah ke Surabaya.",
          "Setelah menikah dengan putri seorang tumenggung Majapahit, ia disebut menetap di Ampel Denta dan membangun pesantren. Tahun-tahun ini belum dapat dipastikan dan tidak berasal dari sumber primer."
        ],
        "en": [
          "CNN Indonesia and a UMM thesis place his birth around 1401 in Champa; detik.com, citing UIN Sunan Ampel, says he came to Majapahit in 1443. At about age 20 he is said to have moved to Surabaya.",
          "After marrying the daughter of a Majapahit tumenggung, he is said to have settled at Ampel Denta and built a pesantren. These years cannot be confirmed and do not come from primary sources."
        ]
      },
      "context": {
        "id": [
          "Ia dikaitkan dengan masa Majapahit akhir, ketika Surabaya masih berada di bawah kekuasaan Majapahit. Kawasan Ampel kemudian dikenal sebagai Kampung Arab, permukiman pedagang keturunan Yaman dan Tionghoa (CNN Indonesia).",
          "Menurut tradisi yang dimuat CNN Indonesia, Raja Brawijaya meminjamkan tanah sekitar 12 hektare di Ampel Denta, asal nama 'Sunan Ampel'. Ini kisah tradisi yang belum diverifikasi dokumen sezaman."
        ],
        "en": [
          "He is associated with the late Majapahit period, when Surabaya was still under Majapahit rule. The Ampel area later became known as Kampung Arab, a settlement of traders of Yemeni and Chinese descent (CNN Indonesia).",
          "According to tradition reported by CNN Indonesia, King Brawijaya lent about 12 hectares at Ampel Denta, the origin of the name 'Sunan Ampel'. This is tradition not verified by contemporary documents."
        ]
      },
      "dakwah": {
        "id": [
          "Ampel disebut sebagai pusat dakwah dan pendidikan; pesantren di sana dikatakan melahirkan ulama dan pengajar (skripsi UMM). Kajian-kajian yang kami buka bersifat sekunder dan tidak memuat bukti sezaman tentang kurikulumnya.",
          "Ajaran 'Moh Limo' (menolak mabuk, judi, zina, narkoba, dan mencuri) kerap dikaitkan dengannya dalam media dan skripsi; asal-usulnya sebagai ajaran Sunan Ampel sendiri belum ditopang sumber primer."
        ],
        "en": [
          "Ampel is described as a centre of preaching and learning; the pesantren there is said to have produced scholars and teachers (UMM thesis). The studies opened are secondary and give no contemporary evidence of its curriculum.",
          "The 'Moh Limo' teaching (rejecting drunkenness, gambling, adultery, drugs and theft) is often attributed to him in media and the thesis; its origin with Sunan Ampel himself lacks primary support."
        ]
      },
      "methods": {
        "id": [
          "Pendekatannya digambarkan lewat pendidikan moral bagi bangsawan dan rakyat Majapahit (CNN Indonesia) serta pesantren. Tradisi menyebut Raja Brawijaya mempercayainya mengajar, tetapi ini tidak dapat diverifikasi.",
          "Murid-muridnya dalam tradisi mencakup tokoh seperti Sunan Giri; pada sumber yang kami buka, hubungan guru-murid ini muncul pada tirto.id."
        ],
        "en": [
          "His approach is described as moral education for Majapahit nobles and subjects (CNN Indonesia) alongside the pesantren. Tradition says King Brawijaya trusted him to teach, but this cannot be verified.",
          "Tradition counts figures such as Sunan Giri among his students; in the sources opened this teacher-student link appears in tirto.id."
        ]
      },
      "legacy": {
        "id": [
          "Masjid Agung Sunan Ampel dan kompleks makam di Surabaya masih aktif sebagai tempat ibadah dan ziarah. Pemerintah Kota Surabaya menetapkannya sebagai wisata religi pada 1972 (CNN Indonesia). Kompleks juga memuat makam tokoh lain seperti KH Mas Mansyur dan KH Hasan Gipo (detik.com).",
          "Masjid disebut dibangun pada 1421, tetapi tahun ini bertentangan dengan tahun kedatangan 1443 pada sumber lain, sehingga belum dapat dipastikan."
        ],
        "en": [
          "Masjid Agung Sunan Ampel and the tomb complex in Surabaya remain active places of worship and pilgrimage. The Surabaya city government designated it a religious tourism site in 1972 (CNN Indonesia). The complex also holds tombs of figures such as KH Mas Mansyur and KH Hasan Gipo (detik.com).",
          "The mosque is said to date from 1421, but this conflicts with the 1443 arrival year in another source, so it cannot be confirmed."
        ]
      },
      "values": {
        "id": [
          "Nilai yang dikaitkan dengan Sunan Ampel mencakup pendidikan akhlak dan kesederhanaan; skripsi UMM membaca makam tanpa cungkup sebagai tanda kesederhanaan, sebuah penafsiran penulisnya.",
          "Bagi pengunjung, kompleks ini ruang ibadah dan ziarah; kisah sumur dan karamah di sana adalah keyakinan peziarah, bukan fakta terverifikasi."
        ],
        "en": [
          "Values associated with Sunan Ampel include moral education and simplicity; the UMM thesis reads the tomb's lack of a canopy as a sign of simplicity, which is the author's interpretation.",
          "For visitors the complex is a place of worship and pilgrimage; stories of the well and miracles there are pilgrims' beliefs, not verified facts."
        ]
      }
    },
    "facts": [
      {
        "id": "Makam Sunan Ampel berada di Jalan Ampel Blumbang No. 2A, Kecamatan Semampir, Surabaya, bersama Masjid Agung Sunan Ampel dan Pasar Ampel (detik.com).",
        "en": "The Sunan Ampel tomb is at Jalan Ampel Blumbang No. 2A, Semampir district, Surabaya, alongside Masjid Agung Sunan Ampel and Pasar Ampel (detik.com).",
        "type": "historical_fact",
        "refs": [
          0
        ]
      },
      {
        "id": "Pemerintah Kota Surabaya menetapkan masjid sebagai wisata religi pada 1972 (CNN Indonesia).",
        "en": "The Surabaya city government designated the mosque a religious tourism site in 1972 (CNN Indonesia).",
        "type": "historical_fact",
        "refs": [
          1
        ]
      },
      {
        "id": "Skripsi UMM melaporkan kebiasaan peziarah meyakini air sumur makam membawa berkah dan makam tanpa cungkup; keyakinan ini dicatat sebagai pandangan peziarah.",
        "en": "The UMM thesis reports pilgrims' belief that the tomb's well water brings blessings, and a tomb without a canopy; this is recorded as pilgrims' belief.",
        "type": "academic_interpretation",
        "refs": [
          2
        ]
      },
      {
        "id": "Kelahiran sekitar 1401 di Champa, silsilah dari Ibrahim Asmarakandi, kedatangan 1443, dan pinjaman tanah 12 hektare dari Brawijaya bersumber dari tradisi dan literatur sekunder.",
        "en": "Birth around 1401 in Champa, descent from Ibrahim Asmarakandi, arrival in 1443, and the 12-hectare land loan from Brawijaya derive from tradition and secondary literature.",
        "type": "local_tradition",
        "refs": [
          1,
          2,
          0
        ]
      },
      {
        "id": "Ajaran 'Moh Limo' dikaitkan dengan Sunan Ampel dalam tradisi dan media; belum ada bukti sezaman.",
        "en": "The 'Moh Limo' teaching is attributed to Sunan Ampel in tradition and media; no contemporary evidence exists.",
        "type": "local_tradition",
        "refs": [],
        "needsReference": true
      }
    ],
    "variants": [
      {
        "id": "Tahun masjid: detik.com menyebut 1421 sementara kedatangan Sunan Ampel ke Majapahit 1443 menurut sumber yang sama; CNN Indonesia juga menyebut 1421. Ketidakkonsistenan ini belum terselesaikan.",
        "en": "Mosque year: detik.com gives 1421 while the same article puts his arrival in Majapahit at 1443; CNN Indonesia also gives 1421. The inconsistency is unresolved."
      },
      {
        "id": "Orang tua: detik.com menyebut putra Maulana Malik Ibrahim, sedangkan skripsi UMM menyebut putra Ibrahim Zainuddin Al-Akbar.",
        "en": "Parentage: detik.com calls him a son of Maulana Malik Ibrahim, while the UMM thesis says son of Ibrahim Zainuddin Al-Akbar."
      },
      {
        "id": "Skripsi UMM menyebutnya mendirikan Masjid Agung Demak (1479); klaim ini tidak dikuatkan sumber lain yang kami buka.",
        "en": "The UMM thesis says he founded Masjid Agung Demak (1479); no other opened source supports this."
      }
    ],
    "visit": {
      "etiquette": {
        "id": "Berpakaian sopan dan menutup aurat, menjaga ketenangan, mengikuti arahan juru kunci atau pengelola, dan tidak mengganggu peziarah yang sedang berdoa. Ikuti aturan setempat soal foto dan antrean, terutama saat ramai seperti bulan Ramadan.",
        "en": "Dress modestly, keep quiet, follow the caretaker's or management's guidance, and do not disturb pilgrims who are praying. Follow local rules on photography and queuing, especially during busy periods such as Ramadan."
      },
      "access": {
        "id": "Kompleks berada di kawasan Ampel, Semampir, Surabaya, berdekatan dengan Pasar Ampel (detik.com). Detail akses resmi tidak ditemukan.",
        "en": "The complex is in the Ampel area, Semampir, Surabaya, next to Pasar Ampel (detik.com). No official access details were found."
      },
      "hours": null,
      "fees": null
    },
    "needsVerification": [
      "Koordinat makam (tidak terverifikasi)",
      "Tahun lahir, wafat, kedatangan ke Jawa",
      "Silsilah dan orang tua",
      "Tahun pembangunan masjid (1421 vs 1443)",
      "Klaim pinjaman tanah 12 ha dari Brawijaya",
      "Klaim Masjid Agung Demak",
      "Jam buka dan biaya (tidak ditemukan)",
      "Sumber Kemenag, UIN SGD, UIN Jakarta, JML UM yang diminta tidak dapat dibuka (tidak ada di allowlist)"
    ],
    "nearbyCulinary": [],
    "nearbyProducts": [],
    "relatedDestinations": [
      "sunan-giri",
      "sunan-bonang",
      "malik-ibrahim"
    ],
    "references": [
      {
        "title": "Ada Apa Saja di Makam Sunan Ampel? Ini Destinasi yang Bisa Dikunjungi",
        "publisher": "detikJatim",
        "url": "https://www.detik.com/jatim/wisata/d-8233017/ada-apa-saja-di-makam-sunan-ampel-ini-destinasi-yang-bisa-dikunjungi",
        "supports": "Alamat Jl. Ampel Blumbang 2A; orang tua; kedatangan 1443; Moh Limo; masjid 1421 (tidak konsisten); makam tokoh lain; sumur sebagai keyakinan.",
        "tier": "media"
      },
      {
        "title": "Masjid Ampel, Tanah Pinjaman Raja Demi Akhlak Arek Suroboyo",
        "publisher": "CNN Indonesia (30 April 2020)",
        "url": "https://www.cnnindonesia.com/gaya-hidup/20200430130416-269-498844/masjid-ampel-tanah-pinjaman-raja-demi-akhlak-arek-suroboyo",
        "supports": "Kelahiran sekitar 1401, tanah pinjaman Brawijaya, pesantren, masjid 1421, wisata religi 1972, Kampung Arab.",
        "tier": "media"
      },
      {
        "title": "Kepercayaan Peziarah terhadap Air Sumur Makam Sunan Ampel (BAB I, penulis tidak tercantum)",
        "publisher": "Repositori UMM",
        "url": "https://eprints.umm.ac.id/id/eprint/10568/2/BAB%20I.pdf",
        "supports": "Silsilah, Champa 1401, pesantren, Moh Limo, makam tanpa cungkup, keyakinan sumur, klaim Masjid Demak.",
        "tier": "academic"
      }
    ],
    "locationInfo": {
      "name": "Kompleks Makam dan Masjid Agung Sunan Ampel, Surabaya",
      "address": "Jalan Ampel Blumbang No. 2A, Kecamatan Semampir, Kota Surabaya (detik.com)"
    },
    "coordsNotes": {
      "id": "Koordinat titik makam belum dapat diverifikasi dari sumber yang dapat dibuka. Penanda pada peta hanya menandai perkiraan wilayah, bukan lokasi makam. GPS auto-check-in dinonaktifkan untuk destinasi ini; gunakan check-in manual.",
      "en": "The tomb's exact coordinates could not be verified from the sources we could open. The map marker only shows an approximate area, not the tomb's location. GPS auto-check-in is disabled for this destination; use manual check-in."
    },
    "areaCoordsStatus": "approximate",
    "areaCoordsSource": {
      "id": "Titik perkiraan pusat wilayah yang dipilih penyusun; bukan dari sumber peta terverifikasi dan bukan lokasi makam.",
      "en": "Approximate regional centre chosen by the authors; not from a verified map source and not the tomb's location."
    }
  },
  {
    "id": "malik-ibrahim",
    "order": 2,
    "kind": "walisongo",
    "name": "Makam Maulana Malik Ibrahim",
    "nameFull": "Maulana Malik Ibrahim",
    "titles": "Sunan Gresik, Syekh Maghribi (Maulana Maghribi), Makhdum Ibrahim as-Samarqandi, Kakek Bantal (sebutan tradisi populer)",
    "otherNames": [
      "Sunan Gresik",
      "Syekh Maghribi",
      "Maulana Maghribi",
      "Makhdum Ibrahim as-Samarqandi"
    ],
    "period": {
      "id": "Wafat pada 12 Rabiulawal 822 H (sekitar 7 April 1419 M) menurut pembacaan inskripsi nisan yang dikutip rujukan ensiklopedis awal (non-akademik); tahun lahir belum dapat dipastikan (umumnya diperkirakan paruh pertama abad ke-14). Beberapa sumber memberi angka lain untuk kedatangan dan wafatnya.",
      "en": "Died on 12 Rabi' al-Awwal 822 AH (about 7 April 1419 CE) according to a reading of the tombstone inscription cited by an early encyclopedic reference (non-academic); year of birth cannot be established (commonly estimated as the first half of the 14th century). Some sources give different figures for his arrival and death.",
      "certainty": "academic_interpretation"
    },
    "category": "Wali Songo Journey",
    "categoryIcon": "moon-star",
    "province": "Jawa Timur",
    "regionKey": "east-java",
    "regency": "Kabupaten Gresik",
    "city": "Gresik",
    "coords": null,
    "coordsStatus": "unverified",
    "areaCoords": [
      -7.1543,
      112.6541
    ],
    "coordsSource": null,
    "mapsQuery": "Makam Maulana Malik Ibrahim Gresik",
    "radiusMeters": 200,
    "duration": null,
    "cover": null,
    "coverSuggested": "assets/images/walisongo/malik-ibrahim/cover.jpg",
    "gallery": [],
    "gallerySuggested": [
      "assets/images/walisongo/malik-ibrahim/gallery-1.jpg",
      "assets/images/walisongo/malik-ibrahim/gallery-2.jpg",
      "assets/images/walisongo/malik-ibrahim/gallery-3.jpg"
    ],
    "excerpt": {
      "id": "Maulana Malik Ibrahim dimakamkan di Gapurosukolilo, Gresik, dan sering disebut sebagai tokoh penyebar Islam paling awal dalam tradisi Wali Songo. Asal-usulnya diperdebatkan, sedangkan keterangan paling kokoh tentang dirinya berasal dari inskripsi nisan di makamnya.",
      "en": "Maulana Malik Ibrahim is buried in Gapurosukolilo, Gresik, and is often described as the earliest figure of the Wali Songo tradition. His origin is debated, and the firmest evidence about him is the inscription on his tombstone."
    },
    "sections": {
      "background": {
        "id": [
          "Asal-usul Maulana Malik Ibrahim belum disepakati. Pembacaan inskripsi nisan oleh J.P. Moquette dikutip untuk mengaitkannya dengan Kashan (Persia), sedangkan transkripsi J.J. Meinsma menyebut 'Makhdum Ibrahim as-Samarqandi', sehingga muncul pendapat bahwa ia berasal dari Samarkand. Pendapat ini dilaporkan rujukan ensiklopedis awal (non-akademik) berbasis pembacaan para peneliti kolonial, bukan keterangan dari naskah lokal.",
          "Sumber lain menyebut dugaan asal dari Maghrib (Maroko) karena sebutan 'Syekh Maghribi', atau dari Pasai dan Champa. Sebagian penulis menyatakan bahwa Maulana Malik Ibrahim berbeda dari Syekh Ibrahim Asmarakandi yang dimakamkan di Tuban; Agus Sunyoto juga menolak penyamaan keduanya. Karena sumbernya saling bertentangan, tempat kelahiran dan silsilah lengkapnya belum dapat dipastikan."
        ],
        "en": [
          "The origin of Maulana Malik Ibrahim is not agreed upon. A reading of the tombstone inscription by J.P. Moquette is cited to link him to Kashan (Persia), while J.J. Meinsma's transcription gives 'Makhdum Ibrahim as-Samarqandi', leading to the view that he came from Samarkand. An early encyclopedic reference (non-academic) reports these as readings by colonial-era researchers rather than statements from local manuscripts.",
          "Other sources suggest a Maghrib (Morocco) origin because of the epithet 'Syekh Maghribi', or ties to Pasai and Champa. Some authors hold that he was a different person from Syekh Ibrahim Asmarakandi, who is buried in Tuban; Agus Sunyoto also rejects identifying the two. Because the sources conflict, his birthplace and full genealogy cannot be established."
        ]
      },
      "life": {
        "id": [
          "Riwayat hidupnya sebagian besar bersumber dari tradisi. Cerita populer menyebut ia pernah tinggal sekitar 13 tahun di Champa, menikahi putri raja bernama Dewi Candrawulan, dan memiliki dua putra, salah satunya Ali Rahmatullah (Sunan Ampel). Kisah ini tidak terdokumentasi dalam sumber sezaman dan tidak dapat dipastikan; hubungan ayah-anak dengan Sunan Ampel juga diperselisihkan.",
          "Sumber-sumber populer menempatkan kedatangannya di Jawa antara tahun 1379 dan 1392 M, mendarat di Sembalo atau Leran (Manyar) lalu menetap di Gresik. Kerangka waktu ini berbeda-beda antar penulis. Rujukan ensiklopedis awal (non-akademik) mengaitkannya dengan tradisi tarekat Kubrawiyah dan mazhab Syafi'i dengan merujuk kajian Martin van Bruinessen; hal itu merupakan tafsir akademik, bukan fakta yang terdokumentasi langsung."
        ],
        "en": [
          "Most of his life story comes from tradition. Popular accounts say he lived about 13 years in Champa, married a king's daughter named Dewi Candrawulan, and had two sons, one of them Ali Rahmatullah (Sunan Ampel). This is not documented in contemporary sources and cannot be confirmed; his father-son relationship with Sunan Ampel is also disputed.",
          "Popular sources place his arrival in Java between 1379 and 1392 CE, landing at Sembalo or Leran (Manyar) and then settling in Gresik. The timeframe varies between authors. An early encyclopedic reference (non-academic) associates him with the Kubrawiyya tradition and the Shafi'i school, citing Martin van Bruinessen; this is an academic interpretation, not a directly documented fact."
        ]
      },
      "context": {
        "id": [
          "Pada masa yang dikaitkan dengan kehidupannya, Gresik merupakan kota pelabuhan di pesisir utara Jawa yang berada dalam lingkup Majapahit. Pelabuhan semacam ini menjadi tempat bertemunya pedagang dari berbagai wilayah, dan komunitas Muslim sudah dikenal di pesisir sebelum para wali dalam tradisi Wali Songo (rujukan ensiklopedis awal (non-akademik), 'Wali Sanga').",
          "Sebuah artikel populer mengaitkan kedatangannya dengan masa sulit Majapahit akibat Perang Paregreg dan krisis pangan, tetapi keterangan itu bersumber pada satu penulis dan belum didukung kajian sejarah yang kami buka. Di tingkat historiografi, perlu dicatat bahwa Maulana Malik Ibrahim tidak tercantum dalam daftar Wali Songo sebelum abad ke-19 menurut rujukan ensiklopedis awal (non-akademik), dan Agus Sunyoto menempatkannya sebagai tokoh tahap awal penyebaran Islam, bukan anggota dewan Wali Songo."
        ],
        "en": [
          "In the period linked to his life, Gresik was a port town on Java's north coast within Majapahit's sphere. Ports like this brought together merchants from many regions, and Muslim communities were already known on the coast before the walis of the Wali Songo tradition (an early encyclopedic reference (non-academic), 'Wali Sanga').",
          "A popular article links his arrival to a difficult period in Majapahit caused by the Paregreg war and a food crisis, but that claim rests on one author and is not supported by any historical study we opened. Historiographically, an early encyclopedic reference (non-academic) notes that Maulana Malik Ibrahim was not counted among the Wali Songo before the 19th century, and Agus Sunyoto places him as a figure of the early phase of Islam's spread rather than a member of the Wali Songo council."
        ]
      },
      "dakwah": {
        "id": [
          "Menurut tradisi yang dirangkum beberapa sumber, ia memulai kegiatan di pelabuhan Gresik dengan berdagang kebutuhan pokok, menawarkan pengobatan, dan bergaul tanpa membedakan lapisan sosial. Pendekatan ini disebut menarik dukungan masyarakat kecil. Setelah bertemu penguasa Majapahit, ia dikisahkan memperoleh lahan di Gapura, Gresik, untuk mendirikan pesantren.",
          "Sumber-sumber ini adalah tradisi lisan dan penulisan ulang yang belum dapat diuji dengan dokumen sezaman. Hal yang sama berlaku untuk kisah bahwa ia membangun bendungan atau irigasi yang membuat panen dua kali setahun, yang hanya bersandar pada satu penulis populer. Kisah doa meminta hujan yang menghentikan ritual pengorbanan juga tergolong tradisi."
        ],
        "en": [
          "According to tradition summarised by several sources, he began his activity at Gresik's port by trading basic goods, offering medical care, and mixing with people of all social ranks. This approach is said to have won support among ordinary people. After meeting the Majapahit ruler, he is said to have received land at Gapura, Gresik, to found a pesantren.",
          "These accounts are oral tradition and later retellings that cannot be tested against contemporary documents. The same applies to the story that he built a dam or irrigation works enabling two rice harvests a year, which rests on a single popular author. The tale of a prayer for rain that ended a sacrificial ritual is likewise tradition."
        ]
      },
      "methods": {
        "id": [
          "Dalam narasi yang beredar, metode dakwahnya bersifat damai dan lewat pelayanan sosial: perdagangan murah, pengobatan, pertanian, serta pembentukan kader di pesantren. Rujukan ensiklopedis awal (non-akademik) menyebut ia belajar bahasa setempat; catatan ini berasal dari sumber populer. Pendekatan seperti ini merupakan gambaran tradisi dan tafsir penulis modern, bukan hasil dokumen sezaman.",
          "Satu artikel menyebut Masjid Pesucinan di Leran, Manyar, sebagai masjid tertua di Jawa yang dibangunnya dan bercorak perpaduan unsur vihara dan pura. Pernyataan ini berasal dari satu sumber populer dan belum kami verifikasi dengan kajian arkeologi, sehingga tidak disajikan sebagai fakta. Tidak ada seni atau tradisi tertentu yang dapat dikaitkan secara kuat dengannya."
        ],
        "en": [
          "In the accounts in circulation, his method was peaceful and based on social service: affordable trade, medical care, farming, and training followers in a pesantren. An early encyclopedic reference (non-academic) says he learned local languages; this note comes from popular sources. Such an approach is a picture drawn from tradition and modern authors, not from contemporary documents.",
          "One article names Masjid Pesucinan in Leran, Manyar, as the oldest mosque in Java, said to have been built by him and to blend vihara and pura elements. This claim comes from a single popular source and we have not verified it against archaeological studies, so it is not presented as fact. No particular art form or tradition can be firmly linked to him."
        ]
      },
      "legacy": {
        "id": [
          "Peninggalan yang paling jelas adalah kompleks makam di Kelurahan Gapurosukolilo, Kota Gresik, di Jalan Malik Ibrahim, sekitar 200 meter dari kantor pemerintahan kota menurut satu sumber. Di sana terdapat nisan dengan inskripsi Arab yang menjadi dasar angka tahun 1419 M. Menurut rujukan ensiklopedis awal (non-akademik), makam ini dikunjungi peziarah, terutama saat peringatan haul.",
          "Gresik juga menyelenggarakan peringatan tahunan terkait tokoh ini; rujukan ensiklopedis awal (non-akademik) menyebut Gebyar Maulid. Tempat ziarah dan perayaan itu menunjukkan ingatan lokal yang berlanjut, sementara pesantren yang dikaitkan dengan tradisi tidak dapat dilacak secara fisik dalam sumber yang kami buka."
        ],
        "en": [
          "The clearest legacy is the tomb complex in Gapurosukolilo, Gresik, on Jalan Malik Ibrahim, about 200 metres from the city government offices according to one source. It holds a tombstone with an Arabic inscription that is the basis of the 1419 CE date. According to an early encyclopedic reference (non-academic), the tomb receives pilgrims, especially around the death anniversary (haul).",
          "Gresik also holds an annual commemoration related to him; an early encyclopedic reference (non-academic) mentions Gebyar Maulid. The pilgrimage and celebration show a continuing local memory, while the pesantren linked to the tradition cannot be traced physically in the sources we opened."
        ]
      },
      "values": {
        "id": [
          "Terlepas dari perdebatan sejarahnya, kisah tentang Maulana Malik Ibrahim yang beredar menonjolkan nilai pelayanan sosial: membantu orang sakit, memperhatikan kebutuhan pangan, dan membuka pendidikan. Nilai-nilai ini bisa dibaca sebagai pesan etis yang dipelihara tradisi, bukan sebagai rekaman peristiwa.",
          "Bagi pengunjung, tokoh ini dapat menjadi pintu masuk untuk memahami bahwa sejarah awal Islam di Jawa dibangun melalui jaringan pelabuhan, perdagangan, dan hubungan antarkomunitas, serta bagaimana tradisi dan penelitian sejarah sering berjalan berdampingan dengan penafsiran yang berbeda."
        ],
        "en": [
          "Regardless of the historical debates, the stories in circulation about Maulana Malik Ibrahim highlight social service: helping the sick, attending to food needs, and opening education. These values can be read as ethical messages preserved by tradition rather than as records of events.",
          "For visitors, he can be a way into understanding that Java's early Islamic history was shaped by port networks, trade, and relations between communities, and that tradition and historical research often exist side by side with differing interpretations."
        ]
      }
    },
    "facts": [
      {
        "id": "Inskripsi Arab pada nisan di Gresik menyebut wafat pada tahun 822 H (1419 M). Bulan dibaca berbeda (Rabiulawal atau Rabiulakhir), sehingga tanggal 12 Rabiulawal / 7 April 1419 tidak pasti; sebuah skripsi lain menulis 882 H, sehingga angka hijriah perlu diperiksa pada sumber primer.",
        "en": "The Arabic inscription on the tombstone in Gresik gives his death in the year 822 AH (1419 CE). The month is read differently (Rabi' al-Awwal or Rabi' al-Akhir), so the date 12 Rabi' al-Awwal / 7 April 1419 is uncertain; another thesis writes 882 AH, so the Hijri figure should be checked against primary sources.",
        "type": "academic_interpretation",
        "refs": [
          10,
          5
        ]
      },
      {
        "id": "Makamnya berada di Kelurahan Gapurosukolilo, Kecamatan Gresik, Kabupaten Gresik, dan menjadi tempat ziarah.",
        "en": "His tomb is in Gapurosukolilo, Gresik District, Gresik Regency, and is a pilgrimage site.",
        "type": "historical_fact",
        "refs": [
          4
        ]
      },
      {
        "id": "Asal-usulnya diperdebatkan: Kashan (pembacaan Moquette), Samarkand (transkripsi Meinsma), serta dugaan lain; sebagian peneliti memisahkannya dari Ibrahim Asmarakandi di Tuban.",
        "en": "His origin is disputed: Kashan (Moquette's reading), Samarkand (Meinsma's transcription), and other proposals; some researchers separate him from Ibrahim Asmarakandi of Tuban.",
        "type": "academic_interpretation",
        "refs": [],
        "needsReference": true
      },
      {
        "id": "NU Online (mengutip Atlas Wali Songo karya Agus Sunyoto) menyebut Maulana Malik Ibrahim tidak masuk kategori Wali Songo, tetapi menganggapnya penting pada tahap awal penyebaran Islam; daftar konvensional memasukkannya sebagai Sunan Gresik. Klaim bahwa ia baru dihitung sebagai anggota setelah abad ke-19 hanya berasal dari rujukan awal non-akademik dan belum dikonfirmasi.",
        "en": "NU Online (quoting Agus Sunyoto's Atlas Wali Songo) says Maulana Malik Ibrahim is not in the Wali Songo category but important in the early stage of Islam's spread; conventional lists include him as Sunan Gresik. The claim that he was only counted as a member after the 19th century comes only from an early non-academic reference and is unconfirmed.",
        "type": "academic_interpretation",
        "refs": [
          0,
          7,
          8
        ]
      },
      {
        "id": "Kisah tinggal di Champa, menikahi Dewi Candrawulan, dan menjadi ayah Sunan Ampel berasal dari tradisi dan belum terbukti dari sumber sezaman.",
        "en": "The story of living in Champa, marrying Dewi Candrawulan and fathering Sunan Ampel comes from tradition and is not proven by contemporary sources.",
        "type": "local_tradition",
        "refs": [],
        "needsReference": true
      },
      {
        "id": "Kisah doa meminta hujan yang menghentikan pengorbanan, serta pembangunan irigasi untuk panen dua kali setahun, adalah cerita tradisi.",
        "en": "The story of a prayer for rain that stopped a sacrifice, and of building irrigation for two harvests a year, are traditional accounts.",
        "type": "local_tradition",
        "refs": [],
        "needsReference": true
      }
    ],
    "variants": [
      {
        "id": "Tahun kedatangan di Jawa bervariasi: 1379 M (satu sumber populer), 1392 M / 801 H (dua sumber lain), atau 'akhir abad ke-14' (rujukan ensiklopedis awal (non-akademik)). Tahun lahir juga berbeda: 'paruh pertama' atau 'pertengahan' abad ke-14, tanpa tahun pasti.",
        "en": "The year of arrival in Java varies: 1379 CE (one popular source), 1392 CE / 801 AH (two other sources), or 'late 14th century' (an early encyclopedic reference (non-academic)). The birth year also differs: 'first half' or 'middle' of the 14th century, with no exact year."
      },
      {
        "id": "Tempat asal: Kashan, Samarkand, Maghrib, Pasai, atau Champa, bergantung pada sumber. Satu sumber menyebut Babad Cirebon memuat dugaan asal dari kepulauan di Laut Kaspia, tetapi rujukan ensiklopedis awal (non-akademik) sendiri mencatat judul dan atribusi naskahnya tidak konsisten.",
        "en": "Place of origin: Kashan, Samarkand, the Maghrib, Pasai or Champa, depending on the source. An early encyclopedic reference (non-academic) mentions a Cirebon babad attributing an origin to islands in the Caspian Sea, but notes that its own title and attribution of the manuscript are inconsistent."
      },
      {
        "id": "Lokasi makam sering disebut berada di Jalan Malik Ibrahim; satu skripsi menyebut kompleks 'Poesponegoro' di Jalan Pahlawan untuk kawasan makam, sehingga nama jalan dan nama kompleks perlu dikonfirmasi pada sumber resmi.",
        "en": "The tomb is usually placed on Jalan Malik Ibrahim; one thesis refers to a 'Poesponegoro' complex on Jalan Pahlawan for the tomb area, so street and complex names should be confirmed with official sources."
      },
      {
        "id": "Bulan pada inskripsi nisan dibaca berbeda: Van Ronkel dan Juynboll membacanya Rabiulawal, sedangkan Moquette membacanya Rabiulakhir; karena itu tanggal 12 Rabiulawal 822 H (7 April 1419 M) tidak pasti. Tahunnya sendiri, 822 H / 1419 M, konsisten pada artikel Berkala Arkeologi yang kami baca.",
        "en": "The month on the tombstone inscription is read differently: Van Ronkel and Juynboll read Rabi' al-Awwal, while Moquette read Rabi' al-Akhir, so the exact date of 12 Rabi' al-Awwal 822 AH (7 April 1419 CE) is uncertain. The year itself, 822 AH / 1419 CE, is consistent in the Berkala Arkeologi article we read."
      },
      {
        "id": "Kedudukan dalam Wali Songo: NU Online (mengutip Atlas Wali Songo karya Agus Sunyoto) menyebut ia tidak masuk kategori Wali Songo, sedangkan daftar konvensional (misalnya Amirudin, 2018) memasukkannya sebagai Sunan Gresik. Pernyataan bahwa ia 'tidak ada dalam daftar sebelum abad ke-19' hanya bersumber pada rujukan ensiklopedis awal dan belum dikonfirmasi.",
        "en": "Place in the Wali Songo: NU Online (quoting Agus Sunyoto's Atlas Wali Songo) says he is not in the Wali Songo category, whereas conventional lists (e.g. Amirudin, 2018) include him as Sunan Gresik. The claim that he 'is absent from lists before the 19th century' rests only on an early encyclopedic reference and is unconfirmed."
      }
    ],
    "visit": {
      "etiquette": {
        "id": "Makam adalah tempat ziarah aktif. Pengunjung diharapkan berpakaian sopan, menjaga ketenangan, menghormati peziarah yang sedang berdoa, dan mengikuti arahan pengelola setempat. Ini panduan umum, bukan aturan resmi yang kami verifikasi.",
        "en": "The tomb is an active pilgrimage site. Visitors are expected to dress modestly, keep quiet, respect pilgrims who are praying, and follow local management's instructions. This is general guidance, not an official rule we verified."
      },
      "access": {
        "id": "Makam berada di Jalan Malik Ibrahim, Gapurosukolilo, di pusat Kota Gresik, sekitar 200 meter dari kantor pemerintahan kota menurut satu sumber. Informasi akses rinci perlu dikonfirmasi pada pengelola.",
        "en": "The tomb is on Jalan Malik Ibrahim, Gapurosukolilo, in central Gresik, about 200 metres from the city government offices according to one source. Detailed access information should be confirmed with the management."
      },
      "hours": null,
      "fees": null
    },
    "needsVerification": [
      "Koordinat makam (tidak ditemukan pada sumber terbuka).",
      "Angka hijriah pada inskripsi nisan (822 H vs 882 H) dan pembacaan asli J.P. Moquette / J.J. Meinsma pada sumber primer.",
      "Nama kompleks dan jalan makam (Jalan Malik Ibrahim vs Jalan Pahlawan / 'Poesponegoro').",
      "Status Cagar Budaya makam dan nomor registrasinya (cagarbudaya.kemdikbud.go.id tidak dapat dibuka).",
      "Hubungan ayah-anak dengan Sunan Ampel dan identifikasi dengan Ibrahim Asmarakandi.",
      "Klaim Masjid Pesucinan sebagai masjid tertua di Jawa, irigasi, dan kisah hujan.",
      "Jam buka dan biaya masuk (tidak ada sumber resmi).",
      "Asal-usul (Kashan, Samarkand, Maghribi, Pasai, Champa), kedatangan 1379/1392 M, dan metode dakwah yang dikaitkan dengannya belum ditopang sumber akademik yang kami baca; bagian tersebut bersifat tradisi/tafsir."
    ],
    "nearbyCulinary": [
      "nasi-krawu",
      "bandeng"
    ],
    "nearbyProducts": [
      "batik",
      "songkok"
    ],
    "relatedDestinations": [
      "sunan-giri",
      "sunan-ampel",
      "bandar-grissee"
    ],
    "legacyCoords": [
      -7.1543,
      112.6541
    ],
    "references": [
      {
        "title": "Kenapa Maulana Malik Ibrahim Tak Tercatat di Atlas Wali Songo?",
        "publisher": "NU Online",
        "url": "https://nu.or.id/nasional/kenapa-maulana-malik-ibrahim-tak-tercatat-di-atlas-wali-songo-uNiMh",
        "supports": "Agus Sunyoto's argument (reported 12 May 2014) that Malik Ibrahim, d. 1419, is not counted in the Wali Songo council.",
        "tier": "media"
      },
      {
        "title": "Dakwah Sunan Gresik membangun sistem irigasi untuk atasi krisis pangan di tanah Jawa",
        "publisher": "Good News from Indonesia",
        "url": "https://www.goodnewsfromindonesia.id/2022/04/08/dakwah-sunan-gresik-membangun-sistem-irigasi-untuk-atasi-krisis-pangan-di-tanah-jawa",
        "supports": "Popular account of origin debate, 1392 arrival, trade/healing, rain tale, irrigation claim (single author), Masjid Pesucinan claim; used only as tradition/unverified.",
        "tier": "media"
      },
      {
        "title": "Makam Maulana Malik Ibrahim (page on Gresik tourism)",
        "publisher": "ICLS Universitas Muhammadiyah Gresik",
        "url": "https://icls.umg.ac.id/?p=324",
        "supports": "Tomb on Jalan Malik Ibrahim, Gapuro Sukolilo, about 200 m from city offices; arrival dated 1379 on that page.",
        "tier": "academic"
      },
      {
        "title": "5 dari 9 Makam Wali Songo Ada di Jawa Timur Lho, Ini Detail Lengkapnya",
        "publisher": "detikJatim",
        "url": "https://www.detik.com/jatim/wisata/d-5916721/5-dari-9-makam-wali-songo-ada-di-jawa-timur-lho-ini-detail-lengkapnya",
        "supports": "Address (Jalan Malik Ibrahim, Gapurosukolilo); birth place and year unknown; Maulana Maghribi; Leran; no hours/fees stated.",
        "tier": "media"
      },
      {
        "title": "Analisis Dampak Pengembangan Pariwisata di Obyek Wisata Religi Makam Sunan Maulana Malik Ibrahim (skripsi)",
        "publisher": "Universitas Brawijaya (M. Fahrizal Anwar, 2016)",
        "url": "https://repository.ub.ac.id/119400/1/SKRIPSIFULL.pdf",
        "supports": "Tomb located in Kelurahan Gapurosukolilo, Kecamatan Gresik; no coordinates stated.",
        "tier": "academic"
      },
      {
        "title": "Arsitektural Masjid Jami' Gresik: Analisis Bentuk, Simbol dan Makna (skripsi)",
        "publisher": "UIN Sunan Ampel Surabaya (M. Sulthan Haryo Wibowo, 2019)",
        "url": "https://core.ac.uk/download/289238877.pdf",
        "supports": "Arrival 801 H / 1392 M, gravestone dated '882 H (1419 M)' (inconsistent hijri figure), 'Poesponegoro' complex on Jalan Pahlawan; no coordinates.",
        "tier": "academic"
      },
      {
        "title": "Gresik coordinates",
        "publisher": "time-ok.com",
        "url": "https://time-ok.com/coordinates/gresik",
        "supports": "Town-centre coordinates of Gresik (-7.15389, 112.656), used only to judge plausibility of the existing site coordinate.",
        "tier": "media"
      },
      {
        "title": "Wali Songo, Lebih dari Sekedar Keyakinan Masyarakat",
        "publisher": "A. Khoirul Anam, NU Online (Risalah Redaksi), 2012 (24 July)",
        "url": "https://nu.or.id/risalah-redaksi/wali-songo-lebih-dari-sekedar-keyakinan-masyarakat-rofdU",
        "supports": "Pendapat Agus Sunyoto bahwa Maulana Malik Ibrahim tidak masuk kategori Wali Songo; daftar lain memasukkannya sebagai Sunan Gresik.",
        "tier": "media",
        "support": "partial",
        "quote": "Syekh Maulana Malik Ibrahim tidak masuk dalam kategori Wali Songo",
        "checkedByResearcher": true
      },
      {
        "title": "Tolerance of Walisongo's Da'wah as Local Wisdom of Islam Nusantara",
        "publisher": "Yoyok Amirudin, Proceedings, International Conference on Islam Nusantara, National Integrity and World Peace, Universitas Islam Malang, 2018",
        "url": "https://new-conference.unisma.ac.id/index.php/glu2018/article/download/1260/1013/3624",
        "supports": "Pendapat Agus Sunyoto bahwa Maulana Malik Ibrahim tidak masuk kategori Wali Songo; daftar lain memasukkannya sebagai Sunan Gresik.",
        "tier": "academic",
        "support": "differs",
        "quote": "Adapun kesembilan wali tersebut adalah Sunan Gresik (Maulana Malik Ibrahim),",
        "checkedByResearcher": true
      },
      {
        "title": "Edukasi dan Religi di Makam Sunan Gresik",
        "publisher": "ANTARA Jatim, 2015",
        "url": "https://jatim.antaranews.com/berita/159528/edukasi-dan-religi-di-makam-sunan-gresik",
        "supports": "Makam di Gapurosukolilo, Kota Gresik; haul tahunan di makam.",
        "tier": "media",
        "support": "partial",
        "quote": "Komplek makam kini tidak hanya ramai dikunjungi dari kalangan pesantren dan tokoh agama",
        "checkedByResearcher": true
      },
      {
        "title": "[judul belum tercatat] Berkala Arkeologi article by Muhammad Chawari on Gresik tombstones",
        "publisher": "Muhammad Chawari, Berkala Arkeologi (BRIN ejournal)",
        "url": "https://ejournal.brin.go.id/berkalaarkeologi/article/download/5122/3756/14985",
        "supports": "Inskripsi nisan di Gresik: wafat 822 H / 1419 M; bulan dibaca berbeda oleh Van Ronkel/Juynboll (Rabiulawal) dan Moquette (Rabiulakhir).",
        "tier": "academic",
        "support": "differs",
        "quote": "Tetapi keduanya disangkal oleh Moquette yang membacanya dengan Rabi'al Akhir.",
        "checkedByResearcher": true,
        "needsVerification": true
      }
    ],
    "locationInfo": {
      "name": "Makam Maulana Malik Ibrahim (Sunan Gresik), Gapurosukolilo, Gresik",
      "address": "Jalan Malik Ibrahim, Kelurahan Gapurosukolilo, Kecamatan Gresik, Kabupaten Gresik, Jawa Timur"
    },
    "coordsNotes": {
      "id": "Koordinat titik makam belum dapat diverifikasi dari sumber yang dapat dibuka. Penanda pada peta hanya menandai perkiraan wilayah, bukan lokasi makam. GPS auto-check-in dinonaktifkan untuk destinasi ini; gunakan check-in manual. Koordinat pada peta sama dengan titik dari proyek awal (-7,1543; 112,6541) dan berjarak sekitar 0,2 km dari titik pusat Kota Gresik pada direktori koordinat, sehingga lebih mirip titik pusat kota daripada titik makam. Tidak dipakai sebagai titik makam.",
      "en": "The tomb's exact coordinates could not be verified from the sources we could open. The map marker only shows an approximate area, not the tomb's location. GPS auto-check-in is disabled for this destination; use manual check-in. The map position equals the original project's point (-7.1543, 112.6541), about 0.2 km from a city-centre point on a coordinate directory, so it looks like a city-centre point rather than the tomb. It is not used as the tomb location."
    },
    "areaCoordsStatus": "approximate",
    "areaCoordsSource": {
      "id": "Titik representasi wilayah dari proyek awal (tanpa sumber tercatat).",
      "en": "Area-representation point from the original project (no recorded source)."
    }
  },
  {
    "id": "sunan-giri",
    "order": 3,
    "kind": "walisongo",
    "name": "Makam Sunan Giri",
    "nameFull": "Raden Paku (Muhammad Ainul Yaqin)",
    "titles": "Sunan Giri; Raden Paku; Joko Samudro; Prabu Satmoto",
    "otherNames": [
      "Muhammad Ainul Yaqin",
      "Joko Samudro",
      "Prabu Satmoto / Prabu Sasmata (Sultan Abdul Faqih) sebagai gelar penguasa Giri"
    ],
    "period": {
      "id": "Abad ke-15 hingga awal abad ke-16 M. Lahir sekitar 1442 dan wafat 1506 M disebut sumber sekunder; penobatan 1487 disebut dalam kajian yang mengutip rujukan lain. Belum dapat dipastikan dengan sumber primer.",
      "en": "15th to early 16th century CE. Birth around 1442 and death in 1506 are given by secondary sources; an enthronement in 1487 is cited in a study relying on other references. None is confirmed by primary sources.",
      "certainty": "local_tradition"
    },
    "category": "Wali Songo Journey",
    "categoryIcon": "moon-star",
    "province": "Jawa Timur",
    "regionKey": "east-java",
    "regency": "Kabupaten Gresik",
    "city": "Gresik",
    "coords": null,
    "coordsStatus": "unverified",
    "areaCoords": [
      -7.1225,
      112.6528
    ],
    "coordsSource": null,
    "mapsQuery": "Makam Sunan Giri Gresik",
    "radiusMeters": 300,
    "duration": null,
    "cover": "assets/Document/Makam Sunan Giri.png",
    "coverSuggested": "assets/images/walisongo/sunan-giri/cover.jpg",
    "gallery": [],
    "gallerySuggested": [
      "assets/images/walisongo/sunan-giri/gallery-1.jpg",
      "assets/images/walisongo/sunan-giri/gallery-2.jpg",
      "assets/images/walisongo/sunan-giri/gallery-3.jpg"
    ],
    "excerpt": {
      "id": "Sunan Giri dikenal sebagai tokoh Wali Songo yang memimpin pesantren dan pemerintahan Giri Kedaton di perbukitan Giri, Gresik. Giri disebut sebagai pusat pendidikan sekaligus kekuasaan politik pada akhir Majapahit.",
      "en": "Sunan Giri is remembered as a Wali Songo figure who led the pesantren and polity of Giri Kedaton on the Giri hill in Gresik. Giri is described as both an education centre and a political power in late Majapahit times."
    },
    "sections": {
      "background": {
        "id": [
          "Menurut tirto.id, ibunya Dewi Sekardadu, putri penguasa Blambangan, dan ayahnya Maulana Ishak. Kisah bayi yang dihanyutkan dalam peti lalu diasuh Nyai Pinatih diceritakan dengan merujuk Atlas Wali Songo (Agus Sunyoto, 2016).",
          "Silsilah dan kisah kelahiran ini bersifat tradisi; sumber yang kami buka juga menyebut silsilah dari catatan nasab keluarga dan Hikayat Banjar yang tidak sezaman."
        ],
        "en": [
          "According to tirto.id, his mother was Dewi Sekardadu, daughter of a Blambangan ruler, and his father Maulana Ishak. The story of the infant set adrift in a chest and raised by Nyai Pinatih is told with reference to Atlas Wali Songo (Agus Sunyoto, 2016).",
          "The genealogy and birth story are tradition; the sources opened also cite family lineage records and the Hikayat Banjar, which are not contemporary."
        ]
      },
      "life": {
        "id": [
          "Tirto.id menyebut ia belajar kepada Sunan Ampel di Ampel Denta, Surabaya, dan mendapat nama Muhammad Ainul Yaqin. Klaim ibadah haji dan belajar di Makkah muncul tanpa rujukan pada artikel yang sama.",
          "Ia disebut wafat pada 1506 dan dimakamkan di perbukitan Desa Giri, Kebomas, Gresik. Tahun-tahun ini belum dapat dipastikan."
        ],
        "en": [
          "Tirto.id says he studied under Sunan Ampel at Ampel Denta, Surabaya, and took the name Muhammad Ainul Yaqin. A claim of hajj and study in Mecca appears in the same article without a source.",
          "He is said to have died in 1506 and been buried on the hill in Giri village, Kebomas, Gresik. These years cannot be confirmed."
        ]
      },
      "context": {
        "id": [
          "Giri tumbuh ketika Majapahit melemah. Menurut kajian Zulaihah (2025) yang mengutip karya lain, pesantren Giri berawal dari pembangunan masjid di puncak Kedhaton pada 1481, kemudian memperoleh otonomi dari Majapahit.",
          "Kajian itu menyebut Sunan Giri dinobatkan pada 9 Maret 1487 dengan gelar Prabu Sasmata; kutipan ini berasal dari sumber sekunder lain dan belum diverifikasi independen."
        ],
        "en": [
          "Giri grew as Majapahit weakened. According to Zulaihah (2025), citing other works, the Giri pesantren began with a mosque built on the Kedhaton summit in 1481 and later gained autonomy from Majapahit.",
          "The study says Sunan Giri was enthroned on 9 March 1487 with the title Prabu Sasmata; this comes from other secondary works and has not been independently verified."
        ]
      },
      "dakwah": {
        "id": [
          "Zulaihah (2025) menggambarkan Giri sebagai pesantren yang menerima santri dari berbagai wilayah Nusantara, antara lain Kalimantan, Sulawesi, Sumatra, Madura, dan Halmahera, dengan pengajaran keislaman dan tasawuf.",
          "Giri juga disebut sebagai pusat kegiatan politik, sosial, ekonomi, dan keagamaan selama Islamisasi Jawa Timur. Rujukan Zulaihah dikutip dari Widodo, Mukarrom, dan lainnya yang tidak kami buka langsung."
        ],
        "en": [
          "Zulaihah (2025) describes Giri as a pesantren receiving students from across the archipelago, including Kalimantan, Sulawesi, Sumatra, Madura and Halmahera, teaching Islamic learning and Sufism.",
          "Giri is also called a hub of political, social, economic and religious activity during the Islamisation of East Java. Zulaihah cites Widodo, Mukarrom and others, whom we did not open directly."
        ]
      },
      "methods": {
        "id": [
          "Tirto.id mengaitkan dakwah Sunan Giri dengan pendidikan dan seni, termasuk permainan anak (Jelungan, Jamuran, Gendi Gerit) dan tembang (Padang Bulan, Cublak-cublak Suweng), merujuk pada buku Alik Al Adhim (2012).",
          "Atribusi ini dikaitkan dengan tradisi; kami tidak menemukan bukti sezaman bahwa Sunan Giri menciptakannya."
        ],
        "en": [
          "Tirto.id links Sunan Giri's preaching with education and the arts, including children's games (Jelungan, Jamuran, Gendi Gerit) and songs (Padang Bulan, Cublak-cublak Suweng), citing a book by Alik Al Adhim (2012).",
          "These attributions are associated with tradition; we found no contemporary evidence that Sunan Giri created them."
        ]
      },
      "legacy": {
        "id": [
          "Situs Giri Kedaton kini ditetapkan sebagai cagar budaya melalui keputusan bupati pada 2020, setelah upaya revitalisasi sejak 1973 (Fitria dan Hermawan, 2023). Situs ini dipandang membentuk identitas Gresik sebagai 'kota wali' dan 'kota santri'.",
          "Kajian yang sama mencatat bahwa lokasi Giri Kedaton sempat tertimbun dan tidak diketahui sebelum ditemukan kembali, sehingga banyak peninggalan hilang."
        ],
        "en": [
          "The Giri Kedaton site was designated cultural heritage by a regent's decree in 2020 after revitalisation efforts from 1973 (Fitria and Hermawan, 2023). It is seen as shaping Gresik's identity as a 'city of guardians' and 'city of students'.",
          "The same study notes that the location of Giri Kedaton was once buried and unknown before rediscovery, and many relics were lost."
        ]
      },
      "values": {
        "id": [
          "Nilai yang sering dikaitkan dengan Giri adalah pendidikan dan pembinaan masyarakat. Ini adalah penafsiran atas literatur sekunder, bukan kutipan sezaman.",
          "Bagi peziarah, makam di perbukitan Giri adalah ruang doa dan penghormatan; banyak kisah tentangnya tetap bersifat tradisi."
        ],
        "en": [
          "Values often linked to Giri are education and community building. This is an interpretation of secondary literature, not a contemporary quotation.",
          "For pilgrims, the tomb on the Giri hill is a space for prayer and respect; many stories about him remain tradition."
        ]
      }
    },
    "facts": [
      {
        "id": "Situs Giri Kedaton berada di Jalan Sunan Giri XIII, Dusun Kebomas, Kecamatan Kebomas, Kabupaten Gresik (Fitria dan Hermawan, 2023).",
        "en": "The Giri Kedaton site is on Jalan Sunan Giri XIII, Kebomas hamlet, Kebomas district, Gresik Regency (Fitria and Hermawan, 2023).",
        "type": "historical_fact",
        "refs": [
          1
        ]
      },
      {
        "id": "Keputusan bupati 2020 menetapkan Giri Kedaton sebagai cagar budaya; revitalisasi dimulai 1973 (Fitria dan Hermawan, 2023).",
        "en": "A 2020 regent's decree designated Giri Kedaton as cultural heritage; revitalisation began in 1973 (Fitria and Hermawan, 2023).",
        "type": "historical_fact",
        "refs": [
          1
        ]
      },
      {
        "id": "Zulaihah (2025) menggambarkan Giri sebagai pesantren dengan santri dari berbagai pulau dan, setelah otonomi dari Majapahit, pusat aktivitas politik, sosial, ekonomi, dan keagamaan, dengan merujuk karya sekunder lain.",
        "en": "Zulaihah (2025) describes Giri as a pesantren with students from many islands and, after gaining autonomy from Majapahit, a political, social, economic and religious hub, citing other secondary works.",
        "type": "academic_interpretation",
        "refs": [
          2,
          3,
          4
        ]
      },
      {
        "id": "Kelahiran sekitar 1442, kisah bayi dalam peti, silsilah dari Maulana Ishak dan Dewi Sekardadu, serta wafat 1506 bersumber dari tradisi dan literatur sekunder.",
        "en": "Birth around 1442, the infant-in-a-chest story, descent from Maulana Ishak and Dewi Sekardadu, and death in 1506 derive from tradition and secondary literature.",
        "type": "local_tradition",
        "refs": [
          0
        ]
      },
      {
        "id": "Permainan anak dan tembang seperti Cublak-cublak Suweng dikaitkan dengan tradisi Sunan Giri; belum ada bukti sezaman.",
        "en": "Children's games and songs such as Cublak-cublak Suweng are linked to Sunan Giri by tradition; contemporary evidence is lacking.",
        "type": "local_tradition",
        "refs": [
          0
        ]
      }
    ],
    "variants": [
      {
        "id": "Gelar penguasa: tirto.id menyebut Prabu Satmoto (1487-1506); Zulaihah (2025) menyebut penobatan 9 Maret 1487 dengan gelar Prabu Sasmata, dan Prabu Satmoto dari raja Demak. Rincian gelar dan tanggal belum seragam.",
        "en": "Ruler title: tirto.id gives Prabu Satmoto (1487-1506); Zulaihah (2025) gives an enthronement on 9 March 1487 with the title Prabu Sasmata, and Prabu Satmoto from the Demak king. Title details and dates are not uniform."
      },
      {
        "id": "Silsilah: tirto.id mencatat klaim dari Hikayat Banjar dan catatan nasab Hadramaut yang diyakini sebagian pesantren; keduanya tidak sezaman.",
        "en": "Genealogy: tirto.id notes claims from the Hikayat Banjar and a Hadramaut lineage record trusted by some pesantren; neither is contemporary."
      }
    ],
    "visit": {
      "etiquette": {
        "id": "Berpakaian sopan dan menutup aurat, menjaga ketenangan, mengikuti arahan juru kunci atau pengelola, dan tidak mengganggu peziarah yang sedang berdoa. Ikuti aturan setempat soal foto dan antrean, terutama saat ramai seperti bulan Ramadan.",
        "en": "Dress modestly, keep quiet, follow the caretaker's or management's guidance, and do not disturb pilgrims who are praying. Follow local rules on photography and queuing, especially during busy periods such as Ramadan."
      },
      "access": {
        "id": "Makam berada di bukit di Desa Giri, Kebomas, Gresik menurut tirto.id (mengutip Disparbud Gresik). Detail akses resmi tidak ditemukan.",
        "en": "The tomb is on a hill in Giri village, Kebomas, Gresik per tirto.id (citing Gresik tourism office). No official access details were found."
      },
      "hours": null,
      "fees": null
    },
    "needsVerification": [
      "Koordinat makam dan Giri Kedaton",
      "Alamat resmi kompleks makam",
      "Tahun lahir, wafat, dan penobatan",
      "Silsilah dan kisah kelahiran",
      "Klaim haji dan belajar di Makkah",
      "Atribusi permainan anak dan tembang",
      "Jam buka dan biaya",
      "Sumber Kemenag, UIN SGD, UIN Jakarta, JML UM yang diminta tidak dapat dibuka (tidak ada di allowlist)"
    ],
    "nearbyCulinary": [
      "pudak",
      "nasi-krawu"
    ],
    "nearbyProducts": [
      "songkok",
      "pudak-product"
    ],
    "relatedDestinations": [
      "malik-ibrahim",
      "sunan-ampel",
      "bandar-grissee"
    ],
    "legacyCoords": [
      -7.1225,
      112.6528
    ],
    "references": [
      {
        "title": "Sejarah Hidup Sunan Giri: Lahir, Nasab, Ajaran Dakwah Wali Songo",
        "publisher": "Tirto.id",
        "url": "https://tirto.id/sejarah-hidup-sunan-giri-lahir-nasab-ajaran-dakwah-wali-songo-gbPP",
        "supports": "Nama, orang tua, kisah kelahiran (tradisi), belajar pada Ampel, 1487-1506, makam di Desa Giri, permainan anak dan tembang sebagai atribusi.",
        "tier": "media"
      },
      {
        "title": "Revitalisasi Giri Kedaton Pada Tahun 1973-2020 Sebagai Sumber Belajar Sejarah (Lailatul Fitria, Eko Satriya Hermawan)",
        "publisher": "Avatara, Universitas Negeri Surabaya, 2023",
        "url": "https://ejournal.unesa.ac.id/index.php/avatara/article/view/51084",
        "supports": "Giri Kedaton sebagai kerajaan Islam, lokasi yang sempat tertimbun, revitalisasi 1973-2020, cagar budaya 2020, alamat situs.",
        "tier": "academic"
      },
      {
        "title": "Sejarah Kehidupan Sunan Prapen: Sosok Pendakwah Besar yang Terpinggirkan (Sitti Zulaihah)",
        "publisher": "Journal of Humanities Issues, UIN KHAS Jember, 2025",
        "url": "https://ejournal.uin-suska.ac.id/index.php/jhi/article/download/25248/13626",
        "supports": "Giri sebagai pesantren dan pusat politik, masjid 1481, penobatan 1487, santri dari berbagai pulau; rujukan sekunder dikutip, tidak diverifikasi langsung.",
        "tier": "academic"
      },
      {
        "title": "Masa Kasunanan Giri Kedaton tahun 1487-1605 M: tinjauan sejarah politik (thesis abstract)",
        "publisher": "Ahmad Sirojuddin, UIN Sunan Ampel Surabaya digilib (undergraduate thesis), 2025",
        "url": "https://digilib.uinsa.ac.id/id/eprint/82038/",
        "supports": "Giri Kedaton didirikan Sunan Giri I 1487 (Sirojuddin 2025; Hafizh dan Artono 2021: pelantikan 9 Maret 1487).",
        "tier": "academic",
        "support": "full",
        "quote": "Giri Kedaton didirikan oleh Sunan Giri I pada 1487 M",
        "checkedByResearcher": true
      },
      {
        "title": "Perkembangan Kerajaan Giri Kedaton Tahun 1548-1605",
        "publisher": "Abdullah Hafizh and Artono, AVATARA e-Journal Pendidikan Sejarah 9(4), Universitas Negeri Surabaya, 2021",
        "url": "https://ejournal.unesa.ac.id/index.php/avatara/article/view/41852/36003",
        "supports": "Giri Kedaton didirikan Sunan Giri I 1487 (Sirojuddin 2025; Hafizh dan Artono 2021: pelantikan 9 Maret 1487).",
        "tier": "academic",
        "support": "full",
        "quote": "pada 12 Rabiul Awal tahun 894 H/9 Maret 1487 M",
        "checkedByResearcher": true
      }
    ],
    "locationInfo": {
      "name": "Kompleks Makam Sunan Giri dan situs Giri Kedaton, Gresik",
      "address": "Situs Giri Kedaton: Jalan Sunan Giri XIII, Dusun Kebomas, Kecamatan Kebomas, Kabupaten Gresik (Fitria dan Hermawan, 2023)"
    },
    "coordsNotes": {
      "id": "Koordinat titik makam belum dapat diverifikasi dari sumber yang dapat dibuka. Penanda pada peta hanya menandai perkiraan wilayah, bukan lokasi makam. GPS auto-check-in dinonaktifkan untuk destinasi ini; gunakan check-in manual. Titik pada peta berasal dari proyek awal tanpa sumber tercatat.",
      "en": "The tomb's exact coordinates could not be verified from the sources we could open. The map marker only shows an approximate area, not the tomb's location. GPS auto-check-in is disabled for this destination; use manual check-in. The map point comes from the original project with no recorded source."
    },
    "areaCoordsStatus": "approximate",
    "areaCoordsSource": {
      "id": "Titik representasi wilayah dari proyek awal (tanpa sumber tercatat).",
      "en": "Area-representation point from the original project (no recorded source)."
    }
  },
  {
    "id": "sunan-drajat",
    "order": 4,
    "kind": "walisongo",
    "name": "Makam Sunan Drajat",
    "nameFull": "Raden Qasim (Raden Qosim)",
    "titles": "Sunan Drajat; Kangjeng Susuhunan Drajat; Pangeran Drajat",
    "otherNames": [
      "Raden Qosim",
      "Pangeran Kadrajat",
      "Masih Monat (nama yang disebut dalam satu kajian arkeologi; belum dapat dipastikan)"
    ],
    "period": {
      "id": "Akhir abad ke-15 hingga awal abad ke-16 M. Angka yang sering dikutip: lahir sekitar 1470 dan wafat 1522 M, tetapi bersumber dari tradisi dan literatur sekunder; belum dapat dipastikan.",
      "en": "Late 15th to early 16th century CE. Commonly cited: born around 1470 and died 1522, but these come from tradition and secondary literature and cannot be confirmed.",
      "certainty": "local_tradition"
    },
    "category": "Wali Songo Journey",
    "categoryIcon": "moon-star",
    "province": "Jawa Timur",
    "regionKey": "east-java",
    "regency": "Kabupaten Lamongan",
    "city": "Paciran",
    "coords": null,
    "coordsStatus": "unverified",
    "areaCoords": [
      -6.88,
      112.37
    ],
    "coordsSource": null,
    "mapsQuery": "Makam Sunan Drajat Paciran Lamongan",
    "radiusMeters": 250,
    "duration": null,
    "cover": null,
    "coverSuggested": "assets/images/walisongo/sunan-drajat/cover.jpg",
    "gallery": [],
    "gallerySuggested": [
      "assets/images/walisongo/sunan-drajat/gallery-1.jpg",
      "assets/images/walisongo/sunan-drajat/gallery-2.jpg",
      "assets/images/walisongo/sunan-drajat/gallery-3.jpg"
    ],
    "excerpt": {
      "id": "Sunan Drajat, putra Sunan Ampel, dikenang berdakwah di pesisir utara Lamongan dengan kepedulian sosial. Kompleks makamnya di Desa Drajat, Paciran, memiliki museum dan merupakan situs arkeologi Islam yang telah dikaji sejak awal abad ke-20.",
      "en": "Sunan Drajat, a son of Sunan Ampel, is remembered for preaching on Lamongan's north coast with a strong social concern. His tomb complex in Drajat village, Paciran, includes a museum and has been studied as an Islamic archaeological site since the early 20th century."
    },
    "sections": {
      "background": {
        "id": [
          "Menurut tradisi, Raden Qasim adalah putra bungsu Sunan Ampel dan Nyai Ageng Manila, lahir di Surabaya sekitar 1470. Ia disebut menimba ilmu pada ayahnya di Ampel Denta, dan dalam beberapa kisah juga kepada Sunan Gunung Jati di Cirebon.",
          "Silsilah dan urutan keluarga ini bersumber dari babad dan literatur sekunder. Satu kajian arkeologi menyebut nama lain, 'Masih Monat', yang menunjukkan variasi penamaan dalam sumber-sumber."
        ],
        "en": [
          "According to tradition, Raden Qasim was the youngest son of Sunan Ampel and Nyai Ageng Manila, born in Surabaya around 1470. He is said to have studied under his father at Ampel Denta and, in some accounts, under Sunan Gunung Jati in Cirebon.",
          "This genealogy and family order come from chronicles and secondary literature. One archaeological study gives another name, 'Masih Monat', showing variation in naming across sources."
        ]
      },
      "life": {
        "id": [
          "Kisah populer menyebut ia diutus ke pesisir Gresik, mendarat di Jelak (Banjarwati), lalu pindah beberapa tahun kemudian ke Desa Drajat karena banjir, tempat ia mendirikan surau yang berkembang menjadi pesantren. Gelar 'Drajat' dikaitkan dengan nama tempat ini.",
          "Kisah badai laut dan pertolongan ikan dalam perjalanannya adalah narasi tradisi. Tahun-tahun seperti 1485 (kedatangan) dan 1522 (wafat) muncul dalam literatur sekunder tanpa rujukan primer yang kami buka."
        ],
        "en": [
          "Popular accounts say he was sent to the Gresik coast, landed at Jelak (Banjarwati), and some years later moved to Drajat village because of flooding, where he founded a surau that grew into a pesantren. The title 'Drajat' is linked to this place name.",
          "The sea-storm and fish-rescue story is a narrative of tradition. Years such as 1485 (arrival) and 1522 (death) appear in secondary literature without primary references that we could open."
        ]
      },
      "context": {
        "id": [
          "Pesisir utara Lamongan pada masa itu berada dalam jaringan perdagangan dan pelayaran pantai utara Jawa, bersama Gresik dan Surabaya. Konteks ini umum bagi para tokoh yang dikaitkan dengan Wali Songo.",
          "Kajian arkeologi Islam atas kompleks Drajat menafsirkan proses Islamisasi di Jawa Timur sebagai damai dan berlangsung lewat penyesuaian dengan pola pikir setempat (Djabir, 1985). Ini adalah tafsir akademik berbasis studi pustaka."
        ],
        "en": [
          "Lamongan's north coast was then part of the trade and coastal shipping network of Java's north shore, together with Gresik and Surabaya. This context is shared by many figures linked to the Wali Songo.",
          "Islamic archaeological study of the Drajat complex interprets Islamization in East Java as peaceful and adapted to local patterns of thought (Djabir, 1985). This is a scholarly interpretation based on library research."
        ]
      },
      "dakwah": {
        "id": [
          "Sumber-sumber menyebut Sunan Drajat dikenal karena kepedulian sosial, membantu orang yang kesusahan sehingga dekat dengan masyarakat (Minan, 2024). Pesantren di Drajat disebut sebagai pusat pengajarannya.",
          "Ajaran yang sering dikaitkan dengannya adalah 'pepali pitu' (tujuh prinsip), menurut detik.com. Rincian dan penisbatan ajaran ini bersifat tradisi, dan kami tidak menemukan naskah sezaman yang memuatnya."
        ],
        "en": [
          "Sources describe Sunan Drajat as known for social concern, helping people in hardship and so building close ties with the community (Minan, 2024). The pesantren at Drajat is named as his teaching centre.",
          "A teaching often attributed to him is 'pepali pitu' (seven principles), per detik.com. Its details and attribution are tradition, and we found no contemporary text containing them."
        ]
      },
      "methods": {
        "id": [
          "Ia dikaitkan dengan tradisi tembang macapat, misalnya pangkur, sebagai sarana dakwah (detik.com; rujukan ensiklopedis awal (non-akademik)). Ini dikaitkan dengan tradisi, dan tidak ada bukti sezaman bahwa ia mencipta bentuk tembang tertentu.",
          "Naskah 'Kitab Amhjah' di Museum Sunan Drajat dipakai untuk pembacaan macapat di pesisir Lamongan pada acara seperti sunatan dan pernikahan, tetapi umur dan penyalinnya belum diketahui. Kajian naskah mushaf di museum yang sama menyimpulkan belum ada bukti meyakinkan tentang usia dan penyalinnya (Minan, 2024)."
        ],
        "en": [
          "He is associated with macapat songs, for example pangkur, as a preaching medium (detik.com; an early encyclopedic reference (non-academic)). This is attributed by tradition, and there is no contemporary evidence he created any particular song form.",
          "The 'Kitab Amhjah' manuscript at Museum Sunan Drajat was used for macapat recitation on the Lamongan coast at events such as circumcisions and weddings, but its age and copyist are unknown. A study of a Qur'an manuscript at the same museum concludes no convincing evidence yet establishes its age or copyist (Minan, 2024)."
        ]
      },
      "legacy": {
        "id": [
          "Kompleks makam di Desa Drajat pertama kali disebut J. Knebel pada 1907 dan dipugar pertama kali pada awal 1941 menurut Stutterheim (Abbaa, BRIN). Kompleks ini berteras, dengan cungkup makam di teras tertinggi.",
          "Museum Sunan Drajat menyimpan benda peninggalan yang dikaitkan dengan Sunan Drajat, keluarga, dan pengikutnya, termasuk Gamelan Singo Mengkok, dan berada di sebelah timur cungkup makam (indonesia.travel). Keterkaitan koleksi dengan sang tokoh umumnya bersandar pada tradisi lisan."
        ],
        "en": [
          "The tomb complex in Drajat village was first mentioned by J. Knebel in 1907 and first restored in early 1941 according to Stutterheim (Abbaa, BRIN). It is terraced, with the tomb house on the highest terrace.",
          "Museum Sunan Drajat holds relics linked to Sunan Drajat, his family and companions, including the Gamelan Singo Mengkok, and lies east of the tomb house (indonesia.travel). The link between the collection and the figure generally rests on oral tradition."
        ]
      },
      "values": {
        "id": [
          "Nilai yang paling sering dikaitkan dengan Sunan Drajat adalah kepedulian terhadap sesama, terutama yang miskin dan kesusahan. Nilai ini muncul dalam kajian dan tradisi setempat, bukan dari kutipan sezaman yang terverifikasi.",
          "Pengunjung dapat memaknai situs ini sebagai tempat belajar tentang sejarah pesantren pesisir dan seni macapat, sambil membedakan antara temuan arkeologis dan kisah tradisi."
        ],
        "en": [
          "The value most often linked to Sunan Drajat is care for others, especially the poor and those in hardship. It appears in scholarship and local tradition, not in verified contemporary quotations.",
          "Visitors can treat the site as a place to learn about coastal pesantren history and macapat arts, while distinguishing archaeological findings from traditional stories."
        ]
      }
    },
    "facts": [
      {
        "id": "Kompleks makam berada di Desa Drajat, Kecamatan Paciran, Kabupaten Lamongan, dengan cungkup makam di teras tertinggi.",
        "en": "The tomb complex is in Drajat village, Paciran district, Lamongan regency, with the tomb house on the highest terrace.",
        "type": "historical_fact",
        "refs": [
          8,
          3
        ]
      },
      {
        "id": "Kompleks makam pertama disebut Knebel (1907) dan dipugar awal 1941; dua sarjana membaca sengkalan pintu cungkup secara berbeda (1531 Saka/1609 M menurut Stutterheim, 1449 Saka/1527 M menurut Knebel).",
        "en": "The complex was first mentioned by Knebel (1907) and restored in early 1941; two scholars read the chronogram over the tomb-house door differently (1531 Saka/1609 CE per Stutterheim, 1449 Saka/1527 CE per Knebel).",
        "type": "academic_interpretation",
        "refs": [
          1,
          0
        ]
      },
      {
        "id": "Museum Sunan Drajat berada di sebelah timur cungkup makam, menurut situs resmi pariwisata Indonesia.",
        "en": "Museum Sunan Drajat is east of the tomb house, according to the official Indonesia tourism site.",
        "type": "historical_fact",
        "refs": [
          2
        ]
      },
      {
        "id": "Tahun lahir sekitar 1470 dan wafat 1522 beserta silsilah (putra Sunan Ampel) berasal dari tradisi dan literatur sekunder.",
        "en": "The birth year around 1470, death in 1522 and the parentage (son of Sunan Ampel) come from tradition and secondary literature.",
        "type": "local_tradition",
        "refs": [
          5
        ]
      },
      {
        "id": "Ajaran 'pepali pitu' dan penggunaan tembang macapat/pangkur dikaitkan dengan tradisi.",
        "en": "The 'pepali pitu' teaching and use of macapat/pangkur songs are attributed by tradition.",
        "type": "local_tradition",
        "refs": [],
        "needsReference": true
      }
    ],
    "variants": [
      {
        "id": "Tahun: sumber umum memberi lahir 1470 dan wafat 1522; satu kajian mushaf di Museum Sunan Drajat tidak memberi tanggal sama sekali. Sengkalan pada kompleks makam dibaca berbeda oleh Knebel dan Stutterheim (1527 vs 1609 M), sehingga tidak bisa dipakai sebagai penanda tegas masa wafatnya.",
        "en": "Dates: common sources give birth 1470 and death 1522; one study of a manuscript at Museum Sunan Drajat gives no dates at all. The chronograms at the tomb complex are read differently by Knebel and Stutterheim (1527 vs 1609 CE), so they cannot firmly mark his death period."
      },
      {
        "id": "Nama kecil: 'Raden Qasim' (umum) berbeda dengan 'Masih Monat' pada satu kajian arkeologi.",
        "en": "Birth name: 'Raden Qasim' (common) versus 'Masih Monat' in one archaeological study."
      },
      {
        "id": "Guru dan pernikahan: detik.com menyebut ia belajar kepada Sunan Gunung Jati dan menikahi putrinya; hal ini tidak muncul di sumber lain yang dibuka dan dianggap tradisi.",
        "en": "Teachers and marriages: detik.com says he studied under Sunan Gunung Jati and married his daughter; this does not appear in the other sources opened and is treated as tradition."
      }
    ],
    "visit": {
      "etiquette": {
        "id": "Berpakaian sopan dan tenang, ikuti arahan pengelola, dan hormati peziarah yang sedang berdoa. Situs ini dipakai sebagai tempat ziarah dan juga memiliki nilai pendidikan sejarah.",
        "en": "Dress modestly and quietly, follow the management's guidance, and respect pilgrims who are praying. The site serves as a pilgrimage place and also has historical and educational value."
      },
      "access": {
        "id": "detik.com (2024) melaporkan pengelola tidak memungut tiket masuk untuk situs-situsnya; informasi ini berasal dari berita, bukan pengumuman resmi, sehingga sebaiknya dikonfirmasi langsung.",
        "en": "detik.com (2024) reported that management does not charge admission for its sites; this comes from a news report, not an official notice, so it should be confirmed directly."
      },
      "hours": null,
      "fees": null
    },
    "needsVerification": [
      "Koordinat makam/museum (tidak terverifikasi)",
      "Alamat jalan resmi",
      "Tahun lahir, kedatangan di Jelak, dan wafat",
      "Silsilah, guru, dan pernikahan (Gunung Jati dan lainnya)",
      "Isi dan penisbatan 'pepali pitu' atau 'wenehono'",
      "Peran Sunan Drajat dalam penciptaan tembang pangkur",
      "Status cagar budaya resmi (Cagar Budaya Kemdikbud tidak dapat dibuka)",
      "Jam kunjung resmi",
      "Sumber Wali Songo yang diminta (Kemenag, JML UM, UIN SGD, UIN Jakarta) tidak dapat dibuka dari lingkungan ini",
      "Pangkur sebagai sarana dakwah adalah tafsir penulis modern (el Harakah, 2026) dan tradisi, bukan bukti sezaman."
    ],
    "nearbyCulinary": [],
    "nearbyProducts": [],
    "relatedDestinations": [
      "sunan-bonang",
      "sunan-giri"
    ],
    "references": [
      {
        "title": "Makam Sunan Drajat Cocok untuk Wisata Religi Saat Libur Idul Adha",
        "publisher": "detikJatim",
        "url": "https://www.detik.com/jatim/wisata/d-7392781/makam-sunan-drajat-cocok-untuk-wisata-religi-saat-libur-idul-adha",
        "supports": "Lokasi Desa Drajat, tiga teras, sengkalan 1531 Saka, tanpa tiket, klaim biografi dan pepali pitu.",
        "tier": "media"
      },
      {
        "title": "Ragam hias kompleks makam Sunan Drajat (Novida Abbaa)",
        "publisher": "Berkala Arkeologi (BRIN)",
        "url": "https://ejournal.brin.go.id/berkalaarkeologi/article/download/5489/4037",
        "supports": "Struktur teras dan cungkup, Knebel 1907, pemugaran 1941, perbedaan pembacaan sengkalan. Judul tidak tampak jelas pada halaman.",
        "tier": "academic"
      },
      {
        "title": "Museum Sunan Drajat",
        "publisher": "Indonesia.travel (Kemenparekraf)",
        "url": "https://www.indonesia.travel/id/id/destination/java/east-java/museum-sunan-drajat/",
        "supports": "Museum di timur cungkup makam, koleksi, Gamelan Singo Mengkok; tanpa jam dan tarif.",
        "tier": "government"
      },
      {
        "title": "Kepurbakalaan Islam komplek makam Sunan Drajat di Paciran Lamongan (Abd. Ra'uf Djabir, 1985)",
        "publisher": "Skripsi IAIN Sunan Ampel Surabaya (digilib UINSA)",
        "url": "https://digilib.uinsa.ac.id/11644",
        "supports": "Abstrak: Islamisasi damai dan akulturasi; kompleks sebagai bukti arkeologis.",
        "tier": "academic"
      },
      {
        "title": "Manuskrip Mushaf Al-Qur'an Koleksi Museum Sunan Drajat (Aufal Minan, 2024)",
        "publisher": "UIN Sunan Ampel Surabaya (OJS UNSIQ Syariati)",
        "url": "https://ojs.unsiq.ac.id/index.php/syariati/article/download/6959/3249",
        "supports": "Kepedulian sosial, makam di Paciran, manuskrip tanpa kolofon, tidak ada bukti usia meyakinkan.",
        "tier": "academic"
      },
      {
        "title": "Historical Analysis of Manuscript Kitab Amhjah Sunan Drajat Lamongan (Bab III)",
        "publisher": "Etheses IAIN Kediri",
        "url": "https://etheses.iainkediri.ac.id/20167/4/21102016_bab3.pdf",
        "supports": "Kisah Jelak/Banjarwati, 1470 dan 1522, museum di Ndalem Duwur, pembacaan macapat. Penulis tidak tampak pada halaman.",
        "tier": "academic"
      },
      {
        "title": "Qur'anic Analysis of Gamelan Singo Mengkok and Tembang Pangkur as Sunan Drajat's Cultural Dakwah",
        "publisher": "Al-Hafidz, A.F.; Roy, E.R.R.; Putra, Y.A.; Maulana, A.F. et al., el Harakah: Jurnal Budaya Islam 28(1):163-184 (UIN Malang); DOI 10.18860/eh.v28i1.37584, 2026",
        "url": "https://ejournal.uin-malang.ac.id/index.php/infopub/article/view/37584",
        "supports": "Tembang Pangkur sebagai sarana dakwah; peran sosial dan pengentasan kemiskinan.",
        "tier": "academic",
        "support": "partial",
        "quote": "symbolizes humility and self-control",
        "checkedByResearcher": true
      },
      {
        "title": "Peran Sunan Drajat dalam islamisasi di desa Drajat kecamatan Paciran kabupaten Lamongan abad (XV-XVI)",
        "publisher": "Anggun Rosaliah, UIN Sunan Ampel Surabaya (undergraduate thesis), 2022",
        "url": "https://digilib.uinsa.ac.id/id/eprint/54935/",
        "supports": "Tembang Pangkur sebagai sarana dakwah; peran sosial dan pengentasan kemiskinan.",
        "tier": "academic",
        "support": "partial",
        "quote": "Sunan Drajat merupakan salah satu tokoh Walisongo yang berjasa dan berperan penting",
        "checkedByResearcher": true
      },
      {
        "title": "Museum Sunan Drajat",
        "publisher": "Indonesia.travel (Ministry of Tourism, official portal)",
        "url": "https://www.indonesia.travel/nl/nl/destination/java/east-java/museum-sunan-drajat/",
        "supports": "Putra Sunan Ampel; kompleks makam dan museum di Paciran, Lamongan.",
        "tier": "government",
        "support": "partial",
        "quote": "Its location east of Sunan Drajat's tomb underscores its role as part of the religious heritage area.",
        "checkedByResearcher": true
      }
    ],
    "locationInfo": {
      "name": "Kompleks Makam dan Museum Sunan Drajat, Desa Drajat, Paciran, Lamongan",
      "address": "Desa Drajat, Kecamatan Paciran, Kabupaten Lamongan, Jawa Timur (alamat jalan tidak ditemukan pada sumber yang dibuka)"
    },
    "coordsNotes": {
      "id": "Koordinat titik makam belum dapat diverifikasi dari sumber yang dapat dibuka. Penanda pada peta hanya menandai perkiraan wilayah, bukan lokasi makam. GPS auto-check-in dinonaktifkan untuk destinasi ini; gunakan check-in manual. Halaman Museum Sunan Drajat di indonesia.travel menampilkan titik sekitar -6,884; 112,387 (museum, di sebelah timur makam). Angka ini dibaca dari ringkasan halaman dan tidak diverifikasi, sehingga tidak dipakai.",
      "en": "The tomb's exact coordinates could not be verified from the sources we could open. The map marker only shows an approximate area, not the tomb's location. GPS auto-check-in is disabled for this destination; use manual check-in. The Museum Sunan Drajat page on indonesia.travel shows a point near -6.884, 112.387 (the museum, east of the tomb). This was read from a page summary and is not verified, so it is not used."
    },
    "areaCoordsStatus": "approximate",
    "areaCoordsSource": {
      "id": "Titik perkiraan pusat wilayah yang dipilih penyusun; bukan dari sumber peta terverifikasi dan bukan lokasi makam.",
      "en": "Approximate regional centre chosen by the authors; not from a verified map source and not the tomb's location."
    }
  },
  {
    "id": "sunan-bonang",
    "order": 5,
    "kind": "walisongo",
    "name": "Makam Sunan Bonang",
    "nameFull": "Raden Makhdum Ibrahim (Maulana Makhdum Ibrahim)",
    "titles": "Sunan Bonang; Kangjeng Susuhunan Bonang; Sayyid Makhdum Ibrahim",
    "otherNames": [
      "Raden Maulana Makhdum Ibrahim",
      "Syekh Bari (dalam naskah 'Admonitions of Seh Bari', menurut Drewes; identifikasi dengan Sunan Bonang bersifat tafsir akademik)"
    ],
    "period": {
      "id": "Akhir abad ke-15 hingga awal abad ke-16 M. Tahun lahir sering disebut 1465 dan wafat sekitar 1525 M, tetapi angka ini muncul tanpa rujukan sumber primer dan belum dapat dipastikan.",
      "en": "Late 15th to early 16th century CE. A birth year of 1465 and a death around 1525 are often cited, but without primary-source references, so they cannot be confirmed.",
      "certainty": "local_tradition"
    },
    "category": "Wali Songo Journey",
    "categoryIcon": "moon-star",
    "province": "Jawa Timur",
    "regionKey": "east-java",
    "regency": "Kabupaten Tuban",
    "city": "Tuban",
    "coords": null,
    "coordsStatus": "unverified",
    "areaCoords": [
      -6.897,
      112.064
    ],
    "coordsSource": null,
    "mapsQuery": "Makam Sunan Bonang Tuban",
    "radiusMeters": 250,
    "duration": null,
    "cover": null,
    "coverSuggested": "assets/images/walisongo/sunan-bonang/cover.jpg",
    "gallery": [],
    "gallerySuggested": [
      "assets/images/walisongo/sunan-bonang/gallery-1.jpg",
      "assets/images/walisongo/sunan-bonang/gallery-2.jpg",
      "assets/images/walisongo/sunan-bonang/gallery-3.jpg"
    ],
    "excerpt": {
      "id": "Sunan Bonang dikenal sebagai putra Sunan Ampel yang berbasis di Tuban dan dikaitkan dengan naskah suluk serta tradisi dakwah melalui seni. Makamnya di Tuban adalah yang paling sering diziarahi, meski ada klaim lokasi lain.",
      "en": "Sunan Bonang is remembered as a son of Sunan Ampel who was based in Tuban and is associated with Sufi suluk texts and arts-based preaching. His tomb in Tuban is the most visited, though other sites are also claimed."
    },
    "sections": {
      "background": {
        "id": [
          "Menurut tradisi yang luas diterima, Sunan Bonang bernama Raden Makhdum Ibrahim, putra Raden Rahmat (Sunan Ampel) dan Nyai Ageng Manila, serta kakak Sunan Drajat. Silsilah ini disampaikan dalam literatur populer maupun akademik, tetapi bersumber dari babad dan tradisi lisan, bukan dokumen sezaman.",
          "Slamet Muljana (2005), sebagaimana dirujuk rujukan ensiklopedis awal (non-akademik), mengajukan tafsir lain tentang asal-usul keluarga ini yang mengaitkannya dengan bangsawan Tuban dan seorang kapitan Tionghoa. Tafsir tersebut termasuk perdebatan akademik dan tidak diterima semua kalangan."
        ],
        "en": [
          "According to widely accepted tradition, Sunan Bonang was Raden Makhdum Ibrahim, son of Raden Rahmat (Sunan Ampel) and Nyai Ageng Manila, and elder brother of Sunan Drajat. This genealogy appears in both popular and academic writing but rests on chronicles and oral tradition, not contemporary documents.",
          "Slamet Muljana (2005), as cited on an early encyclopedic reference (non-academic), proposed a different reading of the family's origins linking it to Tuban nobility and a Chinese captain. This belongs to scholarly debate and is not accepted by all."
        ]
      },
      "life": {
        "id": [
          "Sumber-sumber sekunder menyebut Sunan Bonang belajar kepada ayahnya di Ampel, kemudian di Pasai, lalu menetap di Tuban dan mendirikan pesantren di sana. Tahun lahir (sering ditulis 1465) dan wafat (sekitar 1525) tidak disertai rujukan primer, sehingga sebaiknya dibaca sebagai angka tradisi.",
          "Tempat kelahirannya pun berbeda: sebagian sumber menyebut Rembang atau Bonang, sebagian lain Tuban. Kisah-kisah seperti perselisihan di Kediri atau pertemuannya dengan tokoh lain dalam babad termasuk tradisi dan tidak dapat diverifikasi."
        ],
        "en": [
          "Secondary sources say Sunan Bonang studied under his father at Ampel, then in Pasai, before settling in Tuban where he ran a pesantren. His birth (often given as 1465) and death (around 1525) lack primary references and should be read as traditional figures.",
          "Even his birthplace varies: some sources say Rembang or Bonang, others Tuban. Episodes such as the conflict in Kediri or encounters with other figures in chronicles are tradition and cannot be verified."
        ]
      },
      "context": {
        "id": [
          "Ia hidup pada masa peralihan dari Majapahit ke kesultanan-kesultanan pesisir seperti Demak. Wilayah pantai utara Jawa, termasuk Tuban, adalah pelabuhan dagang yang terhubung dengan jaringan maritim Nusantara.",
          "Beberapa sumber populer menyebutnya guru Raden Patah, pendiri Demak. Klaim ini muncul di rujukan ensiklopedis awal (non-akademik) dan literatur dakwah, tetapi belum ditopang dokumen sezaman yang kami buka, sehingga diperlakukan sebagai tradisi."
        ],
        "en": [
          "He lived during the transition from Majapahit to coastal sultanates such as Demak. Java's north coast, Tuban included, hosted trading ports tied into maritime networks across the archipelago.",
          "Some popular sources call him a teacher of Raden Patah, founder of Demak. The claim appears on an early encyclopedic reference (non-academic) and in da'wah literature but is not backed by contemporary documents we could open, so it is treated as tradition."
        ]
      },
      "dakwah": {
        "id": [
          "Tuban disebut sebagai basis utama dakwahnya, dengan pesantren dan pengajaran tasawuf (Alfadhilah, 2022). Karakter ajaran yang dikaitkan dengannya bersifat sufistik, dengan penekanan pada penghayatan batin.",
          "Rujukan ensiklopedis awal (non-akademik) mencatat 'Het boek van Bonang' (Kropak/Lontar Ferrara), yang dibahas Schrieke, dan Drewes mengaitkan 'The Admonitions of Seh Bari' dengan 'santo Bonang'. Naskah-naskah ini menjadi dasar akademik terkuat tentang pemikirannya, meski hubungan pasti naskah dengan tokoh historisnya masih ditafsirkan para peneliti."
        ],
        "en": [
          "Tuban is named as the main base of his preaching, with a pesantren and Sufi instruction (Alfadhilah, 2022). The teachings associated with him are mystical, stressing inner experience.",
          "An early encyclopedic reference (non-academic) notes 'Het boek van Bonang' (Kropak/Lontar Ferrara), discussed by Schrieke, and Drewes links 'The Admonitions of Seh Bari' to the 'saint of Bonang'. These manuscripts are the strongest scholarly basis for his thought, though how exactly they relate to the historical person remains a matter of interpretation."
        ]
      },
      "methods": {
        "id": [
          "Literatur populer menyebut Sunan Bonang berdakwah lewat seni: gamelan (instrumen bonang), wayang, dan tembang seperti 'Tombo Ati'. Semua ini dikaitkan dengan tradisi; kami tidak menemukan bukti sezaman bahwa ia menciptakan instrumen atau tembang tersebut.",
          "Nama 'Bonang' sendiri punya beberapa penjelasan (nama desa, tafsir kata), dan penjelasan desa dianggap paling umum. Pendekatan budaya ini lazim disebut untuk Wali Songo secara umum, namun detail per tokoh lebih tepat dibaca sebagai tradisi."
        ],
        "en": [
          "Popular literature says Sunan Bonang preached through the arts: gamelan (the bonang instrument), wayang, and songs such as 'Tombo Ati'. These are associated with tradition; we found no contemporary evidence that he created the instrument or the songs.",
          "The name 'Bonang' has several explanations (a village name, word interpretations), the village explanation being the most common. A cultural approach is often attributed to the Wali Songo generally, but per-figure details are better read as tradition."
        ]
      },
      "legacy": {
        "id": [
          "Warisan yang paling dapat diverifikasi adalah naskah-naskah suluk dan nasihat yang dikaitkan dengannya, tersimpan antara lain di perpustakaan Leiden menurut Alfadhilah (2022), serta kompleks makam di Tuban yang masih diziarahi.",
          "Masjid Astana di samping kompleks makam disebut warga dan media sebagai salah satu masjid peninggalannya, dan bubur Suro disebut sebagai tradisi yang dikaitkan dengannya (detik.com). Keduanya adalah klaim tradisi lokal, bukan hasil penelitian sejarah."
        ],
        "en": [
          "The most verifiable legacy is the suluk and admonition manuscripts attributed to him, held at Leiden among other places according to Alfadhilah (2022), and the tomb complex in Tuban that is still visited.",
          "Masjid Astana beside the tomb is described by locals and media as one of the mosques he left, and bubur Suro as a tradition linked to him (detik.com). Both are local tradition claims, not historical findings."
        ]
      },
      "values": {
        "id": [
          "Nilai yang sering dikaitkan dengan ajaran Bonang adalah kesungguhan mencari ilmu, kedalaman penghayatan spiritual, dan pendekatan yang halus terhadap budaya setempat. Nilai ini diambil dari tafsir atas naskah suluk dan literatur dakwah, bukan dari kutipan langsung yang terverifikasi.",
          "Bagi peziarah dan pengunjung, makam ini lebih tepat dipahami sebagai ruang refleksi dan penghormatan, sambil menyadari bahwa banyak cerita tentangnya adalah tradisi."
        ],
        "en": [
          "Values often linked to Bonang's teaching include earnest pursuit of knowledge, depth of spiritual practice, and a gentle approach to local culture. These are drawn from interpretations of the suluk manuscripts and da'wah literature, not verified direct quotations.",
          "For pilgrims and visitors, the tomb is best understood as a space for reflection and respect, while recognising that many stories about him are tradition."
        ]
      }
    },
    "facts": [
      {
        "id": "Kompleks Makam Sunan Bonang berada di Kelurahan Kutorejo (Kutareja), Kecamatan Tuban, di sebelah barat alun-alun menurut Atmodjo.",
        "en": "The Sunan Bonang tomb complex lies in Kutorejo (Kutareja), Tuban district, just west of the town square according to Atmodjo.",
        "type": "historical_fact",
        "refs": [
          2,
          1
        ]
      },
      {
        "id": "Prasasti pada gerbang dan papan dinding kompleks dibaca Atmodjo bertarikh sekitar 1687 M dan 1789 M, sehingga bangunan yang ada sekarang lebih muda daripada masa hidup sang tokoh.",
        "en": "Inscriptions on the gate and wall board of the complex are read by Atmodjo as about 1687 and 1789 CE, so the present structures are later than the figure's lifetime.",
        "type": "academic_interpretation",
        "refs": [
          1
        ]
      },
      {
        "id": "Naskah 'Het boek van Bonang' (Kropak Ferrara) dan 'Admonitions of Seh Bari' dikaitkan dengan 'santo Bonang' dalam kajian Schrieke dan Drewes.",
        "en": "'Het boek van Bonang' (Kropak Ferrara) and the 'Admonitions of Seh Bari' are linked to the 'saint of Bonang' in the scholarship of Schrieke and Drewes.",
        "type": "academic_interpretation",
        "refs": [
          6,
          5
        ]
      },
      {
        "id": "Silsilah sebagai putra Sunan Ampel dan Nyai Ageng Manila serta tahun 1465 dan sekitar 1525 bersumber dari tradisi dan literatur sekunder.",
        "en": "Descent from Sunan Ampel and Nyai Ageng Manila, and the dates 1465 and around 1525, derive from tradition and secondary literature.",
        "type": "local_tradition",
        "refs": [
          4,
          3
        ]
      },
      {
        "id": "Dakwah melalui gamelan bonang, wayang, dan tembang dikaitkan dengan tradisi, belum ada bukti sezaman.",
        "en": "Preaching through bonang gamelan, wayang, and songs is attributed by tradition; contemporary evidence is lacking.",
        "type": "local_tradition",
        "refs": [
          3
        ]
      }
    ],
    "variants": [
      {
        "id": "Lokasi makam: Tuban adalah kompleks yang paling banyak dikunjungi dan dikelola sebagai tempat ziarah. NU Online (2015) melaporkan keyakinan sebagian peziarah bahwa pusara berada di Desa Bonang, Lasem, Rembang, yang menurut juru kunci setempat tidak memiliki nisan sebagai bukti, serta menyebut Pulau Bawean sebagai klaim lain tanpa rincian. Perbedaan ini belum terselesaikan.",
        "en": "Tomb location: Tuban is the most visited and managed pilgrimage complex. NU Online (2015) reports some pilgrims' belief that the grave is in Bonang village, Lasem, Rembang, which per the local caretaker has no tombstone as proof, and names Bawean Island as another claim without detail. The disagreement is unresolved."
      },
      {
        "id": "Tempat lahir dan penanggalan: rujukan ensiklopedis awal (non-akademik) menulis lahir di Rembang 1465 dan wafat di Tuban 1525; sumber lain menyebut Bonang, Tuban, tanpa tahun lahir. Tidak ada sumber primer yang menyelesaikannya.",
        "en": "Birthplace and dates: an early encyclopedic reference (non-academic) gives Rembang 1465 and death in Tuban 1525; other sources say Bonang, Tuban, without a birth year. No primary source settles it."
      },
      {
        "id": "Asal-usul keluarga: tradisi babad (Ampel, Nyai Ageng Manila) berbeda dengan tafsir Muljana.",
        "en": "Family origins: the chronicle tradition (Ampel, Nyai Ageng Manila) differs from Muljana's interpretation."
      },
      {
        "id": "Lokasi makam: sebuah skripsi UIN Sunan Ampel (2020) mencatat tujuh pendapat (Tuban, Lasem, Bawean, Madura, Kediri); detikHikmah (2025) menyebut Tuban paling mendekati kebenaran. Tahun: wafat 1525 (detikHikmah), lahir sekitar 1456 (Waluyo, 2023), berbeda dari 1465 pada rujukan ensiklopedis awal.",
        "en": "Tomb location: a UIN Sunan Ampel thesis (2020) lists seven opinions (Tuban, Lasem, Bawean, Madura, Kediri); detikHikmah (2025) calls Tuban the closest to the truth. Years: death 1525 (detikHikmah), birth about 1456 (Waluyo, 2023), different from 1465 in an early encyclopedic reference."
      },
      {
        "id": "Naskah 'Het Boek van Bonang' / 'Admonitions of Seh Bari': Schrieke menganggap teks Seh Bari sebagai nasihat Bonang kepada gurunya, sedangkan Drewes berpendapat Seh Bari menulisnya sendiri dan bukan guru Bonang (menurut Waluyo, 2023).",
        "en": "The 'Het Boek van Bonang' / 'Admonitions of Seh Bari' manuscripts: Schrieke held that the Seh Bari text is Bonang's advice to his teacher, while Drewes argued Seh Bari wrote it himself and was not Bonang's teacher (according to Waluyo, 2023)."
      }
    ],
    "visit": {
      "etiquette": {
        "id": "Berpakaian sopan dan menutup aurat, menjaga ketenangan, dan mengikuti arahan juru kunci atau pengelola. Aktivitas yang umum diamati di lokasi adalah membaca Al-Qur'an, Yasin, dan tahlil di pendopo, serta salat berjamaah di Masjid Astana (detik.com). Hormati peziarah yang sedang berdoa.",
        "en": "Dress modestly, keep quiet, and follow the caretaker's or management's guidance. Commonly observed activities are Qur'an reading, Yasin, and tahlil in the pavilion, and congregational prayer at Masjid Astana (detik.com). Respect pilgrims who are praying."
      },
      "access": {
        "id": "Kompleks berada di pusat kota Tuban, di sebelah barat alun-alun menurut Atmodjo. Detail akses resmi tidak ditemukan.",
        "en": "The complex is in central Tuban, just west of the town square per Atmodjo. No official access details were found."
      },
      "hours": null,
      "fees": null
    },
    "needsVerification": [
      "Koordinat makam Tuban (tidak terverifikasi)",
      "Alamat jalan resmi kompleks",
      "Tahun lahir dan wafat",
      "Silsilah ibu dan leluhur",
      "Klaim guru Raden Patah dan kaitan dengan Masjid Agung Demak",
      "Penciptaan gamelan bonang, wayang, tembang (Tombo Ati) oleh Sunan Bonang",
      "Status cagar budaya resmi kompleks (tidak dibuka dari Cagar Budaya Kemdikbud)",
      "Sumber primer Wali Songo yang diminta (Kemenag, JML UM, UIN SGD, UIN Jakarta) tidak dapat dibuka dari lingkungan ini",
      "Kelurahan Kutorejo sebagai lokasi makam di Tuban belum terkonfirmasi pada sumber non-ensiklopedis yang dibuka."
    ],
    "nearbyCulinary": [],
    "nearbyProducts": [],
    "relatedDestinations": [
      "sunan-drajat",
      "sunan-ampel"
    ],
    "references": [
      {
        "title": "Tarik Ulur Makam Sunan Bonang, Antara Rembang, Tuban, dan Bawean",
        "publisher": "NU Online (26 Juli 2015)",
        "url": "https://nu.or.id/daerah/tarik-ulur-makam-sunan-bonang-antara-rembang-tuban-dan-bawean-K9M8R",
        "supports": "Klaim makam di Desa Bonang Lasem, tanpa nisan; Tuban dan Bawean disebut sebagai alternatif tanpa rincian.",
        "tier": "media"
      },
      {
        "title": "Prasasti Singkat dari Empat Buah Makam Islam dan Sebuah Gua di Daerah Tuban (M.M. Sukarto K. Atmodjo)",
        "publisher": "Berkala Arkeologi (BRIN)",
        "url": "https://ejournal.brin.go.id/berkalaarkeologi/article/download/5477/4028/15520",
        "supports": "Lokasi makam di Kutareja, barat alun-alun; prasasti gerbang ~1789 M dan papan ~1687 M; nisan bertarikh.",
        "tier": "academic"
      },
      {
        "title": "Melihat Komplek Makam Sunan Bonang yang Tak Pernah Sepi saat Ramadan",
        "publisher": "detikJatim",
        "url": "https://www.detik.com/jatim/budaya/d-6645363/melihat-komplek-makam-sunan-bonang-yang-tak-pernah-sepi-saat-ramadan",
        "supports": "Kelurahan Kutorejo, pendopo, Masjid Astana, aktivitas peziarah, bubur Suro sebagai tradisi.",
        "tier": "media"
      },
      {
        "title": "Internalisasi Tasawuf dalam Dakwah Sunan Bonang (Jauharotina Alfadhilah)",
        "publisher": "SWALALITA, IAIN Nahdlatul Ulama Tuban, 2022",
        "url": "https://ejournal.iainutuban.ac.id/index.php/aswalalita/article/download/239/200",
        "supports": "Silsilah, wafat sekitar 1525, basis di Tuban, naskah suluk di Leiden, pemisahan tradisi vs lebih historis, tiga penjelasan nama Bonang.",
        "tier": "academic"
      },
      {
        "title": "Kisah Inspiratif Sunan Bonang (Zahrotul Mufidah)",
        "publisher": "Maliki Interdisciplinary Journal 3(2), 2025",
        "url": "https://urj.uin-malang.ac.id/index.php/mij/article/download/13232/5409",
        "supports": "Klaim 1465 dan sekitar 1525 tanpa kutipan; catatan karamah dan kisah legenda bukan sejarah terverifikasi.",
        "tier": "academic"
      },
      {
        "title": "Pendidikan Tauhid dalam Naskah Het Boek Van Bonang",
        "publisher": "Waluyo, Wahana Akademika: Jurnal Studi Islam dan Sosial, UIN Walisongo, 10(1):47-57, 2023",
        "url": "https://journal.walisongo.ac.id/index.php/wahana/article/download/15446/pdf",
        "supports": "Naskah Het Boek van Bonang / Admonitions of Seh Bari; perbedaan Schrieke dan Drewes.",
        "tier": "academic",
        "support": "partial",
        "quote": "Lan noranana papadaning Allah pangeran",
        "checkedByResearcher": true
      },
      {
        "title": "The Admonitions of Seh Bari; a 16th century Javanese Muslim text, attributed to the Saint of Bonan",
        "publisher": "G.W.J. Drewes (ed./transl.), HathiTrust catalog record (Univ. of Michigan copy)",
        "url": "https://catalog.hathitrust.org/Record/001636110",
        "supports": "Naskah Het Boek van Bonang / Admonitions of Seh Bari; perbedaan Schrieke dan Drewes.",
        "tier": "book",
        "support": "full",
        "quote": "The admonitions of Seh Bari; 16th century Javanese Muslim text, attributed to the Saint of Bonan",
        "checkedByResearcher": true
      },
      {
        "title": "Kontroversial Perkawinan dan keberadaan Makam Sunan Bonang",
        "publisher": "Munawaroh, UIN Sunan Ampel Surabaya (undergraduate thesis, Digilib), 2020",
        "url": "https://digilib.uinsa.ac.id/id/eprint/44530/",
        "supports": "Perbedaan pendapat lokasi makam (Tuban, Lasem, Bawean, Madura, Kediri); tahun wafat/lahir.",
        "tier": "academic",
        "support": "full",
        "quote": "7 pendapat yang menjelaskan jika makam sunan bonang berada di Tuban, Lasem, Bawean, madura, Kediri.",
        "checkedByResearcher": true
      },
      {
        "title": "Teka-teki Lokasi Makam Sunan Bonang yang Masih Misterius",
        "publisher": "detikHikmah, 2025 (2 Feb)",
        "url": "https://www.detik.com/hikmah/khazanah/d-7758842/teka-teki-lokasi-makam-sunan-bonang-yang-masih-misterius",
        "supports": "Perbedaan pendapat lokasi makam (Tuban, Lasem, Bawean, Madura, Kediri); tahun wafat/lahir.",
        "tier": "media",
        "support": "full",
        "quote": "yang paling mendekati kebenaran",
        "checkedByResearcher": true
      }
    ],
    "locationInfo": {
      "name": "Kompleks Makam Sunan Bonang (Masjid Astana), Tuban",
      "address": null
    },
    "coordsNotes": {
      "id": "Koordinat titik makam belum dapat diverifikasi dari sumber yang dapat dibuka. Penanda pada peta hanya menandai perkiraan wilayah, bukan lokasi makam. GPS auto-check-in dinonaktifkan untuk destinasi ini; gunakan check-in manual.",
      "en": "The tomb's exact coordinates could not be verified from the sources we could open. The map marker only shows an approximate area, not the tomb's location. GPS auto-check-in is disabled for this destination; use manual check-in."
    },
    "areaCoordsStatus": "approximate",
    "areaCoordsSource": {
      "id": "Titik perkiraan pusat wilayah yang dipilih penyusun; bukan dari sumber peta terverifikasi dan bukan lokasi makam.",
      "en": "Approximate regional centre chosen by the authors; not from a verified map source and not the tomb's location."
    }
  },
  {
    "id": "sunan-kudus",
    "order": 6,
    "kind": "walisongo",
    "name": "Menara & Makam Sunan Kudus",
    "nameFull": "Ja'far Shadiq (Sayyid Ja'far Shadiq)",
    "titles": "Sunan Kudus; Syekh Ja'far Shodiq; Raden Undung",
    "otherNames": [
      "Ja'far Shodiq"
    ],
    "period": {
      "id": "Abad ke-16 M. Tahun lahir dan wafat belum dapat dipastikan: sumber sekunder menyebut lahir sekitar 1400 atau 'sekitar 1500-an' dan tidak ada tahun wafat yang dapat dipastikan. Masjid dikaitkan dengan tahun 1549 M.",
      "en": "16th century CE. His birth and death years cannot be confirmed: secondary sources say born around 1400 or 'around the 1500s', and no reliable death year was found. The mosque is linked to the year 1549 CE.",
      "certainty": "local_tradition"
    },
    "category": "Wali Songo Journey",
    "categoryIcon": "moon-star",
    "province": "Jawa Tengah",
    "regionKey": "central-java",
    "regency": "Kabupaten Kudus",
    "city": "Kudus",
    "coords": null,
    "coordsStatus": "unverified",
    "areaCoords": [
      -6.8048,
      110.8405
    ],
    "coordsSource": null,
    "mapsQuery": "Menara Kudus Makam Sunan Kudus",
    "radiusMeters": 250,
    "duration": null,
    "cover": null,
    "coverSuggested": "assets/images/walisongo/sunan-kudus/cover.jpg",
    "gallery": [],
    "gallerySuggested": [
      "assets/images/walisongo/sunan-kudus/gallery-1.jpg",
      "assets/images/walisongo/sunan-kudus/gallery-2.jpg",
      "assets/images/walisongo/sunan-kudus/gallery-3.jpg"
    ],
    "excerpt": {
      "id": "Sunan Kudus dikenal sebagai tokoh Wali Songo yang dikaitkan dengan Masjid Menara Kudus di Kauman, Kudus. Menara Kudus yang bercorak candi menjadi bahan kajian akademik tentang perpaduan unsur Hindu-Buddha, Jawa, dan Islam.",
      "en": "Sunan Kudus is remembered as a Wali Songo figure associated with the Menara Kudus Mosque in Kauman, Kudus. The temple-like tower is a subject of academic study on the blend of Hindu-Buddhist, Javanese and Islamic elements."
    },
    "sections": {
      "background": {
        "id": [
          "Menurut iNews.id, ia putra Sunan Ngudung (Raden Usman Haji), imam Masjid Demak, dan ibunya Syarifah atau Nyi Ageng Manyura, cucu Sunan Ampel. Kharis (2020) menyebut ia belajar di Bait al-Maqdis, yang dikaitkan dengan nama 'Kudus'.",
          "Silsilah dan kisah belajar di Palestina bersumber dari tradisi dan literatur sekunder; tempat lahirnya pun berbeda antarsumber."
        ],
        "en": [
          "According to iNews.id, he was the son of Sunan Ngudung (Raden Usman Haji), imam of the Demak Mosque, and his mother Syarifah or Nyi Ageng Manyura, a granddaughter of Sunan Ampel. Kharis (2020) says he studied at Bait al-Maqdis, linked to the name 'Kudus'.",
          "The genealogy and the Palestine study story come from tradition and secondary literature; sources also differ on his birthplace."
        ]
      },
      "life": {
        "id": [
          "Tahun lahir berbeda: Hermanto dan Masfufah (2023) menyebut sekitar 1400, sedangkan goodnewsfromindonesia.id menyebut kelahiran di Al-Quds 'sekitar 1500-an'. Karena itu tahun lahir belum dapat dipastikan.",
          "Hermanto dan Masfufah mencatat bahwa tahun wafat juga belum jelas. Kharis (2020) menggambarkannya sebagai ahli fikih dan pemimpin di masa Kesultanan Demak."
        ],
        "en": [
          "Birth years differ: Hermanto and Masfufah (2023) say around 1400, while goodnewsfromindonesia.id says born in Al-Quds 'around the 1500s'. His birth year therefore cannot be confirmed.",
          "Hermanto and Masfufah note that the death year is also unclear. Kharis (2020) describes him as a jurist and leader during the Demak Sultanate."
        ]
      },
      "context": {
        "id": [
          "Ia dikaitkan dengan masa Kesultanan Demak pada abad ke-16. iNews.id menyebut perannya dalam peristiwa politik Demak, antara lain eksekusi Syekh Siti Jenar, namun artikel itu tidak menyertakan sumber primer; klaim ini sebaiknya dibaca sebagai tradisi.",
          "Kudus kemudian dikenal sebagai kota santri dan pusat perdagangan; kajian yang kami buka berfokus pada masjid dan tradisi, bukan pada sejarah ekonomi kota."
        ],
        "en": [
          "He is associated with the Demak Sultanate in the 16th century. iNews.id mentions roles in Demak political events, including the execution of Syekh Siti Jenar, but gives no primary source; the claim is best read as tradition.",
          "Kudus later became known as a santri town and trading centre; the studies opened focus on the mosque and traditions, not the town's economic history."
        ]
      },
      "dakwah": {
        "id": [
          "Kharis (2020) berargumen bahwa Sunan Kudus memadukan Islam dengan budaya Hindu-Buddha setempat tanpa menghapusnya, dan menyebut pendekatan ini 'Cultural Islam'. Ini adalah tafsir penulis berdasarkan sumber sekunder.",
          "Menara Kudus dalam kajian itu dilihat sebagai media dakwah; peran Sunan Kudus sebagai perancang dikuatkan oleh tulisan pada prasasti di atas mihrab menurut Hermanto dan Masfufah (2023)."
        ],
        "en": [
          "Kharis (2020) argues that Sunan Kudus combined Islam with local Hindu-Buddhist culture without eliminating it, calling this 'Cultural Islam'. This is the author's interpretation based on secondary sources.",
          "In that study the Menara Kudus is viewed as a medium of preaching; Hermanto and Masfufah (2023) say an inscription above the mihrab identifies Sunan Kudus as central to the mosque's architecture."
        ]
      },
      "methods": {
        "id": [
          "Larangan menyembelih sapi di Kudus dikaitkan dengan penghormatan kepada umat Hindu dan dianggap sebagai fatwa Sunan Kudus. iNews.id menyebutnya sebagai kisah yang diceritakan, merujuk Atlas Wali Songo (2016), dan menyertakan cerita rakyat lain tanpa sumber.",
          "Karena itu praktik ini dikaitkan dengan tradisi; kami tidak menemukan dokumen sezaman. Hal yang sama berlaku bagi atribusi seni seperti wayang kepadanya, yang tidak kami temukan dukungannya."
        ],
        "en": [
          "The ban on slaughtering cows in Kudus is linked to respect for Hindus and regarded as a fatwa of Sunan Kudus. iNews.id presents it as a told story, citing Atlas Wali Songo (2016), and adds other folklore without sources.",
          "The practice is therefore associated with tradition; we found no contemporary document. The same applies to attributing arts such as wayang to him, for which we found no support."
        ]
      },
      "legacy": {
        "id": [
          "Masjid Menara Kudus di Jalan Menara, Desa Kauman, Kecamatan Kota, Kudus, masih menjadi masjid aktif dan tujuan ziarah ke makam Sunan Kudus. Tradisi 'buka luwur' pada 10 Muharram dilakukan warga untuk mengharap berkah (goodnewsfromindonesia.id).",
          "Masjid dikenal dengan menara bergaya candi dan gapura lawang kembar. Tahun pembangunan 1549 M (956 H) banyak disebut, tetapi sumber lain menyebut 969 H dan penanggalan menara masih diperdebatkan."
        ],
        "en": [
          "The Menara Kudus Mosque on Jalan Menara, Kauman village, Kota district, Kudus, remains an active mosque and a destination for pilgrims to Sunan Kudus's tomb. The 'buka luwur' tradition on 10 Muharram is held by residents seeking blessings (goodnewsfromindonesia.id).",
          "The mosque is known for its temple-like tower and twin-gate (lawang kembar). A construction date of 1549 CE (956 H) is widely cited, but another source gives 969 H and the tower's dating is still debated."
        ]
      },
      "values": {
        "id": [
          "Nilai yang dikaitkan dengan Sunan Kudus adalah ketegasan dalam hukum Islam sekaligus sikap menghargai tetangga berbeda keyakinan (iNews.id; Kharis, 2020). Ini penafsiran atas literatur sekunder, bukan kutipan terverifikasi.",
          "Bagi pengunjung, kompleks ini ruang ibadah dan ziarah, sambil menyadari bahwa banyak cerita tentangnya, termasuk menara yang dibawa dari Arab, adalah cerita rakyat."
        ],
        "en": [
          "Values linked to Sunan Kudus are firmness in Islamic law alongside respect for neighbours of other faiths (iNews.id; Kharis, 2020). This is an interpretation of secondary literature, not a verified quotation.",
          "For visitors, the complex is a place of worship and pilgrimage, while recognising that many stories, including the tower being brought from Arabia, are folklore."
        ]
      }
    },
    "facts": [
      {
        "id": "Masjid Menara Kudus berada di Jalan Menara, Desa Kauman, Kecamatan Kota, Kabupaten Kudus (goodnewsfromindonesia.id).",
        "en": "Menara Kudus Mosque is at Jalan Menara, Kauman village, Kota district, Kudus Regency (goodnewsfromindonesia.id).",
        "type": "historical_fact",
        "refs": [
          2,
          1
        ]
      },
      {
        "id": "Plakat di atas mihrab bertarikh 956 H, disamakan dengan 1549 M (goodnewsfromindonesia.id; Hermanto dan Masfufah, 2023). Kharis (2020) menyebut 969 H dan penanggalan menara 1549 atau 1609 M; perbedaan ini belum terselesaikan.",
        "en": "A plaque above the mihrab is dated 956 H, equated with 1549 CE (goodnewsfromindonesia.id; Hermanto and Masfufah, 2023). Kharis (2020) gives 969 H and dates the tower to 1549 or 1609 CE; this difference is unresolved.",
        "type": "academic_interpretation",
        "refs": [
          1,
          2
        ]
      },
      {
        "id": "Asal-usul bentuk menara diperdebatkan: sebagian peneliti menghubungkannya dengan candi Hindu-Majapahit (misalnya Candi Jago) atau bale kulkul Bali (Kharis, 2020); Roesmanto (2013) dan Hermanto (2022), dikutip Hermanto dan Masfufah, menolak mengikuti kaidah candi dan melihatnya sebagai arsitektur Islam Nusantara.",
        "en": "The tower's origin is debated: some researchers link it to Hindu-Majapahit temples (e.g. Candi Jago) or the Balinese bale kulkul (Kharis, 2020); Roesmanto (2013) and Hermanto (2022), cited by Hermanto and Masfufah, reject temple conventions and see Islamic Nusantara architecture.",
        "type": "academic_interpretation",
        "refs": [
          1,
          0
        ]
      },
      {
        "id": "Larangan menyembelih sapi dan kisah menara dibawa dari Arab bersifat tradisi lokal tanpa dokumen sezaman.",
        "en": "The cow-slaughter ban and the story of the tower brought from Arabia are local tradition without contemporary documents.",
        "type": "local_tradition",
        "refs": [
          3
        ]
      },
      {
        "id": "Silsilah sebagai putra Sunan Ngudung dan ibu cucu Sunan Ampel serta belajar di Bait al-Maqdis bersumber dari tradisi dan literatur sekunder.",
        "en": "Descent as son of Sunan Ngudung with a mother a granddaughter of Sunan Ampel, and study at Bait al-Maqdis, derive from tradition and secondary literature.",
        "type": "local_tradition",
        "refs": [
          0
        ]
      }
    ],
    "variants": [
      {
        "id": "Angka tahun prasasti: 956 H (1549 M) menurut goodnewsfromindonesia.id dan Hermanto dan Masfufah (2023); 969 H (1549 M) menurut Kharis (2020). Selisih ini mungkin berasal dari konversi atau pembacaan, belum terselesaikan.",
        "en": "Inscription year: 956 H (1549 CE) per goodnewsfromindonesia.id and Hermanto and Masfufah (2023); 969 H (1549 CE) per Kharis (2020). The gap may stem from conversion or reading and is unresolved."
      },
      {
        "id": "Tahun lahir: sekitar 1400 (Hermanto dan Masfufah) atau sekitar 1500-an (goodnewsfromindonesia.id).",
        "en": "Birth year: around 1400 (Hermanto and Masfufah) or around the 1500s (goodnewsfromindonesia.id)."
      },
      {
        "id": "Hermanto dan Masfufah mencatat pintu lawang kembar bertarikh 1215 H, jauh setelah masa pembangunan awal, sehingga bagian itu dianggap lebih muda.",
        "en": "Hermanto and Masfufah record a twin-gate door dated 1215 H, long after the first construction phase, so that part is considered later."
      }
    ],
    "visit": {
      "etiquette": {
        "id": "Berpakaian sopan dan menutup aurat, menjaga ketenangan, mengikuti arahan juru kunci atau pengelola, dan tidak mengganggu peziarah yang sedang berdoa. Ikuti aturan setempat soal foto dan antrean, terutama saat ramai seperti bulan Ramadan.",
        "en": "Dress modestly, keep quiet, follow the caretaker's or management's guidance, and do not disturb pilgrims who are praying. Follow local rules on photography and queuing, especially during busy periods such as Ramadan."
      },
      "access": {
        "id": "Kompleks berada di kawasan Kauman, Kota Kudus, dan banyak dikunjungi peziarah ke makam Sunan Kudus (goodnewsfromindonesia.id). Jam buka dan biaya tidak ditemukan.",
        "en": "The complex is in Kauman, Kudus town, and is visited by many pilgrims to Sunan Kudus's tomb (goodnewsfromindonesia.id). Hours and fees were not found."
      },
      "hours": null,
      "fees": null
    },
    "needsVerification": [
      "Koordinat kompleks (tidak terverifikasi)",
      "Tahun lahir dan wafat",
      "Silsilah dan kisah belajar di Palestina",
      "Angka tahun prasasti (956 vs 969 H) dan penanggalan menara (1549 vs 1609)",
      "Asal-usul arsitektur menara (perdebatan)",
      "Larangan sapi sebagai praktik sejarah",
      "Peran dalam peristiwa politik Demak",
      "Atribusi wayang dan seni lain",
      "Jam buka dan biaya",
      "Sumber Kemenag, UIN SGD, UIN Jakarta repository, JML UM yang diminta tidak dapat dibuka (tidak ada di allowlist)"
    ],
    "nearbyCulinary": [],
    "nearbyProducts": [],
    "relatedDestinations": [
      "sunan-muria",
      "sunan-kalijaga"
    ],
    "references": [
      {
        "title": "Islamisasi Jawa: Sayyid Ja'far Shadiq dan Menara Kudus Sebagai Media Dakwahnya (Muhammad Abdul Kharis)",
        "publisher": "Jurnal Indo-Islamika, UIN Syarif Hidayatullah Jakarta, 2020",
        "url": "https://journal.uinjkt.ac.id/index.php/indo-islamika/article/download/17508/7862",
        "supports": "Cultural Islam, perbandingan menara dengan candi dan bale kulkul, penanggalan 1549/1609 dan 969 H, tradisi toleransi, belajar di Bait al-Maqdis; tafsir sekunder.",
        "tier": "academic"
      },
      {
        "title": "Bentuk dan Makna Ornamen Lawang Kembar Masjid Menara Kudus (Heri Hermanto, Usria Masfufah)",
        "publisher": "Jurnal Ilmiah Arsitektur 13(1), 2023",
        "url": "https://ojs.unsiq.ac.id/index.php/jiars/article/download/5127/2408",
        "supports": "Tahun 1549 M/956 H, perdebatan arsitektur (Roesmanto, Hermanto), prasasti mihrab, pintu 1215 H, lahir sekitar 1400.",
        "tier": "academic"
      },
      {
        "title": "Mengenal Masjid Menara Kudus: Sejarah, Keunikan, dan Tradisinya",
        "publisher": "Good News from Indonesia (18 Desember 2022)",
        "url": "https://www.goodnewsfromindonesia.id/2022/12/18/mengenal-masjid-menara-kudus-sejarah-keunikan-dan-tradisinya",
        "supports": "Alamat, plakat 956 H, deskripsi arsitektur, tradisi Ramadan dan buka luwur.",
        "tier": "media"
      },
      {
        "title": "Kisah Sunan Jafar Shodiq dan Asal Mula Orang Kudus Dilarang Makan Daging Sapi",
        "publisher": "iNews.id (29 Maret 2023)",
        "url": "https://www.inews.id/regional/jatim/kisah-sunan-jafar-shodiq-dan-asal-mula-orang-kudus-dilarang-makan-daging-sapi/all",
        "supports": "Orang tua, larangan sapi sebagai kisah/tradisi, klaim peran politik Demak tanpa sumber primer, cerita rakyat menara.",
        "tier": "media"
      }
    ],
    "locationInfo": {
      "name": "Masjid Menara Kudus dan makam Sunan Kudus, Kauman, Kudus",
      "address": "Jalan Menara, Desa Kauman, Kecamatan Kota, Kabupaten Kudus, Jawa Tengah (goodnewsfromindonesia.id)"
    },
    "coordsNotes": {
      "id": "Koordinat titik makam belum dapat diverifikasi dari sumber yang dapat dibuka. Penanda pada peta hanya menandai perkiraan wilayah, bukan lokasi makam. GPS auto-check-in dinonaktifkan untuk destinasi ini; gunakan check-in manual.",
      "en": "The tomb's exact coordinates could not be verified from the sources we could open. The map marker only shows an approximate area, not the tomb's location. GPS auto-check-in is disabled for this destination; use manual check-in."
    },
    "areaCoordsStatus": "approximate",
    "areaCoordsSource": {
      "id": "Titik perkiraan pusat wilayah yang dipilih penyusun; bukan dari sumber peta terverifikasi dan bukan lokasi makam.",
      "en": "Approximate regional centre chosen by the authors; not from a verified map source and not the tomb's location."
    }
  },
  {
    "id": "sunan-muria",
    "order": 7,
    "kind": "walisongo",
    "name": "Makam Sunan Muria",
    "nameFull": "Raden Umar Said",
    "titles": "Sunan Muria; Kanjeng Susuhunan Muria; Raden Prawoto (nama kecil menurut satu sumber)",
    "otherNames": [
      "Raden Umar Said",
      "Sunan Muria",
      "Raden Prawoto"
    ],
    "period": {
      "id": "Tahun lahir tidak diketahui. Tahun wafat belum dapat dipastikan; sebagian ensiklopedia menyebut 1551, tetapi sumber lain menyatakan tahun wafatnya tidak diketahui. Tradisi setempat memperingati wafatnya setiap 15 Syuro (Muharam). Secara umum ia ditempatkan pada abad ke-16.",
      "en": "Birth year unknown. Death year cannot be established with certainty; some encyclopedias give 1551, while other sources state the year is unknown. Local tradition commemorates his death on 15 Syuro (Muharram). He is generally placed in the 16th century.",
      "certainty": "unverified"
    },
    "category": "Wali Songo Journey",
    "categoryIcon": "moon-star",
    "province": "Jawa Tengah",
    "regionKey": "central-java",
    "regency": "Kudus",
    "city": "Colo, Kecamatan Dawe",
    "coords": null,
    "coordsStatus": "unverified",
    "areaCoords": [
      -6.629,
      110.866
    ],
    "coordsSource": null,
    "mapsQuery": "Makam Sunan Muria Colo Kudus",
    "radiusMeters": 300,
    "duration": null,
    "cover": null,
    "coverSuggested": "assets/images/walisongo/sunan-muria/cover.jpg",
    "gallery": [],
    "gallerySuggested": [
      "assets/images/walisongo/sunan-muria/gallery-1.jpg",
      "assets/images/walisongo/sunan-muria/gallery-2.jpg",
      "assets/images/walisongo/sunan-muria/gallery-3.jpg"
    ],
    "excerpt": {
      "id": "Sunan Muria dikenal sebagai salah satu Wali Songo yang berdakwah di lereng Gunung Muria, Kudus. Makamnya berada di puncak bukit Desa Colo, di belakang masjid yang dicapai melalui ratusan anak tangga.",
      "en": "Sunan Muria is counted among the Wali Songo and is associated with preaching on the slopes of Mount Muria, Kudus. His tomb lies on a hilltop in Colo village, behind a mosque reached by a long stairway."
    },
    "sections": {
      "background": {
        "id": [
          "Nama kelahirannya dalam tradisi adalah Raden Umar Said. Ia dikenal sebagai Sunan Muria karena wilayah dakwahnya berada di kawasan Gunung Muria, di utara Kudus. Tidak ada catatan sezaman yang memastikan tahun kelahirannya, sehingga setiap angka tahun yang beredar sebaiknya diperlakukan sebagai perkiraan.",
          "Silsilahnya diceritakan dalam dua versi. Pada versi pertama ia putra Sunan Kalijaga, ipar Sunan Kudus, dan menantu Sunan Ngudung. Pada versi kedua ia putra Sunan Ngudung, saudara kandung Sunan Kudus, dan keponakan Sunan Kalijaga. Sumber yang dibuka tidak menyelesaikan perbedaan ini."
        ],
        "en": [
          "In tradition his birth name is Raden Umar Said. He is called Sunan Muria because his area of activity was the Mount Muria region, north of Kudus. No contemporary record fixes his birth year, so any year in circulation should be treated as an estimate.",
          "His genealogy is told in two versions. In the first he is a son of Sunan Kalijaga, brother-in-law of Sunan Kudus and son-in-law of Sunan Ngudung. In the second he is a son of Sunan Ngudung, full brother of Sunan Kudus and nephew of Sunan Kalijaga. The sources consulted do not resolve the difference."
        ]
      },
      "life": {
        "id": [
          "Menurut tradisi yang dikutip dalam sebuah tesis tentang Desa Colo, ia memilih tempat terpencil di lereng Muria, sekitar 18 km di utara Kudus, dan menetap di puncak bernama Colo. Disebutkan pula bahwa ia sempat mencoba beberapa lokasi (Kajar, Bukit Petaka) sebelum menetap di Bukit Muria. Istrinya disebut Dwi Soejinah, yang oleh tradisi dianggap saudari Sunan Kudus, dan putranya Pangeran Santri.",
          "Kisah lain yang diceritakan pengurus masjid, yaitu ia mengikuti seekor kerbau hingga ke Colo dan membongkar masjid pertamanya karena terlalu dipuji orang, adalah cerita tutur dan tidak dapat diverifikasi secara historis."
        ],
        "en": [
          "According to tradition cited in a thesis on Colo village, he chose a remote spot on the Muria slopes about 18 km north of Kudus and settled on the peak called Colo. The same account says he tried other sites (Kajar, Bukit Petaka) before settling on Bukit Muria. His wife is named as Dwi Soejinah, regarded by tradition as a sister of Sunan Kudus, and his son as Pangeran Santri.",
          "Another story told by the mosque's board, that he followed a buffalo to Colo and tore down his first mosque because it drew too much praise, is oral tradition and cannot be verified historically."
        ]
      },
      "context": {
        "id": [
          "Sunan Muria biasanya digolongkan dalam angkatan Wali Songo yang aktif pada masa Kesultanan Demak (abad ke-16), sezaman dengan Sunan Kudus dan Sunan Kalijaga. Penelitian kritis tentang Wali Songo menekankan bahwa sumber tertulis tentang para wali umumnya muncul belakangan, berupa babad dan hagiografi, sehingga rincian biografis para wali, termasuk Sunan Muria, sulit diuji dengan sumber sezaman.",
          "Sebuah tinjauan pustaka (Al Ulya, 2023) bahkan menandai tahun hidup Sunan Muria dengan tanda tanya dalam tabelnya, yang menunjukkan ketidakpastian data dasarnya."
        ],
        "en": [
          "Sunan Muria is usually placed in the generation of Wali Songo active during the Demak Sultanate (16th century), alongside Sunan Kudus and Sunan Kalijaga. Critical scholarship stresses that written sources on the wali mostly appear later, as babad and hagiography, so biographical details, including those of Sunan Muria, are hard to test against contemporary evidence.",
          "A literature review (Al Ulya, 2023) even marks Sunan Muria's dates with a question mark in its table, which shows how uncertain the basic data are."
        ]
      },
      "dakwah": {
        "id": [
          "Tradisi lokal menggambarkan dakwahnya berpusat pada masyarakat desa dan pegunungan, bukan kalangan istana. Menurut tesis tentang Desa Colo, ia mendirikan pesantren di Colo dan meminta tiap desa mengirim pemuda terbaiknya untuk belajar, serta mengajarkan keterampilan bertani dan berdagang. Pola ini ditafsirkan sebagai dakwah yang berakar pada kehidupan sehari-hari.",
          "Gambaran ini bersumber dari tradisi dan tulisan sekunder; belum ada dokumen sezaman yang mengonfirmasinya."
        ],
        "en": [
          "Local tradition describes his preaching as centred on village and mountain communities rather than the court. According to the thesis on Colo village, he founded a pesantren at Colo, asked each village to send its best young men to study, and taught farming and trading skills. This pattern is interpreted as preaching rooted in everyday life.",
          "This picture rests on tradition and secondary writing; no contemporary document confirming it was found."
        ]
      },
      "methods": {
        "id": [
          "Tesis yang sama menyebut ia meneruskan pendekatan Sunan Kalijaga dengan memakai tradisi Jawa: selamatan kematian (nelung dina hingga nyewu) diisi doa dan shalawat, serta gamelan dan tembang macapat (Sinom, Kinanthi) yang dikaitkan dengannya untuk menarik orang sebelum pengajian. Pendekatan ini disebut 'tapa ngeli'.",
          "Penting dicatat bahwa penciptaan tembang atau seni tertentu oleh Sunan Muria dikaitkan dengan tradisi, bukan fakta yang terdokumentasi."
        ],
        "en": [
          "The same thesis says he continued Sunan Kalijaga's approach of working through Javanese custom: death-commemoration feasts (nelung dina to nyewu) filled with prayer and salawat, and gamelan and macapat songs (Sinom, Kinanthi) associated with him to draw people before teaching. This approach is called 'tapa ngeli'.",
          "It should be noted that the creation of particular songs or arts by Sunan Muria is associated with tradition, not a documented fact."
        ]
      },
      "legacy": {
        "id": [
          "Peninggalan yang kini ada adalah kompleks Masjid dan Makam Sunan Muria di Desa Colo, Dawe, sekitar 800-1.000 mdpl menurut laporan Detik, dengan luas sekitar 19.000 m2. Makam Sunan Muria berada tepat di belakang masjid; di bawahnya terdapat makam putra, putri, pengikut, dan keturunannya. Pemberitaan menyebut mihrab sebagai bagian asli masjid yang masih utuh, tetapi usia pastinya belum diverifikasi dengan kajian arkeologis yang dapat dirujuk di sini.",
          "Tradisi Guyang Cekathak, memandikan pelana kuda yang dikaitkan dengan Sunan Muria di Sendang Rejasa sebagai ritual memohon hujan, dan peringatan Ganti Luwur setiap 15 Syuro masih dilakukan masyarakat Colo."
        ],
        "en": [
          "The surviving legacy is the Sunan Muria Mosque and Tomb complex in Colo village, Dawe, at roughly 800-1,000 m above sea level according to Detik, covering about 19,000 m2. The tomb lies directly behind the mosque; below it are graves of his son, daughter, companions and descendants. News reports describe the mihrab as the intact original part of the mosque, but its exact age has not been established by archaeological work cited here.",
          "The Guyang Cekathak tradition, bathing a horse saddle associated with Sunan Muria at Sendang Rejasa as a rain-seeking ritual, and the Ganti Luwur commemoration on 15 Syuro are still held by the Colo community."
        ]
      },
      "values": {
        "id": [
          "Nilai yang sering dikaitkan dengan Sunan Muria dalam tradisi adalah kesederhanaan, kedekatan dengan rakyat kecil, dan dakwah yang tidak memaksa. Pengurus masjid menafsirkan mihrab yang menjorok ke dalam sebagai pengingat untuk mengutamakan akhirat; ini adalah tafsir pengelola, bukan keterangan sejarah."
        ],
        "en": [
          "Values often associated with Sunan Muria in tradition are simplicity, closeness to ordinary people and non-coercive preaching. The mosque's board interprets the inward-set mihrab as a reminder to put the afterlife first; this is the caretakers' interpretation, not a historical statement."
        ]
      }
    },
    "facts": [
      {
        "id": "Makam Sunan Muria berada di Desa Colo, Kecamatan Dawe, Kabupaten Kudus, sekitar 18 km dari pusat kota Kudus, di puncak Gunung Muria.",
        "en": "The tomb of Sunan Muria is in Colo village, Dawe district, Kudus regency, about 18 km from the centre of Kudus, on the summit area of Mount Muria.",
        "type": "historical_fact",
        "refs": [
          2
        ]
      },
      {
        "id": "Peziarah mencapai kompleks lewat tangga atau naik ojek dari pangkalan Colo; jumlah anak tangga berbeda-beda antarsumber (sekitar 432 anak tangga dari gerbang ke makam menurut satu tesis; 'ribuan' menurut Detik).",
        "en": "Pilgrims reach the complex by stairway or by motorbike taxi from the Colo pickup point; the number of steps differs by source (about 432 from the gate to the tomb in one thesis; 'thousands' per Detik).",
        "type": "historical_fact",
        "refs": [
          0
        ]
      },
      {
        "id": "Silsilahnya diriwayatkan dalam dua versi: putra Sunan Kalijaga, atau putra Sunan Ngudung.",
        "en": "His genealogy is reported in two versions: son of Sunan Kalijaga, or son of Sunan Ngudung.",
        "type": "local_tradition",
        "refs": [],
        "needsReference": true
      },
      {
        "id": "Tahun wafat belum dapat dipastikan; peringatan wafat (Ganti Luwur) dilaksanakan tiap 15 Syuro.",
        "en": "The year of death cannot be established; the death commemoration (Ganti Luwur) is held every 15 Syuro.",
        "type": "local_tradition",
        "refs": [
          0
        ]
      },
      {
        "id": "Dakwah melalui tembang macapat dan gamelan serta pesantren di Colo dikaitkan dengan Sunan Muria dalam literatur sekunder.",
        "en": "Preaching through macapat songs and gamelan, and a pesantren at Colo, are attributed to Sunan Muria in secondary literature.",
        "type": "academic_interpretation",
        "refs": [],
        "needsReference": true
      }
    ],
    "variants": [
      {
        "id": "Silsilah: (1) putra Sunan Kalijaga, ipar Sunan Kudus; (2) putra Sunan Ngudung, adik/saudara kandung Sunan Kudus (Ridin, 2004, sebagaimana dikutip tesis). Rujukan ensiklopedis awal (non-akademik) memuat versi pertama.",
        "en": "Genealogy: (1) son of Sunan Kalijaga, brother-in-law of Sunan Kudus; (2) son of Sunan Ngudung, full brother of Sunan Kudus (Ridin, 2004, as cited in the thesis). An early encyclopedic reference (non-academic) carries the first version."
      },
      {
        "id": "Tahun wafat: rujukan ensiklopedis awal (non-akademik) mencantumkan 1551 di infobox tanpa rujukan yang dapat diperiksa di sini; tesis Desa Colo menyatakan tahun wafat tidak diketahui. Sumber lain menempatkan 'pergantian' Sunan Kalijaga oleh Sunan Muria pada 1513, yang berasal dari daftar angkatan wali dan bukan dokumen sezaman.",
        "en": "Death year: an early encyclopedic reference (non-academic) lists 1551 in the infobox with no checkable reference here; the Colo village thesis says the year is unknown. Another source places Sunan Muria's 'replacing' of Sunan Kalijaga at 1513, which comes from generational lists of the wali, not contemporary documents."
      },
      {
        "id": "Usia masjid: tutur pengurus menyebut masjid dibangun sekitar abad ke-15 hingga 16; masjid yang berdiri sekarang diceritakan sebagai pengganti bangunan pertama yang dibongkar.",
        "en": "Age of the mosque: the board's account dates it to around the 15th-16th century; the present mosque is said to replace a first building that was demolished."
      },
      {
        "id": "Dua artikel jurnal (Anasom 2018; Ashoumi 2018) menyebut Sunan Muria putra Sunan Kalijaga dan Dewi Sarah binti Maulana Ishaq. Versi putra Sunan Ngudung belum kami temukan dukungannya pada sumber non-ensiklopedis yang dibuka.",
        "en": "Two journal articles (Anasom 2018; Ashoumi 2018) say Sunan Muria was the son of Sunan Kalijaga and Dewi Sarah bint Maulana Ishaq. We found no support for the Sunan Ngudung version in the non-encyclopedic sources we opened."
      }
    ],
    "visit": {
      "etiquette": {
        "id": "Kompleks ini adalah tempat ziarah dan masjid yang aktif. Berpakaian sopan dan menutup aurat, menjaga ketenangan, dan mengikuti arahan pengurus. Aturan resmi tertulis tidak ditemukan dalam sumber yang dibuka, sehingga hal ini adalah tata krama umum.",
        "en": "This is an active pilgrimage site and mosque. Dress modestly, keep quiet, and follow the caretakers' guidance. No official written rules were found in the sources consulted, so this is general etiquette."
      },
      "access": {
        "id": "Dari pangkalan/terminal Colo, peziarah dapat berjalan kaki menaiki tangga atau memakai ojek (sumber: Visit Jawa Tengah dan Detik). Detail tarif dan jam buka tidak ditemukan dari sumber resmi.",
        "en": "From the Colo pickup point or terminal, pilgrims can walk up the stairs or take a motorbike taxi (sources: Visit Jawa Tengah and Detik). Fares and opening hours were not found from an official source."
      },
      "hours": null,
      "fees": null
    },
    "needsVerification": [
      "Koordinat kompleks makam (belum terverifikasi).",
      "Alamat jalan lengkap kompleks.",
      "Tahun lahir dan wafat (tahun 1551 pada rujukan ensiklopedis awal (non-akademik) belum dapat dikonfirmasi).",
      "Silsilah yang benar (dua versi).",
      "Usia masjid dan bagian aslinya.",
      "Jam buka, tarif ojek, tiket, dan aturan resmi pengunjung.",
      "Jumlah anak tangga (berbeda antarsumber).",
      "Artikel Kemenag 'Wali Songo antara Legenda dan Fakta Sejarah' dan sumber seed lain (UM, UIN SGD, UIN Jakarta) tidak dapat dibuka dan tidak dikutip.",
      "Tahun wafat 1551, tangga ke makam di puncak, dan dakwah kepada nelayan/pedagang/petani belum ditopang sumber yang kami baca; versi putra Sunan Ngudung belum didukung sumber non-ensiklopedis."
    ],
    "nearbyCulinary": [],
    "nearbyProducts": [],
    "relatedDestinations": [
      "sunan-kudus",
      "sunan-kalijaga"
    ],
    "references": [
      {
        "title": "Gambaran Umum Desa Colo, Sunan Muria, Yayasan Masjid dan Makam Sunan Muria dalam Pemberdayaan Masyarakat Desa Colo (Bab III, tesis/skripsi)",
        "publisher": "UIN Walisongo Semarang (eprints)",
        "url": "https://eprints.walisongo.ac.id/id/eprint/3559/4/101311054_Bab3.pdf",
        "supports": "Dua versi silsilah, tahun wafat tidak diketahui, Ganti Luwur 15 Syuro, riwayat menetap di Colo, metode dakwah, Guyang Cekathak, jumlah anak tangga. Nama penulis tidak terlihat pada halaman yang dibuka.",
        "tier": "academic"
      },
      {
        "title": "Melihat 'Masjid di Atas Awan' Peninggalan Sunan Muria di Kudus",
        "publisher": "Detik Jateng",
        "url": "https://www.detik.com/jateng/berita/d-7237122/melihat-masjid-di-atas-awan-peninggalan-sunan-muria-di-kudus",
        "supports": "Lokasi, ketinggian, luas, cerita tutur pengurus masjid, fitur mihrab, letak makam di belakang masjid, akses ojek atau tangga.",
        "tier": "media"
      },
      {
        "title": "The Graveyard and the Mosque of Colo",
        "publisher": "Visit Jawa Tengah (Pemprov Jawa Tengah)",
        "url": "https://visitjawatengah.jatengprov.go.id/en/destinations/the-graveyard-and-the-mosque-of-colo",
        "supports": "Lokasi Desa Colo, Dawe, sekitar 18 km dari pusat Kudus, akses tangga atau ojek. Tidak memuat koordinat, jam, atau tarif.",
        "tier": "government"
      },
      {
        "title": "Reaktualisasi Ajaran Walisongo dalam Pendidikan Islam di Era Perubahan (Al Ulya vol. 8 no. 2, 2023)",
        "publisher": "UNU Sunan Giri / Al Ulya",
        "url": "https://journal.unugiri.ac.id/index.php/al-ulya/article/download/2040/1205",
        "supports": "Tinjauan pustaka yang menandai tahun hidup Sunan Muria dengan tanda tanya; menyebut peran dalang dan tembang cilik sebagai tradisi sekunder.",
        "tier": "academic"
      },
      {
        "title": "AJARAN DAKWAH SUNAN MURIA (KAJIAN RIJAL AL-DAKWAH)",
        "publisher": "Anasom Anasom, Jurnal Ilmu Dakwah (UIN Walisongo) 37(1), DOI 10.21580/jid.v37.1.2620, 2018",
        "url": "https://journal.walisongo.ac.id/index.php/dakwah/article/view/2620",
        "supports": "Silsilah: putra Sunan Kalijaga dan Dewi Sarah binti Maulana Ishaq (menurut dua jurnal).",
        "tier": "academic",
        "support": "partial",
        "quote": null,
        "checkedByResearcher": true
      },
      {
        "title": "Akulturasi Dakwah Sinkretis Sunan Kalijaga",
        "publisher": "Hilyah Ashoumi, Qalamuna 10(1), 2018",
        "url": "https://ejournal.insuriponorogo.ac.id/index.php/qalamuna/article/download/137/129",
        "supports": "Silsilah: putra Sunan Kalijaga dan Dewi Sarah binti Maulana Ishaq (menurut dua jurnal).",
        "tier": "academic",
        "support": "partial",
        "quote": null,
        "checkedByResearcher": true
      }
    ],
    "locationInfo": {
      "name": "Kompleks Masjid dan Makam Sunan Muria, Desa Colo, Kecamatan Dawe, Kabupaten Kudus",
      "address": "Desa Colo, Kecamatan Dawe, Kabupaten Kudus, Jawa Tengah (alamat jalan lengkap belum diverifikasi)"
    },
    "coordsNotes": {
      "id": "Koordinat titik makam belum dapat diverifikasi dari sumber yang dapat dibuka. Penanda pada peta hanya menandai perkiraan wilayah, bukan lokasi makam. GPS auto-check-in dinonaktifkan untuk destinasi ini; gunakan check-in manual. Makam berada di puncak bukit dan dicapai dari area Colo; titik tepat tidak tersedia pada sumber yang dibuka.",
      "en": "The tomb's exact coordinates could not be verified from the sources we could open. The map marker only shows an approximate area, not the tomb's location. GPS auto-check-in is disabled for this destination; use manual check-in. The tomb is on a hilltop reached from the Colo area; no exact point was available in the sources we opened."
    },
    "areaCoordsStatus": "approximate",
    "areaCoordsSource": {
      "id": "Titik perkiraan pusat wilayah yang dipilih penyusun; bukan dari sumber peta terverifikasi dan bukan lokasi makam.",
      "en": "Approximate regional centre chosen by the authors; not from a verified map source and not the tomb's location."
    }
  },
  {
    "id": "sunan-kalijaga",
    "order": 8,
    "kind": "walisongo",
    "name": "Makam Sunan Kalijaga",
    "nameFull": "Raden Said (juga ditulis Raden Sahid/Syahid)",
    "titles": "Sunan Kalijaga; Syaikh Melaya; Lokajaya (dalam kisah tutur); Ki Dalang Sida Brangti",
    "otherNames": [
      "Raden Said",
      "Raden Sahid",
      "Syaikh Melaya",
      "Lokajaya",
      "Ki Dalang Sida Brangti",
      "Raden Abdurrahman"
    ],
    "period": {
      "id": "Tidak ada catatan sezaman tentang tahun lahir. Perkiraan para peneliti berkisar sekitar 1430-1450; tahun wafat sering disebut 1513, tetapi belum dapat dipastikan dan sebagian literatur menyebut rentang hidup yang jauh lebih panjang.",
      "en": "There is no contemporary record of his birth year. Scholarly estimates range around 1430-1450; the death year is often given as 1513 but cannot be confirmed, and some literature gives a much longer lifespan.",
      "certainty": "unverified"
    },
    "category": "Wali Songo Journey",
    "categoryIcon": "moon-star",
    "province": "Jawa Tengah",
    "regionKey": "central-java",
    "regency": "Demak",
    "city": "Kadilangu",
    "coords": null,
    "coordsStatus": "unverified",
    "areaCoords": [
      -6.8935,
      110.642
    ],
    "coordsSource": null,
    "mapsQuery": "Makam Sunan Kalijaga Kadilangu Demak",
    "radiusMeters": 250,
    "duration": null,
    "cover": null,
    "coverSuggested": "assets/images/walisongo/sunan-kalijaga/cover.jpg",
    "gallery": [],
    "gallerySuggested": [
      "assets/images/walisongo/sunan-kalijaga/gallery-1.jpg",
      "assets/images/walisongo/sunan-kalijaga/gallery-2.jpg",
      "assets/images/walisongo/sunan-kalijaga/gallery-3.jpg"
    ],
    "excerpt": {
      "id": "Sunan Kalijaga adalah salah satu Wali Songo yang dimakamkan di Kadilangu, Demak, dan dikaitkan dengan dakwah yang akrab dengan budaya Jawa. Banyak karya budaya dikaitkan dengannya melalui tradisi, sementara data biografinya masih diperdebatkan.",
      "en": "Sunan Kalijaga is one of the Wali Songo, buried at Kadilangu, Demak, and associated with a preaching style close to Javanese culture. Many cultural works are linked to him through tradition, while his biographical data remain debated."
    },
    "sections": {
      "background": {
        "id": [
          "Nama kelahirannya dalam banyak sumber adalah Raden Said (ditulis juga Sahid atau Syahid). Ia disebut putra Tumenggung Wilatikta, bupati Tuban. Asal-usul keturunan Arab yang kadang disebutkan berasal dari Babad Tuban dan silsilah yang disusun C.L.N. van den Berg, yang oleh artikel yang dibuka disajikan sebagai sumber, bukan fakta yang terbukti.",
          "Asal-usul nama 'Kalijaga' diperdebatkan: ada yang mengaitkan dengan kebiasaan berendam di sungai, dengan kebun di Cirebon, atau dengan frasa Arab; tidak ada yang dapat dipastikan."
        ],
        "en": [
          "In many sources his birth name is Raden Said (also written Sahid or Syahid). He is described as a son of Tumenggung Wilatikta, regent of Tuban. The Arab ancestry sometimes mentioned comes from the Babad Tuban and a genealogy compiled by C.L.N. van den Berg, which the article consulted presents as sources rather than proven fact.",
          "The origin of the name 'Kalijaga' is disputed: it is linked variously to a habit of bathing in rivers, to an orchard in Cirebon, or to an Arabic phrase; none can be confirmed."
        ]
      },
      "life": {
        "id": [
          "Kisah populer menggambarkan masa muda sebagai Lokajaya, perampok yang kemudian bertobat dan berguru kepada Sunan Bonang. Kisah ini adalah tradisi (babad dan hagiografi), bukan dokumen sezaman. Hubungan guru-murid dengan Sunan Bonang dan keterlibatannya dalam lingkungan Kesultanan Demak umumnya diterima dalam literatur, tetapi rinciannya bersumber dari tradisi.",
          "Tentang tanggal: perkiraan kelahiran sekitar 1440-an sampai 1450-an (Sakdullah, berdasarkan Hasanu Simon), sedangkan penelitian karawitan di Demak mencatat tidak ada catatan autentik tanggal lahirnya dan memperkirakan 1430-1450. Satu skripsi mencatat wafat pada 1513, sedangkan literatur lain menyebut usianya mencapai sekitar 100 tahun dan rentang hidup sampai 1586, sehingga angka-angka ini bertentangan."
        ],
        "en": [
          "Popular stories describe a youth as Lokajaya, a robber who repented and became a student of Sunan Bonang. This is tradition (babad and hagiography), not a contemporary document. The teacher-student link with Sunan Bonang and his involvement in the Demak sultanate's circle are generally accepted in the literature, though the details come from tradition.",
          "On dates: birth is estimated around the 1440s-1450s (Sakdullah, drawing on Hasanu Simon), while a study of karawitan in Demak notes there is no authentic record of his birth date and estimates 1430-1450. One thesis records his death in 1513, while other literature mentions a lifespan near 100 years and dates up to 1586, so these figures conflict."
        ]
      },
      "context": {
        "id": [
          "Sunan Kalijaga biasanya ditempatkan pada masa Kesultanan Demak dan pergantian ke Pajang pada abad ke-16. Antropolog Clifford Geertz menggambarkannya sebagai tokoh yang luwes dan sinkretis, yaitu cerminan bagaimana Islam Jawa dikenang. Penggambaran ini adalah tafsir akademik atas tradisi, bukan bukti biografis.",
          "Daftar angkatan Wali Songo yang memuat namanya (misalnya sebagai pengganti Syaikh Subakir) juga berasal dari tradisi penyusunan belakangan."
        ],
        "en": [
          "Sunan Kalijaga is usually placed in the time of the Demak Sultanate and the shift to Pajang in the 16th century. Anthropologist Clifford Geertz described him as malleable and syncretic, reflecting how Javanese Islam remembers him. This is an academic interpretation of tradition, not biographical evidence.",
          "Generational lists of the Wali Songo that include his name (for example as replacing Syaikh Subakir) also come from later compilation traditions."
        ]
      },
      "dakwah": {
        "id": [
          "Literatur menggambarkan dakwahnya sebagai bertahap, bernuansa tasawuf, dan toleran terhadap adat setempat. Menurut kajian teologis atas Kidung Rumeksa ing Wengi, ia mengajarkan Islam bersama sastra, astronomi, dan penanggalan Jawa yang dipelajari dari Sunan Bonang. Pendekatan ini sering diringkas sebagai 'menerima budaya lokal lalu mengisinya dengan nilai Islam'.",
          "Seperti halnya wali lain, gambaran ini disusun dari tradisi dan penafsiran belakangan."
        ],
        "en": [
          "The literature describes his preaching as gradual, Sufi-leaning and tolerant of local custom. According to a theological study of Kidung Rumeksa ing Wengi, he taught Islam alongside Javanese literature, astronomy and calendrics learned from Sunan Bonang. This approach is often summarised as accepting local culture and then filling it with Islamic values.",
          "As with other wali, this picture is assembled from tradition and later interpretation."
        ]
      },
      "methods": {
        "id": [
          "Wayang, gamelan, tembang, dan busana tertentu sering dikaitkan dengan metode dakwahnya. Satu penelitian menyebut ia dijuluki 'Sunan Panggung' dan 'Lir-ilir' serta 'Rumeksa ing Wengi' dikaitkan dengannya. Namun penelitian yang sama mencatat bahwa kepengarangan tembang bertumpu pada penuturan lisan dan klaim keluarga, dan kisah-kisah ini harus dibaca sebagai 'dikaitkan dengan tradisi'.",
          "Karya tulis seperti Serat Dewaruci dan Suluk Linglung juga dikaitkan dengannya dalam literatur, tetapi penulisan sebenarnya belum dapat dipastikan dari sumber yang dibuka. Klaim bahwa ia membangun Masjid Agung Demak atau menciptakan 'soko tatal' adalah tradisi."
        ],
        "en": [
          "Wayang, gamelan, tembang and certain dress are often linked to his preaching methods. One study says he was nicknamed 'Sunan Panggung' and that 'Lir-ilir' and 'Rumeksa ing Wengi' are attributed to him. However, the same study notes that authorship of the songs rests on oral transmission and family claims, so these should be read as 'associated with tradition'.",
          "Written works such as Serat Dewaruci and Suluk Linglung are also attributed to him in the literature, but actual authorship cannot be confirmed from the sources opened. Claims that he built the Great Mosque of Demak or created its 'soko tatal' pillars are tradition."
        ]
      },
      "legacy": {
        "id": [
          "Makamnya berada di Kelurahan Kadilangu, Demak, sekitar 1 km dari Masjid Agung Demak menurut sebuah skripsi. Menurut kajian manajemen pengunjung (Bakti Budaya, 2018), tanah Kadilangu diwariskan kepada keturunannya, yang bergelar Panembahan hingga generasi ketujuh dan Pangeran Wijil sesudahnya. Kajian itu juga mendokumentasikan prasasti masjid di situs dengan tanggal 16 Dzulhijjah 1456 Jawi (setara 1534 M), cungkup baru sekitar 1963-1964, dan surat Residensi Semarang tentang wafatnya Pangeran Wijil pada 1880.",
          "Setiap 10 Dzulhijjah dilaksanakan jamasan pusaka, berupa jubah, tasbih, dua keris, dan tongkat, disertai grebeg. Pusaka-pusaka ini dikaitkan dengan Sunan Kalijaga oleh tradisi keluarga dan pengelola."
        ],
        "en": [
          "His tomb is in Kadilangu, Demak, about 1 km from the Great Mosque of Demak according to a thesis. According to a visitor-management study (Bakti Budaya, 2018), the Kadilangu land passed to his descendants, who bore the title Panembahan until the seventh generation and Pangeran Wijil afterwards. The study also documents a mosque inscription at the site dated 16 Dzulhijjah 1456 Jawi (equated to 1534 CE), a new cungkup around 1963-1964, and a Semarang Residency letter on the death of Pangeran Wijil in 1880.",
          "Every 10 Dzulhijjah the heirlooms, a robe, a rosary, two keris and a staff, are washed in a jamasan ceremony accompanied by a grebeg procession. These objects are associated with Sunan Kalijaga by family and caretaker tradition."
        ]
      },
      "values": {
        "id": [
          "Nilai yang dikaitkan dengan ajaran Kalijaga mencakup keluwesan budaya, tobat, dan kepedulian pada kehidupan sehari-hari. Sebuah penelitian di Demak mencatat lima prinsip (manembah, mangabdi, maguru, makarya, mertapa) dari wawancara dengan seorang keturunan; ini perlu dibaca sebagai penafsiran komunitas yang belum diuji dengan sumber tertulis."
        ],
        "en": [
          "Values associated with Kalijaga's teaching include cultural flexibility, repentance and attention to everyday life. A Demak study records five principles (manembah, mangabdi, maguru, makarya, mertapa) from an interview with a descendant; these should be read as community interpretation not yet tested against written sources."
        ]
      }
    },
    "facts": [
      {
        "id": "Makam Sunan Kalijaga berada di Kelurahan Kadilangu, Demak.",
        "en": "The tomb of Sunan Kalijaga is in Kadilangu, Demak.",
        "type": "historical_fact",
        "refs": [
          1
        ]
      },
      {
        "id": "Sebuah prasasti masjid di situs Kadilangu bertanggal 16 Dzulhijjah 1456 Jawi (setara 1534 M) dan surat Residensi Semarang tahun 1880 tentang wafatnya Pangeran Wijil didokumentasikan dalam kajian Bakti Budaya (2018).",
        "en": "A mosque inscription at the Kadilangu site dated 16 Dzulhijjah 1456 Jawi (equated to 1534 CE) and an 1880 Semarang Residency letter on the death of Pangeran Wijil are documented in a Bakti Budaya study (2018).",
        "type": "historical_fact",
        "refs": [
          1,
          5
        ]
      },
      {
        "id": "Tanggal lahir tidak tercatat secara autentik; perkiraan peneliti berkisar sekitar 1430-1450.",
        "en": "His birth date is not authentically recorded; researchers estimate around 1430-1450.",
        "type": "academic_interpretation",
        "refs": [
          5,
          0,
          4
        ]
      },
      {
        "id": "Clifford Geertz menggambarkan Kalijaga sebagai tokoh yang luwes dan sinkretis dalam ingatan Islam Jawa.",
        "en": "Clifford Geertz characterised Kalijaga as a malleable, syncretic figure in the memory of Javanese Islam.",
        "type": "academic_interpretation",
        "refs": [],
        "needsReference": true
      },
      {
        "id": "Pengarangan wayang, gamelan, Lir-ilir, dan Kidung Rumeksa ing Wengi dikaitkan dengan Sunan Kalijaga melalui penuturan lisan dan klaim keluarga.",
        "en": "The authorship of wayang reforms, gamelan, Lir-ilir and Kidung Rumeksa ing Wengi is attributed to Sunan Kalijaga through oral transmission and family claims.",
        "type": "local_tradition",
        "refs": [
          0,
          2
        ]
      },
      {
        "id": "Kisah Lokajaya (perampok yang bertobat) adalah cerita tutur, bukan catatan sezaman.",
        "en": "The Lokajaya story (a repentant robber) is oral tradition, not a contemporary record.",
        "type": "local_tradition",
        "refs": [],
        "needsReference": true
      }
    ],
    "variants": [
      {
        "id": "Tahun lahir: sekitar 1430-1450 (penelitian karawitan Demak), 1440-an hingga 1450-an (Sakdullah/Hasanu Simon), 1450 (rujukan ensiklopedis awal (non-akademik), dengan catatan perlu klarifikasi). Tahun wafat: 1513 (skripsi UIN Walisongo, rujukan ensiklopedis awal (non-akademik)), sedangkan tinjauan Al Ulya (2023) menulis 1430-1586 dan rujukan ensiklopedis awal (non-akademik) menyebut klaim usia 100 tahun yang bertentangan dengan 1450-1513.",
        "en": "Birth year: around 1430-1450 (Demak karawitan study), 1440s-1450s (Sakdullah/Hasanu Simon), 1450 (an early encyclopedic reference (non-academic), flagged as needing clarification). Death year: 1513 (UIN Walisongo thesis, an early encyclopedic reference (non-academic)), while the Al Ulya review (2023) writes 1430-1586 and an early encyclopedic reference (non-academic) mentions a claimed age of 100 that conflicts with 1450-1513."
      },
      {
        "id": "Nama: Raden Said, Raden Sahid, Raden Mas Said, Raden Abdurrahman, Syaikh Melaya, Lokajaya. Penulisan dan identifikasi bervariasi antarsumber.",
        "en": "Names: Raden Said, Raden Sahid, Raden Mas Said, Raden Abdurrahman, Syaikh Melaya, Lokajaya. Spelling and identification vary by source."
      },
      {
        "id": "Latar keluarga: putra bupati Tuban (Babad Tuban); asal keturunan Arab dalam silsilah Van den Berg disajikan sebagai sumber, bukan fakta. Hubungan dengan Sunan Muria disebut sebagai ayah-anak oleh sebagian sumber, tetapi ada versi lain (lihat profil Sunan Muria).",
        "en": "Family background: son of the regent of Tuban (Babad Tuban); Arab ancestry in Van den Berg's genealogy is presented as a source, not fact. Some sources call Sunan Muria his son, but another version exists (see the Sunan Muria profile)."
      },
      {
        "id": "Ashoumi (2018): lahir sekitar 1450 dengan nama Raden Said, putra Adipati Tuban Tumenggung Wilatikta, wafat sekitar 1580 di Kadilangu. Ini berbeda dari tahun wafat 1513 pada sumber lain, sehingga umur yang sangat panjang tidak dapat ditentukan dan dianggap tradisi.",
        "en": "Ashoumi (2018): born about 1450 as Raden Said, son of Adipati Tuban Tumenggung Wilatikta, died about 1580 at Kadilangu. This differs from the death year 1513 in other sources, so a very long lifespan cannot be established and is treated as tradition."
      }
    ],
    "visit": {
      "etiquette": {
        "id": "Makam adalah tempat ziarah aktif dan situs keluarga. Berpakaian sopan, menjaga ketenangan, dan mengikuti arahan juru kunci. Aturan resmi tertulis tidak ditemukan dalam sumber yang dibuka.",
        "en": "The tomb is an active pilgrimage site and family site. Dress modestly, keep quiet, and follow the caretaker's guidance. No official written rules were found in the sources opened."
      },
      "access": {
        "id": null,
        "en": null
      },
      "hours": null,
      "fees": null
    },
    "needsVerification": [
      "Koordinat kompleks makam (belum terverifikasi).",
      "Alamat jalan lengkap.",
      "Tahun lahir dan wafat; identitas 'Raden Said' vs nama lain.",
      "Keaslian pusaka dan usia struktur makam (prasasti 1534 M berkaitan dengan masjid di situs).",
      "Atribusi wayang, gamelan, suluk, Lir-ilir, Masjid Demak (hanya tradisi).",
      "Jam buka, tiket, aturan resmi, dan akses umum.",
      "Sumber seed (Kemenag, UM, UIN SGD, UIN Jakarta) tidak dapat dibuka dan tidak dikutip.",
      "Dakwah lewat gamelan, suluk, dan tembang belum ditopang sumber yang kami baca (artikel Ashoumi hanya menyebut wayang); jarak sekitar 1 km dari Masjid Agung Demak berasal dari satu skripsi."
    ],
    "nearbyCulinary": [],
    "nearbyProducts": [],
    "relatedDestinations": [
      "sunan-kudus",
      "sunan-muria"
    ],
    "references": [
      {
        "title": "Kidung Rumeksa Ing Wengi Karya Sunan Kalijaga dalam Kajian Teologis (Teologia vol. 25 no. 2, 2014)",
        "publisher": "UIN Walisongo Semarang",
        "url": "https://journal.walisongo.ac.id/index.php/teologia/article/view/394/360",
        "supports": "Identitas, Tuban, guru Sunan Bonang, perkiraan lahir 1440-an sampai 1450-an, Babad Tuban dan van den Berg, dakwah melalui adat, status kidung sebagai kepercayaan.",
        "tier": "academic"
      },
      {
        "title": "Usulan Manajemen Pengunjung Situs Makam Sunan Kalijaga, Kelurahan Kadilangu, Kabupaten Demak (Bakti Budaya vol. 1 no. 2, 2018)",
        "publisher": "Universitas Gadjah Mada",
        "url": "https://journal.ugm.ac.id/bakti/article/download/41088/22828",
        "supports": "Prasasti masjid 1456 Jawi, cungkup 1963-1964, surat Residensi 1880, garis keturunan Kadilangu, jamasan pusaka 10 Dzulhijjah.",
        "tier": "academic"
      },
      {
        "title": "Ketokohan dan Nilai-nilai Spiritualitas Ajaran Sunan Kalijaga dalam Praktik Kesenian Karawitan di Kabupaten Demak (Resital vol. 24 no. 3, 2023)",
        "publisher": "ISI Yogyakarta",
        "url": "https://journal.isi.ac.id/index.php/resital/article/download/10947/3606",
        "supports": "Atribusi wayang, gamelan, tembang yang bersandar pada tradisi lisan; tidak ada catatan autentik tanggal lahir.",
        "tier": "academic"
      },
      {
        "title": "Bab III: Fenomena Pengalaman Beragama Para Musafir (skripsi)",
        "publisher": "UIN Walisongo Semarang (eprints)",
        "url": "https://eprints.walisongo.ac.id/id/eprint/1243/4/084411010_Bab3.pdf",
        "supports": "Wafat 1513, makam di Kadilangu sekitar 1 km dari Masjid Agung Demak, daftar angkatan wali. Nama penulis tidak terlihat.",
        "tier": "academic"
      },
      {
        "title": "Reaktualisasi Ajaran Walisongo dalam Pendidikan Islam di Era Perubahan (Al Ulya vol. 8 no. 2, 2023)",
        "publisher": "UNU Sunan Giri",
        "url": "https://journal.unugiri.ac.id/index.php/al-ulya/article/download/2040/1205",
        "supports": "Rentang tahun 1430-1586, atribusi wayang dan gamelan; tinjauan sekunder.",
        "tier": "academic"
      },
      {
        "title": "Akulturasi Dakwah Sinkretis Sunan Kalijaga",
        "publisher": "Hilyah Ashoumi, Qalamuna 10(1), Jan-Jun, 2018",
        "url": "https://ejournal.insuriponorogo.ac.id/index.php/qalamuna/article/download/137/129",
        "supports": "Nama Raden Said, putra Adipati Tuban, lahir sekitar 1450, wafat sekitar 1580 di Kadilangu (Ashoumi 2018).",
        "tier": "academic",
        "support": "partial",
        "quote": "Sunan Kalijaga diperkirakan lahir pada tahun 1450 dengan nama Raden Said.",
        "checkedByResearcher": true
      }
    ],
    "locationInfo": {
      "name": "Kompleks Makam Sunan Kalijaga, Kadilangu, Demak",
      "address": "Kelurahan Kadilangu, Kabupaten Demak, Jawa Tengah (alamat jalan lengkap belum diverifikasi)"
    },
    "coordsNotes": {
      "id": "Koordinat titik makam belum dapat diverifikasi dari sumber yang dapat dibuka. Penanda pada peta hanya menandai perkiraan wilayah, bukan lokasi makam. GPS auto-check-in dinonaktifkan untuk destinasi ini; gunakan check-in manual. Satu skripsi menyebut jarak sekitar 1 km dari Masjid Agung Demak; itu tidak cukup untuk menentukan koordinat.",
      "en": "The tomb's exact coordinates could not be verified from the sources we could open. The map marker only shows an approximate area, not the tomb's location. GPS auto-check-in is disabled for this destination; use manual check-in. One thesis gives a distance of about 1 km from the Great Mosque of Demak; that is not enough to determine coordinates."
    },
    "areaCoordsStatus": "approximate",
    "areaCoordsSource": {
      "id": "Titik perkiraan pusat wilayah yang dipilih penyusun; bukan dari sumber peta terverifikasi dan bukan lokasi makam.",
      "en": "Approximate regional centre chosen by the authors; not from a verified map source and not the tomb's location."
    }
  },
  {
    "id": "sunan-gunung-jati",
    "order": 9,
    "kind": "walisongo",
    "name": "Astana Sunan Gunung Jati",
    "nameFull": "Syarif Hidayatullah",
    "titles": "Sunan Gunung Jati; Susuhunan Jati; Syekh Syarif Hidayatullah",
    "otherNames": [
      "Syarif Hidayatullah",
      "Sunan Gunungjati",
      "Susuhunan Jati",
      "Syarif Hidayat"
    ],
    "period": {
      "id": "Sumber populer menyebut lahir sekitar 1448 dan wafat 1568, tetapi usia hingga sekitar 120 tahun yang tersirat tidak dapat diverifikasi dan sumber lain tidak mencantumkan tanggal. Tahun 1479 sering disebut sebagai awal kekuasaannya di Cirebon. Semua angka ini belum dapat dipastikan.",
      "en": "Popular sources give birth around 1448 and death in 1568, but the implied age of about 120 cannot be verified and other sources give no dates. The year 1479 is often cited as the start of his rule in Cirebon. All these figures remain unconfirmed.",
      "certainty": "unverified"
    },
    "category": "Wali Songo Journey",
    "categoryIcon": "moon-star",
    "province": "Jawa Barat",
    "regionKey": "west-java",
    "regency": "Cirebon",
    "city": "Cirebon (Desa Astana, Kecamatan Gunung Jati)",
    "coords": null,
    "coordsStatus": "unverified",
    "areaCoords": [
      -6.705,
      108.537
    ],
    "coordsSource": null,
    "mapsQuery": "Makam Sunan Gunung Jati Cirebon",
    "radiusMeters": 300,
    "duration": null,
    "cover": null,
    "coverSuggested": "assets/images/walisongo/sunan-gunung-jati/cover.jpg",
    "gallery": [],
    "gallerySuggested": [
      "assets/images/walisongo/sunan-gunung-jati/gallery-1.jpg",
      "assets/images/walisongo/sunan-gunung-jati/gallery-2.jpg",
      "assets/images/walisongo/sunan-gunung-jati/gallery-3.jpg"
    ],
    "excerpt": {
      "id": "Syarif Hidayatullah, dikenal sebagai Sunan Gunung Jati, adalah tokoh Wali Songo yang dalam tradisi dan literatur dikaitkan dengan berdirinya kekuasaan Islam di Cirebon dan Banten. Ia dimakamkan di kompleks Astana Gunung Sembung, Cirebon.",
      "en": "Syarif Hidayatullah, known as Sunan Gunung Jati, is a Wali Songo figure linked in tradition and literature to the rise of Islamic rule in Cirebon and Banten. He is buried in the Astana Gunung Sembung complex in Cirebon."
    },
    "sections": {
      "background": {
        "id": [
          "Dalam sumber tradisi seperti Carita Purwaka Caruban Nagari dan Babad Cirebon, ayahnya disebut Syarif Abdullah dan ibunya Nyai Rara Santang, putri Prabu Siliwangi dari Pajajaran. Rujukan ensiklopedis awal (non-akademik) mengutip garis ini, tetapi menyatakan bahwa tempat lahirnya (Pasai atau Pajajaran) diperselisihkan. Artikel jurnal yang dibuka justru menyebut ayahnya penguasa di Ismailiyah dan menolak anggapan bahwa ia berasal dari Aceh; versi-versi ini tidak sejalan.",
          "Rujukan ensiklopedis awal (non-akademik) juga mencatat sebagian sarjana menduga tokoh ini mungkin gabungan beberapa figur sejarah, dan bahwa masa awal hidupnya kurang terdokumentasi."
        ],
        "en": [
          "In traditional sources such as the Carita Purwaka Caruban Nagari and Babad Cirebon, his father is named Syarif Abdullah and his mother Nyai Rara Santang, daughter of Prabu Siliwangi of Pajajaran. An early encyclopedic reference (non-academic) reports this line but says his birthplace (Pasai or Pajajaran) is disputed. A journal article consulted instead says his father was a ruler in Ismailiyah and rejects the claim that he came from Aceh; these versions do not agree.",
          "An early encyclopedic reference (non-academic) also notes that some scholars suspect the figure may be a composite of several historical persons, and that his early life is poorly documented."
        ]
      },
      "life": {
        "id": [
          "Menurut sebuah laporan yang bersandar pada Hasan Basyari (1989), ia tiba di Keraton Pakungwati, Caruban, pada 1475 dan menerima kekuasaan dari Pangeran Cakrabuana pada 1479 dengan gelar Susuhunan. Menurut Carita Purwaka Caruban Nagari sebagaimana dikutip sebuah skripsi, ia diangkat sebagai tumenggung di Cirebon bergelar Susuhunan Jati menggantikan Syaikh Nurul Jati.",
          "Cerita ia belajar di Mesir selama sekitar empat belas tahun dan berhaji di Mekah dan Madinah tidak memiliki rujukan yang kuat di rujukan ensiklopedis awal (non-akademik). Usia sekitar 120 tahun disebut dalam tradisi dan tidak dapat diverifikasi."
        ],
        "en": [
          "According to a report relying on Hasan Basyari (1989), he arrived at Keraton Pakungwati in Caruban in 1475 and received rule from Pangeran Cakrabuana in 1479 with the title Susuhunan. According to the Carita Purwaka Caruban Nagari as cited in a thesis, he was appointed tumenggung in Cirebon with the title Susuhunan Jati, succeeding Syaikh Nurul Jati.",
          "The story that he studied in Egypt for about fourteen years and made the pilgrimage to Mecca and Medina has weak citation on an early encyclopedic reference (non-academic). The age of about 120 years is reported in tradition and cannot be verified."
        ]
      },
      "context": {
        "id": [
          "Pada akhir abad ke-15 dan awal abad ke-16, Cirebon berkembang sebagai pelabuhan di pesisir utara Jawa dan berhubungan dengan Demak serta Banten. Sebuah skripsi menyebut Syarif Hidayat sebagai peletak dasar kekuasaan politik Islam di Jawa Barat (Banten dan Cirebon), mengutip Carita Purwaka Caruban Nagari, Babad Cirebon, Nagarakertabhumi, Sadjarah Banten, dan Atlas Wali Songo. Rujukan ensiklopedis awal (non-akademik) menyebut perannya dalam pendirian Banten bersama Maulana Hasanuddin dan ekspedisi atas nama Demak ke Sunda Kelapa.",
          "Karena sumber-sumber ini bersifat babad dan penafsiran belakangan, peran politik yang tepat masih menjadi pokok perdebatan akademik. Satu jurnal membedakannya dari Fatahillah (berasal dari Aceh pada masa Sultan Trenggono), sebab kedua tokoh ini kadang dicampur dalam literatur populer."
        ],
        "en": [
          "In the late 15th and early 16th centuries, Cirebon grew as a north-coast Javanese port connected with Demak and Banten. A thesis describes Syarif Hidayat as laying the foundation of Islamic political power in West Java (Banten and Cirebon), citing the Carita Purwaka Caruban Nagari, Babad Cirebon, Nagarakertabhumi, Sadjarah Banten and Atlas Wali Songo. An early encyclopedic reference (non-academic) mentions his role in founding Banten with Maulana Hasanuddin and expeditions on behalf of Demak to Sunda Kelapa.",
          "Because these sources are babad and later interpretations, his exact political role remains a matter of academic debate. One journal distinguishes him from Fatahillah (from Aceh in the time of Sultan Trenggono), as the two are sometimes conflated in popular literature."
        ]
      },
      "dakwah": {
        "id": [
          "Literatur menggambarkannya sebagai penguasa sekaligus mubaligh yang menyebarkan Islam di pesisir utara Jawa dan Jawa Barat. Rujukan ensiklopedis awal (non-akademik) menyebut ia lebih mengutamakan dakwah ketika usianya lanjut dan Pangeran Pasarean menjadi raja. Rincian kegiatan dakwahnya sebagian besar berasal dari babad dan tulisan sekunder.",
          "Pembangunan jalan yang menghubungkan daerah terpencil, yang disebutkan rujukan ensiklopedis awal (non-akademik), belum diverifikasi dengan sumber primer dalam penelitian ini."
        ],
        "en": [
          "The literature describes him as both ruler and preacher who spread Islam along Java's north coast and in West Java. An early encyclopedic reference (non-academic) says he put more emphasis on preaching in old age when Pangeran Pasarean became king. Details of his preaching mostly come from babad and secondary writing.",
          "The road building linking remote areas, mentioned by an early encyclopedic reference (non-academic), was not verified against primary sources in this research."
        ]
      },
      "methods": {
        "id": [
          "Karena ia dikenal sebagai penguasa, metode yang dikaitkan dengannya mencakup pendirian pusat pemerintahan Islam, pernikahan politik dengan keluarga penguasa lokal (sumber menyebut setidaknya enam istri), dan hubungan dagang pelabuhan. Kompleks makam mencerminkan perpaduan gaya Jawa, Arab, dan Tionghoa, dan kisah Ong Tien menjadi bagian tradisi keraton; kaitan Ong Tien dengan sejarah pernikahan ini bersifat tradisi dan belum diverifikasi dengan sumber sezaman."
        ],
        "en": [
          "As he is known as a ruler, the methods associated with him include establishing an Islamic seat of government, political marriages with local ruling families (sources mention at least six wives), and port trade links. The tomb complex reflects a blend of Javanese, Arab and Chinese styles, and the story of Ong Tien is part of palace tradition; the link between Ong Tien and this marriage history is tradition and has not been verified with contemporary sources."
        ]
      },
      "legacy": {
        "id": [
          "Astana Gunung Sembung (Gunung Jati) di Desa Astana, Kecamatan Gunung Jati, Kabupaten Cirebon, adalah kompleks pemakaman penguasa Cirebon berukuran sekitar 4 hektare menurut jurnal Wahana Akademika (2018). Sunan Gunung Jati dimakamkan pada tingkat kesembilan, tertinggi. Kajian arsitektur (Atlantis Press, 2022) menyebut situs berdenah mengikuti keraton dan memiliki pengaruh Tionghoa, Jawa, dan Arab, dengan perkiraan awal abad ke-14 yang tidak sejalan dengan perkiraan sejarawan lokal abad ke-15.",
          "Detik mengutip sejarawan bahwa lokasinya dahulu kediaman Sunan Gunung Jati dengan kebun dan pesantren; keterangan ini adalah pendapat sejarawan yang dikutip media dan bukan temuan arkeologi."
        ],
        "en": [
          "Astana Gunung Sembung (Gunung Jati), in Astana village, Gunung Jati district, Cirebon regency, is a burial complex of Cirebon rulers covering about 4 hectares according to the journal Wahana Akademika (2018). Sunan Gunung Jati is buried on the ninth and highest tier. An architectural study (Atlantis Press, 2022) says the site follows a palace layout with Chinese, Javanese and Arab influences, dating it to around the 14th century, which differs from local historians' 15th-century estimate.",
          "Detik quotes a historian saying the site was formerly Sunan Gunung Jati's residence with a garden and pesantren; this is a historian's view reported by media, not an archaeological finding."
        ]
      },
      "values": {
        "id": [
          "Dalam tradisi Cirebon, ia dikenang sebagai figur yang memadukan kepemimpinan politik dan keulamaan. Kunjungan ke makam terutama ramai pada bulan Maulid dan 12 Rabiul Awal menurut Wahana Akademika. Nilai-nilai ini adalah tafsir komunitas peziarah dan tradisi keraton."
        ],
        "en": [
          "In Cirebon tradition he is remembered as a figure combining political leadership and religious scholarship. Visits to the tomb peak in the Maulid month and on 12 Rabiul Awal according to Wahana Akademika. These values are interpretations by the pilgrim community and palace tradition."
        ]
      }
    },
    "facts": [
      {
        "id": "Sunan Gunung Jati dimakamkan di Astana Gunung Sembung, Desa Astana, Kecamatan Gunung Jati, Kabupaten Cirebon, pada tingkat kesembilan kompleks.",
        "en": "Sunan Gunung Jati is buried at Astana Gunung Sembung, Astana village, Gunung Jati district, Cirebon regency, on the ninth tier of the complex.",
        "type": "historical_fact",
        "refs": [
          1,
          3
        ]
      },
      {
        "id": "Kompleks memiliki sembilan pintu; peziarah umum hanya dapat sampai pintu Pasujudan, sedangkan area di dalamnya diperuntukkan bagi keluarga keraton dan keturunan.",
        "en": "The complex has nine doors; general pilgrims may go only as far as the Pasujudan door, while inner areas are reserved for the palace family and descendants.",
        "type": "historical_fact",
        "refs": [
          5,
          2
        ]
      },
      {
        "id": "Kajian arsitektur menyebut makam meniru denah keraton dengan pengaruh Tionghoa, Jawa, dan Arab.",
        "en": "An architectural study says the tomb replicates the palace layout with Chinese, Javanese and Arab influences.",
        "type": "academic_interpretation",
        "refs": [
          1
        ]
      },
      {
        "id": "Peran sebagai peletak dasar kekuasaan Islam di Cirebon dan Banten bersandar pada Carita Purwaka Caruban Nagari dan babad lain; sebagian sarjana menduga tokohnya gabungan beberapa figur.",
        "en": "His role as founder of Islamic rule in Cirebon and Banten rests on the Carita Purwaka Caruban Nagari and other babad; some scholars suspect the figure is a composite of several persons.",
        "type": "academic_interpretation",
        "refs": [
          4
        ]
      },
      {
        "id": "Silsilah dari Prabu Siliwangi melalui ibunya, riwayat belajar di Mesir, dan usia sekitar 120 tahun adalah tradisi yang belum diverifikasi.",
        "en": "Descent from Prabu Siliwangi through his mother, study in Egypt, and an age of about 120 years are tradition not verified.",
        "type": "local_tradition",
        "refs": [],
        "needsReference": true
      }
    ],
    "variants": [
      {
        "id": "Tempat lahir: Pasai atau Pajajaran (rujukan ensiklopedis awal (non-akademik)); jurnal Wahana Akademika menolak asal Aceh dan menyebut ayahnya penguasa di Ismailiyah.",
        "en": "Birthplace: Pasai or Pajajaran (an early encyclopedic reference (non-academic)); the Wahana Akademika journal rejects an Aceh origin and says his father ruled in Ismailiyah."
      },
      {
        "id": "Tahun: lahir 1448 dan wafat 1568 (rujukan ensiklopedis awal (non-akademik)), tiba 1475 dan berkuasa 1479 (laporan yang bersandar pada Basyari 1989); sumber jurnal Wahana Akademika tidak mencantumkan tanggal. Usia sekitar 120 tahun disebut tetapi tidak dapat diverifikasi.",
        "en": "Years: born 1448 and died 1568 (an early encyclopedic reference (non-academic)), arrived 1475 and ruled 1479 (report relying on Basyari 1989); the Wahana Akademika source gives no dates. An age of about 120 is stated but cannot be verified."
      },
      {
        "id": "Hubungan dengan Fatahillah: sebagian sumber menyebut Fatahillah menantu dan dimakamkan di dekat makam, sementara jurnal Wahana Akademika menegaskan keduanya tokoh berbeda dan makam Fatahillah tidak dapat diverifikasi.",
        "en": "Relationship with Fatahillah: some sources call Fatahillah a son-in-law buried near the tomb, while the Wahana Akademika journal insists they are different persons and Fatahillah's grave cannot be verified."
      },
      {
        "id": "Usia situs: perkiraan abad ke-14 (Atlantis Press 2022) versus abad ke-15 (sejarawan yang dikutip Detik).",
        "en": "Age of the site: 14th-century estimate (Atlantis Press 2022) versus 15th century (historian quoted by Detik)."
      },
      {
        "id": "Nandang dan Ramdhani (2022) menyebut ia lahir di Mesir pada 12 Rabiulawal 1448 M, putra Syarif Abdullah dan Rara Santang; versi tempat lahir lain (Pasai, Pajajaran) tidak kami temukan pada jurnal yang dibuka. Masa memimpin Cirebon 1479 sampai 1568 (Wildan, 2025; Hardhi, 2014); artikel Sabda (Undip) memberi wafat 1570 mengutip Solichin Salam.",
        "en": "Nandang and Ramdhani (2022) say he was born in Egypt on 12 Rabi' al-Awwal 1448 CE, son of Syarif Abdullah and Rara Santang; other birthplace versions (Pasai, Pajajaran) were not found in the journals we opened. He led Cirebon 1479 to 1568 (Wildan, 2025; Hardhi, 2014); a Sabda (Undip) article gives his death as 1570, citing Solichin Salam."
      }
    ],
    "visit": {
      "etiquette": {
        "id": "Kompleks adalah makam keraton yang aktif sebagai tempat ziarah. Berpakaian sopan dan ikuti arahan juru kunci dan abdi dalem. Dokumentasi dilarang di area privat menurut sebuah skripsi.",
        "en": "The complex is an active royal burial site and pilgrimage place. Dress modestly and follow the guidance of the caretaker and abdi dalem. Photography in private areas is prohibited according to a thesis."
      },
      "access": {
        "id": "Menurut Detik, peziarah umum hanya boleh sampai pintu ketiga (Pasujudan); pintu keempat dan seterusnya diperuntukkan bagi keluarga keraton dan keturunan Sunan Gunung Jati. Menurut sebuah skripsi (ISBI), pengunjung lain dapat masuk lebih jauh dengan surat izin dari keraton. Informasi ini dari media dan skripsi, bukan sumber resmi pengelola.",
        "en": "According to Detik, general pilgrims may go only as far as the third door (Pasujudan); the fourth door onward is reserved for the royal family and descendants of Sunan Gunung Jati. According to a thesis (ISBI), other visitors may enter further with a permission letter from the palace. This information comes from media and a thesis, not an official management source."
      },
      "hours": null,
      "fees": null
    },
    "needsVerification": [
      "Koordinat kompleks makam (belum terverifikasi).",
      "Alamat jalan lengkap.",
      "Tahun lahir/wafat dan usia sekitar 120 tahun.",
      "Silsilah (Siliwangi, Syarif Abdullah) dan tempat lahir.",
      "Hubungan dan identitas Fatahillah, Ong Tien.",
      "Peran historis pasti di Cirebon dan Banten (periksa Carita Purwaka Caruban Nagari secara langsung).",
      "Aturan akses terkini, jam buka, dan biaya dari pengelola/keraton resmi; keterangan 24 jam dan gratis hanya dari media.",
      "Sumber seed (Kemenag, UM, UIN SGD, UIN Jakarta) tidak dapat dibuka dan tidak dikutip.",
      "Tahun wafat 1568 vs 1570, dan klaim usia sekitar 120 tahun serta belajar 14 tahun di Mesir/Mekah belum ditopang sumber yang kami baca.",
      "Gagasan bahwa tokoh ini gabungan beberapa figur sejarah hanya disebut rujukan ensiklopedis awal; belum ada sumber akademik yang kami baca."
    ],
    "nearbyCulinary": [],
    "nearbyProducts": [],
    "relatedDestinations": [
      "sunan-kalijaga"
    ],
    "references": [
      {
        "title": "Wisata Religi Makam Gunung Jati Cirebon sebagai Budaya dan Media Spiritual (Wahana Akademika vol. 5 no. 1, 2018)",
        "publisher": "UIN Walisongo Semarang",
        "url": "https://journal.walisongo.ac.id/index.php/wahana/article/download/2565/1653",
        "supports": "Identitas, ayah di Ismailiyah, penolakan asal Aceh, sultan pertama Cirebon, makam di tingkat kesembilan seluas sekitar 4 ha, perbedaan dengan Fatahillah, pembatasan akses.",
        "tier": "academic"
      },
      {
        "title": "Study of the Astana Gunung Jati Heritage Tomb, Cirebon, Indonesia (SoRes 2021)",
        "publisher": "Atlantis Press",
        "url": "https://download.atlantis-press.com/proceedings/sores-21/125973468",
        "supports": "Kompleks menyerupai keraton, pengaruh Tionghoa-Jawa-Arab, perkiraan abad ke-14.",
        "tier": "media"
      },
      {
        "title": "Mengenal Lebih Dalam 9 Pintu di Komplek Makam Sunan Gunung Jati",
        "publisher": "Detik Jabar",
        "url": "https://www.detik.com/jabar/budaya/d-6873882/mengenal-lebih-dalam-9-pintu-di-komplek-makam-sunan-gunung-jati",
        "supports": "Sembilan pintu, batas peziarah di Pasujudan, alamat dan jarak. Media, bukan sumber resmi.",
        "tier": "media"
      },
      {
        "title": "Menapak Sejarah Astana Gunung Sembung dan Kisah Dakwah Bratalegawa",
        "publisher": "Detik Jabar",
        "url": "https://www.detik.com/jabar/cirebon-raya/d-7239026/menapak-sejarah-astana-gunung-sembung-dan-kisah-dakwah-bratalegawa",
        "supports": "Pendapat sejarawan tentang sejarah situs dan lokasi sebagai kediaman Sunan Gunung Jati.",
        "tier": "media"
      },
      {
        "title": "Skripsi tentang kompleks makam Sunan Gunung Jati (Bab II-III), penulis tidak terlihat",
        "publisher": "UIN Sunan Kalijaga (digilib)",
        "url": "https://digilib.uin-suka.ac.id/id/eprint/28840/2/13250009_BAB-II_sampai_SEBELUM-BAB-TERAKHIR.pdf",
        "supports": "Sumber babad yang dikutip, peran peletak dasar kekuasaan Islam, pengangkatan sebagai tumenggung; koordinat dalam teks tidak valid.",
        "tier": "academic"
      },
      {
        "title": "Bab IV: Makna Ziarah bagi Pengunjung di Makam Sunan Gunung Jati (skripsi)",
        "publisher": "ISBI Bandung (repository)",
        "url": "https://repo.isbi.ac.id/files/original/36f1463a13cfbca0c1ce9a28025a85193cc7b0fe.pdf",
        "supports": "Tiba 1475, kekuasaan 1479, wafat 1568, sembilan pintu, pembatasan akses, surat izin keraton, larangan dokumentasi area privat. Hanya sebagian halaman dibaca.",
        "tier": "academic"
      },
      {
        "title": "Reaktualisasi Ajaran Walisongo dalam Pendidikan Islam di Era Perubahan (Al Ulya 2023)",
        "publisher": "UNU Sunan Giri",
        "url": "https://journal.unugiri.ac.id/index.php/al-ulya/article/download/2040/1205",
        "supports": "Klaim silsilah tanpa sumber dan kehidupan asketis sebagai tinjauan sekunder; tidak digunakan sebagai fakta.",
        "tier": "academic"
      },
      {
        "title": "The Da'wah Way of Sunan Gunung Djati in Cirebon (ethno-religious identity and moderation values)",
        "publisher": "Kris Nandang; Suciyadi Ramdhani, Syekh Nurjati: Jurnal Studi Sosial Keagamaan 02(02), IAIN Syekh Nurjati Cirebon, 2022",
        "url": "https://syekhnurjati.ac.id/sejati/index.php/sejati/article/download/32/27",
        "supports": "Asal-usul dan orang tua (Mesir 1448; Syarif Abdullah dan Rara Santang) menurut jurnal; versi lain berbeda.",
        "tier": "academic",
        "support": "partial",
        "quote": "lahir di Mesir 12 rabiul awwal tahun 1448 M.",
        "checkedByResearcher": true
      },
      {
        "title": "Islamisasi di Cirebon: Peran dan Pengaruh Walangsungsang Perspektif Naskah Carios Walangsungsang",
        "publisher": "Siti Zulfah, Tamaddun 6(1), pp.172-201, 2018",
        "url": "https://syekhnurjati.ac.id/jurnal/index.php/tamaddun/article/download/3270/2055",
        "supports": "Asal-usul dan orang tua (Mesir 1448; Syarif Abdullah dan Rara Santang) menurut jurnal; versi lain berbeda.",
        "tier": "academic",
        "support": "partial",
        "quote": null,
        "checkedByResearcher": true
      },
      {
        "title": "Peran Sunan Gunung Jati dalam Mengembangkan Pusat Peradaban Islam di Cirebon pada Abad 16",
        "publisher": "Wildan, D., Historia: Jurnal Pendidik dan Peneliti Sejarah 8(2), 195-204 (UPI), 2025",
        "url": "https://ejournal.upi.edu/index.php/historia/article/download/90876/35093",
        "supports": "Memimpin Cirebon 1479-1568 (Wildan 2025); Cakrabuana membuka Tegal Alang-Alang 1445 (Hardhi 2014).",
        "tier": "academic",
        "support": "partial",
        "quote": "memimpin pemerintahan Cirebon selama kurang lebih 89 tahun, dari 1479 hingga 1568",
        "checkedByResearcher": true
      },
      {
        "title": "Dakwah Sunan Gunung Jati dalam Proses Islamisasi di Kesultanan Cirebon Tahun 1479-1568",
        "publisher": "Titan Rohkmutiana Hardhi, Risalah (Universitas Negeri Yogyakarta student journal), 2014",
        "url": "https://journal.student.uny.ac.id/risalah/article/download/4941/4603",
        "supports": "Memimpin Cirebon 1479-1568 (Wildan 2025); Cakrabuana membuka Tegal Alang-Alang 1445 (Hardhi 2014).",
        "tier": "academic",
        "support": "full",
        "quote": "Pada tanggal 1 Sura tahun 1358 AJ/1445 M, Pangeran Cakrabuana membuka lahan di daerah Tegal Alang-Alang.",
        "checkedByResearcher": true
      }
    ],
    "locationInfo": {
      "name": "Astana Gunung Sembung (Astana Gunung Jati), Desa Astana, Kecamatan Gunung Jati",
      "address": "Desa Astana, Kecamatan Gunung Jati, Kabupaten Cirebon, Jawa Barat (sekitar 4,5 km dari pusat kota Cirebon menurut Detik; alamat jalan lengkap belum diverifikasi)"
    },
    "coordsNotes": {
      "id": "Koordinat titik makam belum dapat diverifikasi dari sumber yang dapat dibuka. Penanda pada peta hanya menandai perkiraan wilayah, bukan lokasi makam. GPS auto-check-in dinonaktifkan untuk destinasi ini; gunakan check-in manual. Sebuah skripsi mencantumkan '06º 40' 256\" LS dan 108º 33' 563\" BT', tetapi nilai detiknya melebihi 60 sehingga tidak valid dan tidak dipakai.",
      "en": "The tomb's exact coordinates could not be verified from the sources we could open. The map marker only shows an approximate area, not the tomb's location. GPS auto-check-in is disabled for this destination; use manual check-in. A thesis lists '06º 40' 256\" S and 108º 33' 563\" E', but the seconds exceed 60, so the value is invalid and not used."
    },
    "areaCoordsStatus": "approximate",
    "areaCoordsSource": {
      "id": "Titik perkiraan pusat wilayah yang dipilih penyusun; bukan dari sumber peta terverifikasi dan bukan lokasi makam.",
      "en": "Approximate regional centre chosen by the authors; not from a verified map source and not the tomb's location."
    }
  },
  {
    "id": "bandar-grissee",
    "order": 10,
    "kind": "heritage",
    "name": "Bandar Grissee",
    "nameFull": "Bandar Grissee",
    "titles": "",
    "otherNames": [],
    "period": null,
    "category": "Heritage Journey",
    "categoryIcon": "anchor",
    "province": "Jawa Timur",
    "regionKey": "east-java",
    "regency": "Kabupaten Gresik",
    "city": "Gresik",
    "coords": null,
    "coordsStatus": "unverified",
    "areaCoords": [
      -7.1602,
      112.6497
    ],
    "coordsSource": null,
    "mapsQuery": "Bandar Grissee Gresik",
    "radiusMeters": 200,
    "duration": null,
    "cover": "assets/Document/bandar grise.png",
    "coverSuggested": "assets/images/gresik/bandar-grissee/cover.jpg",
    "gallery": [],
    "gallerySuggested": [
      "assets/images/gresik/bandar-grissee/gallery-1.jpg",
      "assets/images/gresik/bandar-grissee/gallery-2.jpg",
      "assets/images/gresik/bandar-grissee/gallery-3.jpg"
    ],
    "excerpt": {
      "id": "Kawasan pelabuhan dan kota lama Gresik yang dipugar dan dibuka kembali untuk umum pada Desember 2022.",
      "en": "Gresik's old harbour and old-town precinct, restored and reopened to the public in December 2022."
    },
    "sections": {
      "overview": {
        "id": [
          "Gresik dikenal sebagai kota pelabuhan perdagangan besar yang puncaknya ditempatkan pada abad ke-15. Menurut penelusuran sejarah lokal, banyak pedagang perantara di kawasan ini adalah orang Tionghoa atau Arab. Kawasan Kota Lama kini dikenal sebagai Bandar Grissee.",
          "Penataan kawasan dilaksanakan melalui program Kotaku Kementerian PUPR dari Desember 2021 hingga akhir 2022, dan kawasan dibuka untuk umum pada Desember 2022. Kawasan ini memuat permukiman bergaya kolonial, pribumi, Pecinan, dan Arab. Bandar Grissee adalah destinasi heritage Gresik, bukan situs makam Wali Songo."
        ],
        "en": [
          "Gresik was a major trading port whose peak is placed in the 15th century. According to local historical accounts, many intermediary traders there were Chinese or Arab. The Old Town area is now known as Bandar Grissee.",
          "The area was restored through the Ministry of Public Works and Housing's Kotaku programme from December 2021 to the end of 2022 and reopened to the public in December 2022. It contains colonial, indigenous, Chinese and Arab quarters. Bandar Grissee is a Gresik heritage destination, not a Wali Songo tomb site."
        ]
      }
    },
    "facts": [
      {
        "id": "Dibuka kembali untuk umum pada Desember 2022 setelah penataan kawasan.",
        "en": "Reopened to the public in December 2022 after restoration works.",
        "type": "historical_fact",
        "refs": [
          1
        ]
      },
      {
        "id": "Puncak kejayaan Gresik sebagai pelabuhan dagang ditempatkan pada abad ke-15.",
        "en": "Gresik's peak as a trading port is placed in the 15th century.",
        "type": "academic_interpretation",
        "refs": [
          0
        ]
      }
    ],
    "variants": [],
    "visit": {
      "etiquette": {
        "id": "Hormati warga setempat: sebagian bangunan adalah rumah yang masih dihuni. Minta izin sebelum memotret orang atau memasuki halaman pribadi.",
        "en": "Respect local residents: some buildings are lived-in homes. Ask permission before photographing people or entering private yards."
      },
      "access": null,
      "hours": null,
      "fees": null
    },
    "needsVerification": [
      "Konten bagian ini berasal dari project awal EcoReligi dan referensi pada linimasa; sebagian rincian masih perlu diverifikasi dengan sumber resmi.",
      "Jam buka, tiket, dan akses belum diverifikasi."
    ],
    "nearbyCulinary": [
      "rujak-cingur",
      "bandeng"
    ],
    "nearbyProducts": [
      "batik"
    ],
    "relatedDestinations": [
      "kampung-kemasan",
      "malik-ibrahim"
    ],
    "legacyCoords": [
      -7.1602,
      112.6497
    ],
    "references": [
      {
        "title": "Gresik as a trading port city",
        "publisher": "",
        "url": "https://mojok.co/liputan/kampung-kemasan-potret-kejayaan-perdagangan-gresik-di-masa-silam/",
        "supports": "Gresik was a major trading port whose peak is placed in the 15th century. Local historical accounts note that many intermediary traders ther…",
        "tier": "media"
      },
      {
        "title": "Bandar Grissee restored and reopened",
        "publisher": "",
        "url": "https://lestari.kompas.com/read/2023/04/28/120000386/bandar-grissee-gresik-saksi-bisu-keragaman-budaya-indonesia",
        "supports": "The Ministry of Public Works and Housing (PUPR), through the Kotaku programme, carried out works at Bandar Grissee in Gresik Old Town costin…",
        "tier": "media"
      }
    ],
    "locationInfo": {
      "name": "Bandar Grissee",
      "address": null
    },
    "coordsNotes": {
      "id": "Koordinat titik makam belum dapat diverifikasi dari sumber yang dapat dibuka. Penanda pada peta hanya menandai perkiraan wilayah, bukan lokasi makam. GPS auto-check-in dinonaktifkan untuk destinasi ini; gunakan check-in manual. Posisi pada peta berasal dari proyek awal dan belum diverifikasi.",
      "en": "The tomb's exact coordinates could not be verified from the sources we could open. The map marker only shows an approximate area, not the tomb's location. GPS auto-check-in is disabled for this destination; use manual check-in. The map position comes from the original project and has not been verified."
    },
    "areaCoordsStatus": "approximate",
    "areaCoordsSource": {
      "id": "Titik representasi wilayah dari proyek awal (tanpa sumber tercatat).",
      "en": "Area-representation point from the original project (no recorded source)."
    }
  },
  {
    "id": "kampung-kemasan",
    "order": 11,
    "kind": "heritage",
    "name": "Kampung Kemasan",
    "nameFull": "Kampung Kemasan",
    "titles": "",
    "otherNames": [],
    "period": null,
    "category": "Heritage Journey",
    "categoryIcon": "home",
    "province": "Jawa Timur",
    "regionKey": "east-java",
    "regency": "Kabupaten Gresik",
    "city": "Gresik",
    "coords": null,
    "coordsStatus": "unverified",
    "areaCoords": [
      -7.1611,
      112.6558
    ],
    "coordsSource": null,
    "mapsQuery": "Kampung Kemasan Gresik",
    "radiusMeters": 200,
    "duration": null,
    "cover": "assets/Document/kampung kemasan.png",
    "coverSuggested": "assets/images/gresik/kampung-kemasan/cover.jpg",
    "gallery": [],
    "gallerySuggested": [
      "assets/images/gresik/kampung-kemasan/gallery-1.jpg",
      "assets/images/gresik/kampung-kemasan/gallery-2.jpg",
      "assets/images/gresik/kampung-kemasan/gallery-3.jpg"
    ],
    "excerpt": {
      "id": "Kampung rumah saudagar pribumi dengan arsitektur yang memadukan gaya Tionghoa, kolonial Belanda, dan tata ruang Jawa.",
      "en": "A neighbourhood of indigenous merchants' houses blending Chinese and Dutch colonial styles with Javanese layouts."
    },
    "sections": {
      "overview": {
        "id": [
          "Nama Kemasan disebut berasal dari Bak Liong, seorang pengrajin emas yang tinggal di tepi sungai pada 1853. Pada 1855, H. Oemar bin Ahmad, pedagang kulit dan sarang walet, membangun rumah dua lantai di dekatnya, disusul rumah-rumah lain. Pada 1896 anak-anaknya mendirikan pabrik penyamakan kulit.",
          "Rumah-rumahnya memadukan gaya Tionghoa dan kolonial Belanda dengan tata ruang Jawa. Menurut satu direktori wisata, dari 23 bangunan asal, 16 masih memenuhi kriteria cagar budaya. Kampung Kemasan adalah destinasi heritage Gresik, bukan situs makam Wali Songo."
        ],
        "en": [
          "The name Kemasan is said to derive from Bak Liong, a goldsmith who lived on the riverbank in 1853. In 1855 H. Oemar bin Ahmad, a leather and swiftlet-nest trader, built a two-storey house nearby, followed by other houses. In 1896 his children set up a leather tannery.",
          "The houses blend Chinese and Dutch colonial styles with Javanese layouts. According to one tourism directory, 16 of the 23 original buildings still meet cultural-heritage criteria. Kampung Kemasan is a Gresik heritage destination, not a Wali Songo tomb site."
        ]
      }
    },
    "facts": [
      {
        "id": "Rumah-rumah saudagar dibangun sejak sekitar 1855 hingga 1920-an.",
        "en": "The merchants' houses were built from about 1855 into the 1920s.",
        "type": "historical_fact",
        "refs": [
          0
        ]
      },
      {
        "id": "Asal nama 'Kemasan' dari Bak Liong adalah keterangan yang dikutip satu sumber media.",
        "en": "The origin of the name 'Kemasan' from Bak Liong is an account cited by one media source.",
        "type": "local_tradition",
        "refs": [],
        "needsReference": true
      }
    ],
    "variants": [],
    "visit": {
      "etiquette": {
        "id": "Hormati warga setempat: sebagian bangunan adalah rumah yang masih dihuni. Minta izin sebelum memotret orang atau memasuki halaman pribadi.",
        "en": "Respect local residents: some buildings are lived-in homes. Ask permission before photographing people or entering private yards."
      },
      "access": null,
      "hours": null,
      "fees": null
    },
    "needsVerification": [
      "Konten bagian ini berasal dari project awal EcoReligi dan referensi pada linimasa; sebagian rincian masih perlu diverifikasi dengan sumber resmi.",
      "Jam buka, tiket, dan akses belum diverifikasi."
    ],
    "nearbyCulinary": [
      "nasi-krawu",
      "rujak-cingur"
    ],
    "nearbyProducts": [
      "batik",
      "pudak-product"
    ],
    "relatedDestinations": [
      "bandar-grissee",
      "malik-ibrahim"
    ],
    "legacyCoords": [
      -7.1611,
      112.6558
    ],
    "references": [
      {
        "title": "Kampung Kemasan: houses of indigenous merchants",
        "publisher": "",
        "url": "https://mojok.co/liputan/kampung-kemasan-potret-kejayaan-perdagangan-gresik-di-masa-silam/",
        "supports": "The name Kemasan is said to come from Bak Liong, a goldsmith who lived on the riverbank (1853). In 1855 H. Oemar bin Ahmad, a leather and sw…",
        "tier": "media"
      }
    ],
    "locationInfo": {
      "name": "Kampung Kemasan",
      "address": null
    },
    "coordsNotes": {
      "id": "Koordinat titik makam belum dapat diverifikasi dari sumber yang dapat dibuka. Penanda pada peta hanya menandai perkiraan wilayah, bukan lokasi makam. GPS auto-check-in dinonaktifkan untuk destinasi ini; gunakan check-in manual. Posisi pada peta berasal dari proyek awal dan belum diverifikasi.",
      "en": "The tomb's exact coordinates could not be verified from the sources we could open. The map marker only shows an approximate area, not the tomb's location. GPS auto-check-in is disabled for this destination; use manual check-in. The map position comes from the original project and has not been verified."
    },
    "areaCoordsStatus": "approximate",
    "areaCoordsSource": {
      "id": "Titik representasi wilayah dari proyek awal (tanpa sumber tercatat).",
      "en": "Area-representation point from the original project (no recorded source)."
    }
  }
];

const destinationWithCompletion = DESTINATION_BASE.map((place) => {
  const completion = DESTINATION_COMPLETION[place.id] || {}
  const next = { ...place, ...completion }
  if (completion.mapAddress) {
    next.location = completion.mapAddress
    next.locationInfo = { ...place.locationInfo, name: place.name, address: completion.mapAddress }
    next.addressNotes = completion.addressNote || null
    next.directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(completion.mapAddress)
    next.mapsQuery = completion.mapAddress
  }
  return next
})
export const DESTINATIONS = destinationWithCompletion

export const CULINARY = [
  {
    "id": "pudak",
    "name": "Pudak",
    "region": "Jawa Timur",
    "regency": "Gresik",
    "regionKey": "east-java",
    "tagline": {
      "id": "Kue kukus tepung beras manis khas Gresik",
      "en": "Gresik's signature sweet steamed rice-flour cake"
    },
    "cover": null,
    "coverSuggested": "assets/images/culinary/pudak.jpg",
    "priceRange": {
      "id": "Rp 15.000 – Rp 35.000 per bungkus",
      "en": "Rp 15,000 – Rp 35,000 per pack"
    },
    "history": {
      "id": "Pudak telah dibuat di Gresik turun-temurun dan secara tradisi disajikan pada bulan Ramadan serta pesta pernikahan. Adonan dibungkus dan dikukus dalam 'ope', pelepah pinang, yang mengharumkan kue saat dimasak sekaligus menjadi pembungkus alami yang mudah terurai.",
      "en": "Pudak has been made in Gresik for generations, traditionally served during Ramadan and at weddings. It's wrapped and steamed inside 'ope,' the sheath of the areca palm frond, which perfumes the cake as it cooks and doubles as a natural, biodegradable package."
    },
    "ingredients": {
      "id": [
        "Tepung beras",
        "Santan",
        "Gula aren atau pandan",
        "Pelepah pinang (ope) untuk pembungkus"
      ],
      "en": [
        "Rice flour",
        "Coconut milk",
        "Palm sugar or pandan",
        "Areca palm sheath (ope) for wrapping"
      ]
    },
    "process": {
      "id": "Adonan tepung beras dicampur santan dan perasa pilihan (polos, pandan, atau gula aren), dituang ke pembungkus ope satuan, diikat di kedua ujung, lalu dikukus hingga mengental menjadi tekstur lembut seperti puding.",
      "en": "The rice flour batter is mixed with coconut milk and a chosen flavour — plain, pandan, or palm sugar — then poured into individual ope wrappers, tied at both ends, and steamed until set into a soft, custard-like texture."
    },
    "location": {
      "id": "Dijual di sepanjang Jl. Pahlawan dan di lapak dekat Bandar Grissee",
      "en": "Sold along Jl. Pahlawan and at stalls near Bandar Grissee"
    },
    "destinationId": "sunan-giri",
    "verification": {
      "status": "unverified",
      "note": {
        "id": "Deskripsi, harga, dan lokasi penjual berasal dari proyek awal dan belum diverifikasi dengan sumber; konfirmasi langsung ke penjual.",
        "en": "Description, prices and seller locations come from the original project and have not been verified with a source; confirm with the seller."
      }
    }
  },
  {
    "id": "nasi-krawu",
    "name": "Nasi Krawu",
    "region": "Jawa Timur",
    "regency": "Gresik",
    "regionKey": "east-java",
    "tagline": {
      "id": "Daging sapi suwir berbumbu di atas nasi dengan tiga macam sambal",
      "en": "Shredded spiced beef over rice with a trio of sambal"
    },
    "cover": null,
    "coverSuggested": "assets/images/culinary/nasi-krawu.jpg",
    "priceRange": {
      "id": "Rp 18.000 – Rp 30.000 per porsi",
      "en": "Rp 18,000 – Rp 30,000 per plate"
    },
    "history": {
      "id": "Nasi Krawu dianggap sebagai hidangan gurih paling ikonik Gresik, diyakini berakar dari tradisi Madura yang dibawa para pedagang yang menetap di kota pelabuhan ini, lalu disesuaikan dengan racikan bumbu setempat.",
      "en": "Nasi Krawu is considered Gresik's most iconic savory dish, believed to have Madurese roots brought over by traders who settled in the port town, later adapted with local spice blends."
    },
    "ingredients": {
      "id": [
        "Nasi putih kukus",
        "Daging sapi dan jeroan yang dimasak lama",
        "Serundeng (kelapa parut berbumbu)",
        "Tiga jenis sambal"
      ],
      "en": [
        "Steamed rice",
        "Slow-cooked beef and offal",
        "Serundeng (spiced grated coconut)",
        "Three types of sambal"
      ]
    },
    "process": {
      "id": "Daging direbus berjam-jam bersama bumbu aromatik sampai cukup empuk untuk disuwir dengan tangan, lalu disajikan di atas nasi dengan serundeng dan tiga sambal dari yang ringan hingga sangat pedas, secara tradisi beralas daun pisang.",
      "en": "Beef is simmered for hours in aromatics until tender enough to shred by hand, then served over rice with serundeng and a trio of sambals ranging from mild to fiery, traditionally plated on a banana leaf."
    },
    "location": {
      "id": "Lapak pagi di sekitar kota lama, paling ramai sebelum pukul 10.00",
      "en": "Morning stalls throughout the old town, busiest before 10am"
    },
    "destinationId": "malik-ibrahim",
    "verification": {
      "status": "unverified",
      "note": {
        "id": "Deskripsi, harga, dan lokasi penjual berasal dari proyek awal dan belum diverifikasi dengan sumber; konfirmasi langsung ke penjual.",
        "en": "Description, prices and seller locations come from the original project and have not been verified with a source; confirm with the seller."
      }
    }
  },
  {
    "id": "bandeng",
    "name": "Otak-Otak Bandeng",
    "region": "Jawa Timur",
    "regency": "Gresik",
    "regionKey": "east-java",
    "tagline": {
      "id": "Bandeng tanpa duri yang dibentuk ulang dan dibakar di atas arang sabut kelapa",
      "en": "Deboned milkfish reshaped and grilled over coconut husk"
    },
    "cover": null,
    "coverSuggested": "assets/images/culinary/otak-otak-bandeng.jpg",
    "priceRange": {
      "id": "Rp 25.000 – Rp 45.000 per buah",
      "en": "Rp 25,000 – Rp 45,000 per piece"
    },
    "history": {
      "id": "Tambak-tambak ikan Gresik telah memasok bandeng ke seluruh Jawa selama berabad-abad. Otak-otak bandeng memperlihatkan keterampilan setempat mengeluarkan duri ikan secara utuh, lalu memasukkan kembali daging berbumbu ke dalam kulitnya sebelum dibakar.",
      "en": "Gresik's fish farms have supplied bandeng (milkfish) to Java for centuries. Otak-otak bandeng showcases the local skill of deboning the fish whole, then returning the seasoned flesh to its own skin before grilling."
    },
    "ingredients": {
      "id": [
        "Bandeng utuh",
        "Santan",
        "Bawang merah, bawang putih, ketumbar",
        "Daun pisang untuk membakar"
      ],
      "en": [
        "Whole milkfish (bandeng)",
        "Coconut milk",
        "Shallot, garlic, coriander",
        "Banana leaf for grilling"
      ]
    },
    "process": {
      "id": "Duri ikan dikeluarkan melalui sayatan kecil dengan kulit tetap utuh, dagingnya dicampur bumbu dan santan, dimasukkan kembali ke dalam kulitnya, lalu dibakar perlahan di atas arang sabut kelapa.",
      "en": "The fish is deboned through a small incision while keeping the skin intact, the flesh is mixed with spices and coconut milk, then stuffed back inside its own skin and grilled slowly over coconut husk charcoal."
    },
    "location": {
      "id": "Pasar ikan dekat Bandar Grissee dan lapak pinggir jalan di Jl. Veteran",
      "en": "Fish markets near Bandar Grissee and roadside stalls on Jl. Veteran"
    },
    "destinationId": "bandar-grissee",
    "verification": {
      "status": "unverified",
      "note": {
        "id": "Deskripsi, harga, dan lokasi penjual berasal dari proyek awal dan belum diverifikasi dengan sumber; konfirmasi langsung ke penjual.",
        "en": "Description, prices and seller locations come from the original project and have not been verified with a source; confirm with the seller."
      }
    }
  },
  {
    "id": "rujak-cingur",
    "name": "Rujak Cingur",
    "region": "Jawa Timur",
    "regency": "Gresik",
    "regionKey": "east-java",
    "tagline": {
      "id": "Sayuran campur dan moncong sapi dalam bumbu kacang-petis yang kental",
      "en": "Mixed vegetables and beef muzzle in thick peanut-shrimp paste"
    },
    "cover": null,
    "coverSuggested": "assets/images/culinary/rujak-cingur.jpg",
    "priceRange": {
      "id": "Rp 15.000 – Rp 25.000 per porsi",
      "en": "Rp 15,000 – Rp 25,000 per plate"
    },
    "history": {
      "id": "Hidangan yang dikenal di seluruh pesisir Jawa Timur; versi Gresik cenderung sedikit lebih manis, mencerminkan selera setempat yang menonjolkan gula aren dan juga tampak pada makanan penutupnya.",
      "en": "A dish shared across coastal East Java, Gresik's version leans slightly sweeter, reflecting the town's palm-sugar-forward taste that also shows up in its desserts."
    },
    "ingredients": {
      "id": [
        "Cingur (moncong sapi) rebus",
        "Tauge, mentimun, kangkung",
        "Tahu dan tempe goreng",
        "Petis udang dan bumbu kacang tumbuk"
      ],
      "en": [
        "Boiled cingur (beef muzzle)",
        "Bean sprouts, cucumber, water spinach",
        "Fried tofu and tempeh",
        "Petis shrimp paste and ground peanut sauce"
      ]
    },
    "process": {
      "id": "Sayuran, tahu, tempe, dan cingur direbus atau diblansir terpisah, lalu diaduk dengan bumbu yang diulek dari kacang, gula aren, dan petis hingga semuanya terlumuri.",
      "en": "Vegetables, tofu, tempeh, and cingur are boiled or blanched separately, then tossed together with a hand-ground sauce of peanuts, palm sugar, and petis until every piece is coated."
    },
    "location": {
      "id": "Warung keluarga di dekat Kampung Kemasan",
      "en": "Family-run warungs near Kampung Kemasan"
    },
    "destinationId": "kampung-kemasan",
    "verification": {
      "status": "unverified",
      "note": {
        "id": "Deskripsi, harga, dan lokasi penjual berasal dari proyek awal dan belum diverifikasi dengan sumber; konfirmasi langsung ke penjual.",
        "en": "Description, prices and seller locations come from the original project and have not been verified with a source; confirm with the seller."
      }
    }
  }
];

const reportFood = [
  ['kolak-ayam', 'Kolak ayam (sanggring)', 'Gresik', 'malik-ibrahim'], ['nasi-roomo', 'Nasi roomo', 'Gresik', 'malik-ibrahim'],
  ['kebab-ampel', 'Kebab', 'Surabaya', 'sunan-ampel'], ['sambosa-ampel', 'Sambosa', 'Surabaya', 'sunan-ampel'], ['es-dawet-ampel', 'Es dawet', 'Surabaya', 'sunan-ampel'],
  ['kupat-keteg', 'Kupat keteg', 'Gresik', 'sunan-giri'], ['legen-siwalan', 'Legen dan siwalan', 'Tuban', 'sunan-bonang'], ['bubur-suro', 'Bubur suro (Ramadan)', 'Tuban', 'sunan-bonang'],
  ['ikan-togek', 'Ikan togek', 'Paciran', 'sunan-drajat'], ['dawet-ental', 'Dawet ental', 'Paciran', 'sunan-drajat'], ['jumbrek', 'Jumbrek', 'Paciran', 'sunan-drajat'],
  ['soto-lamongan', 'Soto Lamongan', 'Lamongan', 'sunan-drajat'], ['tahu-campur', 'Tahu campur', 'Lamongan', 'sunan-drajat'], ['nasi-boran', 'Nasi boran', 'Lamongan', 'sunan-drajat'], ['pecel-lele', 'Pecel lele', 'Lamongan', 'sunan-drajat'],
]
const reportDish = (id, name, regency, destinationId, cover = null) => ({
  id, name, region: 'Jawa Timur', regency, regionKey: 'east-java',
  tagline: { id: `Tercantum sebagai kuliner khas ${regency} dalam laporan wisata religi.`, en: `Listed as a local ${regency} specialty in the religious tourism report.` },
  cover, coverSuggested: null,
  history: { id: 'Informasi sedang dilengkapi.', en: 'Information is being completed.' },
  process: { id: 'Harga bervariasi. Tanyakan bahan dan harga kepada penjual.', en: 'Prices vary. Ask the seller about ingredients and current prices.' },
  priceRange: { id: 'Harga bervariasi', en: 'Prices vary' }, price: { id: 'Harga bervariasi', en: 'Prices vary' },
  destinationId, destinationIds: [destinationId], source: 'Laporan_Wisata_Religi_Lima_Sunan.docx',
})
const reportDishes = reportFood.map(([id, name, area, destinationId]) => reportDish(id, name, area, destinationId, id === 'legen-siwalan' ? '/assets/culinary/tuban/legen-siwalan-illustration.jpeg' : null))
CULINARY.push(...reportDishes)
const pudakDish = CULINARY.find((item) => item.id === 'pudak')
if (pudakDish) { pudakDish.cover = '/assets/culinary/gresik/pudak-illustration.jpeg'; pudakDish.destinationIds = ['malik-ibrahim', 'sunan-giri']; pudakDish.source = 'Laporan_Wisata_Religi_Lima_Sunan.docx'; pudakDish.illustration = true }
const bandengDish = CULINARY.find((item) => item.id === 'bandeng')
if (bandengDish) { bandengDish.cover = '/assets/culinary/gresik/otak-otak-bandeng-illustration.jpeg'; bandengDish.destinationId = 'malik-ibrahim'; bandengDish.destinationIds = ['malik-ibrahim']; bandengDish.source = 'Laporan_Wisata_Religi_Lima_Sunan.docx'; bandengDish.illustration = true }
const krawuDish = CULINARY.find((item) => item.id === 'nasi-krawu')
if (krawuDish) { krawuDish.destinationId = 'malik-ibrahim'; krawuDish.destinationIds = ['malik-ibrahim']; krawuDish.source = 'Laporan_Wisata_Religi_Lima_Sunan.docx' }
const legenDish = CULINARY.find((item) => item.id === 'legen-siwalan')
if (legenDish) legenDish.illustration = true

export const PRODUCTS = [
  {
    "id": "pudak-product",
    "name": "Pudak Oleh-Oleh",
    "region": "Jawa Timur",
    "regency": "Gresik",
    "regionKey": "east-java",
    "tagline": {
      "id": "Kue kukus tepung beras, dikemas untuk dibawa pulang",
      "en": "The steamed rice cake, packaged for travel"
    },
    "cover": null,
    "coverSuggested": "assets/images/products/pudak.jpg",
    "price": {
      "id": "Rp 30.000 – Rp 60.000 per kotak isi 10",
      "en": "Rp 30,000 – Rp 60,000 per box of 10"
    },
    "history": {
      "id": "Dahulu camilan rumahan yang dibuat hanya menjelang hari raya keagamaan, kini pudak diproduksi setiap hari oleh pelaku UMKM rumahan yang memasok pasar setempat maupun peziarah yang mencari buah tangan.",
      "en": "Once a household treat made only around religious holidays, pudak is now produced daily by home-based UMKM makers who supply both local markets and visiting pilgrims looking for a gift to bring home."
    },
    "process": {
      "id": "Dibuat dalam jumlah kecil setiap pagi agar pembungkus ope tetap harum; di sebagian besar lapak pudak dikukus sesuai pesanan, sehingga satu adonan biasanya baru berusia 20–30 menit saat sampai ke pembeli.",
      "en": "Made in small batches each morning so the ope wrapper stays fragrant; producers steam to order in most stalls, meaning a fresh batch is usually only 20–30 minutes old by the time it reaches a customer."
    },
    "nearbyShop": {
      "id": "Lapak UMKM di sepanjang Jl. Pahlawan, dekat jalan menuju Sunan Giri",
      "en": "UMKM stalls along Jl. Pahlawan, near the Sunan Giri approach road"
    },
    "destinationId": "sunan-giri",
    "verification": {
      "status": "unverified",
      "note": {
        "id": "Deskripsi, harga, dan lokasi penjual berasal dari proyek awal dan belum diverifikasi dengan sumber; konfirmasi langsung ke penjual.",
        "en": "Description, prices and seller locations come from the original project and have not been verified with a source; confirm with the seller."
      }
    }
  },
  {
    "id": "songkok",
    "name": "Songkok Gresik",
    "region": "Jawa Timur",
    "regency": "Gresik",
    "regionKey": "east-java",
    "tagline": {
      "id": "Peci hitam dari kain laken, dijahit tangan dan dipakai di seluruh nusantara",
      "en": "Hand-stitched black felt caps worn across the archipelago"
    },
    "cover": null,
    "coverSuggested": "assets/images/products/songkok.jpg",
    "price": {
      "id": "Rp 50.000 – Rp 250.000 tergantung kain",
      "en": "Rp 50,000 – Rp 250,000 depending on fabric"
    },
    "history": {
      "id": "Gresik adalah salah satu sentra produksi songkok di Indonesia, peci hitam yang dipakai di seluruh negeri untuk salat dan acara resmi. Beberapa kampung di sini telah mengkhususkan diri membuat songkok selama beberapa generasi.",
      "en": "Gresik is one of Indonesia's main production centres for the songkok, the black cap worn nationwide for prayer and formal occasions. Several kampung here have specialised in songkok-making for multiple generations."
    },
    "process": {
      "id": "Lapisan kain laken dan kain lain dipotong, dibentuk pada cetakan kayu, lalu dijahit tangan di sepanjang tepi; satu songkok berkualitas tinggi dapat memakan hampir sehari penuh bagi pengrajin yang terampil.",
      "en": "Layers of felt and fabric are cut, shaped over a wooden mould, then stitched by hand along the rim — a single high-quality cap can take a skilled maker most of a day to complete."
    },
    "nearbyShop": {
      "id": "Bengkel kecil di kampung di belakang Makam Sunan Giri",
      "en": "Small workshops in the kampung behind Makam Sunan Giri"
    },
    "destinationId": "sunan-giri",
    "verification": {
      "status": "unverified",
      "note": {
        "id": "Deskripsi, harga, dan lokasi penjual berasal dari proyek awal dan belum diverifikasi dengan sumber; konfirmasi langsung ke penjual.",
        "en": "Description, prices and seller locations come from the original project and have not been verified with a source; confirm with the seller."
      }
    }
  },
  {
    "id": "batik",
    "name": "Batik Gresik",
    "region": "Jawa Timur",
    "regency": "Gresik",
    "regionKey": "east-java",
    "tagline": {
      "id": "Motif batik pesisir yang terinspirasi kehidupan pelabuhan masa perdagangan",
      "en": "Coastal batik motifs inspired by trade-era harbour life"
    },
    "cover": "assets/Document/Batik Gresik.png",
    "coverSuggested": "assets/images/products/batik-gresik.jpg",
    "price": {
      "id": "Rp 150.000 – Rp 800.000 per kain",
      "en": "Rp 150,000 – Rp 800,000 per cloth"
    },
    "history": {
      "id": "Berbeda dengan batik keraton Jawa pedalaman, batik pesisir Gresik menyukai warna yang lebih berani dan motif dari kapal, ombak, dan barang dagangan, sebagai catatan visual identitas pelabuhan kota ini.",
      "en": "Unlike the courtly batik of inland Java, Gresik's coastal batik favours bolder colour and motifs drawn from ships, waves, and trade goods — a visual record of the town's harbour identity."
    },
    "process": {
      "id": "Malam dioleskan dengan canting mengikuti motif tradisional, lalu kain dicelup bertahap; setiap warna memerlukan siklus malam-dan-celup sendiri sebelum pencucian akhir melarutkan malam dan memunculkan pola.",
      "en": "Wax is applied by hand with a canting pen following traditional motifs, then the cloth is dyed in stages, with each colour requiring its own wax-and-dye cycle before the final wash removes the wax to reveal the pattern."
    },
    "nearbyShop": {
      "id": "Rumah batik di sekitar Kampung Kemasan dan Bandar Grissee",
      "en": "Batik houses around Kampung Kemasan and Bandar Grissee"
    },
    "destinationId": "kampung-kemasan",
    "verification": {
      "status": "unverified",
      "note": {
        "id": "Deskripsi, harga, dan lokasi penjual berasal dari proyek awal dan belum diverifikasi dengan sumber; konfirmasi langsung ke penjual.",
        "en": "Description, prices and seller locations come from the original project and have not been verified with a source; confirm with the seller."
      }
    }
  }
];

const reportSouvenirs = [
  ['bandeng-asap-presto', 'Bandeng asap dan bandeng presto', 'Gresik', 'malik-ibrahim'], ['kue-jubung', 'Kue jubung', 'Gresik', 'malik-ibrahim'], ['jenang-ayas', 'Jenang ayas', 'Gresik', 'malik-ibrahim'],
  ['dodol-jenang-ampel', 'Dodol dan jenang', 'Surabaya', 'sunan-ampel'], ['cokelat-arab', 'Cokelat khas Arab', 'Surabaya', 'sunan-ampel'], ['kacang-kismis', 'Kacang-kacangan dan kismis', 'Surabaya', 'sunan-ampel'], ['kurma-ampel', 'Kurma', 'Surabaya', 'sunan-ampel'], ['tasbih-sajadah', 'Tasbih dan sajadah', 'Surabaya', 'sunan-ampel'], ['perlengkapan-ibadah', 'Perlengkapan ibadah', 'Surabaya', 'sunan-ampel'],
  ['brownies-chips-pudak', 'Brownies chips berbahan pudak', 'Gresik', 'sunan-giri'],
  ['batik-gedog', 'Batik gedog', 'Tuban', 'sunan-bonang'], ['tasbih-tuban', 'Tasbih', 'Tuban', 'sunan-bonang'], ['kopiah-tuban', 'Kopiah', 'Tuban', 'sunan-bonang'], ['gamis', 'Baju gamis', 'Tuban', 'sunan-bonang'], ['makanan-kios-tuban', 'Makanan khas kios sekitar makam', 'Tuban', 'sunan-bonang'],
  ['wingko-babat', 'Wingko babat', 'Lamongan', 'sunan-drajat'], ['crispy-ikan-sunduk', 'Crispy ikan sunduk', 'Lamongan', 'sunan-drajat'], ['jenang-lamongan', 'Jenang', 'Lamongan', 'sunan-drajat'],
]
const reportProduct = ([id, name, regency, destinationId]) => ({
  id, name, region: 'Jawa Timur', regency, regionKey: 'east-java', destinationId,
  tagline: { id: `Oleh-oleh ${regency} yang disebut dalam laporan wisata religi.`, en: `${regency} souvenir listed in the religious tourism report.` },
  cover: id === 'wingko-babat' ? '/assets/culinary/lamongan/wingko-babat-illustration.jpeg' : null,
  price: { id: 'Harga bervariasi', en: 'Prices vary' },
  history: { id: 'Laporan mencantumkan produk ini sebagai oleh-oleh daerah. Informasi rinci sedang dilengkapi.', en: 'The report lists this item as a regional souvenir. More detail is being completed.' },
  process: { id: 'Informasi sedang dilengkapi.', en: 'Information is being completed.' },
  nearbyShop: { id: 'Nama dan alamat penjual tidak tersedia. Tanyakan langsung di lokasi.', en: 'Seller names and addresses are not available. Ask locally.' },
  source: 'Laporan_Wisata_Religi_Lima_Sunan.docx', illustration: id === 'wingko-babat',
})
PRODUCTS.push(...reportSouvenirs.filter(([id]) => !PRODUCTS.some((item) => item.id === id)).map(reportProduct))
const pudakProduct = PRODUCTS.find((item) => item.id === 'pudak-product')
if (pudakProduct) { pudakProduct.cover = '/assets/culinary/gresik/pudak-illustration.jpeg'; pudakProduct.price = { id: 'Harga bervariasi', en: 'Prices vary' }; pudakProduct.source = 'Laporan_Wisata_Religi_Lima_Sunan.docx'; pudakProduct.illustration = true }
const songkokProduct = PRODUCTS.find((item) => item.id === 'songkok')
if (songkokProduct) songkokProduct.price = { id: 'Harga bervariasi', en: 'Prices vary' }
const batikProduct = PRODUCTS.find((item) => item.id === 'batik')
if (batikProduct) { batikProduct.cover = '/assets/heritage/batik-gresik.jpg'; batikProduct.price = { id: 'Harga bervariasi', en: 'Prices vary' } }
const songkokLinks = PRODUCTS.find((item) => item.id === 'songkok')
if (songkokLinks) { songkokLinks.destinationId = 'malik-ibrahim'; songkokLinks.destinationIds = ['malik-ibrahim', 'sunan-giri']; songkokLinks.source = 'Laporan_Wisata_Religi_Lima_Sunan.docx' }
for (const place of DESTINATIONS) {
  const foodIds = CULINARY.filter((item) => (item.destinationIds || (item.destinationId ? [item.destinationId] : [])).includes(place.id)).map((item) => item.id)
  const productIds = PRODUCTS.filter((item) => (item.destinationIds || (item.destinationId ? [item.destinationId] : [])).includes(place.id)).map((item) => item.id)
  place.nearbyCulinary = [...new Set([...(place.nearbyCulinary || []), ...foodIds])]
  place.nearbyProducts = [...new Set([...(place.nearbyProducts || []), ...productIds])]
}

/** Self-guided journeys. Checkpoints = destinationIds in travel order. Journeys are NOT paid packages. */
export const JOURNEYS = [
  {
    "id": "walisongo-east-java",
    "kind": "walisongo",
    "order": 1,
    "icon": "map",
    "name": {
      "id": "Wali Songo Jawa Timur",
      "en": "East Java Wali Songo Journey"
    },
    "tagline": {
      "id": "Dari Ampel hingga Tuban, menyusuri pesisir utara Jawa Timur",
      "en": "From Ampel to Tuban along East Java's northern coast"
    },
    "description": {
      "id": "Lima situs yang berkaitan dengan Maulana Malik Ibrahim, Sunan Ampel, Sunan Giri, Sunan Drajat, dan Sunan Bonang di Surabaya, Gresik, Lamongan, dan Tuban. Urutan mengikuti arah geografis dari Surabaya ke barat sepanjang pesisir; pengelompokan wilayah hanya untuk memudahkan navigasi, bukan struktur historis Wali Songo.",
      "en": "Five sites associated with Maulana Malik Ibrahim, Sunan Ampel, Sunan Giri, Sunan Drajat and Sunan Bonang in Surabaya, Gresik, Lamongan and Tuban. The order follows geography westward along the coast from Surabaya; the regional grouping is for navigation only, not a historical structure of the Wali Songo."
    },
    "regions": [
      "Surabaya",
      "Gresik",
      "Lamongan",
      "Tuban"
    ],
    "provinces": [
      "Jawa Timur"
    ],
    "destinationIds": [
      "sunan-ampel",
      "malik-ibrahim",
      "sunan-giri",
      "sunan-drajat",
      "sunan-bonang"
    ],
    "bookingAvailable": false,
    "cover": null,
    "durationNote": {
      "id": "Estimasi waktu belum tersedia (bergantung moda transportasi dan jumlah kunjungan).",
      "en": "No time estimate available (depends on transport and number of visits)."
    },
    "routeStatus": "self-guided",
    "theme": {
      "id": "Ziarah dan sejarah pesisir utara Jawa Timur",
      "en": "East Java northern-coast pilgrimage and history"
    },
    "goal": {
      "id": "Mengenal lima situs Wali Songo di Surabaya, Gresik, Lamongan, dan Tuban, sambil melihat peran kota-kota pesisir dalam sejarah penyebaran Islam di Jawa.",
      "en": "Get to know five Wali Songo sites in Surabaya, Gresik, Lamongan and Tuban, and see the role of coastal towns in the history of Islam in Java."
    }
  },
  {
    "id": "walisongo-central-java",
    "kind": "walisongo",
    "order": 2,
    "icon": "landmark",
    "name": {
      "id": "Wali Songo Jawa Tengah",
      "en": "Central Java Wali Songo Journey"
    },
    "tagline": {
      "id": "Kudus, Muria, dan Demak",
      "en": "Kudus, Muria and Demak"
    },
    "description": {
      "id": "Tiga situs yang berkaitan dengan Sunan Kudus, Sunan Muria, dan Sunan Kalijaga di Kudus, kawasan Gunung Muria, dan Kadilangu, Demak.",
      "en": "Three sites associated with Sunan Kudus, Sunan Muria and Sunan Kalijaga in Kudus, the Mount Muria area, and Kadilangu in Demak."
    },
    "regions": [
      "Kudus",
      "Gunung Muria",
      "Demak"
    ],
    "provinces": [
      "Jawa Tengah"
    ],
    "destinationIds": [
      "sunan-kudus",
      "sunan-muria",
      "sunan-kalijaga"
    ],
    "bookingAvailable": false,
    "cover": null,
    "durationNote": {
      "id": "Estimasi waktu belum tersedia (bergantung moda transportasi dan jumlah kunjungan).",
      "en": "No time estimate available (depends on transport and number of visits)."
    },
    "routeStatus": "self-guided",
    "theme": {
      "id": "Kudus, Muria, dan Demak: tiga situs di Jawa Tengah",
      "en": "Kudus, Muria and Demak: three sites in Central Java"
    },
    "goal": {
      "id": "Mengenal situs yang berkaitan dengan Sunan Kudus, Sunan Muria, dan Sunan Kalijaga, termasuk Menara Kudus sebagai unsur arsitektur yang menonjol.",
      "en": "Get to know the sites associated with Sunan Kudus, Sunan Muria and Sunan Kalijaga, including the Kudus Tower as a notable architectural element."
    }
  },
  {
    "id": "walisongo-west-java",
    "kind": "walisongo",
    "order": 3,
    "icon": "castle",
    "name": {
      "id": "Wali Songo Jawa Barat",
      "en": "West Java Wali Songo Journey"
    },
    "tagline": {
      "id": "Cirebon dan Gunung Jati",
      "en": "Cirebon and Gunung Jati"
    },
    "description": {
      "id": "Satu checkpoint di Cirebon yang berkaitan dengan Sunan Gunung Jati (Syarif Hidayatullah).",
      "en": "A single checkpoint in Cirebon associated with Sunan Gunung Jati (Syarif Hidayatullah)."
    },
    "regions": [
      "Cirebon"
    ],
    "provinces": [
      "Jawa Barat"
    ],
    "destinationIds": [
      "sunan-gunung-jati"
    ],
    "bookingAvailable": false,
    "cover": null,
    "durationNote": {
      "id": "Estimasi waktu belum tersedia (bergantung moda transportasi dan jumlah kunjungan).",
      "en": "No time estimate available (depends on transport and number of visits)."
    },
    "routeStatus": "self-guided",
    "theme": {
      "id": "Pengenalan Cirebon dan Sunan Gunung Jati",
      "en": "Introduction to Cirebon and Sunan Gunung Jati"
    },
    "goal": {
      "id": "Mengenal satu situs Wali Songo di Jawa Barat. Rute ini hanya satu checkpoint dan dapat digabung dengan rute lain lewat Flexible Journey.",
      "en": "Get to know the one Wali Songo site in West Java. This route has a single checkpoint and can be combined with others through Flexible Journey."
    }
  },
  {
    "id": "walisongo-complete",
    "kind": "walisongo",
    "order": 4,
    "icon": "compass",
    "name": {
      "id": "Perjalanan Lengkap Wali Songo",
      "en": "Complete Wali Songo Journey"
    },
    "tagline": {
      "id": "Sembilan situs, ditempuh bertahap",
      "en": "Nine sites, travelled in stages"
    },
    "description": {
      "id": "Perjalanan lintas Jawa Timur, Jawa Tengah, dan Jawa Barat yang mencakup sembilan tokoh. Bukan rencana satu hari: perjalanan ini dirancang bertahap dan multi-kunjungan, dan progres tersimpan di perangkat Anda sehingga dapat dilanjutkan kapan saja.",
      "en": "A journey across East, Central and West Java covering all nine figures. It is not a one-day plan: it is designed for staged, multi-visit travel, and progress is saved on your device so you can continue at any time."
    },
    "regions": [
      "Jawa Timur",
      "Jawa Tengah",
      "Jawa Barat"
    ],
    "provinces": [
      "Jawa Timur",
      "Jawa Tengah",
      "Jawa Barat"
    ],
    "destinationIds": [
      "sunan-ampel",
      "malik-ibrahim",
      "sunan-giri",
      "sunan-drajat",
      "sunan-bonang",
      "sunan-kudus",
      "sunan-muria",
      "sunan-kalijaga",
      "sunan-gunung-jati"
    ],
    "bookingAvailable": false,
    "cover": null,
    "durationNote": {
      "id": "Estimasi waktu belum tersedia (bergantung moda transportasi dan jumlah kunjungan).",
      "en": "No time estimate available (depends on transport and number of visits)."
    },
    "routeStatus": "self-guided",
    "theme": {
      "id": "Sembilan situs Wali Songo lintas tiga provinsi, ditempuh bertahap",
      "en": "Nine Wali Songo sites across three provinces, visited in stages"
    },
    "goal": {
      "id": "Menyusun gambaran utuh sembilan tokoh dan situs, dengan progres yang dapat dilanjutkan kapan saja di perangkat Anda.",
      "en": "Build a complete picture of nine figures and sites, with progress you can resume at any time on your device."
    }
  },
  {
    "id": "gresik-heritage",
    "kind": "gresik",
    "order": 5,
    "icon": "anchor",
    "name": {
      "id": "Gresik Heritage Journey",
      "en": "Gresik Heritage Journey"
    },
    "tagline": {
      "id": "Warisan religi dan pelabuhan Gresik (pilot project)",
      "en": "Gresik's religious and harbour heritage (pilot project)"
    },
    "description": {
      "id": "Perjalanan empat checkpoint asli EcoReligi di Gresik: Makam Sunan Giri, Makam Maulana Malik Ibrahim, Bandar Grissee, dan Kampung Kemasan. Progres lama Anda tetap dikenali.",
      "en": "The original four-checkpoint EcoReligi route in Gresik: Makam Sunan Giri, Makam Maulana Malik Ibrahim, Bandar Grissee and Kampung Kemasan. Your earlier progress is still recognised."
    },
    "regions": [
      "Gresik"
    ],
    "provinces": [
      "Jawa Timur"
    ],
    "destinationIds": [
      "sunan-giri",
      "malik-ibrahim",
      "bandar-grissee",
      "kampung-kemasan"
    ],
    "bookingAvailable": false,
    "cover": null,
    "durationNote": {
      "id": "Estimasi waktu belum tersedia (bergantung moda transportasi dan jumlah kunjungan).",
      "en": "No time estimate available (depends on transport and number of visits)."
    },
    "routeStatus": "self-guided",
    "theme": {
      "id": "Pilot ekosistem wisata lokal Gresik: dua makam dan dua kawasan heritage",
      "en": "Gresik local-tourism pilot: two tombs and two heritage areas"
    },
    "goal": {
      "id": "Menghubungkan situs religi dengan kawasan heritage Bandar Grissee dan Kampung Kemasan, sebagai wilayah pilot informasi kuliner dan produk lokal.",
      "en": "Connect religious sites with the Bandar Grissee and Kampung Kemasan heritage areas, as the pilot area for local culinary and product information."
    }
  }
];

/**
 * Trip-preparation notes shown on every Guided Journey page. Deliberately generic and non-numeric:
 * EcoReligi has NO verified opening hours, fees, parking or transport data, so none is shown.
 * Site-specific etiquette lives in each destination's visit.etiquette.
 */
export const JOURNEY_PREP = [
  { icon: "shirt", title: { id: "Berpakaian sopan", en: "Dress modestly" },
    text: { id: "Banyak situs adalah makam dan masjid yang aktif dipakai berdoa. Berpakaian sopan dan menutup aurat, serta ikuti arahan pengelola atau juru kunci.", en: "Many sites are tombs and mosques in active use for prayer. Dress modestly and follow the guidance of the management or caretaker." } },
  { icon: "clock", title: { id: "Periksa jam dan aturan kunjungan", en: "Check hours and visiting rules" },
    text: { id: "EcoReligi belum memiliki data jam buka, biaya, atau aturan kunjungan yang terverifikasi. Tanyakan ke pengelola setempat atau dinas pariwisata daerah sebelum berangkat.", en: "EcoReligi has no verified opening hours, fees or visiting rules yet. Ask the local management or the regional tourism office before you go." } },
  { icon: "map-pin", title: { id: "Lokasi di peta masih perkiraan", en: "Map locations are approximate" },
    text: { id: "Koordinat titik makam atau pintu masuk belum diverifikasi, sehingga jarak dan waktu tempuh tidak dihitung. Gunakan nama destinasi di aplikasi peta pilihan Anda untuk navigasi.", en: "Coordinates for tombs and entrances are not verified, so distance and travel time are not calculated. Search the destination name in your preferred map app to navigate." } },
  { icon: "smartphone", title: { id: "Progres tersimpan di perangkat ini", en: "Progress is saved on this device" },
    text: { id: "Progres dan stempel disimpan di browser perangkat ini saja, tidak disinkronkan ke perangkat lain. Check-in bersifat manual dan bukan bukti kunjungan terverifikasi.", en: "Progress and stamps are saved in this browser only and are not synced to other devices. Check-ins are manual and are not verified proof of a visit." } },
];

/** Landing-page categories (links to journeys / culinary / products). */
export const JOURNEY_CATEGORIES = [
  {
    "id": "religious",
    "icon": "moon-star",
    "title": {
      "id": "Jejak Wali Songo",
      "en": "Wali Songo Trails"
    },
    "link": "journeys",
    "description": {
      "id": "Empat perjalanan mandiri: Jawa Timur, Jawa Tengah, Jawa Barat, dan perjalanan lengkap sembilan wali.",
      "en": "Four self-guided journeys: East, Central and West Java, plus the complete nine-figure route."
    }
  },
  {
    "id": "heritage",
    "icon": "landmark",
    "title": {
      "id": "Gresik Heritage",
      "en": "Gresik Heritage"
    },
    "link": "gresik-heritage",
    "description": {
      "id": "Warisan religi dan pelabuhan Gresik, titik awal dan pilot project EcoReligi.",
      "en": "Gresik's religious and harbour heritage, EcoReligi's starting point and pilot project."
    }
  },
  {
    "id": "culinary",
    "icon": "utensils",
    "title": {
      "id": "Kuliner Gresik",
      "en": "Gresik Culinary"
    },
    "link": "culinary.html",
    "description": {
      "id": "Hidangan Gresik yang membentuk pengalaman wisata religi.",
      "en": "Gresik dishes that accompany the pilgrimage experience."
    }
  },
  {
    "id": "products",
    "icon": "shopping-bag",
    "title": {
      "id": "Produk Lokal Gresik",
      "en": "Gresik Local Products"
    },
    "link": "products.html",
    "description": {
      "id": "Produk UMKM Gresik sebagai oleh-oleh dan karya pengrajin lokal.",
      "en": "Gresik UMKM products and local crafts."
    }
  }
];

/** Timeline of the spread of Islam in Java. yearType: fact | academic | approximate | tradition. */
export const TIMELINE = [
  {
    "year": "475 H / 1082 M (tertulis pada nisan; pembacaan masih dikaji)",
    "yearType": "estimate",
    "icon": "scroll-text",
    "title": {
      "id": "Nisan Fatimah binti Maimun di Leran",
      "en": "The Fatimah binti Maimun gravestone at Leran"
    },
    "text": {
      "id": "Di Leran, beberapa kilometer dari Gresik, ditemukan nisan beraksara Arab yang mencatat wafatnya seorang perempuan, 'Bint Maymun bin Hibat Allah', bertahun 475 H (1082 M). Nisan ini lazim dipandang sebagai prasasti Islam tertua di Indonesia dan sering dipakai sebagai bukti kehadiran Muslim di pesisir Jawa pada abad ke-11. Pembacaan dan asal-usul nisan ini masih menjadi bahan kajian ulang para sarjana, sehingga tahun tersebut sebaiknya dibaca sebagai 'tertulis pada nisan', bukan bukti penyebaran Islam secara luas.",
      "en": "At Leran, a few kilometres from Gresik, an Arabic-script gravestone records the death of a woman, 'Bint Maymun bin Hibat Allah', in 475 AH (1082 CE). It is commonly regarded as the oldest Islamic inscription in Indonesia and is often cited as evidence of a Muslim presence on Java's north coast in the 11th century. Its reading and origin remain subjects of scholarly re-examination, so the date should be read as 'written on the stone', not as proof of widespread conversion."
    },
    "region": "Jawa Timur",
    "destinationId": null,
    "source": "https://journal2.uinjkt.ac.id/index.php/studia-islamika/article/view/570",
    "sources": [
      {
        "title": "https://journal2.uinjkt.ac.id/index.php/studia-islamika/article/view/570",
        "publisher": "",
        "url": "https://journal2.uinjkt.ac.id/index.php/studia-islamika/article/view/570",
        "supports": "Sumber asli entri (dari tahap 1).",
        "tier": "academic",
        "support": "partial",
        "quote": null,
        "checkedByResearcher": false
      }
    ],
    "verification": "needs_verification",
    "classification": "academic_interpretation",
    "sourceNote": {
      "id": "Sumber ini dari tahap 1 dan belum diperiksa ulang pada tahap 2.",
      "en": "This source is from stage 1 and was not re-checked in stage 2."
    }
  },
  {
    "year": "Abad ke-14 hingga ke-16 (periode yang lazim dikaitkan dengan para wali)",
    "yearType": "approximate",
    "icon": "book-open",
    "title": {
      "id": "Walisongo: sebutan belakangan, bukan satu angkatan",
      "en": "Wali Songo: a later label, not one generation"
    },
    "text": {
      "id": "Para wali umumnya ditempatkan pada abad ke-14 sampai ke-16 dengan kronologi yang berbeda-beda, sehingga belum tentu kesembilannya hidup pada masa yang sama. Daftar sembilan tokoh berbeda antar sumber: Babad Tanah Jawi tidak memuat satu daftar baku (artikel Sabda, Undip), dan Atlas Wali Songo menurut NU Online tidak memasukkan Maulana Malik Ibrahim. Gagasan bahwa 'Wali Sanga' adalah sebutan yang dibuat belakangan oleh sejarawan hanya disebut rujukan awal non-akademik dan belum diverifikasi.",
      "en": "The walis are generally placed between the 14th and 16th centuries with differing chronologies, so all nine were not necessarily alive together. The list of nine differs between sources: the Babad Tanah Jawi gives no single fixed list (Sabda article, Undip), and Sunyoto's Atlas Wali Songo, per NU Online, leaves out Maulana Malik Ibrahim. The idea that 'Wali Sanga' is a label coined later by historians is only mentioned by an early non-academic reference and is unverified."
    },
    "region": "Jawa",
    "destinationId": null,
    "source": "https://ejournal.undip.ac.id/index.php/sabda/article/download/36392/18785",
    "classification": "academic_interpretation",
    "sources": [
      {
        "title": "[judul belum tercatat] Sabda journal article on Walisongo in Babad Tanah Jawi",
        "publisher": "Sabda, Universitas Diponegoro",
        "url": "https://ejournal.undip.ac.id/index.php/sabda/article/download/36392/18785",
        "supports": "Daftar Walisanga tidak baku pada Babad Tanah Jawi; topik historiografi.",
        "tier": "academic",
        "support": "partial",
        "quote": "Walisanga bukan tokoh utama dalam Babad Tanah Jawi",
        "checkedByResearcher": true,
        "needsVerification": true,
        "supportsEn": "No fixed Walisanga list in the Babad Tanah Jawi; historiography topic."
      },
      {
        "title": "The Wali-Songo and (Western) Historiography: A Critical Review of a Methodological Achievement",
        "publisher": "Jurnal Antarabangsa Tamadun (JAT?), Universiti Malaya",
        "url": "https://adab.um.edu.my/index.php/JAT/article/view/43986",
        "supports": "Daftar Walisanga tidak baku pada Babad Tanah Jawi; topik historiografi.",
        "tier": "academic",
        "support": "partial",
        "quote": "Western academics, particularly Dutch philologists, have been leading the way in modern research",
        "checkedByResearcher": true,
        "supportsEn": "No fixed Walisanga list in the Babad Tanah Jawi; historiography topic."
      }
    ],
    "verification": "partial",
    "sourceNote": {
      "id": "Sumber yang dibaca belum langsung menyatakan kapan istilah 'Wali Sanga' mulai dipakai.",
      "en": "The sources read do not directly state when the term 'Wali Sanga' came into use."
    }
  },
  {
    "year": "1298 Saka (1378 M menurut sumber pameran)",
    "yearType": "approximate",
    "icon": "landmark",
    "title": {
      "id": "Nisan Islam era Majapahit di Troloyo, Trowulan",
      "en": "Majapahit-era Islamic gravestones at Troloyo, Trowulan"
    },
    "text": {
      "id": "Di kompleks makam Troloyo, kawasan Trowulan (bekas ibu kota Majapahit), terdapat nisan bertuliskan tahun 1298 Saka yang dalam sebuah pameran Kemendikbud disetarakan dengan 1378 M. Para peneliti membaca makam-makam ini sebagai petunjuk bahwa sebagian kalangan di lingkungan Majapahit telah memeluk Islam, dengan hiasan dan bentuk yang masih menyimpan unsur pra-Islam. Konversi tahun Saka ke Masehi sebaiknya dicek ulang pada sumber epigrafi.",
      "en": "At the Troloyo burial ground in the Trowulan area (the former Majapahit capital), a gravestone bears the year 1298 Saka, which a Ministry of Education and Culture exhibit equates with 1378 CE. Researchers read these graves as a sign that some people within the Majapahit milieu had embraced Islam, with decoration and forms that retain pre-Islamic elements. The Saka-to-CE conversion should be double-checked against epigraphic sources."
    },
    "region": "Jawa Timur",
    "destinationId": null,
    "source": "https://nu.or.id/nasional/stand-kemendikbud-pamerkan-peninggalan-islam-majapahit-0EKBO",
    "sources": [
      {
        "title": "https://nu.or.id/nasional/stand-kemendikbud-pamerkan-peninggalan-islam-majapahit-0EKBO",
        "publisher": "",
        "url": "https://nu.or.id/nasional/stand-kemendikbud-pamerkan-peninggalan-islam-majapahit-0EKBO",
        "supports": "Sumber asli entri (dari tahap 1).",
        "tier": "media",
        "support": "partial",
        "quote": null,
        "checkedByResearcher": false
      }
    ],
    "verification": "needs_verification",
    "classification": "academic_interpretation",
    "sourceNote": {
      "id": "Sumber ini dari tahap 1 dan belum diperiksa ulang pada tahap 2.",
      "en": "This source is from stage 1 and was not re-checked in stage 2."
    }
  },
  {
    "year": "822 H / 1419 M (tertulis pada nisan; bulan dibaca berbeda)",
    "yearType": "approximate",
    "icon": "map-pin",
    "title": {
      "id": "Nisan Maulana Malik Ibrahim di Gresik",
      "en": "The Maulana Malik Ibrahim gravestone in Gresik"
    },
    "text": {
      "id": "Penanda batu bertulisan Arab di dekat makam Maulana Malik Ibrahim di Gapurosukolilo, Gresik, mencatat wafat pada tahun 822 H (1419 M). Bulan pada inskripsi dibaca berbeda (Rabiulawal oleh Van Ronkel dan Juynboll, Rabiulakhir oleh Moquette), sehingga tanggal harian tidak pasti. Moquette juga menilai batu itu didatangkan dari Cambay, Gujarat. Asal-usul tokohnya diperdebatkan (antara lain Kashan dan Samarkand), dan bagian itu belum ditopang sumber akademik yang kami baca.",
      "en": "A stone marker with an Arabic inscription near Maulana Malik Ibrahim's grave at Gapurosukolilo, Gresik, records death in the year 822 AH (1419 CE). The month on the inscription is read differently (Rabi' al-Awwal by Van Ronkel and Juynboll, Rabi' al-Akhir by Moquette), so the exact day is uncertain. Moquette also judged the stones to be imported from Cambay, Gujarat. The figure's origin is debated (including Kashan and Samarkand), and that part is not supported by the academic sources we read."
    },
    "region": "Jawa Timur",
    "destinationId": "malik-ibrahim",
    "source": "https://ejournal.brin.go.id/berkalaarkeologi/article/download/5122/3756/14985",
    "classification": "academic_interpretation",
    "sources": [
      {
        "title": "[judul belum tercatat] Berkala Arkeologi article by Muhammad Chawari on Gresik tombstones",
        "publisher": "Muhammad Chawari, Berkala Arkeologi (BRIN ejournal)",
        "url": "https://ejournal.brin.go.id/berkalaarkeologi/article/download/5122/3756/14985",
        "supports": "Tahun 822 H / 1419 M dan perbedaan pembacaan bulan.",
        "tier": "academic",
        "support": "differs",
        "quote": "Tetapi keduanya disangkal oleh Moquette yang membacanya dengan Rabi'al Akhir.",
        "checkedByResearcher": true,
        "needsVerification": true,
        "supportsEn": "Year 822 AH / 1419 CE and the differing month readings."
      }
    ],
    "verification": "partial",
    "sourceNote": {
      "id": "Klaim 'nisan Islam tertua kedua di Jawa' dari rujukan awal dihapus karena belum didukung sumber.",
      "en": "The 'second-oldest Islamic gravestone in Java' claim from an early reference was removed because no source supports it."
    }
  },
  {
    "year": "Abad ke-15 (puncak kejayaan)",
    "yearType": "approximate",
    "icon": "anchor",
    "title": {
      "id": "Gresik sebagai kota pelabuhan dagang",
      "en": "Gresik as a trading port city"
    },
    "text": {
      "id": "Gresik dikenal sebagai kota pelabuhan perdagangan besar yang mencapai puncaknya pada abad ke-15. Pedagang perantara di kawasan ini, menurut penelusuran sejarah lokal, banyak yang Tionghoa atau Arab. Kawasan Kota Lama kini dikenal sebagai Bandar Grissee dan disebut dalam liputan media sebagai bekas pelabuhan serta pusat perdagangan.",
      "en": "Gresik was a major trading port whose peak is placed in the 15th century. Local historical accounts note that many intermediary traders there were Chinese or Arab. The Old Town area, now known as Bandar Grissee, is described in media coverage as a former port and trading hub."
    },
    "region": "Jawa Timur",
    "destinationId": "bandar-grissee",
    "source": "https://mojok.co/liputan/kampung-kemasan-potret-kejayaan-perdagangan-gresik-di-masa-silam/",
    "sources": [
      {
        "title": "https://mojok.co/liputan/kampung-kemasan-potret-kejayaan-perdagangan-gresik-di-masa-silam/",
        "publisher": "",
        "url": "https://mojok.co/liputan/kampung-kemasan-potret-kejayaan-perdagangan-gresik-di-masa-silam/",
        "supports": "Sumber asli entri (dari tahap 1).",
        "tier": "media",
        "support": "partial",
        "quote": null,
        "checkedByResearcher": false
      }
    ],
    "verification": "needs_verification",
    "classification": "academic_interpretation",
    "sourceNote": {
      "id": "Sumber ini dari tahap 1 dan belum diperiksa ulang pada tahap 2.",
      "en": "This source is from stage 1 and was not re-checked in stage 2."
    }
  },
  {
    "year": "1478 hingga 1481 (penanggalan berbeda antar sumber)",
    "yearType": "approximate",
    "icon": "crown",
    "title": {
      "id": "Demak berdiri sebagai kesultanan Islam",
      "en": "Demak emerges as an Islamic sultanate"
    },
    "text": {
      "id": "Raden Fatah/Patah mendirikan Kesultanan Demak pada 1478 menurut artikel Tamaddun (UIN Raden Fatah); artikel yang sama menyebut Masjid Agung diresmikan 1479 dan kemerdekaan dari Majapahit pada 1500, sehingga penanggalan bervariasi. Tahun 1481 (candrasengkala) hanya berasal dari rujukan awal non-akademik. Rincian lain dari rujukan awal itu belum terverifikasi: Masjid Agung sebagai masjid tertua yang masih berdiri, penaklukan Tuban sekitar 1527, dan utusan Fatahillah ke Banten dan Sunda Kelapa.",
      "en": "Raden Fatah/Patah founded the Demak Sultanate in 1478 according to a Tamaddun article (UIN Raden Fatah); the same article says the Great Mosque was inaugurated in 1479 and independence from Majapahit came in 1500, so dating varies. The year 1481 (a chronogram) comes only from an early non-academic reference. Other details from that reference are unverified: the Great Mosque as the oldest surviving mosque, the conquest of Tuban around 1527, and Fatahillah's mission to Banten and Sunda Kelapa."
    },
    "region": "Jawa Tengah",
    "destinationId": "sunan-kalijaga",
    "source": "https://jurnal.radenfatah.ac.id/index.php/tamaddun/article/download/3401/2267",
    "classification": "academic_interpretation",
    "sources": [
      {
        "title": "[judul belum tercatat] article in Tamaddun: Jurnal Kebudayaan dan Sastra Islam on Demak",
        "publisher": "Tamaddun, UIN Raden Fatah Palembang",
        "url": "https://jurnal.radenfatah.ac.id/index.php/tamaddun/article/download/3401/2267",
        "supports": "Pendirian Demak 1478; peresmian masjid 1479.",
        "tier": "academic",
        "support": "partial",
        "quote": "Raden Fatah mendirikan Kesultanan Demak pada tahun 1478.",
        "checkedByResearcher": true,
        "needsVerification": true,
        "supportsEn": "Founding of Demak in 1478; mosque inaugurated 1479."
      }
    ],
    "verification": "partial",
    "sourceNote": {
      "id": "Tahun 1481 dan peristiwa sekitar 1527 belum terverifikasi.",
      "en": "The year 1481 and the events around 1527 are unverified."
    }
  },
  {
    "year": "1479 hingga 1568 (masa pemerintahan Syarif Hidayatullah)",
    "yearType": "approximate",
    "icon": "castle",
    "title": {
      "id": "Cirebon dan Sunan Gunung Jati",
      "en": "Cirebon and Sunan Gunung Jati"
    },
    "text": {
      "id": "Pangeran Cakrabuana membuka lahan Tegal Alang-Alang pada 1445 (Hardhi, 2014), awal permukiman yang kemudian menjadi Cirebon. Syarif Hidayatullah (Sunan Gunung Jati) memimpin Cirebon dari 1479 hingga 1568, sekitar 89 tahun (Wildan, 2025). Kemerdekaan dari Pajajaran dicatat 1482 atau 1483 menurut sumber berbeda, dan satu artikel Sabda (Undip) memberi wafat 1570. Pembagian Kasepuhan dan Kanoman (1677/1679) belum diverifikasi.",
      "en": "Prince Cakrabuana opened the land at Tegal Alang-Alang in 1445 (Hardhi, 2014), the start of the settlement that became Cirebon. Syarif Hidayatullah (Sunan Gunung Jati) led Cirebon from 1479 to 1568, about 89 years (Wildan, 2025). Independence from Pajajaran is dated 1482 or 1483 depending on the source, and a Sabda (Undip) article gives his death as 1570. The split into Kasepuhan and Kanoman (1677/1679) is unverified."
    },
    "region": "Jawa Barat",
    "destinationId": "sunan-gunung-jati",
    "source": "https://ejournal.upi.edu/index.php/historia/article/download/90876/35093",
    "classification": "academic_interpretation",
    "sources": [
      {
        "title": "Peran Sunan Gunung Jati dalam Mengembangkan Pusat Peradaban Islam di Cirebon pada Abad 16",
        "publisher": "Wildan, D., Historia: Jurnal Pendidik dan Peneliti Sejarah 8(2), 195-204 (UPI), 2025",
        "url": "https://ejournal.upi.edu/index.php/historia/article/download/90876/35093",
        "supports": "Cakrabuana 1445; Syarif Hidayatullah memimpin Cirebon 1479-1568.",
        "tier": "academic",
        "support": "partial",
        "quote": "memimpin pemerintahan Cirebon selama kurang lebih 89 tahun, dari 1479 hingga 1568",
        "checkedByResearcher": true,
        "supportsEn": "Cakrabuana 1445; Syarif Hidayatullah leading Cirebon 1479-1568."
      },
      {
        "title": "Dakwah Sunan Gunung Jati dalam Proses Islamisasi di Kesultanan Cirebon Tahun 1479-1568",
        "publisher": "Titan Rohkmutiana Hardhi, Risalah (Universitas Negeri Yogyakarta student journal), 2014",
        "url": "https://journal.student.uny.ac.id/risalah/article/download/4941/4603",
        "supports": "Cakrabuana 1445; Syarif Hidayatullah memimpin Cirebon 1479-1568.",
        "tier": "academic",
        "support": "full",
        "quote": "Pada tanggal 1 Sura tahun 1358 AJ/1445 M, Pangeran Cakrabuana membuka lahan di daerah Tegal Alang-Alang.",
        "checkedByResearcher": true,
        "supportsEn": "Cakrabuana 1445; Syarif Hidayatullah leading Cirebon 1479-1568."
      }
    ],
    "verification": "partial",
    "sourceNote": {
      "id": "1445 adalah pembukaan lahan, bukan pendirian negara secara eksplisit.",
      "en": "1445 is the opening of land, not explicitly the founding of a state."
    }
  },
  {
    "year": "c. 1478 hingga 1487 (penanggalan berbeda antar sumber)",
    "yearType": "approximate",
    "icon": "mountain",
    "title": {
      "id": "Sunan Giri dan Giri Kedaton",
      "en": "Sunan Giri and Giri Kedaton"
    },
    "text": {
      "id": "Dari pesantren di bukit Giri, Gresik, berkembang pusat keagamaan dan politik Giri Kedaton. Sirojuddin (2025, abstrak) menyebut Giri Kedaton didirikan Sunan Giri I pada 1487; Hafizh dan Artono (2021) menyebut pelantikan pada 12 Rabiulawal 894 H / 9 Maret 1487 dan juga memuat angka 1485/1486 (istana) serta sekitar 1470 atau 1478 (awal pusat kekuasaan). Tahun lahir 1442 dan wafat 1506 serta jangkauan pengaruh hingga luar Jawa belum terverifikasi.",
      "en": "From the pesantren on Giri hill in Gresik grew the religious and political centre of Giri Kedaton. Sirojuddin (2025, abstract) says Giri Kedaton was founded by Sunan Giri I in 1487; Hafizh and Artono (2021) give an installation on 12 Rabi' al-Awwal 894 AH / 9 March 1487 and also list 1485/1486 (palace) and about 1470 or 1478 (start of the power centre). The birth year 1442, death 1506 and influence beyond Java are unverified."
    },
    "region": "Jawa Timur",
    "destinationId": "sunan-giri",
    "source": "https://digilib.uinsa.ac.id/id/eprint/82038/",
    "classification": "academic_interpretation",
    "sources": [
      {
        "title": "Masa Kasunanan Giri Kedaton tahun 1487-1605 M: tinjauan sejarah politik (thesis abstract)",
        "publisher": "Ahmad Sirojuddin, UIN Sunan Ampel Surabaya digilib (undergraduate thesis), 2025",
        "url": "https://digilib.uinsa.ac.id/id/eprint/82038/",
        "supports": "Giri Kedaton berdiri 1487; angka lain antar sumber.",
        "tier": "academic",
        "support": "full",
        "quote": "Giri Kedaton didirikan oleh Sunan Giri I pada 1487 M",
        "checkedByResearcher": true,
        "supportsEn": "Giri Kedaton founded 1487; other figures between sources."
      },
      {
        "title": "Perkembangan Kerajaan Giri Kedaton Tahun 1548-1605",
        "publisher": "Abdullah Hafizh and Artono, AVATARA e-Journal Pendidikan Sejarah 9(4), Universitas Negeri Surabaya, 2021",
        "url": "https://ejournal.unesa.ac.id/index.php/avatara/article/view/41852/36003",
        "supports": "Giri Kedaton berdiri 1487; angka lain antar sumber.",
        "tier": "academic",
        "support": "full",
        "quote": "pada 12 Rabiul Awal tahun 894 H/9 Maret 1487 M",
        "checkedByResearcher": true,
        "supportsEn": "Giri Kedaton founded 1487; other figures between sources."
      }
    ],
    "verification": "partial",
    "sourceNote": {
      "id": "Teks lengkap skripsi Sirojuddin tidak dapat dibuka; hanya abstrak.",
      "en": "The full text of Sirojuddin's thesis could not be opened; only the abstract."
    }
  },
  {
    "year": "1525/1526 hingga 1570 (penanggalan berbeda antar sumber)",
    "yearType": "approximate",
    "icon": "ship",
    "title": {
      "id": "Banten: dari penaklukan ke kesultanan",
      "en": "Banten: from conquest to sultanate"
    },
    "text": {
      "id": "Banten dikuasai pasukan gabungan Demak dan Cirebon, 1525 menurut Leihitu (2023). Luktiandi dkk. (2022) menyebut 1526 atas instruksi Syarif Hidayatullah kepada Hasanuddin; Supriatna (2020) memberi Hasanuddin sebagai sultan 1525-1570, sedangkan Wildan (2025) menyebut Banten menjadi kesultanan merdeka pada 1552. Tidak ada sumber yang kami baca menyebut 1527. Pengakhiran kesultanan pada 1813 belum diverifikasi.",
      "en": "Banten was taken by combined Demak and Cirebon forces, 1525 according to Leihitu (2023). Luktiandi et al. (2022) say 1526 on Syarif Hidayatullah's instruction to Hasanuddin; Supriatna (2020) gives Hasanuddin as sultan 1525-1570, while Wildan (2025) says Banten became an independent sultanate in 1552. No source we read gives 1527. The sultanate's end in 1813 is unverified."
    },
    "region": "Banten",
    "destinationId": null,
    "source": "https://core.ac.uk/download/524666656.pdf",
    "classification": "academic_interpretation",
    "sources": [
      {
        "title": "Peranan Sultan Hasanuddin dalam Proses Islamisasi di Kesultanan Banten Tahun 1526-1570",
        "publisher": "Luktiandi, W., Siregar, I., & Ramli, S., KRINOK: Jurnal Pendidikan Sejarah & Sejarah FKIP Universitas Jambi 1(1), 73-84 (core.ac.uk 524666656), 2022",
        "url": "https://core.ac.uk/download/524666656.pdf",
        "supports": "Penguasaan Banten dan masa Hasanuddin; tahun berbeda antar sumber.",
        "tier": "academic",
        "support": "partial",
        "quote": "Pada tahun 1526 atas instruksi ayahnya Syarif Hidayatullah",
        "checkedByResearcher": true,
        "supportsEn": "The takeover of Banten and Hasanuddin's time; years differ between sources."
      },
      {
        "title": "Meninjau Kembali Jejak Peradaban Islam di Kawasan Banten Lama",
        "publisher": "Irsyad Leihitu, Indonesian Journal of Islamic History and Culture 4(1), 1-23 (Ar-Raniry/Univ. Jambi), 2023",
        "url": "https://journal31.ar-raniry.ac.id/IJIHC/article/download/2724/1414",
        "supports": "Penguasaan Banten dan masa Hasanuddin; tahun berbeda antar sumber.",
        "tier": "academic",
        "support": "differs",
        "quote": "Banten Girang dikuasai oleh pasukan gabungan Demak dan Cirebon",
        "checkedByResearcher": true,
        "supportsEn": "The takeover of Banten and Hasanuddin's time; years differ between sources."
      },
      {
        "title": "Banten Sebagai Aquatic City Pada Abad Ke 16-17 Masehi",
        "publisher": "Supriatna, E., Jurnal Candrasangkala 6(1), Untirta, 2020",
        "url": "https://jurnal.untirta.ac.id/index.php/Candrasangkala/article/download/8487/5669",
        "supports": "Penguasaan Banten dan masa Hasanuddin; tahun berbeda antar sumber.",
        "tier": "academic",
        "support": "partial",
        "quote": "Sultan Banten yang baru yaitu Maulana Hasanudin (1525-1570)",
        "checkedByResearcher": true,
        "supportsEn": "The takeover of Banten and Hasanuddin's time; years differ between sources."
      }
    ],
    "verification": "partial",
    "sourceNote": {
      "id": "Beberapa tahun saling berbeda antar sumber.",
      "en": "Several years differ between sources."
    }
  },
  {
    "year": "1548 hingga 1605",
    "yearType": "approximate",
    "icon": "scale",
    "title": {
      "id": "Masa keemasan Giri di bawah Sunan Prapen",
      "en": "Giri's golden age under Sunan Prapen"
    },
    "text": {
      "id": "Hafizh dan Artono (2021) menyebut Giri Kedaton mencapai puncak kemajuan pada masa Sunan Prapen, 1548 sampai 1605; artikel yang sama menyebut kejayaan sampai awal abad ke-17 dan memberi akhir Giri 1680/1681 pada bagian berbeda. Rincian dari rujukan awal non-akademik belum terverifikasi: pelantikan Adiwijaya (Pajang), penengahan 1568 dan 1588.",
      "en": "Hafizh and Artono (2021) say Giri Kedaton reached its peak under Sunan Prapen, 1548 to 1605; the same article says the glory lasted into the early 17th century and gives the end of Giri as 1680/1681 in different passages. Details from an early non-academic reference are unverified: the inauguration of Adiwijaya (Pajang), and the mediations of 1568 and 1588."
    },
    "region": "Jawa Timur",
    "destinationId": "sunan-giri",
    "source": "https://ejournal.unesa.ac.id/index.php/avatara/article/view/41852/36003",
    "classification": "academic_interpretation",
    "sources": [
      {
        "title": "Perkembangan Kerajaan Giri Kedaton Tahun 1548-1605",
        "publisher": "Abdullah Hafizh and Artono, AVATARA e-Journal Pendidikan Sejarah 9(4), Universitas Negeri Surabaya, 2021",
        "url": "https://ejournal.unesa.ac.id/index.php/avatara/article/view/41852/36003",
        "supports": "Puncak Giri Kedaton 1548-1605.",
        "tier": "academic",
        "support": "full",
        "quote": "Kerajaan Giri Kedaton mengalami puncak kemajuan pada masa Sunan Prapen yakni mulai tahun 1548 sampai 1605",
        "checkedByResearcher": true,
        "supportsEn": "Giri Kedaton's peak 1548-1605."
      }
    ],
    "verification": "verified",
    "sourceNote": {
      "id": "Akhir Giri disebut 1680 atau 1681 dalam artikel yang sama.",
      "en": "The end of Giri is given as 1680 or 1681 in the same article."
    }
  },
  {
    "year": "c. 1636",
    "yearType": "approximate",
    "icon": "swords",
    "title": {
      "id": "Mataram menaklukkan Giri",
      "en": "Mataram conquers Giri"
    },
    "text": {
      "id": "Sultan Agung dari Mataram menaklukkan Giri Kedaton sekitar 1636. Pemimpin Giri tetap diizinkan memimpin dengan syarat tunduk kepada Mataram, tetapi gelarnya diturunkan menjadi Panembahan Ageng Giri dan pamor Giri menurun. Kompleks bekas kedaton kini menjadi bagian dari kompleks Makam Sunan Giri.",
      "en": "Sultan Agung of Mataram conquered Giri Kedaton around 1636. Giri's leader was allowed to continue on condition of submitting to Mataram, but his title was lowered to Panembahan Ageng Giri and Giri's prestige declined. The former kedaton site is now part of the Sunan Giri tomb complex."
    },
    "region": "Jawa Timur",
    "destinationId": "sunan-giri",
    "source": "https://www.goodnewsfromindonesia.id/indonesiana/sejarah/sejarah-giri-kedaton-kota-gresik",
    "sources": [
      {
        "title": "https://www.goodnewsfromindonesia.id/indonesiana/sejarah/sejarah-giri-kedaton-kota-gresik",
        "publisher": "",
        "url": "https://www.goodnewsfromindonesia.id/indonesiana/sejarah/sejarah-giri-kedaton-kota-gresik",
        "supports": "Sumber asli entri (dari tahap 1).",
        "tier": "media",
        "support": "partial",
        "quote": null,
        "checkedByResearcher": false
      }
    ],
    "verification": "needs_verification",
    "classification": "academic_interpretation",
    "sourceNote": {
      "id": "Sumber ini dari tahap 1 dan belum diperiksa ulang pada tahap 2.",
      "en": "This source is from stage 1 and was not re-checked in stage 2."
    }
  },
  {
    "year": "1855 hingga 1920-an",
    "yearType": "documented",
    "icon": "home",
    "title": {
      "id": "Kampung Kemasan: rumah saudagar pribumi",
      "en": "Kampung Kemasan: houses of indigenous merchants"
    },
    "text": {
      "id": "Nama Kemasan disebut berasal dari Bak Liong, pengrajin emas yang tinggal di tepi sungai (1853). Pada 1855 H. Oemar bin Ahmad, pedagang kulit dan sarang walet, membangun rumah dua lantai di dekatnya, lalu rumah-rumah lain. Pada 1896 anak-anaknya mendirikan pabrik penyamakan kulit. Rumahnya memadukan gaya Tionghoa dan kolonial Belanda dengan tata ruang Jawa. Dari 23 bangunan asal, 16 masih memenuhi kriteria cagar budaya menurut satu direktori wisata.",
      "en": "The name Kemasan is said to come from Bak Liong, a goldsmith who lived on the riverbank (1853). In 1855 H. Oemar bin Ahmad, a leather and swiftlet-nest trader, built a two-storey house nearby, followed by other houses. In 1896 his children set up a leather tannery. The houses blend Chinese and Dutch colonial styles with Javanese layouts. Of the 23 original buildings, 16 still qualify as cultural heritage according to one tourism directory."
    },
    "region": "Jawa Timur",
    "destinationId": "kampung-kemasan",
    "source": "https://mojok.co/liputan/kampung-kemasan-potret-kejayaan-perdagangan-gresik-di-masa-silam/",
    "sources": [
      {
        "title": "https://mojok.co/liputan/kampung-kemasan-potret-kejayaan-perdagangan-gresik-di-masa-silam/",
        "publisher": "",
        "url": "https://mojok.co/liputan/kampung-kemasan-potret-kejayaan-perdagangan-gresik-di-masa-silam/",
        "supports": "Sumber asli entri (dari tahap 1).",
        "tier": "media",
        "support": "partial",
        "quote": null,
        "checkedByResearcher": false
      }
    ],
    "verification": "needs_verification",
    "classification": "historical_fact",
    "sourceNote": {
      "id": "Sumber ini dari tahap 1 dan belum diperiksa ulang pada tahap 2.",
      "en": "This source is from stage 1 and was not re-checked in stage 2."
    }
  },
  {
    "year": "Desember 2022 (dibuka kembali)",
    "yearType": "documented",
    "icon": "building",
    "title": {
      "id": "Bandar Grissee dipugar dan dibuka kembali",
      "en": "Bandar Grissee restored and reopened"
    },
    "text": {
      "id": "Kementerian PUPR melalui program Kotaku mengerjakan penataan kawasan Bandar Grissee di Kota Lama Gresik senilai Rp 38,3 miliar, dari Desember 2021 hingga akhir 2022; kawasan dibuka untuk umum pada Desember 2022. Lingkup pekerjaan mencakup drainase kota, pekerasan, dan struktur. Kawasan ini memuat kampung kolonial, pribumi, Pecinan, dan Arab.",
      "en": "The Ministry of Public Works and Housing (PUPR), through the Kotaku programme, carried out works at Bandar Grissee in Gresik Old Town costing Rp 38.3 billion, from December 2021 to the end of 2022; the area reopened to the public in December 2022. The scope included city drainage, paving and structures. The area contains colonial, indigenous, Chinese and Arab quarters."
    },
    "region": "Jawa Timur",
    "destinationId": "bandar-grissee",
    "source": "https://lestari.kompas.com/read/2023/04/28/120000386/bandar-grissee-gresik-saksi-bisu-keragaman-budaya-indonesia",
    "sources": [
      {
        "title": "https://lestari.kompas.com/read/2023/04/28/120000386/bandar-grissee-gresik-saksi-bisu-keragaman-budaya-indonesia",
        "publisher": "",
        "url": "https://lestari.kompas.com/read/2023/04/28/120000386/bandar-grissee-gresik-saksi-bisu-keragaman-budaya-indonesia",
        "supports": "Sumber asli entri (dari tahap 1).",
        "tier": "media",
        "support": "partial",
        "quote": null,
        "checkedByResearcher": false
      }
    ],
    "verification": "needs_verification",
    "classification": "historical_fact",
    "sourceNote": {
      "id": "Sumber ini dari tahap 1 dan belum diperiksa ulang pada tahap 2.",
      "en": "This source is from stage 1 and was not re-checked in stage 2."
    }
  },
  {
    "year": "Masa kini (tradisi tahunan)",
    "yearType": "documented",
    "icon": "calendar",
    "title": {
      "id": "Warisan hidup: haul dan tradisi para wali",
      "en": "Living legacy: hauls and traditions of the walis"
    },
    "text": {
      "id": "Hingga kini warisan para tokoh ini hidup dalam tradisi tahunan: haul Sunan Gresik bertepatan dengan Maulid Nabi (haul ke-625 pada 2025, hitungan tahun Hijriah), haul Sunan Prapen di Gresik, Buka Luwur di Kudus, dan Grebeg Besar di Demak. Tanggal Masehi bergeser tiap tahun mengikuti kalender Hijriah.",
      "en": "Today the legacy lives on in annual traditions: the Sunan Gresik haul held in conjunction with Maulid (the 625th in 2025, counted in Hijri years), the haul of Sunan Prapen in Gresik, Buka Luwur in Kudus, and Grebeg Besar in Demak. Gregorian dates shift each year with the Hijri calendar."
    },
    "region": "Jawa",
    "destinationId": null,
    "source": "https://javasatu.com/berita/rangkaian-haul-ke-625-sunan-gresik-dimulai-ini-jadwalnya/",
    "sources": [
      {
        "title": "https://javasatu.com/berita/rangkaian-haul-ke-625-sunan-gresik-dimulai-ini-jadwalnya/",
        "publisher": "",
        "url": "https://javasatu.com/berita/rangkaian-haul-ke-625-sunan-gresik-dimulai-ini-jadwalnya/",
        "supports": "Sumber asli entri (dari tahap 1).",
        "tier": "media",
        "support": "partial",
        "quote": null,
        "checkedByResearcher": false
      }
    ],
    "verification": "needs_verification",
    "classification": "historical_fact",
    "sourceNote": {
      "id": "Sumber ini dari tahap 1 dan belum diperiksa ulang pada tahap 2.",
      "en": "This source is from stage 1 and was not re-checked in stage 2."
    }
  }
];

/** Events. Dates follow the Hijri calendar and are never given as Gregorian dates; verified:false entries are flagged in the UI. */
export const EVENTS = [
  {
    "id": "buka-luwur-sunan-kudus",
    "name": {
      "id": "Buka Luwur Sunan Kudus",
      "en": "Buka Luwur at Sunan Kudus"
    },
    "period": {
      "id": "Sekitar 10 Muharram (kalender Hijriah); tanggal Masehi bergeser setiap tahun",
      "en": "Around 10 Muharram (Hijri calendar); the Gregorian date shifts every year"
    },
    "region": "Jawa Tengah",
    "icon": "lamp",
    "description": {
      "id": "Buka Luwur adalah tradisi tahunan mengganti kain penutup (luwur) makam Sunan Kudus di kompleks Menara Kudus. Pada 9 Muharram hewan sumbangan dimasak menjadi uyah asem dan sego jangkrik, lalu puluhan ribu bungkus nasi dibagikan kepada masyarakat.",
      "en": "Buka Luwur is an annual tradition of replacing the canopy cloth (luwur) over the tomb of Sunan Kudus in the Menara Kudus complex. On 9 Muharram donated animals are cooked into uyah asem and sego jangkrik, and tens of thousands of rice packs are then distributed to the public."
    },
    "destinationId": "sunan-kudus",
    "scheduleStatus": {
      "id": "Jadwal perlu dikonfirmasi",
      "en": "Schedule to be confirmed"
    },
    "source": "https://rri.co.id/en/art-and-culture/2519226/kudus-buka-luwur-tradition-distributes-34000-rice-packs-in-ritual",
    "verified": true,
    "note": "RRI article states Buka Luwur falls on 10 Muharram, replaces the canopy over Sunan Kudus's grave, cooking on 9 Muharram, and 34,000+ rice packs distributed (2026 edition). Gregorian date intentionally omitted."
  },
  {
    "id": "haul-malik-ibrahim-gresik",
    "name": {
      "id": "Haul Maulana Malik Ibrahim (Sunan Gresik)",
      "en": "Haul of Maulana Malik Ibrahim (Sunan Gresik)"
    },
    "period": {
      "id": "Diperkirakan sekitar 12 Rabiul Awal (belum terverifikasi sebagai jadwal haul); tanggal Masehi bergeser setiap tahun",
      "en": "Possibly around 12 Rabiul Awal (not verified as the haul schedule); the Gregorian date shifts every year"
    },
    "region": "Jawa Timur",
    "icon": "moon-star",
    "description": {
      "id": "Haul memperingati wafatnya Maulana Malik Ibrahim, tokoh penyebar Islam awal di Gresik yang dimakamkan di Desa Gapurosukolilo. Sumber yang dibuka hanya mencatat tanggal wafat beliau, bukan jadwal acara haul.",
      "en": "The haul commemorates the death of Maulana Malik Ibrahim, an early Islamic preacher in Gresik buried in Gapurosukolilo village. The source opened records only his date of death, not an event schedule."
    },
    "destinationId": "malik-ibrahim",
    "scheduleStatus": {
      "id": "Jadwal perlu dikonfirmasi",
      "en": "Schedule to be confirmed"
    },
    "source": "https://www.trac.astra.co.id/en/blog/en-travel/wali-songo-pilgrimage-religious-trip-ahead-of-ramadan/900",
    "verified": false,
    "note": "Source only gives death date 12 Rabi'ul Awal 822 H (1419 CE) and that pilgrims visit; it does not mention a haul event or its schedule. Confirm with the local committee/Pemkab Gresik."
  },
  {
    "id": "haul-sunan-giri",
    "name": {
      "id": "Haul Sunan Giri",
      "en": "Haul Sunan Giri"
    },
    "period": {
      "id": "Bulan Rabiul Awal (kalender Hijriah) menurut project awal; belum diverifikasi",
      "en": "Rabi' al-Awwal (Hijri calendar) per the original project; unverified"
    },
    "region": "Jawa Timur",
    "icon": "moon-star",
    "description": {
      "id": "Peringatan tahunan Sunan Giri di kompleks makam di Gresik. Waktu dan rangkaian acara belum diverifikasi dengan sumber.",
      "en": "Annual commemoration of Sunan Giri at the tomb complex in Gresik. Timing and programme have not been verified against a source."
    },
    "destinationId": "sunan-giri",
    "scheduleStatus": {
      "id": "Jadwal perlu dikonfirmasi",
      "en": "Schedule to be confirmed"
    },
    "source": "",
    "verified": false,
    "note": "Carried over from the original project; no source opened."
  },
  {
    "id": "pasar-bandeng",
    "name": {
      "id": "Pasar Bandeng",
      "en": "Pasar Bandeng (Milkfish Market)"
    },
    "period": {
      "id": "Menjelang Idul Fitri menurut project awal; belum diverifikasi",
      "en": "Ahead of Eid al-Fitr per the original project; unverified"
    },
    "region": "Jawa Timur",
    "icon": "fish",
    "description": {
      "id": "Tradisi pasar bandeng di Gresik menjelang Lebaran. Rincian (misalnya pelelangan) belum diverifikasi dengan sumber.",
      "en": "A milkfish market tradition in Gresik ahead of Eid. Details (such as an auction) have not been verified against a source."
    },
    "destinationId": "bandar-grissee",
    "scheduleStatus": {
      "id": "Jadwal perlu dikonfirmasi",
      "en": "Schedule to be confirmed"
    },
    "source": "",
    "verified": false,
    "note": "Carried over from the original project; no source opened."
  },
  {
    "id": "damar-kurung-festival",
    "name": {
      "id": "Festival Damar Kurung",
      "en": "Damar Kurung Festival"
    },
    "period": {
      "id": "Selama Ramadan menurut project awal; belum diverifikasi",
      "en": "During Ramadan per the original project; unverified"
    },
    "region": "Jawa Timur",
    "icon": "lamp",
    "description": {
      "id": "Lampion kertas lukis damar kurung adalah kerajinan khas Gresik. Waktu dan lokasi festival belum diverifikasi dengan sumber.",
      "en": "Painted paper damar kurung lanterns are a Gresik craft. The festival's timing and location have not been verified against a source."
    },
    "destinationId": "kampung-kemasan",
    "scheduleStatus": {
      "id": "Jadwal perlu dikonfirmasi",
      "en": "Schedule to be confirmed"
    },
    "source": "",
    "verified": false,
    "note": "Carried over from the original project; no source opened."
  }
];


/* ============================ helpers ============================ */
/** Classification of every important claim. CSS class suffix via factClass(). */
export const FACT_TYPES = {
  historical_fact: { id: "Fakta historis", en: "Historical fact" },
  academic_interpretation: { id: "Interpretasi akademik", en: "Academic interpretation" },
  local_tradition: { id: "Tradisi lokal", en: "Local tradition" },
  unverified: { id: "Belum terverifikasi", en: "Unverified" },
};
export function factClass(type) {
  return { historical_fact: "fact", academic_interpretation: "academic", local_tradition: "tradition", unverified: "unverified" }[type] || "unverified";
}
/** Source tiers shown next to references. */
export const TIER_LABEL = {
  "academic": {
    "id": "Akademik (jurnal/repositori)",
    "en": "Academic (journal/repository)"
  },
  "government": {
    "id": "Pemerintah",
    "en": "Government"
  },
  "media": {
    "id": "Media (sumber pelengkap)",
    "en": "Media (supplementary)"
  },
  "book": {
    "id": "Buku/katalog",
    "en": "Book/catalogue"
  },
  "site-manager": {
    "id": "Pengelola situs",
    "en": "Site manager"
  },
  "encyclopedia": {
    "id": "Rujukan awal (non-akademik)",
    "en": "Early reference (non-academic)"
  }
};

export const SECTION_TITLES = {
  overview: { id: "Ringkasan", en: "Overview" },
  background: { id: "Latar Belakang", en: "Background" },
  life: { id: "Riwayat Hidup", en: "Life History" },
  context: { id: "Konteks Zaman", en: "Historical Context" },
  dakwah: { id: "Perjalanan Dakwah", en: "Spread of Islam" },
  methods: { id: "Metode dan Pendekatan Budaya", en: "Methods and Cultural Approach" },
  legacy: { id: "Warisan Sejarah dan Budaya", en: "Historical and Cultural Legacy" },
  values: { id: "Nilai Keteladanan", en: "Exemplary Values" },
};

export const REGIONS = [
  { key: "east-java", province: "Jawa Timur", label: { id: "Jawa Timur", en: "East Java" } },
  { key: "central-java", province: "Jawa Tengah", label: { id: "Jawa Tengah", en: "Central Java" } },
  { key: "west-java", province: "Jawa Barat", label: { id: "Jawa Barat", en: "West Java" } },
];

/** Current UI language ("id" | "en"). */
let currentLanguage = "id";
export function setDataLanguage(language) { currentLanguage = language; }
function currentLang() { return currentLanguage; }

/** Localise a {id,en} value; arrays/strings/null pass through untouched. */
export function loc(v) {
  if (v && typeof v === "object" && !Array.isArray(v) && ("id" in v || "en" in v)) {
    const lang = currentLang();
    return v[lang] != null ? v[lang] : (v.id != null ? v.id : v.en);
  }
  return v;
}

/** Escape text for safe use in HTML templates / attributes. */
function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

export function getDestination(id) { return DESTINATIONS.find((d) => d.id === id) || null; }
export function loadFlexibleState() {
  const empty = { version: 1, draft: { editingId: null, name: '', destinationIds: [] }, plans: {} };
  try {
    const raw = localStorage.getItem('ejg_flex_plans');
    if (raw == null) return empty;
    const state = JSON.parse(raw);
    if (!state || state.version !== 1 || !state.plans || Array.isArray(state.plans)) return null;
    return { ...empty, ...state, draft: { ...empty.draft, ...(state.draft || {}) } };
  } catch { return null; }
}
export function saveFlexibleState(state) {
  try {
    const raw = JSON.stringify(state);
    localStorage.setItem('ejg_flex_plans', raw);
    return localStorage.getItem('ejg_flex_plans') === raw;
  } catch { return false; }
}
export function getFlexibleJourneys() {
  try {
    const plans = loadFlexibleState()?.plans || {};
    return Object.values(plans).filter((plan) => plan && typeof plan.id === 'string' && Array.isArray(plan.destinationIds))
      .map((plan) => ({ ...plan, kind: 'flexible', name: { id: plan.name || 'Perjalanan saya', en: plan.name || 'My journey' }, tagline: { id: 'Rute pribadi', en: 'Personal route' }, description: { id: 'Rute pribadi yang tersimpan di perangkat ini.', en: 'A personal route saved on this device.' }, provinces: [...new Set(plan.destinationIds.map((id) => getDestination(id)?.province).filter(Boolean))] }));
  } catch { return []; }
}
export function getJourney(id) {
  // Guided journeys live in JOURNEYS. Flexible plans ("flex-…") are resolved by flex-journey.js, so both models
  // share the same destination data and the same progress mechanism (journey-state.js).
  return JOURNEYS.find((j) => j.id === id) || getFlexibleJourneys().find((j) => j.id === id) || null;
}
export function isFlexibleJourneyId(id) { return typeof id === "string" && id.indexOf("flex-") === 0; }
export function journeyDestinations(journeyOrId) {
  const j = typeof journeyOrId === "string" ? getJourney(journeyOrId) : journeyOrId;
  return j ? j.destinationIds.map(getDestination).filter(Boolean) : [];
}
export function journeysForDestination(id) { return JOURNEYS.filter((j) => j.destinationIds.includes(id)); }
export function regionLabel(key) { const r = REGIONS.find((x) => x.key === key); return r ? loc(r.label) : key; }
/** True only when the destination has verified, sourced checkpoint coordinates (exact pin + GPS stamping allowed). */
export function hasVerifiedCoords(d) {
  // Requires a documented source: status alone is not enough. Approximate/unverified points never qualify.
  return !!(d && d.coordsStatus === "verified" && Array.isArray(d.coords) && d.coords.length === 2 &&
    d.coords.every((n) => typeof n === "number" && isFinite(n)) && d.coordsSource);
}
/** Marker kind for the overview map: "verified" | "approximate" (area only) | "none" (no marker). */
export function mapMarkerKind(d) {
  if (hasVerifiedCoords(d)) return "verified";
  return Array.isArray(d.areaCoords) && d.areaCoords.length === 2 ? "approximate" : "none";
}
/** Position for the overview map: exact if verified, otherwise the approximate area. */
export function mapPosition(d) { return hasVerifiedCoords(d) ? d.coords : (d.areaCoords || null); }
export function googleMapsUrlFor(d) {
  if (d.mapsUrl) return d.mapsUrl
  const base = "https://www.google.com/maps/search/?api=1&query=";
  return base + (hasVerifiedCoords(d) ? d.coords[0] + "," + d.coords[1] : encodeURIComponent(d.mapsQuery || d.name));
}
export function directionsUrlFor(d) {
  if (hasVerifiedCoords(d)) return 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(d.coords.join(','))
  if (d.directionsUrl) return d.directionsUrl
  const destination = hasVerifiedCoords(d) ? d.coords.join(',') : (d.mapsQuery || d.name)
  return 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(destination)
}
/** Plain-text story (all section paragraphs) used by Audio Story Mode. */
export function storyText(d) {
  const lang = currentLang();
  return Object.keys(d.sections || {}).map((k) => ((d.sections[k] || {})[lang] || (d.sections[k] || {}).id || []).join(" ")).join(" ");
}

// Backwards-compatible ordered checkpoint list (all destinations). The Tracker now uses the
// ACTIVE JOURNEY's checkpoints (see journey-state.js); this constant is kept for old pages.
export const JOURNEY_CHECKPOINTS = DESTINATIONS.slice().sort((a, b) => a.order - b.order);
