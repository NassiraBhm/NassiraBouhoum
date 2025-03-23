<script>
    document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const hamburger = document.createElement("button");
    hamburger.classList.add("hamburger");
    hamburger.innerHTML = '<div></div><div></div><div></div>';
    document.body.appendChild(hamburger);

    hamburger.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });
});
</script>
