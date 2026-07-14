window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#0d0d0d";
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,.4)";
    } else {
        header.style.background = "#181818";
        header.style.boxShadow = "none";
    }
});

console.log("DEVİS PERGOLE TÜRKİYE");
