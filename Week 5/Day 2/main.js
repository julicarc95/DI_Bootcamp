let h1 = document.getElementById("H1");
console.log(h1);

let lastP = document.getElementById("lastP");
lastP.remove();

let h2Red = document.getElementById("H2");
h2Red.addEventListener('click', changeColor)
function changeColor(){
    h2Red.style.backgroundColor = "red";
    return false;
}

let h3Hidden = document.getElementById("hidden");
h3Hidden.addEventListener('click', hide);
function hide(){
    h3Hidden.style.display = "none";
    return false;
}

let btn = document.getElementById('btn')
btn.addEventListener('click', Bold)
function Bold(){
    let paragraphs = document.getElementsByTagName("p")
    paragraphs.style.fontWeight="bold";
    return false;
}