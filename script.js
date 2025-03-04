let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextArticle();
}, 7000);

function nextArticle() {
    count++;
    if(count > 3) {
       count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}