var employeeData = {
  name: "",
  profile: "",
  gender: "",
  department: [],
  salary: "",
  startdate: "",
  notes: "",
};

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
  var checkedValue = [];
  var inputElements = document.getElementsByClassName("checkbox");
  for (var i = 0; inputElements[i]; ++i) {
    if (inputElements[i].checked) {
      checkedValue.push(inputElements[i].value);
    }
  }
  // console.log(checkedValue);
  return checkedValue;
}
function getStartDate() {
  var day = document.getElementById("select-day").value;
  var month = document.getElementById("select-month").value;
  var year = document.getElementById("select-year").value;

  var date = `${day}-${month}-${year}`;
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
  console.log(employeeData);
});
document.querySelector("#cancel").addEventListener("click", function (event) {
  event.preventDefault();
});
document.querySelector("#reset").addEventListener("click", function (event) {
  event.preventDefault();
});
