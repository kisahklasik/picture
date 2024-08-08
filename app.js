imgInp.onchange = evt => {
const [file] = imgInp.files
if (file) {
avatar.src = URL.createObjectURL(file)
}
}

maskInp.onchange = evt => {
const [file] = maskInp.files
if (file) {
twibbon.src = URL.createObjectURL(file)
}
}
  
let status = document.getElementById("status");
let save = document.getElementById("dl");

save.addEventListener("click", () => {

var img = document.getElementById("avatar");
var mask = document.getElementById("twibbon");
var canvas = document.getElementById("cvs");
var ctx = canvas.getContext("2d");

status.innerText = 'Done!';
canvas.width = canvas.height = 1024;

setTimeout(() => {
save.disabled = true;
save.textContent = "Success!";
}, 3000);
  
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(img,  0, 0, canvas.width / 1, canvas.height / 1);
ctx.drawImage(mask, 0, 0, canvas.width, canvas.height);
ctx.imageSmoothingEnabled = true;

let canvasUrl = canvas.toDataURL();
const createEl = document.createElement('a');
createEl.href = canvasUrl;
createEl.download = "image";
createEl.click();
createEl.remove();

document.getElementById("shared").innerHTML =
<button id="shared">Share</button>';

});
