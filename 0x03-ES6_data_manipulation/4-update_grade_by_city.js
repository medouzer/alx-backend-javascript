export default function updateStudentGradeByCity(students, city, newGrades) {
    const studentsByCity = students.filter((student) => student.location === city);

    const updatedStudents = studentsByCity.map((student) => {
        const grades = newGrades.filter((newgrade) => student.id === newgrade.id);
        if (grades.length > 0) {
            student.grade = grades[0].grade;
        } else {
            student.grade = 'N/A';
        }
        return student;
    });

    return updatedStudents;
}
