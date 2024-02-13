const mood = document.querySelector("#mood");

//Handle button clicks
function handleButtonClick(type) {
    store.dispatch({ type });
    const state = store.getState();
    mood.innerText = state.mood;
}

// Set default face
handleButtonClick("reset")

// Get references to all buttons
const resetBtn = document.querySelector("#reset");
const happyBtn = document.querySelector("#happy");
const sadBtn = document.querySelector("#sad");
const angryBtn = document.querySelector("#angry");
const confusedBtn = document.querySelector("#confused");

// Attach the same event listener to all buttons
resetBtn.addEventListener("click", () => handleButtonClick("reset"));
happyBtn.addEventListener("click", () => handleButtonClick("happy"));
sadBtn.addEventListener("click", () => handleButtonClick("sad"));
angryBtn.addEventListener("click", () => handleButtonClick("angry"));
confusedBtn.addEventListener("click", () => handleButtonClick("confused"));