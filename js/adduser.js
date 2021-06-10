let salary;
let profilePicURL;
let gender;

function updateRange(val) {
  document.getElementById("rangeValue").value = val;
  console.log(val);
  salary = val;
}

function getName() {
  const name = document.getElementById("name").value;
  console.log(name);
}
function getimage1() {
  const profile = document.getElementById("image1").value;
  console.log(profile);
  profilePicURL = profile;
}
function getimage2() {
  const profile = document.getElementById("image2").value;
  console.log(profile);
  profilePicURL = profile;
}
function getimage3() {
  const profile = document.getElementById("image3").value;
  console.log(profile);
  profilePicURL = profile;
}
function getimage4() {
  const profile = document.getElementById("image4").value;
  console.log(profile);
  profilePicURL = profile;
}
function getMale() {
  const gen = document.getElementById("male").value;
  console.log(gen);
  gender = gen;
}
function getFemale() {
  const gen = document.getElementById("female").value;
  console.log(gen);
  gender = gen;
}

function getCheckboxValue() {
  var checkedValue = [];
  var inputElements = document.getElementsByClassName("checkbox");
  for (var i = 0; inputElements[i]; ++i) {
    if (inputElements[i].checked) {
      checkedValue.push(inputElements[i].value);
    }
  }
  console.log(checkedValue);
}
