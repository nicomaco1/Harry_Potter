document.getElementById("meetingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from refreshing the page

    // Get form values
    const name = document.getElementById("name").value;
    const meetingDate = document.getElementById("meetingDate").value;
    const time = document.getElementById("time").value;

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = `${name} has scheduled a meeting on ${meetingDate} at ${time}`;

    // Append the new item to the list
    document.getElementById("meetingList").appendChild(listItem);

    // Clear the form fields
    document.getElementById("meetingForm").reset();
});