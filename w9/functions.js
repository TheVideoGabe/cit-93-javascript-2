const saveReactions = function (wakeUpRoutine) {
  localStorage.setItem("saved-reactions", JSON.stringify(wakeUpRoutine));
};
const getSavedReactions = function () {
  const reactionsJSON = localStorage.getItem("saved-reactions");
  if (reactionsJSON != null) {
    return JSON.parse(reactionsJSON);
  } else {
    return [];
  }
};

const gettingReady = function (availableTime, overSlept) {
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
const dailyEvents = function (obj) {
  let timeLeft = obj.alarm - obj.currentTime;
  if (obj.overSlept) {
    availableTime = timeLeft;
  } else {
    availableTime = timeLeft;
  }
  toForm = gettingReady(timeLeft, obj.overSlept);
  toForm.currentDay = obj.currentDay;
  toForm.id = uuidv4();
  wakeUpRoutine.push(toForm);
  saveReactions(wakeUpRoutine);
  renderForm(wakeUpRoutine);
};

const renderReactionDiv = function (render) {
  const reactionDiv = document.createElement("div");
  reactionDiv.setAttribute("class", "output");
  const currentDayEl = document.createElement("h1");
  currentDayEl.textContent = `${render.currentDay}`;
  reactionDiv.appendChild(currentDayEl);
  const button = document.createElement("button");
  reactionDiv.appendChild(button);
  button.textContent = "Remove";
  button.addEventListener("click", function () {
    removeRoutine(render.id);
    saveReactions(wakeUpRoutine);
    renderForm(wakeUpRoutine);
  });
  const prepTimeEl = document.createElement("h3");
  prepTimeEl.textContent = `${render.prepTime}`;
  reactionDiv.appendChild(prepTimeEl);
  const reactionEl = document.createElement("p");
  reactionEl.textContent = `${render.reaction}`;
  reactionDiv.appendChild(reactionEl);
  return reactionDiv;
};

const renderForm = function (wakeUpRoutine) {
  outputDiv.innerHTML = "";
  wakeUpRoutine.forEach(function (render) {
    const reactionDiv = renderReactionDiv(render);
    outputDiv.appendChild(reactionDiv);
  });
};

const removeRoutine = function (id) {
  const routineIndex = wakeUpRoutine.findIndex(function (routine) {
    return routine.id === id;
  });
  if (routineIndex > -1) {
    wakeUpRoutine.splice(routineIndex, 1);
  }
};
