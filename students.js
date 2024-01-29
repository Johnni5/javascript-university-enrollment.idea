// const students = [];

$(document).ready(() => {
  if (localStorage.getItem("students") != null)
    students = JSON.parse(localStorage.getItem("students"));

  renderStudentsTable();
});

function createStudent() {
  let firstname = $("#inputFirstname").val();
  let lastname = $("#inputLastname").val();
  let id = $("#inputID").val();

  let newStudent = new Student(firstname, lastname, id);
  students.push(newStudent);
  localStorage.setItem("students", JSON.stringify(students));
  renderStudentsTable();
}

function renderStudentsTable() {
  // delete all rows that contain students
  $("table tr:gt(0)").remove();
  // render/create rows for all students
  for (let i = 0; i < students.length; i++) {
    $("table").append("<tr></tr>");
    let row = $("tr:last");
    $(row).append("<td id='row-test'>" + students[i].firstname + "</td>");
    $(row).append("<td id='row-test'>" + students[i].lastname + "</td>");
    $(row).append("<td id='row-test'>" + students[i].id + "</td>");
  }
}

class Student {
  constructor(firstname, lastname, id) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.id = id;
  }
}

function delStudents() {
  students = [];
  localStorage.setItem("students", JSON.stringify(students));

  $("#erase-info").text("Datensatz gelöscht!");
  history.go(0);
}

function showList() {
  $(".list-students").append(students);
  renderStudentsTable();
}
