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

//change pink wallpaper

const pink1 = document.getElementById('pink__theme1');
const pink2 = document.getElementById('pink__theme2');
const pink3 = document.getElementById('pink__theme3');

pink1.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('../images/pink1.jpg')"
});
pink2.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('../images/pink2.jpg')"
});
pink3.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('../images/pink3.jpg')"
});

//change blue wallpaper

const blue1 = document.getElementById('blue1__theme');
const blue2 = document.getElementById('blue2__theme');
const blue3 = document.getElementById('blue3__theme');
const namE = document.getElementById('header__name');
const nameSpan = document.getElementById('header__span');
const focusButton = document.getElementById('focus__button');
const breakButton = document.getElementById('break__button');
const mainTimer = document.getElementById('main__timer');
const startButton = document.getElementById('start__button');
const stopButton = document.getElementById('stop__button');
const resetButton = document.getElementById('reset__button');

blue1.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('../images/blue1.jpg')" ;
  toDoListIcon.style.color = "#7496c0";
  namE.style.color = "#7496c0";
  nameSpan.style.color = "#274579";
  focusButton.style.color = "#274579";
  breakButton.style.backgroundColor = "#274579";
  mainTimer.style.webkitTextStroke = "2px #274579";
  mainTimer.style.textShadow = "10px 6px 0 #7496c0";
  startButton.style.backgroundColor = "#274579";
  stopButton.style.backgroundColor = "#274579";
  resetButton.style.backgroundColor = "#274579";
  settingsIcon.style.color = "#274579";
  addButton.style.backgroundColor = '#274579';
});
blue2.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('../images/blue2.jpg')" ;
  toDoListIcon.style.color = "#7496c0";
  namE.style.color = "#7496c0";
  nameSpan.style.color = "#274579";
  focusButton.style.color = "#274579";
  breakButton.style.backgroundColor = "#274579";
  mainTimer.style.webkitTextStroke = "2px #274579";
  mainTimer.style.textShadow = "10px 6px 0 #7496c0";
  startButton.style.backgroundColor = "#274579";
  stopButton.style.backgroundColor = "#274579";
  resetButton.style.backgroundColor = "#274579";
  settingsIcon.style.color = "#274579";
  addButton.style.backgroundColor = '#274579';
});
blue3.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('../images/blue3.jpg')" ;
  toDoListIcon.style.color = "#7496c0";
  namE.style.color = "#7496c0";
  nameSpan.style.color = "#274579";
  focusButton.style.color = "#274579";
  breakButton.style.backgroundColor = "#274579";
  mainTimer.style.webkitTextStroke = "2px #274579";
  mainTimer.style.textShadow = "10px 6px 0 #7496c0";
  startButton.style.backgroundColor = "#274579";
  stopButton.style.backgroundColor = "#274579";
  resetButton.style.backgroundColor = "#274579";
  settingsIcon.style.color = "#274579";
  addButton.style.backgroundColor = '#274579';
});

//change green wallpaper

const green1 = document.getElementById('green1__theme');
const green2 = document.getElementById('green2__theme');
const green3 = document.getElementById('green3__theme');

green1.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('../images/kawaii1.jpg')" ;
  toDoListIcon.style.color = "#60b442";
  namE.style.color = "#60b442";
  nameSpan.style.color = "#24351e";
  focusButton.style.color = "#24351e";
  breakButton.style.backgroundColor = "#24351e";
  mainTimer.style.webkitTextStroke = "2px #24351e";
  mainTimer.style.textShadow = "10px 6px 0 #60b442";
  startButton.style.backgroundColor = "#24351e";
  stopButton.style.backgroundColor = "#24351e";
  resetButton.style.backgroundColor = "#24351e";
  settingsIcon.style.color = "#24351e";
  addButton.style.backgroundColor = '#24351e';
});
green2.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('../images/kawaii2.jpg')" ;
  toDoListIcon.style.color = "#60b442";
  namE.style.color = "#60b442";
  nameSpan.style.color = "#24351e";
  focusButton.style.color = "#24351e";
  breakButton.style.backgroundColor = "#24351e";
  mainTimer.style.webkitTextStroke = "2px #24351e";
  mainTimer.style.textShadow = "10px 6px 0 #60b442";
  startButton.style.backgroundColor = "#24351e";
  stopButton.style.backgroundColor = "#24351e";
  resetButton.style.backgroundColor = "#24351e";
  settingsIcon.style.color = "#24351e";
  addButton.style.backgroundColor = '#24351e';
});
green3.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('../images/kawaii3.jpg')" ;
  toDoListIcon.style.color = "#60b442";
  namE.style.color = "#60b442";
  nameSpan.style.color = "#24351e";
  focusButton.style.color = "#24351e";
  breakButton.style.backgroundColor = "#24351e";
  mainTimer.style.webkitTextStroke = "2px #24351e";
  mainTimer.style.textShadow = "10px 6px 0 #60b442";
  startButton.style.backgroundColor = "#24351e";
  stopButton.style.backgroundColor = "#24351e";
  resetButton.style.backgroundColor = "#24351e";
  settingsIcon.style.color = "#24351e";
  addButton.style.backgroundColor = '#24351e';
});