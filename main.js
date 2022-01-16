const mobileTop = document.querySelector(".top.mob");
const deskTop = document.querySelector(".top.desk");
const header = document.querySelector("header");
const title = document.querySelector("header h1")
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");


hamburger.addEventListener("click", function(){
    deskTop.style.display = "none";
    mobileTop.style.display = "block";
    closeBtn.style.display = "block";
    this.style.display = "none"; 
    title.style.display = "none";
    header.classList.add("no-padding");

})
closeBtn.addEventListener("click", function(){
    deskTop.style.display = "flex";
    mobileTop.style.display = "none";
    title.style.display = "block";
    hamburger.style.display = "block";
    header.classList.remove("no-padding");
    this.style.display = "none"; 
})