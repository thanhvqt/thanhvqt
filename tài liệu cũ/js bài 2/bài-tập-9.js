function lgd() {
    let giatrivao = document.getElementById('dauvao').value;
    let select1 = document.getElementById('select1').value;
    let select2 = document.getElementById('select2').value;
    if (select1 == select2) {
        alert(giatrivao)
    }
    if (select1 == "a" && select2 == "b") {
        alert(giatrivao / 24000);
    }
    if (select2 == "a" && select1 == "b") {
        alert(giatrivao * 24000)
    }
}