const db = window.sqlite.personDB;

const table = document.getElementById("people-table");
const submitButton = document.getElementById("form-submit");
const nameElement = document.getElementById("person-name");
const ageElement = document.getElementById("person-age");
submitButton.addEventListener("click", addPerson);
function renderPerson(person) {
    let row = table.insertRow();
    let name = row.insertCell(0);
    name.innerText = person.name;
    let age = row.insertCell(1);
    age.innerText = person.age;
}

function addPerson() {
    let name = nameElement.value;
    let age = ageElement.value;
    db.insertPerson(name, age);
    renderPerson({name: name, age: age});
}

function renderTable(){
    db.readAllPersons().forEach(renderPerson);
}
renderTable();