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
  let gotSchool = 'I gotta go to school, '
  console.log(gotSchool + "I have to set an alarm for tomorrow");
  if (currentTime <= 7.9) {
    console.log("Its " + currentTime + "AM I can probably sleep some more...");
  } else if (currentTime >= 12) {
    console.log("Its " + currentTime + "PM OH NO I SLEPT TOO MUCH!");
  } else {
    console.log("Its " + currentTime + "AM I Gotta Wake Up...");
  }
} else {
  let gotWork = 'I gotta work tomorrow, '
  console.log(gotWork + "I can sleep in tomorrow");
    if (currentTime <= 7.9) {
      console.log("Its " + currentTime + "AM Im gonna sleep some more...");
    } else if (currentTime >= 12) {
      console.log("Its " + currentTime + "PM No worries though.");
    } else {
      console.log("Its " + currentTime + "AM I should Wake Up...");
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
  showOnPage('-gotSchool = "I gotta go to school"')