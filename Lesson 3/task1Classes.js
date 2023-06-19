class Student {
    name;
    major;
    grades;

    constructor(name, major, grades) {
        this.name = name;
        this.major = major;
        this.grades = grades;
    }

    addGrade(grade) {
        this.grades.push(grade);
    }
}

// Create 3 instances from the Student class
const student1 = new Student('Ana', 'IKI', [5, 5, 8, 10]);
const student2 = new Student('Sara', 'KNI', [10, 8, 10]);
const student3 = new Student('Petar', 'KNI', [9, 9, 7]);

student1.addGrade(7);
console.log(student1);

class MasterStudent extends Student {
    #gpa;

    constructor(name, major, grades, gpa) {
        super(name, major, grades);
        this.#gpa = gpa;
    }

    get gpa() {
        return this.#gpa;
    }
}

const mstudent = new MasterStudent('Nikola', 'IKI', [10, 10, 10], 10);
console.log(mstudent.gpa);