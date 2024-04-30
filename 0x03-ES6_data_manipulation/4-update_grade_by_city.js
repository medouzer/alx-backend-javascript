export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter((student) => student.location === city);

  const updatedStudents = studentsByCity.map((student) => {
    const matchingGrade = newGrades.filter((newGrade) => student.id === newGrade.studentId);
    if (matchingGrade.length > 0) {
      return {
        ...student,
        grade: matchingGrade[0].grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });

  return updatedStudents;
}
