//#8e8782;

//to-do-list

const toDoList = document.getElementById('window1__container');
const toDoListIcon = document.getElementById('icon__header');
toDoListIcon.addEventListener('click',() => {
  if (toDoList.style.display === 'block') {
    toDoList.style.display = 'none';
  }else {
    toDoList.style.display = 'block';
  }
});

const inputBox = document.getElementById('input__box');
const listContainer = document.getElementById('list__container');
const addButton = document.getElementById('button__add');

addButton.addEventListener('click', () => {
  if (inputBox.value === '') {
    alert("add a task please!!!");
  }else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = '';
});

listContainer.addEventListener('click', (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});
