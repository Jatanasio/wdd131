const steps = ["one", "two", "three"];
const listTemplate = (step) => {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join();// set the innerHTML

const grades = ["A", "B", "C", "D"];

const GradeConverter = (grade) => {
    let points = 0;
    if (grade === "A") {
        points === 4;
    }
    if (grade === "B") {
        points === 3; 
    }
    if (grade === "C") {
        points === 2;
    }
    if (grade === "D") {
        points === 1;
    }
    

    return points;
}

const gradesHtml = grades.map(GradeConverter);
document.querySelector("#myGrades").innerHTML =gradesHtml.join();