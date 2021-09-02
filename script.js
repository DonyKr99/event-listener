var prideti = document.getElementById('prideti');
var istrintiPirma = document.getElementById('istrintiPirma');
var istrintiPaskutini = document.getElementById('istrintiPaskutini');
var inputName = document.getElementById('inputName');
var inputSurname = document.getElementById('inputSurname');
var inputAge = document.getElementById('inputAge');
var table = document.getElementById('table');


prideti.addEventListener("click", addName);

function addName() {
  var element = document.createElement("td");
  element.innerText = inputName.value;
  table.append(element);
  inputName.value = "";
}

prideti.addEventListener("click", addSurname);

function addSurname() {
  var element = document.createElement("td");
  element.innerText = inputSurname.value;
  table.append(element);
  inputSurname.value = "";
}

prideti.addEventListener("click", addAge);

function addAge() {
  var element = document.createElement("td");
  element.innerText = inputAge.value;
  table.append(element);
  inputAge.value = "";
}

var tr = document.getElementsByTagName("tr");
istrintiPaskutini.addEventListener("click", removeLastName);
function removeLastName() {
  var removeTr = document.getElementsByTagName("tr");
  removeTr[removeTr.length - 1].remove();
}

var tr = document.getElementsByTagName("tr");
istrintiPirma.addEventListener("click", removeFirstName);
function removeFirstName() {
  var removeTr = document.getElementsByTagName("tr")[1];
  removeTr.remove();
}
