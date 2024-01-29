$(document).ready(() => {
  if (localStorage.getItem("students") != null) {
    const count = JSON.parse(localStorage.getItem("students"));
    $("#studentsCount").text(count.length);
  }
});
