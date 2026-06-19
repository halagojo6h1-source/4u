function nextPage(pageId) {

    let pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}


function noOption() {

    alert("لا عندك خيار ثاني؟ 🤨");

}


function openLetter() {

    nextPage("page7");

    let music = document.getElementById("music");

    music.play().catch(() => {
        console.log("Autoplay blocked.");
    });

}


function noMove(button) {

    button.style.position = "absolute";

    button.style.left = Math.random() * 90 + "%";

    button.style.top = Math.random() * 90 + "%";

}


/* ✅ ADDITION (NEW) */
/* دعم الانتقال للصفحة 8 إذا تم استدعاؤها */

function goToPage8() {
    nextPage("page8");
}
