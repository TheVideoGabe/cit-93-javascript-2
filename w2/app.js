 const showOnPage = function (text) {
   let newParagraph = document.createElement("p");
   newParagraph.innerHTML = text;
   let outputDiv = document.getElementById("output");
   outputDiv.append(newParagraph);
 };

let isSchool = false;
let isWork = true;
let currentTime = 8;


if (isSchool || isWork) {
  let gotThingsToDo = 'Do I have any responsibilities tomorrow, '
  console.log(gotThingsToDo + "I have to set an alarm for tomorrow");
  if (currentTime <= 7.9) {
    console.log("Its " + currentTime + "AM I can probably sleep some more...");
  } else if (currentTime >= 12) {
    console.log("Its " + currentTime + "PM OH NO I SLEPT TOO MUCH!");
  } else {
    console.log("Its " + currentTime + "AM I Gotta Wake Up...");
  }
} else {
  console.log("I can sleep in tomorrow");
    if (currentTime <= 7.9) {
      console.log("Its " + currentTime + "AM Im gonna sleep some more...");
    } else if (currentTime >= 12) {
      console.log("Its " + currentTime + "PM No worries though.");
    } else {
      console.log("Its " + currentTime + "AM ZZZ....");
    }
  }

  showOnPage('My global variables:')
  showOnPage('-Current Time: ' + currentTime + ' AM')
  showOnPage('-Do I have school in the morning: ' + isSchool)
  showOnPage('-Do I have work in the morning: ' + isWork)
  showOnPage('If I have work or school in the morning --> set alarm for the next day')
  showOnPage('If I dont have shool or work in the morning --> dont worry about alarms')
  showOnPage('My local variables:')
  showOnPage('-gotWork = "I gotta work tomorrow"')
  showOnPage('if current time is <= 7.9(7:55AM) "Im gonna sleep some more"')
  showOnPage('else if current time is >= 12 (12PM) "Oh no I slept too much"')
  showOnPage('else when current time is 8 AM then "I gotta wake up"')
  showOnPage('-gotSchool = "I gotta go to school"')
  showOnPage('if current time is <= 7.9(7:55AM) "Im am gonna sleep some more"')
  showOnPage('else if current time is >= 12 (12PM) "Its 12 pm no worries though"')
  showOnPage('else when current time is 8 AM then "ZZZ..."')