document.querySelector("#push").addEventListener("click", function () {
  wakeUpRoutine.forEach(function (obj) {
    dailyEvents(obj);
  });
});
const wakeUpRoutine = [
  {
    isSchool: true,
    isWork: true,
    currentTime: 7,
    alarm: 8,
    currentDay: "Monday",
    overSlept: false,
  },
  {
    isSchool: true,
    isWork: false,
    currentTime: 5,
    alarm: 8,
    currentDay: "Tuesday",
    overSlept: false,
  },
  {
    isSchool: true,
    isWork: true,
    currentTime: 7,
    alarm: 8,
    currentDay: "Wednesday",
    overSlept: false,
  },
  {
    isSchool: true,
    isWork: false,
    currentTime: 5,
    alarm: 8,
    currentDay: "Thursday",
    overSlept: false,
  },
  {
    isSchool: false,
    isWork: false,
    currentTime: 3,
    alarm: 8,
    currentDay: "Friday",
    overSlept: false,
  },
  {
    isSchool: false,
    isWork: false,
    currentTime: 11,
    alarm: 8,
    currentDay: "Saturday",
    overSlept: true,
  },
  {
    isSchool: true,
    isWork: true,
    currentTime: 12,
    alarm: 8,
    currentDay: "Sunday",
    overSlept: true,
  },
];
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
    alarmSound =
    alarmSound +
    "I have enough time to work out, shower, eat breakfast, and practice music!";
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
  const output = document.querySelector("#output");
  const pushToDaily = function (text, html) {
    let newHtml = document.createElement(html);
    newHtml.textContent = text;
    output.append(newHtml);
  };
  pushToDaily("Data in my array of objects:", "h1");
  pushToDaily(`Do I have school: ${obj.isSchool}`, "li");
  pushToDaily(`Do I have work: ${obj.isWork}`, "li");
  pushToDaily(`Current time: ${obj.currentTime}`, "li");
  pushToDaily(`Day: ${obj.currentDay}`, "li");
  pushToDaily(`My alarm is set for: ${obj.alarm}`, "li");
  pushToDaily(`Did I oversleep: ${obj.overSlept}`, "li");
  outcome = gettingReady(availableTime, obj.overSlept);
  pushToDaily(`Response:`, "h1");
  pushToDaily(outcome.reaction, "h3");
  pushToDaily(outcome.alarmSound, "h3");
};