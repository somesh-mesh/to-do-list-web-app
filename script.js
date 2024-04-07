const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add event listener to the container to handle clicks on dynamic list items
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData(); // Save data after toggling the task completion
  } else if (e.target.tagName === "SPAN") {
    e.stopPropagation(); // Prevent the click event from bubbling up to the list item
    e.target.parentElement.remove(); // Remove the corresponding list item
    saveData(); // Save data after deleting the task
  }
});

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputBox.value = ""; // Clear input box after adding task
    saveData();
  }
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  const data = localStorage.getItem("data");
  if (data) {
    listContainer.innerHTML = data;
  }
}
showTask();
