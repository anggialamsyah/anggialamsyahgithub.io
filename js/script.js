
// Reset 1
function reset() {
    document.getElementById("angka1").value = "0"
    document.getElementById("angka2").value = "0"
    document.getElementById("hasil").innerHTML = "0"
    document.getElementById("hasil2").innerHTML = "0"
}

// Reset 2
function reset2() {
    document.getElementById("sisi1").value = "0"
    document.getElementById("sisi2").value = "0"
    document.getElementById("sisi3").value = "0"
    document.getElementById("alas").value = "0"
    document.getElementById("tinggi").value = "0"
    document.getElementById("hasil3").innerHTML = "0"
    document.getElementById("hasil4").innerHTML = "0"
}

// Reset 3
function reset3() {
    document.getElementById("jr").value = "0"
    document.getElementById("hasil5").innerHTML = "0"
    document.getElementById("hasil6").innerHTML = "0"
}

// Fungsi Luas PP
function luaspp() {
    var a1 = Number(document.getElementById("angka1").value)
    var a2 = Number(document.getElementById("angka2").value)
    var hasil = Number(a1 * a2)
    document.getElementById("hasil").innerHTML = hasil
}

// Fungsi Keliling PP
function kelilingpp() {
    var a1 = Number(document.getElementById("angka1").value)
    var a2 = Number(document.getElementById("angka2").value)
    var hasil2 = Number(2*(a1 + a2))
    document.getElementById("hasil2").innerHTML = hasil2
}

// Fungsi LUAS SEGITIGA
function luassegitiga() {
    var alas = Number(document.getElementById("alas").value)
    var tinggi = Number(document.getElementById("tinggi").value)
    var hasil3 = Number((alas * tinggi)/2)
    document.getElementById("hasil3").innerHTML = hasil3
}

// Fungsi KELILING SEGITIGA
function kelilingsegitiga() {
    var s1 = Number(document.getElementById("sisi1").value)
    var s2 = Number(document.getElementById("sisi2").value)
    var s3 = Number(document.getElementById("sisi3").value)
    var hasil4 = Number(s1 + s2 + s3)
    document.getElementById("hasil4").innerHTML = hasil4
}

// Fungsi LUAS LINGKARAN
function luaslingkaran() {
    var jr = Number(document.getElementById("jr").value)
    var hasil5 = Number(22/7 * (jr*jr))
    document.getElementById("hasil5").innerHTML = hasil5
}

// Fungsi KELILING LINGKARAN
function kelilinglingkaran() {
    var jr = Number(document.getElementById("jr").value)
    var hasil6 = Number(2 * 22/7 * jr)
    document.getElementById("hasil6").innerHTML = hasil6
}