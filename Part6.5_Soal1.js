// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
// let input = 5
//hasilnya
//*
//**
//***
//****
//*****

let i = 0; // inisialisasi variabel
while (i < 2) {
    console.log(i + "Looping Pertama") // kondisi
 // blok kode yang akan diulang
  i++; // penambahan nilai variabel untuk menghindari infinite loop
}

let j = 2;
while (i > 0){
    console.log(i + "Looping Ke2")
    i--;
}

for(let i = 0; i < 2; i++){
    console.log(i + "Maju")

}

for(let i = 1; i >= 0; i--){
    console.log(i + "Mundur")
}

for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i + "Genap")
    }else{
        console.log(i + "Ganjil")
    }
}
for (let i = 1; i <= 100; i += 2) {
  if (i % 3 === 0) {
    console.log( i + ` kelipatan 3`);
  }
}

for (let i = 1; i <= 100; i += 5) {
    if (i % 6 === 0) {
      console.log( i + ` kelipatan 6`);
    }
  }
  
for (let i = 1; i <= 100; i += 9) {
if (i % 10 === 0) {
    console.log( i + ` kelipatan 10`);
}
}

let input = 5;
let result = ""

for(let i = 0; i < input; i++){
    for(let j = 0; j <= i; j++){
        result += "*"
    }
    result += "\n"
}

console.log(result)

// Lampu Rem Belakang
// Stater Depan
// Benda


