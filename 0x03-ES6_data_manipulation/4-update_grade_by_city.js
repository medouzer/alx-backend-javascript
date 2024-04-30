export default function updateStudentGradeByCity(students, city, newGrades) {
    return students.filter((student) => student.location === city)
        .map((student) => {
            if (!newGrades) {
                student.grades = "N/A";
            } else {
                student.grades = newGrades;
            }
            return student;
        });
}