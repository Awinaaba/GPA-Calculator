const coursesList = document.getElementById("courses-list");
const addCourseButton = document.getElementById("add-course");
const gpaElement = document.getElementById("gpa");

let courses = [];

function calculateGPA() {
  const totalCredits = courses.reduce((total, course) => total + course.credit, 0);
  const totalWeightedGrades = courses.reduce((total, course) => total + (course.credit * course.grade), 0);
  const gpa = totalWeightedGrades / totalCredits || 0;
  gpaElement.textContent = gpa.toFixed(2);
}

function addCourse() {
  const courseCode = document.getElementById("course").value;
  const creditHours = parseInt(document.getElementById("credit").value, 10);
  const grade = parseFloat(document.getElementById("grade").value);

  if (!isNaN(creditHours) && !isNaN(grade)) {
    courses.push({ courseCode, credit: creditHours, grade });
    coursesList.innerHTML += `<p>${courseCode} (${creditHours} credit hours) - Grade: ${grade.toFixed(2)}</p>`;
    calculateGPA();
  }
}

addCourseButton.addEventListener("click", addCourse);
