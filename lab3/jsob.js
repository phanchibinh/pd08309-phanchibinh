// create an object
let person = {
    cccd 0123401234,
    ho: "Phan",
    tendem: "Chi",
    ten: "Binh",
    email: "chibinh@gmail.com",
    getFullName: funcation() {
        let fullName = this.ho + " " + this.tendem + " " + this.ten;
        return fullName;
    }
};

//
//
// access to the object' attributes
console.log(person.getFullName());


// reate a class
class Sinhvien {
    constructor(masv, hosv, tensv, email, sdt, note) {
        this.masv = masv;
        this.hosv = hosv;
        this.tensv = tensv;
        this.email = email;
        this.sdt = sdt;
        this.note = note;
    }

        getFullName(){
            return this.hosv + " " + this.tensv;
        }

        // tinh tuoi
        getAge(){
            let date = new Date();
            let currentYear - this.namesinh;
            return this.getAge;
        }
}

let sv1 = new Sinhvien('PD001', 'tran', 'Thanh', 'thanhh@gmail.com', 039412948);

console.log(sv1.masv);
console.log(sv1.getFullName() + ": " + sv1.getAge)