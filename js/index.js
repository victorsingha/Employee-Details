const url = "http://localhost:3000/employee";

var list = [];
main();

async function main() {
  var list = await getEmpList();
  console.log(list);
  display(list);
}

async function getEmpList() {
  await $.get(url, function (data, status) {
    list = data;
  });
  return new Promise((resolve, reject) => {
    resolve(list);
  });
}
function display(list) {
  var design = "";
  list.forEach((employee) => {
    design =
      design +
      `<div class="table-rows">
      <div class="name">
        <img
          class="profile-pic"
          src="${employee.profile}"
          alt="profile-pic"
        />
        <p class="employee-name">${employee.name}</p>
      </div>
      <div class="gender"><p>${employee.gender}</p></div>
      <div class="department">
        <div class="chip">Sales</div>
        <div class="chip">HR</div>
        <div class="chip">Finance</div>
      </div>
      <div class="salary">
        <p><span>₹</span> ${employee.salary}</p>
      </div>
      <div class="start-date"><p>${employee.startdate}</p></div>
      <div class="actions">
        <i class="fa fa-lg fa-trash"></i> <i class="fa fa-lg fa-edit"></i>
      </div>
    </div>`;
  });
  document.getElementById("table").innerHTML = design;
}
