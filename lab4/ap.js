class Student {
    constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.class_id = class_id;
      this.email = email;
      this.phone_number = phone_number;
      this.dob = dob;
    }
  
    get_full_name() {
      return `${this.last_name} ${this.first_name}`;
    }
  
    get_age() {
      const today = new Date();
      const birthDate = new Date(this.dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  }
  
  const students = [
    new Student(
      1,
      "Nguyễn",
      "Thị A",
      1,
      "nguyenthia@gmail.com",
      "0387654582",
      new Date(2001, 7, 7)
    ),
    new Student(
      2,
      "Trần",
      "Thị B",
      1,
      "tranthib@gmail.com",
      "0387654322",
      new Date(2003, 6, 2)
    ),
    new Student(
      3,
      "Lê",
      "Văn a",
      2,
      "levana@gmail.com",
      "037257222",
      new Date(2002, 9, 3)
    ),
    new Student(
      4,
      "Phạm",
      "Thị D",
      2,
      "phanchibinh@gmail.com",
      "0359235717",
      new Date(2004, 5, 7)
    ),
    new Student(
      5,
      "Tèo",
      "Tí",
      3,
      "teoti@gmail.com",
      "0981234857",
      new Date(2002, 2, 7)
    ),
  ];
  
  students.sort((a, b) => a.get_age() - b.get_age());
  for (const student of students) {
    console.log(
      `ID: ${
        student.id
      }, Full name: ${student.get_full_name()}, Age: ${student.get_age()} years old, Email: ${
        student.email
      }, Phone number: ${student.phone_number}`
    );
  }
  console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
  