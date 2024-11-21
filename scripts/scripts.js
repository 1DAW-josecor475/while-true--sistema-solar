document.addEventListener("DOMContentLoaded", () => {
    const sistemaSolar = document.getElementById("sistema-solar");

    sistemaSolar.addEventListener("click", () => {
        sistemaSolar.classList.toggle("centrado");
    });
});
