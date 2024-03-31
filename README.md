|  | Pemrograman Berbasis Framework 2024 |
|--|--|
| NIM |  2141720135 |
| Nama |  Mutiara Devita Eka Putri |
| Kelas | TI - 3A |

1. Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?
Jawab :
Pada langkah ini kita mempelajari cara menggunakan context dengan diakses oleh komponen child didalamnya. Context memungkinkan sebuah komponen induk menyediakan data untuk seluruh pohon (tree) dibawahnya. Ada banyak kegunaan dari context.
![alt text](image.png)

2. Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini? Jika terjadi error, silakan perbaiki, Mengapa hal itu bisa terjadi? Jelaskan!
Jawab : 
![alt text](image-1.png)
Error terjadi karena kita mencoba menggunakan hook createContext dari React di komponen server Next.js. padahal createContext hanya berfungsi di komponen klien karena bergantung pada fungsi rendering sisi klien.
![alt text](image-2.png)