<script>
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelectorAll(".sidebar a");

    // Toggle sidebar when clicking the hamburger
    hamburger.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Close sidebar when clicking a menu link (on mobile)
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            sidebar.classList.remove("active");
        });
    });
});
</script>
