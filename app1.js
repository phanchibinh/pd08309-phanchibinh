// điểm sinh vien
function diemsv(){
    var hoten = document.froms["Bangdiemform"]["hoten"].value;
    var diem = document.froms["Bangdiemform"]["diem"].value;

    document.getElementById("kqhoten").innerHTML = hoten.toUpperCase();
    document.getElementById("kqdiem").innerHTML = diem;
    document.getElementById("kqxeploai").innerHTML = xeploai(diem);
    document.getElementById("kqcuoi").innerHTML = kq(diem);
}

function xeploai(x) {

    if (x >= 9){
        return "Xuất sắc";
    }else if ((x >=8) && (x < 9)){
        return "Giỏi"
    }else if ((x >=7) && (x < 8)){
        return "Khá"
    }else if ((x >=5) && (x < 7)){
        return "TB khá"
    }else if (x == 5){
        return "Trung bình";
    }else {
        return "Yếu";
    }
}

function kq(x){
    if (x < 5) {
        return "Rớt";
    } else {
        return "Đậu";
    }
}

// Kiểm tra số chẵn số lẻ
function sochansole() {
    var so1 = parseInt(document.forms["sochansoleform"]["so1"].value);
    var so2 = parseInt(document.forms["sochansoleform"]["so2"].value);

    document.getElementById("ketqua1").innerHTML = kiemtraso(so1);
    document.getElementById("ketqua2").innerHTML = kiemtraso(so2);
}

function kiemtraso(x) {
    if (x % 2 == 0){
        return x + "đây là số chẳn";
    } else {
        return x + "đây là số lẻ";
    }
}
