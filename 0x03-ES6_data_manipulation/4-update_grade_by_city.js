export default function updateStudentGradeByCity(students, city, newGrades) {
    const studentsByCity = students.filter((student) => student.location === city);

    const updatedStudents = studentsByCity.map((student) => {
        const matchingGrade = newGrades.filter((newGrade) => student.id === newGrade.studentId);
        if (matchingGrade) {
            student.grade = matchingGrade.grade;
        } else {
            student.grade = 'N/A';
        }
        return student;
    });

    return updatedStudents;
}
