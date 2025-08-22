const dropDown = document.getElementsByClassName("dropdown-button")[0];
const dropDownContent = document.getElementsByClassName("dropdown-content")[0];
const input = document.getElementsByClassName("inp")[0];
const taskList = document.getElementsByClassName("task-list")[0];

function dropDownClick () {
  dropDownContent.style.display = 
    dropDownContent.style.display === 'block' ? 'none' : 'block';
}


dropDown.addEventListener("click",dropDownClick);


function addTask() {
  const taskText = input.value.trim();
  if(taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    input.value = "";
  }
}
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

document.addEventListener("click", function(event) {
  const isClickInside = dropDown.contains(event.target) || dropDownContent.contains(event.target);

  if (!isClickInside) {
    dropDownContent.style.display = "none";
  }
});



const focusButton = document.getElementsByClassName("focus")[0];
const shortBreakButton = document.getElementsByClassName("short-break")[0];
const longBreakButton = document.getElementsByClassName("long-break")[0];


let time = 1500;
let countdown; 

const timerElement = document.querySelector('.timer');
const startButton = document.querySelector('.start');


function updateTimerDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  timerElement.textContent = formattedTime;
}

function startTimer() {
  if (countdown) return;

  countdown = setInterval(() => {
    if (time <= 0) {
      clearInterval(countdown);
      countdown = null;
      return;
    }

    time--;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(countdown);
  countdown = null;
}

startButton.addEventListener("click", function () {
  if (startButton.textContent.toLowerCase() === "start") {
    startTimer();
    startButton.textContent = "stop";
  } else {
    stopTimer();
    startButton.textContent = "start";
  }
});

updateTimerDisplay();

