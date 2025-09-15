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

pink1.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('../images/pink1.jpg')";
  toDoListIcon.style.color = "#ffa3bd";
  namE.style.color = "#de0252";
  nameSpan.style.color = "#fc6e96";
  focusButton.style.color = "#ff487b";
  breakButton.style.backgroundColor = "#ff487b";
  mainTimer.style.webkitTextStroke = "2px #ff487b";
  mainTimer.style.textShadow = "10px 6px 0 #ff89ab";
  startButton.style.backgroundColor = "#ff487b";
  stopButton.style.backgroundColor = "#ff487b";
  resetButton.style.backgroundColor = "#ff487b";
  settingsIcon.style.color = "#ff487b";
  addButton.style.backgroundColor = '#ff487b';
  breakButton.onmouseenter = () => {
    breakButton.style.backgroundColor = 'transparent';
    breakButton.style.color = '#ff487b';
  };
  startButton.onmouseenter = () => {startButton.style.backgroundColor = '#de3665';};
  stopButton.onmouseenter = () => {stopButton.style.backgroundColor = '#de3665';};
  resetButton.onmouseenter = () => {resetButton.style.backgroundColor = '#de3665';};
  breakButton.onmouseleave = () => {
    breakButton.style.backgroundColor = '#ff487b';
    breakButton.style.color = '#fff';
  };
  startButton.onmouseleave = () => {startButton.style.backgroundColor = '#ff487b';};
  stopButton.onmouseleave = () => {stopButton.style.backgroundColor = '#ff487b';};
  resetButton.onmouseleave = () => {resetButton.style.backgroundColor = '#ff487b';};
});
pink2.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('../images/pink2.jpg')";
  toDoListIcon.style.color = "#ffa3bd";
  namE.style.color = "#de0252";
  nameSpan.style.color = "#fc6e96";
  focusButton.style.color = "#ff487b";
  breakButton.style.backgroundColor = "#ff487b";
  mainTimer.style.webkitTextStroke = "2px #ff487b";
  mainTimer.style.textShadow = "10px 6px 0 #ff89ab";
  startButton.style.backgroundColor = "#ff487b";
  stopButton.style.backgroundColor = "#ff487b";
  resetButton.style.backgroundColor = "#ff487b";
  settingsIcon.style.color = "#ff487b";
  addButton.style.backgroundColor = '#ff487b';
  breakButton.onmouseenter = () => {
    breakButton.style.backgroundColor = 'transparent';
    breakButton.style.color = '#ff487b';
  };
  startButton.onmouseenter = () => {startButton.style.backgroundColor = '#de3665';};
  stopButton.onmouseenter = () => {stopButton.style.backgroundColor = '#de3665';};
  resetButton.onmouseenter = () => {resetButton.style.backgroundColor = '#de3665';};
  breakButton.onmouseleave = () => {
    breakButton.style.backgroundColor = '#ff487b';
    breakButton.style.color = '#fff';
  };
  startButton.onmouseleave = () => {startButton.style.backgroundColor = '#ff487b';};
  stopButton.onmouseleave = () => {stopButton.style.backgroundColor = '#ff487b';};
  resetButton.onmouseleave = () => {resetButton.style.backgroundColor = '#ff487b';};
});
pink3.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('../images/pink3.jpg')";
  toDoListIcon.style.color = "#ffa3bd";
  namE.style.color = "#de0252";
  nameSpan.style.color = "#fc6e96";
  focusButton.style.color = "#ff487b";
  breakButton.style.backgroundColor = "#ff487b";
  mainTimer.style.webkitTextStroke = "2px #ff487b";
  mainTimer.style.textShadow = "10px 6px 0 #ff89ab";
  startButton.style.backgroundColor = "#ff487b";
  stopButton.style.backgroundColor = "#ff487b";
  resetButton.style.backgroundColor = "#ff487b";
  settingsIcon.style.color = "#ff487b";
  addButton.style.backgroundColor = '#ff487b';
  breakButton.onmouseenter = () => {
    breakButton.style.backgroundColor = 'transparent';
    breakButton.style.color = '#ff487b';
  };
  startButton.onmouseenter = () => {startButton.style.backgroundColor = '#de3665';};
  stopButton.onmouseenter = () => {stopButton.style.backgroundColor = '#de3665';};
  resetButton.onmouseenter = () => {resetButton.style.backgroundColor = '#de3665';};
  breakButton.onmouseleave = () => {
    breakButton.style.backgroundColor = '#ff487b';
    breakButton.style.color = '#fff';
  };
  startButton.onmouseleave = () => {startButton.style.backgroundColor = '#ff487b';};
  stopButton.onmouseleave = () => {stopButton.style.backgroundColor = '#ff487b';};
  resetButton.onmouseleave = () => {resetButton.style.backgroundColor = '#ff487b';};
});

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
  breakButton.onmouseenter = () => {
    breakButton.style.backgroundColor = 'transparent';
    breakButton.style.color = '#274579';
  };
  startButton.onmouseenter = () => {startButton.style.backgroundColor = '#1d3660';};
  stopButton.onmouseenter = () => {stopButton.style.backgroundColor = '#1d3660';};
  resetButton.onmouseenter = () => {resetButton.style.backgroundColor = '#1d3660';};
  breakButton.onmouseleave = () => {
    breakButton.style.backgroundColor = '#274579';
    breakButton.style.color = '#fff';
  };
  startButton.onmouseleave = () => {startButton.style.backgroundColor = '#274579';};
  stopButton.onmouseleave = () => {stopButton.style.backgroundColor = '#274579';};
  resetButton.onmouseleave = () => {resetButton.style.backgroundColor = '#274579';};
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
  breakButton.onmouseenter = () => {
    breakButton.style.backgroundColor = 'transparent';
    breakButton.style.color = '#274579';
  };
  startButton.onmouseenter = () => {startButton.style.backgroundColor = '#1d3660';};
  stopButton.onmouseenter = () => {stopButton.style.backgroundColor = '#1d3660';};
  resetButton.onmouseenter = () => {resetButton.style.backgroundColor = '#1d3660';};
  breakButton.onmouseleave = () => {
    breakButton.style.backgroundColor = '#274579';
    breakButton.style.color = '#fff';
  };
  startButton.onmouseleave = () => {startButton.style.backgroundColor = '#274579';};
  stopButton.onmouseleave = () => {stopButton.style.backgroundColor = '#274579';};
  resetButton.onmouseleave = () => {resetButton.style.backgroundColor = '#274579';};
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
  breakButton.onmouseenter = () => {
    breakButton.style.backgroundColor = 'transparent';
    breakButton.style.color = '#274579';
  };
  startButton.onmouseenter = () => {startButton.style.backgroundColor = '#1d3660';};
  stopButton.onmouseenter = () => {stopButton.style.backgroundColor = '#1d3660';};
  resetButton.onmouseenter = () => {resetButton.style.backgroundColor = '#1d3660';};
  breakButton.onmouseleave = () => {
    breakButton.style.backgroundColor = '#274579';
    breakButton.style.color = '#fff';
  };
  startButton.onmouseleave = () => {startButton.style.backgroundColor = '#274579';};
  stopButton.onmouseleave = () => {stopButton.style.backgroundColor = '#274579';};
  resetButton.onmouseleave = () => {resetButton.style.backgroundColor = '#274579';};
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
  breakButton.onmouseenter = () => {
    breakButton.style.backgroundColor = 'transparent';
    breakButton.style.color = '#24351e';
  };
  startButton.onmouseenter = () => {startButton.style.backgroundColor = '#1b2816ff';};
  stopButton.onmouseenter = () => {stopButton.style.backgroundColor = '#1b2816ff';};
  resetButton.onmouseenter = () => {resetButton.style.backgroundColor = '#1b2816ff';};
  breakButton.onmouseleave = () => {
    breakButton.style.backgroundColor = '#24351e';
    breakButton.style.color = '#fff';
  };
  startButton.onmouseleave = () => {startButton.style.backgroundColor = '#24351e';};
  stopButton.onmouseleave = () => {stopButton.style.backgroundColor = '#24351e';};
  resetButton.onmouseleave = () => {resetButton.style.backgroundColor = '#24351e';};
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
  breakButton.onmouseenter = () => {
    breakButton.style.backgroundColor = 'transparent';
    breakButton.style.color = '#24351e';
  };
  startButton.onmouseenter = () => {startButton.style.backgroundColor = '#1b2816ff';};
  stopButton.onmouseenter = () => {stopButton.style.backgroundColor = '#1b2816ff';};
  resetButton.onmouseenter = () => {resetButton.style.backgroundColor = '#1b2816ff';};
  breakButton.onmouseleave = () => {
    breakButton.style.backgroundColor = '#24351e';
    breakButton.style.color = '#fff';
  };
  startButton.onmouseleave = () => {startButton.style.backgroundColor = '#24351e';};
  stopButton.onmouseleave = () => {stopButton.style.backgroundColor = '#24351e';};
  resetButton.onmouseleave = () => {resetButton.style.backgroundColor = '#24351e';};
});
green3.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('../images/kawaii3.jpg')" ;
  toDoListIcon.style.color = "#60b442";
  namE.style.color = "#559e3aff";
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
 breakButton.onmouseenter = () => {
    breakButton.style.backgroundColor = 'transparent';
    breakButton.style.color = '#24351e';
  };
  startButton.onmouseenter = () => {startButton.style.backgroundColor = '#1b2816ff';};
  stopButton.onmouseenter = () => {stopButton.style.backgroundColor = '#1b2816ff';};
  resetButton.onmouseenter = () => {resetButton.style.backgroundColor = '#1b2816ff';};
  breakButton.onmouseleave = () => {
    breakButton.style.backgroundColor = '#24351e';
    breakButton.style.color = '#fff';
  };
  startButton.onmouseleave = () => {startButton.style.backgroundColor = '#24351e';};
  stopButton.onmouseleave = () => {stopButton.style.backgroundColor = '#24351e';};
  resetButton.onmouseleave = () => {resetButton.style.backgroundColor = '#24351e';};
});

//changing fonts

const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");
const fonts = ["default","active1","active2"];
let i = 0;

function setFonts () {
  mainTimer.classList.remove("active1","active2");
  if (i > 0) {
    mainTimer.classList.add(fonts[i]);
  }
}

icon2.addEventListener('click', () => {
  if (i < fonts.length -1) {
    i++;
  }
  setFonts();
});

icon1.addEventListener('click', () => {
  if (i > 0) {
    i--;
  }
  setFonts();
});

//timer

let timeLeft = 1500;
let interval;

const updateTimer = () => {
  const min = Math.floor(timeLeft / 60);
  const sec = timeLeft % 60;
  
  mainTimer.innerHTML = `${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
}

startButton.addEventListener('click', () => {
  interval = setInterval(() =>{
    timeLeft--;
    updateTimer();

    if(timeLeft === 0) {
      clearInterval(interval);
      timeLeft = 1500;
      updateTimer();
      alert("time's up!");
    }
  }, 1000);
});

stopButton.addEventListener('click', () => {
  clearInterval(interval);
});

resetButton.addEventListener('click', () => {
  clearInterval(interval);
  if (isBreakMode) {
    timeLeft = 300;
  }else {
    timeLeft = 1500;
  }
  updateTimer();
});

let isBreakMode = false;
focusButton.addEventListener('click', () => {
  isBreakMode = false;
  mainTimer.textContent = "25:00";
});



breakButton.addEventListener('click', () => {
  isBreakMode = true;
  mainTimer.textContent = "05:00";

  breakButton.onmouseenter = () => {
    
  }
});