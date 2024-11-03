// loadSidebar.js

// Get a reference to the sidebar container element
const sidebarContainer = document.getElementById('sidebarContainer');

// Create an XMLHttpRequest object to fetch the sidebar content
const xhr = new XMLHttpRequest();
xhr.open('GET', 'sidebar.html', true);

xhr.onload = function () {
    if (xhr.status === 200) {
        sidebarContainer.innerHTML = xhr.responseText;
    } else {
        // Handle error, e.g., display an error message
        console.error('Error loading sidebar content:', xhr.status);
        sidebarContainer.innerHTML = '<p>Error loading sidebar content.</p>';
    }
};

xhr.send();