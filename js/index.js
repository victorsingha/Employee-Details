const url = "http://localhost:3000/employee";

var list = [];

async function getEmpList() {
  await $.get(url, function (data, status) {
    list = data;
  });
  return new Promise((resolve, reject) => {
    resolve(list);
  });
}
async function main() {
  var list = await getEmpList();
  console.log(list);
  console.log("hi");
}

main();
