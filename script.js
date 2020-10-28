const pages = document.querySelectorAll(".page");

pages.forEach(page => {
    page.addEventListener("click", e => {
        pages.forEach(p => {
            if (p !== page){
                p.classList.remove("expanded");
                // page.getElementsByClassName("page-content")[0].style.marginLeft = "-100vw"
                p.getElementsByClassName("page-content")[0].style.display = "none";
            }
        });
        page.classList.add("expanded");
        setTimeout(x => {page.getElementsByClassName("page-content")[0].style.display = "unset";}, 500);
    });
});

document.querySelector("#contact").classList.add("expanded");