//Yêu cầu người dùng nhập bán kính từ bàn phím
let r = Number(prompt("Nhập bán kính đường tròn"));
console.log(r);
console.log(typeof r);

//Tính diện tích hình tròn
let PI = Math.PI;
let dientich = PI * r * r;

//In kết quả
console.log("Diện Tích = " + dientich);