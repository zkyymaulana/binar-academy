// import json data from data/students.json
import studentsData from "../data/students.json" with {type:"json"};

// Get id of
const studentContent = document.getElementById('student-content')

// Helper function to render students data
const renderStudents = (studentsData) => {
let studentContentHTML = ''
studentsData.map(student=>{
  // variable that will be show in student-content
  const studentContent =`
  <div class="col-md-3">
  <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${student.name}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${student.education.bachelor}</h6>
            <p class="card-text">My name is ${student.name}, usually called ${student.nickName}. I am from ${student.address.city}, ${student.address.province}. And I am a student of ${student.education.bachelor}.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
        </div>
  `;
  studentContentHTML += studentContent;
});
studentContent.innerHTML = studentContentHTML;
}

studentContent.innerHTML = "<h1>Loading...</h1>"

// edit the html content in student-content
setTimeout(()=>{
  renderStudents(studentsData);
},3000)
//  end to show all student

// function
const search = document.getElementById("search")
// start to search the students
search.addEventListener('input', (e)=>{
  const query = e.target.value.toLowerCase();

  const filteredStudents = studentsData.filter(student=> 
    student.name.toLowerCase().includes(query) ||
    student.education.bachelor.toLowerCase().includes(query)
  );

  renderStudents(filteredStudents)
});
// end to search the students