document.addEventListener("DOMContentLoaded", () => {
    const sistemaProxmox = document.getElementById("sistema-proxmox");
    const sistemaLinux = document.getElementById("sistema-linux");
    const sistemaShinChan = document.getElementById("sistema-shinchan");

    sistemaProxmox.addEventListener("click", () => {
        sistemaProxmox.classList.toggle("centrado");
    });
    sistemaLinux.addEventListener("click", () => {
        sistemaLinux.classList.toggle("centrado");
    });
    sistemaShinChan.addEventListener("click", () => {
        sistemaShinChan.classList.toggle("centrado");
    });
});
