const form = document.createElement("form");
form.addEventListener("submit", validateForm);

const title = document.createElement("h2");
const button = document.createElement("button");
const input = document.createElement("input");
const list = document.createElement("ul");
const popup = document.createElement("p"); // Added popup element

// Set the text content
title.innerText = "Todo list";
button.innerText = "Add Task";
button.type = "submit"; // Set button type to submit

// Add elements to page
document.body.appendChild(title);
document.body.appendChild(form);
form.appendChild(input);
form.appendChild(button);
document.body.appendChild(list);
document.body.appendChild(popup); // Append demo element to the body

// Add classes
form.className = "form";
title.className = "title";
button.className = "button";
input.className = "input";
list.className = "list";
popup.className = "popup";

// Validate form
function validateForm(event) {
    event.preventDefault(); // Prevent form from submitting and reloading the page

    if (input.value !== "") {
        // Create a new to-do item
        createTodoItem(input.value);
        popup.innerText = ""; // Clear any previous popup message
        input.value = ""; // Clear the input field
    } 
    else {
        popup.innerText = "Please enter a valid todo";
    }
}

function createTodoItem(todoText) {
    // Create the list item
    const li = document.createElement("li");
    li.className = "todoItem";

    // Create the checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Add event listener to toggle strikethrough
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            label.classList.add("strikethrough");
        } else {
            label.classList.remove("strikethrough");
        }
    });

    // Create the label for the to-do text
    const label = document.createElement("span");
    label.innerText = todoText;

    // Append the checkbox and label to the list item
    li.appendChild(checkbox);
    li.appendChild(label);

    // Create a delete button for the to-do item
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "deleteBtn";
    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
    });

    // Add the delete button to the to-do item
    li.appendChild(deleteButton);

    // Add the to-do item to the list
    list.appendChild(li);
}