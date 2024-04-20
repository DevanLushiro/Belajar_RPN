// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".


function konversiMenit(menit) {
    // Hitung jumlah jam
    let jam = Math.floor(menit / 60);
  
    // Hitung sisa menit
    let sisaMenit = menit % 60;
  
    // Tambahkan angka 0 di depan jika sisa menit kurang dari 10
    if (sisaMenit < 10) {
        sisaMenit = `0${sisaMenit}`;
    }
  
    // Gabungkan jumlah jam dan menit dalam format yang benar
    let waktu = `${jam}:${sisaMenit}`;
  
    // Kembalikan hasilnya
    return waktu;
  }
    
    // TEST CASES
    console.log(konversiMenit(63)); // 1:03
    console.log(konversiMenit(124)); // 2:04
    console.log(konversiMenit(53)); // 0:53
    console.log(konversiMenit(88)); // 1:28
    console.log(konversiMenit(120)); // 2:00
  
  // ------------------------------------
  console.log('')
  // ------------------------------------
  
  //   Problem
  //   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
  //   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
  
  function xo(str) {
    // you can only write your code here!
    let x = 0;
    let o = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "x") {
        x += 1;
      }
  
      if (str[i] === "o") {
        o++;
      }
    }
  
    return x === o;
  }
    // TEST CASES
    console.log(xo('xoxoxo')); // true
    console.log(xo('oxooxo')); // false
    console.log(xo('oxo')); // false
    console.log(xo('xxxooo')); // true
    console.log(xo('xoxooxxo')); // true