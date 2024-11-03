document.addEventListener("DOMContentLoaded", function () {
    fetch("sidebar.html")
        .then(data => {
            const sidebarHTML = data;
            const sidebar = document.getElementById("sidebarContainer");
            sidebar.innerHTML = sidebarHTML;
        }) 

});
