var employeeData = {
  id: null,
  name: "",
  profile: "",
  gender: "",
  department: [],
  salary: "",
  startdate: "",
  notes: "",
};

var id = localStorage.getItem("id");
if (id != null) {
  const url = `http://localhost:3000/employee/${id}`;
  $.get(url, function (data, status) {
    console.log(data, status);
    //set Name in Input Text
    $("#name").val(data.name);
    employeeData.name = data.name;
    //set Profile Picture
    $(`input[name=profilepic][value="${data.profile}"]`).attr(
      "checked",
      "checked"
    );
    employeeData.profile = data.profile;
    //set GENDER
    $(`input[name=gender][value="${data.gender}"]`).attr("checked", "checked");
    employeeData.gender = data.gender;
    //set Department
    console.log(data[`department[]`]);
    data[`department[]`].forEach((department) => {
      $(`input[name=${department}]`).attr("checked", true);
    });
    employeeData.department = data[`department[]`];
    //set Salary
    document.getElementById("rangeValue").value = data.salary;
    employeeData.salary = data.salary;
    //set Date
    console.log(data.startdate.split(/\s* \s*/));
    $("select#select-day").val(`${data.startdate.split(/\s* \s*/)[0]}`);
    $("select#select-month").val(`${data.startdate.split(/\s* \s*/)[1]}`);
    $("select#select-year").val(`${data.startdate.split(/\s* \s*/)[2]}`);
    employeeData.startdate = data.startdate;
    //set Notes
    $("#notes").val(data.notes);
    employeeData.notes = data.notes;
  });
}

const url = "http://localhost:3000/employee";

function updateRange(val) {
  document.getElementById("rangeValue").value = val;
  console.log(val);
  employeeData.salary = val;
}

function getName() {
  const name = document.getElementById("name").value;
  console.log(name);
  employeeData.name = name;
}
function getimage1() {
  const profile = document.getElementById("image1").value;
  console.log(profile);
  employeeData.profile = profile;
}
function getimage2() {
  const profile = document.getElementById("image2").value;
  console.log(profile);
  employeeData.profile = profile;
}
function getimage3() {
  const profile = document.getElementById("image3").value;
  console.log(profile);
  employeeData.profile = profile;
}
function getimage4() {
  const profile = document.getElementById("image4").value;
  console.log(profile);
  employeeData.profile = profile;
}
function getMale() {
  const gen = document.getElementById("male").value;
  console.log(gen);
  employeeData.gender = gen;
}
function getFemale() {
  const gen = document.getElementById("female").value;
  console.log(gen);
  employeeData.gender = gen;
}

function getCheckboxValue() {
  var department = [];
  var inputElements = document.getElementsByClassName("checkbox");
  for (var i = 0; inputElements[i]; ++i) {
    if (inputElements[i].checked) {
      department.push(inputElements[i].value);
    }
  }
  // console.log(checkedValue);
  return department;
}
function getStartDate() {
  var day = document.getElementById("select-day").value;
  var month = document.getElementById("select-month").value;
  var year = document.getElementById("select-year").value;

  var date = `${day} ${month} ${year}`;
  return date;
}
function getNotes() {
  const val = document.getElementById("notes").value;
  console.log(val);
  employeeData.notes = val;
}

document.querySelector("#submit").addEventListener("click", function (event) {
  event.preventDefault();
  employeeData.department = getCheckboxValue();
  employeeData.startdate = getStartDate();
  POST_DATA(employeeData);
  // GET_DATA();
});
document.querySelector("#cancel").addEventListener("click", function (event) {
  event.preventDefault();
  location.href = "index.html";
});
document.querySelector("#reset").addEventListener("click", function (event) {
  // event.preventDefault();
});
function POST_DATA(employee) {
  $.post(url, employee, function (data, status) {
    console.log(data, status);
    if (status === "success") {
      location.href = "index.html";
    }
  });
}
function GET_DATA() {
  $.get(url, function (data, status) {
    console.log(data, status);
  });
}
