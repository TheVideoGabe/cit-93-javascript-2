const saveReactions = (wakeUpRoutine) => {
  localStorage.setItem("saved-reactions", JSON.stringify(wakeUpRoutine));
};
const getSavedReactions = () => {
  const reactionsJSON = localStorage.getItem("saved-reactions");
  return reactionsJSON ? JSON.parse(reactionsJSON): []
};

const gettingReady = (availableTime, overSlept) => {
  let reaction = "";
  let prepTime = "Things I can do If I get up before my alarm: ";
  if (overSlept) {
    prepTime = prepTime + "whoops!";
    reaction = "I overslept.. I need to stop doing that.";
  } else if (availableTime <= 1) {
    prepTime = prepTime + "I have enough time to shower and eat breakfast!";
    reaction = "1 Hour of free time is not bad..";
  } else if (availableTime >= 2) {
    prepTime =
      prepTime +
      "I have enough time to work out, shower, eat breakfast, and practice music!";
    reaction = "More free time in the morning is great!";
  } else {
    prepTime = prepTime + "Didnt hear my alarm... ";
    reaction = "I should make it something more annoying.";
  }
  return { prepTime: prepTime, reaction: reaction };
};

const dailyEvents = (obj) => {
  let timeLeft = obj.alarm - obj.currentTime;
  if (obj.overSlept) {
    availableTime = timeLeft;
  } else {
    availableTime = timeLeft;
  }
  toForm = gettingReady(timeLeft, obj.overSlept);
  toForm.id = uuidv4();
  toForm.dateCreated = obj.createdAt;
  toForm.dateUpdated = obj.updatedAt;
  toForm.productivity = obj.productivity;
  wakeUpRoutine.push(toForm);
  saveReactions(wakeUpRoutine);
  renderForm(wakeUpRoutine);
};

const renderReactionDiv = (render) => {
  const reactionDiv = document.createElement("div");
  reactionDiv.setAttribute("class", "output");
  const button = document.createElement("button");
  reactionDiv.appendChild(button);
  button.textContent = "Remove";
  button.addEventListener("click", () => {
    removeRoutine(render.id);
    saveReactions(wakeUpRoutine);
    renderForm(wakeUpRoutine);
  });

  const button2 = document.createElement("button");
  reactionDiv.appendChild(button2);
  button2.textContent = "Edit";
  button2.addEventListener("click", () => {
    location.assign(`edit.html`);
  });

  const createdEl = document.createElement("span");
  createdEl.textContent = `This was created: ${moment(timestamp).format(
    "dddd, MMMM Do YYYY"
  )}`;

  reactionDiv.appendChild(createdEl);
  const prepTimeEl = document.createElement("h3");
  prepTimeEl.textContent = `${render.prepTime}`;
  reactionDiv.appendChild(prepTimeEl);
  const reactionEl = document.createElement("p");
  reactionEl.textContent = `${render.reaction}`;
  reactionDiv.appendChild(reactionEl);
  return reactionDiv;
};

const renderForm = (wakeUpRoutine) => {
  outputDiv.innerHTML = "";
  wakeUpRoutine.forEach((render) => {
    const reactionDiv = renderReactionDiv(render);
    outputDiv.appendChild(reactionDiv);
  });
};

const removeRoutine = (id) => {
  const routineIndex = wakeUpRoutine.findIndex((routine) => routine.id === id)
  if (routineIndex > -1) {
    wakeUpRoutine.splice(routineIndex, 1);
  }
};
const addProductivity = (productivity) => {
  const routineRating = wakeUpRoutine.find((routine) => routine.productivity = productivity)
if (routineRating) {
  wakeUpRoutine.push(routineRating);
}
}

const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`