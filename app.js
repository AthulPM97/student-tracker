//selectors
const studentForm = document.getElementById('studentForm');
const studentDiv = document.querySelector('.students');
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['rollNo'];
var addBtn = document.getElementById('addStudent')

var students = JSON.parse(localStorage.getItem("students")) || [];

if(students.length !== 0)
students.forEach(createStudentElement());
//event listeners
addBtn.addEventListener('click', addStudent); //add student button event


//functions
function addStudent(e) {    //submit event function that calls addstudent function and create element function 
    e.preventDefault();
    const newStudent = addStudentToArray(
        nameInput.value,
        ageInput.value,
        rollInput.value
      );
    
    createStudentElement(newStudent);

}


function addStudentToArray(name, age, roll) {   //takes user inputs as params, stores to local storage and returns object
    //push student object to students array
    students.push({name, age, roll});
    
    //set students array to local storage
    localStorage.setItem("students", JSON.stringify(students));

    //returns student object to add to DOM
    return {name, age, roll};
}

function createStudentElement({name, age, roll}) {  //takes destructured object as param, creates and appends elements to dom
    //create elements
    const stu = document.createElement('div');
    const studentName = document.createElement('h2');
    const studentAge = document.createElement('p');
    const studentRoll = document.createElement('p');

    studentName.innerText = "Student name: " + name;
    studentAge.innerText = "Age: " + age;
    studentRoll.innerText = "Roll no: " + roll;

    stu.append(studentName, studentAge, studentRoll);
    studentDiv.appendChild(stu);
}