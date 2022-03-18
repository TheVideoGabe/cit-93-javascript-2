let wakeUpRoutine = getSavedReactions();

const headsUp = document.querySelector("#error");
const outputDiv = document.querySelector("#output");
const reactionDiv = document.querySelector("#reactions");

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  headsUp.innerHTML = "";
  currentTime = form.elements.currentTime.value;
  isSchool = form.elements.isSchool.checked;
  
  isWork = form.elements.isWork.checked;
  overSlept = form.elements.isOverslept.checked;
  let errors = [];
  const timestamp = moment().valueOf();
  if (currentTime === "0") {
    headsUp.textContent = "Please select current time.";
  } else {
    formObject = {
      id: uuidv4(),
      currentTime: currentTime,
      isSchool: isSchool,
      isWork: isWork,
      alarm: 8,
      overSlept: overSlept,
      createdAt: timestamp,
      updatedAt: timestamp,
      thought: "",
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
