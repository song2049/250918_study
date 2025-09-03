function findByStudentName(studentName) {
    if(students.student1.name === studentName) return students.student1;
    if(students.student2.name === studentName) return students.student2;
    if(students.student3.name === studentName) return students.student3;
    if(students.student4.name === studentName) return students.student4;
    if(students.student5.name === studentName) return students.student5;
    return false;
}