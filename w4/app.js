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
  const myRoutine = {
    daysTracked: 0,
    currentTime: 0,
    timeLeft: function (alarm) {
      const min = 1
      const max = 7
    const randomNumber = Math.floor(Math.random() * (max - min)) + min
      const timeLeft = alarm - randomNumber
      return `I have ${timeLeft} hours until I have to wake up...`
    },
      const: daysTracked = (function(dayCount) {
        return function() {
          dayCount += 1;
          return `I've tracked my routine for ${dayCount} days.
          ------------------
          The next day`;
        }
      }(0)),
  }

console.log(myRoutine.timeLeft(8))
console.log(daysTracked(0))
console.log(myRoutine.timeLeft(8))
console.log(daysTracked(0))
console.log(myRoutine.timeLeft(8))
console.log(daysTracked(0))
console.log(myRoutine.timeLeft(8))
console.log(daysTracked(0))
console.log(myRoutine.timeLeft(8))
console.log(daysTracked(0))
console.log(myRoutine.timeLeft(8))
console.log(daysTracked(0))
console.log(myRoutine.timeLeft(8))
console.log(daysTracked(0))
console.log(myRoutine.timeLeft(8))
console.log(daysTracked(0))
console.log(myRoutine.timeLeft(8))
console.log(daysTracked(0))
console.log(myRoutine.timeLeft(8))
console.log(daysTracked(0))


showOnPage(myRoutine.timeLeft(8))
showOnPage(daysTracked(0))
showOnPage(myRoutine.timeLeft(8))
showOnPage(daysTracked(0))
showOnPage(myRoutine.timeLeft(8))
showOnPage(daysTracked(0))
showOnPage(myRoutine.timeLeft(8))
showOnPage(daysTracked(0))
showOnPage(myRoutine.timeLeft(8))
showOnPage(daysTracked(0))
showOnPage(myRoutine.timeLeft(8))
showOnPage(daysTracked(0))
showOnPage(myRoutine.timeLeft(8))
showOnPage(daysTracked(0))
showOnPage(myRoutine.timeLeft(8))
showOnPage(daysTracked(0))
showOnPage(myRoutine.timeLeft(8))
showOnPage(daysTracked(0))
showOnPage(myRoutine.timeLeft(8))
showOnPage(daysTracked(0))