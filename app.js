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

document.getElementById("share").innerHTML =
'<button id="shared">Share</button>';

alert("share image");
const dataUrl = canvas.toDataURL(); 
fetch(dataUrl)
.then(res => res.blob())
.then(blob => {
//console.log(blob)
const filesArray = [new File([blob], 'image.png', { type: blob.type, lastModified: new Date().getTime() })];
console.log(filesArray);
const shareData = {
title: "FREE AND SIMPLE PFP GENERATOR",
text: "FREE AND SIMPLE PFP GENERATOR",
url: "https://jiinbe.github.io/fabricjs2/",
files: filesArray
};
console.log(shareData);
if (navigator.share) {
navigator.share(
shareData
)
.then(() => alert("thanks for share")) 
.catch(error => alert("error", error)); 
} else {
alert('navigator.share not available'); 
}
})
});

});
