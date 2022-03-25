const formTwo = document.querySelector("#form2");
const errorDiv = document.querySelector("#error");
const outputDiv = document.querySelector("#output");



let wakeUpRoutine = getSavedReactions();
const id = location.hash.substring(1);
let reactions = wakeUpRoutine.find((each) => id === each.id)

if (reactions) {
  location.assign("index.html");
}

formTwo.addEventListener("submit", (e) => {
  e.preventDefault();
  let errors = [];
  wakeUpRoutine.productivity = formTwo.elements.productivity.value
  if (wakeUpRoutine.productivity === "0") {
    errors.push("Please select an answer.");
  } else {
    addProductivity(e.productivity)
    saveReactions(wakeUpRoutine);
    location.assign("index.html");
  }
  if (errors.length > 0) {
    errorDiv.textContent = errors.join(", ");
  }
});

