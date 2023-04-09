// enter a, b, c
let a = prompt("enter a : ");
let b = prompt("enter b : ");
let c = prompt("enter c : ");

// kiem tra xem a, b, c co phai la 3 canh cua mot tam giachay khong?
if( a+ b > c && a + c > b && b + c > a){
    // tinh dien tich tam giac bang cong thuc Heron
    let p = (a + b +c) / 2; // nua chu vi hinh tam giac
    let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    // kiem tra loai tam giac 
    if(a === b && b === c){
        document.write("Tam giac deu");
    } else if (a === b || b === c || c === a) {
        document.write("Tam giac can");
    } else if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
              Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2) ||
              Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2)){
        document.write("Tam giac vuong");
    }else {
        document.write("Tam giac thuong");
    }
}else{
    document.write("Ba gia tri nhap vao khong phai la 3 canh cua mot tam giac");
}
   