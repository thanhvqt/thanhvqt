let chieuCao = Number(prompt("Nhập chiều cao (m):"));
let canNang = Number(prompt("Nhập cân nặng (kg):"));
let bmi = canNang / Math.pow(chieuCao, 2);
document.write("bmi của bạn là: " + bmi.toFixed(2))
if (bmi < 18) {
    document.write("Under Weight");
} else if (bmi >= 18 && bmi < 25.0) {
    document.write("Normal");
} else if (bmi >= 25.0 && bmi < 30.0) {
    document.write("Over Weight");
} else {
    document.write("Obese");
}