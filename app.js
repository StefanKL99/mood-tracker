// ---------- State ----------
let selectedMood = null; // will look like { mood: "Calm", score: 4 }

// ---------- DOM references ----------
const moodSelector = document.querySelector("#mood-selector");
const moodButtons = moodSelector.querySelectorAll(".mood-btn");
const entryForm = document.querySelector("#entry-form");
const logBtn = document.querySelector("#log-btn");

// ---------- Functions ----------
function selectMood(button) {
  // 1. Clear the previous selection
  moodButtons.forEach((btn) => {
    btn.classList.remove("selected");
    btn.setAttribute("aria-pressed", "false");
  });

  // 2. Highlight the clicked button
  button.classList.add("selected");
  button.setAttribute("aria-pressed", "true");

  // 3. Update state (dataset values are always strings, so convert the score)
  selectedMood = {
    mood: button.dataset.mood,
    score: Number(button.dataset.score),
  };

  // 4. Allow logging now that a mood is chosen
  logBtn.disabled = false;
}

// ---------- Event listeners ----------
moodSelector.addEventListener("click", (event) => {
  const button = event.target.closest(".mood-btn");
  if (!button) return; // click landed on the gap between buttons
  selectMood(button);
});

// Temporary: stop the form reloading the page. Step 4 replaces this.
entryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Submitted with:", selectedMood);
});

// ---------- Init ----------
logBtn.disabled = true;
moodButtons.forEach((btn) => btn.setAttribute("aria-pressed", "false"));
