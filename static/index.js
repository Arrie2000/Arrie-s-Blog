
window.onload = function () {
    const blogLeft = document.getElementsByClassName("left");
    const blogRight = document.getElementsByClassName("right");

    Array.from(blogLeft).forEach(function (elems) {
        elems.classList.add("left-animate");
    })

    Array.from(blogRight).forEach(function (elems) {
        elems.classList.add("right-animate");
    })
}


document.getElementById("right").addEventListener('click', function () {
    console.log("Fired");
    document.getElementById("sideBar").classList.add("rightSidebar-visible");
    document.getElementById("overlay").classList.add("dim");
    document.getElementsByTagName("body")[0].setAttribute("style","overflow: hidden;")
})

let sideBarclose = document.getElementById("close");
sideBarclose.addEventListener("click", close);

function close() {
    // document.getElementById("sideBar").classList.replace("rightSidebar-visible", "rightSidebar");
    document.getElementById("sideBar").classList.remove("rightSidebar-visible");
    console.log("Close Fired");
    document.getElementById("overlay").classList.remove("dim");
    document.getElementsByTagName("body")[0].removeAttribute("style","overflow: hidden;")
    // setTimeout(() => {
    //     document.getElementById("sideBar").setAttribute("style","display: none;")
    // }, 1000);
}

document.getElementById("overlay").addEventListener("click", close);
