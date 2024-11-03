document.addEventListener("DOMContentLoaded", function () {
    fetch("sidebar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.text(); // Convert the response to text
        })
        .then(data => {
            document.getElementById("sidebarContainer").innerHTML = data; // Insert the text content
        })
        .catch(error => {
            console.error("Error loading sidebar:", error);
        });
});