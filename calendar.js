document.addEventListener("DOMContentLoaded", () => {
  const calendar = document.getElementById("calendar");

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function createCalendar() {
    calendar.innerHTML = "";

    daysOfWeek.forEach((day) => {
      const dayCell = document.createElement("div");
      dayCell.className = "header";
      dayCell.textContent = day;
      calendar.appendChild(dayCell);
    });

    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    for (let i = 0; i < firstDay.getDay(); i++) {
      const emptyCell = document.createElement("div");
      emptyCell.className = "day";
      calendar.appendChild(emptyCell);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      const dayCell = document.createElement("div");
      dayCell.className = "day";
      dayCell.textContent = i;
      calendar.appendChild(dayCell);
    }
  }

  createCalendar();
});
