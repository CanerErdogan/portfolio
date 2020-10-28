const pages = document.querySelectorAll(".page");



pages.forEach(page => {
    page.addEventListener("click", e => {
        pages.forEach(p => {
            if (p !== page){
                p.classList.remove("expanded");
                let content = p.getElementsByClassName("page-content");
                if (content.length) {
                    content[0].style.display = "none";
                };
            }
        });
        page.classList.add("expanded");
        let content = page.getElementsByClassName("page-content");
        if (content.length) {
            setTimeout(x => {content[0].style.display = "unset";}, 250);
        }
    });
});

document.querySelector("#contact").classList.add("expanded");