let contactForm = document.querySelector('.contact-form');
let teknoloji = document.querySelector('.teknoloji');
let korku = document.querySelector('.korku');
let saglik = document.querySelector('.saglik');
let gezi = document.querySelector('.gezi');
let yemek = document.querySelector('.yemek');
let silme = document.querySelector(".silme");
let studentList = [];
if(typeof localStorage.studentList !== 'undefined') {
  studentList = JSON.parse(localStorage.studentList);
  renderStudents();
}

function handleFormSubmit(e) {
  e.preventDefault();
  let formData = new FormData(contactForm);
  let formObj = Object.fromEntries(formData);
  studentList.push(formObj);
  contactForm.reset();

  save();
  renderStudents();
}
contactForm.addEventListener('submit', handleFormSubmit);

function save() {
  localStorage.studentList = JSON.stringify(studentList);
}



function renderStudents() {
  teknoloji.innerHTML = '<h1>Gıda</h1>';
  korku.innerHTML = '<h1>Gıda Dışı</h1>';
  saglik.innerHTML = '<h1>Bakliyat</h1>';
  gezi.innerHTML = '<h1>İçecek</h1>';
  yemek.innerHTML = '<h1>Sos</h1>';

  for (let i = 0; i < studentList.length; i++) {

    if (studentList[i].category === "teknoloji") {
        teknoloji.innerHTML += `<p>${studentList[i].name} - ${studentList[i].aciklama} - ${studentList[i].number}</p>`;
    } else if (studentList[i].category === "korku") {
        korku.innerHTML += `<p>${studentList[i].name} - ${studentList[i].aciklama} - ${studentList[i].number}</p>`;
    } else if (studentList[i].category === "saglik") {
        saglik.innerHTML += `<p>${studentList[i].name} - ${studentList[i].aciklama} - ${studentList[i].number}</p>`;
    } else if (studentList[i].category === "gezi") {
        gezi.innerHTML += `<p>${studentList[i].name} - ${studentList[i].aciklama} - ${studentList[i].number}</p>`;
    } else if (studentList[i].category === "yemek") {
        yemek.innerHTML += `<p>${studentList[i].name} - ${studentList[i].aciklama} - ${studentList[i].number}</p>`;
    }
}

}

function delet() {
  localStorage.clear();
  studentList = [];
  renderStudents();
}

silme.addEventListener("click",delet);