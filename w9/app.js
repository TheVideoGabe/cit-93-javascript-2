let wakeUpRoutine = getSavedReactions();

const headsUp = document.querySelector("#error");
const outputDiv = document.querySelector("#output");
const reactionDiv = document.querySelector("#reactions");

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  headsUp.innerHTML = "";
  currentDay = form.elements.currentDay.value;
  currentTime = form.elements.currentTime.value;
  isSchool = form.elements.isSchool.checked;
  isWork = form.elements.isWork.checked;
  overSlept = form.elements.isOverslept.checked;
  let errors = [];
  if (currentTime === "0" || currentDay === "0") {
    headsUp.textContent = "Please select current time and day.";
  } else {
    formObject = {
      id: uuidv4(),
      currentDay: currentDay,
      currentTime: currentTime,
      isSchool: isSchool,
      isWork: isWork,
      alarm: 8,
      overSlept: overSlept,
    };
    dailyEvents(formObject);
    saveReactions(wakeUpRoutine);
    document.getElementById("form").reset();
  }
  if (errors.length > 0) {
    headsUp.textContent = errors.join(", ");
  }
});

renderForm(wakeUpRoutine);
