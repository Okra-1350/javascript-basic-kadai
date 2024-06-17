//１以上の正の数が変数に代入されている
let num = Math.floor(Math.random() * 101 );
console.log(num);

//３と５の倍数の場合「３と５の倍数です」と出力
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}

//3の倍数の場合「３の倍数です」と出力
else if(num % 3 === 0) {
  console.log('3の倍数です');
}

//５の倍数の場合「５の倍数です」と出力
else if(num % 5 === 0) {
  console.log('5の倍数です');
}

//それ以外の場合、変数(num)を出力する
else {
  console.log(num);
}