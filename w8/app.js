
const wakeUpRoutine = [];

const gettingReady = function (availableTime, overSlept) {
  let reaction = "";
  let alarmSound = "Things I can do If I get up before my alarm: ";
  if (overSlept) {
    alarmSound = alarmSound + "whoops!";
    reaction = "I overslept.. I need to stop doing that.";
  } else if (availableTime <= 1) {
    alarmSound = alarmSound + "I have enough time to shower and eat breakfast!";
    reaction = "1 Hour of free time is not bad..";
  } else if (availableTime >= 2) {
    alarmSound = alarmSound + "I have enough time to work out, shower, eat breakfast, and practice music!";
    reaction = "More free time in the morning is great!";
  } else {
    alarmSound = alarmSound + "Didnt hear my alarm... ";
    reaction = "I should make it something more annoying.";
  }
  return { alarmSound: alarmSound, reaction: reaction };
};

const dailyEvents = function (obj) {
  let timeLeft = obj.alarm - obj.currentTime;
  if (obj.overSlept) {
    availableTime = timeLeft;
  } else {
    availableTime = timeLeft;
  }
  toForm = gettingReady(timeLeft, obj.overSlept);
  toForm.currentDay = obj.currentDay
  wakeUpRoutine.push(toForm);
  renderForm(wakeUpRoutine)
}

const renderForm = function (wakeUpRoutine) {
  document.querySelector('#output').innerHTML='';
  wakeUpRoutine.forEach(function (forAll) {
    const currentDayEl = document.createElement('h1');
    currentDayEl.textContent = `${forAll.currentDay}`;
    document.querySelector('#output').appendChild(currentDayEl);
    const alarmSoundEl = document.createElement('h3');
    alarmSoundEl.textContent = `${forAll.alarmSound}`;
    document.querySelector('#output').appendChild(alarmSoundEl);
    const reactionEl = document.createElement('h2');
    reactionEl.textContent = `${forAll.reaction}`;
    document.querySelector('#output').appendChild(reactionEl);
  });
};

renderForm(wakeUpRoutine);

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  currentDay = form.elements.currentDay.value;
  currentTime = form.elements.currentTime.value;
  isSchool = form.elements.isSchool.checked;
  isWork = form.elements.isWork.checked;
  overSlept = form.elements.isOverslept.checked;
  formObject = {
    currentDay: currentDay,
    currentTime: currentTime,
    isSchool: isSchool,
    isWork: isWork,
    alarm: 8,
    overSlept: overSlept,
  };
  dailyEvents(formObject);
  document.getElementById('form').reset();
});
