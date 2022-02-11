const showOnPage = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};

// let isSchool = false;
// let isWork = true;
// let currentTime = 8;

// if (isSchool || isWork) {
//   let gotThingsToDo = 'Do I have any responsibilities tomorrow, '
//   console.log(gotThingsToDo + "I have to set an alarm for tomorrow");
//   if (currentTime <= 7.9) {
//     console.log("Its " + currentTime + "AM I can probably sleep some more...");
//   } else if (currentTime >= 12) {
//     console.log("Its " + currentTime + "PM OH NO I SLEPT TOO MUCH!");
//   } else {
//     console.log("Its " + currentTime + "AM I Gotta Wake Up...");
//   }
// // } else {
// //   console.log("I can sleep in tomorrow");
// //     if (currentTime <= 7.9) {
// //       console.log("Its " + currentTime + "AM Im gonna sleep some more...");
// //     } else if (currentTime >= 12) {
// //       console.log("Its " + currentTime + "PM No worries though.");
// //     } else {
// //       console.log("Its " + currentTime + "AM ZZZ....");
// //     }
// //   }

//   // showOnPage('My global variables:')
//   // showOnPage('-Current Time: ' + currentTime + ' AM')
//   // showOnPage('-Do I have school in the morning: ' + isSchool)
//   // showOnPage('-Do I have work in the morning: ' + isWork)
//   // showOnPage('If I have work or school in the morning --> set alarm for the next day')
//   // showOnPage('If I dont have shool or work in the morning --> dont worry about alarms')
//   // showOnPage('My local variables:')
//   // showOnPage('-gotWork = "I gotta work tomorrow"')
//   // showOnPage('if current time is <= 7.9(7:55AM) "Im gonna sleep some more"')
//   // showOnPage('else if current time is >= 12 (12PM) "Oh no I slept too much"')
//   // showOnPage('else when current time is 8 AM then "I gotta wake up"')
//   // showOnPage('-gotSchool = "I gotta go to school"')
//   // showOnPage('if current time is <= 7.9(7:55AM) "Im am gonna sleep some more"')
//   // showOnPage('else if current time is >= 12 (12PM) "Its 12 pm no worries though"')
//   // showOnPage('else when current time is 8 AM then "ZZZ..."')

//   // Fist function that sets up a routine based on an 8AM Alarm.
//   const getRoutine = function (currentTime) {
//     let beResponsible = 'set an alarm.'
// // If statements based on the current time
//     if (currentTime <= 7.9) {
//       reaction = 'AM I can probably sleep some more.'
//     } else if (currentTime >= 12) {
//       reaction = 'PM OH NO I OVERSLEPT!'
//     } else {
//       reaction = 'AM I gotta get up.'
//     }
// // a return statement putting everything together
//     return `So tomorrow I got things to do and I should ${beResponsible}
//     ------------The Next Day-------------
//   It is currently ${currentTime}${reaction}`
// }
// // calling the get routine function and inserting 12 as the current time
//   const routine = getRoutine (12)
//   console.log(routine)
//   // showOnPage(routine)

//   // 2ND function that adds what i can do based on the previous function
//   let gettingReady = function (currentTime) {
//     // A variable that calls a return from my previous function
//     var callReturn = getRoutine(7)
//    console.log(callReturn)
//   //  showOnPage(callReturn)
//    // If statements that determine what i can do based on how much time i have left before 8
//     if (currentTime <= 7.9) {
//       timeToGetReady = 'I have time to relax'
//     } else if (currentTime >= 12) {
//       timeToGetReady = 'I have to go, not time to lose!'
//     } else {
//       timeToGetReady = 'I have enough time to get ready without stressing'
//     }
//     // returns what I have time to do
//       return `At least today ${timeToGetReady}`
//   }
// // calling the gettingReady function
//   let gotReady = gettingReady (7)
//   console.log(gotReady)
//   // showOnPage(gotReady)

// Making my code into an object with methods
// const myRoutine = {
//   daysTracked: 0,
//   currentTime: 0,
//   timeLeft: function (alarm) {
//     const min = 1
//     const max = 7
//   const randomNumber = Math.floor(Math.random() * (max - min)) + min
//     const timeLeft = alarm - randomNumber
//     return `I have ${timeLeft} hours until I have to wake up...`
//   },
//     const: daysTracked = (function(dayCount) {
//       return function() {
//         dayCount += 1;
//         return `I've tracked my routine for ${dayCount} days.
//         ------------------
//         The next day`;
//       }
//     }(0)),
// }

// console.log(myRoutine.timeLeft(8))
// console.log(daysTracked(0))
// console.log(myRoutine.timeLeft(8))
// console.log(daysTracked(0))
// console.log(myRoutine.timeLeft(8))
// console.log(daysTracked(0))
// console.log(myRoutine.timeLeft(8))
// console.log(daysTracked(0))
// console.log(myRoutine.timeLeft(8))
// console.log(daysTracked(0))
// console.log(myRoutine.timeLeft(8))
// console.log(daysTracked(0))
// console.log(myRoutine.timeLeft(8))
// console.log(daysTracked(0))
// console.log(myRoutine.timeLeft(8))
// console.log(daysTracked(0))
// console.log(myRoutine.timeLeft(8))
// console.log(daysTracked(0))
// console.log(myRoutine.timeLeft(8))
// console.log(daysTracked(0))

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

const spill = function (inside, top) {
  showOnPage(`${top}`);
  showOnPage(inside);
  // console.log(`${top}`);
  // console.log(inside);
};

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
  return `${alarmSound} <br> ${reaction}`;
};

const dailyEvents = function (obj) {
  let timeLeft = obj.alarm - obj.currentTime;
  if (obj.overSlept) {
    availableTime = timeLeft;
  } else {
    availableTime = timeLeft;
  }
  data = `Day: ${obj.currentDay} <br> Current Time: ${obj.currentTime} <br> Alarm Time: ${obj.alarm} <br> Do I Have School? ${obj.isSchool} <br> Do I Have Work? ${obj.isWork} <br> Did I Oversleep? ${obj.overSlept} <br>`;

  spill(data, `Data in my Array of Objects:`);
  events = gettingReady(availableTime, obj.overSlept);
  spill(`${events}`, "Wake Up!");
};

const loopRoutine = function () {
  wakeUpRoutine.forEach(function (obj) {
    dailyEvents(obj);
  });
};

loopRoutine();
