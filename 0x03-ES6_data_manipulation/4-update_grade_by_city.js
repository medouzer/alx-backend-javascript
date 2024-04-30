export default function updateStudentGradeByCity(students, city, newGrades) {
    const studentby_city = students.filter((student) => student.location === city)

    const new_student = studentby_city.map((student) => {
        const grades = newGrades.filter((newgrade) => student.id === newgrade.id)
        if (grades.lenght > 0) {
            student.grade = newgrade.grade;
        } else {
            student.grade = 'N/A';
        }
    });
    return new_student;
}