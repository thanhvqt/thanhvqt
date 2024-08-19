//Yêu cầu người dùng nhập bán kính từ bàn phím
let r = Number(prompt("Nhập bán kính của đường tròn"));
console.log(r);
console.log(typeof r);

// Tính Chu vi
let PI = Math.PI;
let Chuvi = 2 * PI * r;

// In kết quả
console.log("Chu vi = " + Chuvi);