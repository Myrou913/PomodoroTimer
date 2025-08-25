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

document.addEventListener('click', (e) => {
  if (toDoList.style.display === 'block' && !listContainer.contains(e.target) && e.target !== toDoListIcon) {
    toDoList.style.display = 'none';
  }
});

//settings

const settingsIcon = document.getElementById('main__settings-icon');
const settings = document.getElementById('settings');
const settingsContainer = document.getElementById('settings__container');

settingsIcon.addEventListener('click', () => {
  if (settings.style.display === 'block') {
    settings.style.display = 'none';
  }else {
    settings.style.display = 'block';
  }
});

document.addEventListener('click', (e) => {
  if (settings.style.display === 'block' && !settingsContainer.contains(e.target) && e.target !== settingsIcon) {
    settings.style.display = 'none';
  }
});

const themes = document.getElementById('themes');
const timer = document.getElementById('timer');
const settingsElements1 = document.getElementById('settings__elements1');
const settingsElements2 = document.getElementById('settings__elements2');

themes.addEventListener('click', () => {
  if (getComputedStyle(settingsElements2).display === 'none') {
    settingsElements2.style.display = 'block';
    settingsElements1.style.display = 'none';
  }
});

timer.addEventListener('click', () => {
  if (getComputedStyle(settingsElements1).display === 'none') {
    settingsElements1.style.display = 'flex';
    settingsElements2.style.display = 'none'; 
  }
});
