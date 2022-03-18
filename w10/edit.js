const formTwo = document.querySelector("#form2");
const errorDiv = document.querySelector("#error");

let wakeUpRoutine = getSavedReactions();
const id = location.hash.substring(1);
let reactions = wakeUpRoutine.find(function (each) {
  return id === each.id;
});

if (wakeUpRoutine === undefined) {
  location.assign("index.html");
}

formTwo.addEventListener("submit", function (e) {
  e.preventDefault();
  let errors = [];
  wakeUpRoutine.thought = formTwo.elements.productivity.value;
  if (wakeUpRoutine.thought === "0") {
    errors.push("Please select an answer.");
  } else {
    saveReactions(wakeUpRoutine);
    location.assign("index.html");
  }
  if (errors.length > 0) {
    errorDiv.textContent = errors.join(", ");
  }
});
