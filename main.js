function changeBackground () {
    var bg = document.getElementById("body");
    bg.classList.toggle("dark"); }
function darkOn() {
    var elem = document.getElementById("button");
    if (elem.innerHTML=="Dark Mode: Off") elem.innerHTML = "Dark Mode: On";
    else elem.innerHTML = "Dark Mode: Off";
}
function accept() {
    var cookie=document.getElementById("imgCookie")
    cookie.classList.toggle("yess")
}
function reject() {
    var cookie=document.getElementById("imgCookie")
    cookie.classList.toggle("noo")
}