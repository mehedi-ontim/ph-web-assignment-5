// Completed button onclick operations
document.querySelectorAll(".completed-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    alert("Board updated successfully");

    // Task count increase decrease
    let taskLeft = document.getElementById("task-left");
    let taskDone = document.getElementById("task-done");
    let taskLeftNumber = Number(taskLeft.innerHTML);
    let taskDoneNumber = Number(taskDone.innerHTML);
    taskLeft.innerHTML = taskLeftNumber - 1;
    taskDone.innerHTML = taskDoneNumber + 1;

    // Disable button
    btn.disabled = true;
    btn.classList.remove("bg-[#3752FD]");
    btn.classList.add("bg-gray-400", "cursor-not-allowed");

    // Show activity log message
    const activityLog = document.querySelector("#activity-log");
    const taskName = this.closest(".task-card").querySelector("h2").innerText;
    const time = new Date().toLocaleTimeString();
    const logEntry = document.createElement("p");
    logEntry.textContent = `You have completed the task ${taskName} at ${time}`;
    logEntry.classList.add(
      "bg-[#F4F7FF]",
      "text-sm",
      "mb-4",
      "p-2",
      "rounded-lg",
      "shadow-sm"
    );
    activityLog.appendChild(logEntry);
  });
});

// Day and Time
function updateDayAndDate() {
  const now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[now.getDay()];
  const date = now.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  document.getElementById("day-date").textContent = `${day}, ${date}`;
}
window.onload = updateDayAndDate;
