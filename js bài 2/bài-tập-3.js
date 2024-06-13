// Sử dụng hàm prompt() để nhập 2 số từ bàn phím
let a = prompt("Nhập số thứ nhất (a):");
let b = prompt("Nhập số thứ hai (b):");

// Chuyển đổi chuỗi đầu vào thành số
a = Number(a);
b = Number(b);

// Kiểm tra xem a có phải là bội số của b hay không
if (b !== 0 && a % b === 0) {
    alert(a + " là bội số của " + b);
} else {
    alert(a + " không phải là bội số của " + b);
}