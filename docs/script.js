const canvasElem = document.getElementById("canvas");
const canvasHolderElem = document.getElementById("canvasHolder");
canvasElem.height = canvasHolderElem.offsetHeight;
canvasElem.width = canvasHolderElem.offsetWidth;


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "white";
ctx.lineWidth = 1.5;
// ctx.beginPath();
// ctx.arc(canvas.width/2, canvas.height/2, canvas.height/10, 0, 2 * Math.PI);
// ctx.stroke(); 
// ctx.moveTo(50+2, 50-2);
// ctx.lineTo(50+2, 50-1);
// ctx.stroke();

console.log(canvas.width);
const bNum = (canvas.width/50);
const bubbles = [];
const bubbleDirections = [];
const bubbleColors = [];
// const colors = ["#fc0303", "#fc8003", "#fcf003", "#34d111", "#021dcc", "#8202cc"];
const colors = ["#75015e", "#990379", "#b50091", "#fa1bce", "#ff61e0", "#faa5e8", "#ffd9f7", "faf0f8"];
for(let i=0; i<bNum; i++) {
  const center = [Math.floor(Math.random() * canvas.width), canvas.height+(i*20)];
  bubbles.push(center);
  const leftOrRight = Math.floor(Math.random() * 2);
  if(leftOrRight === 0) {
    bubbleDirections.push(false);
    } else {
    bubbleDirections.push(true);
      }
  bubbleDirections.push(leftOrRight);
  const color = colors[Math.floor(Math.random() * colors.length)];
  bubbleColors.push(color);
}


async function init(){
  while(true) {
    for(let bubble = 0; bubble<bNum; bubble++){
      if(Math.floor(Math.random() * 50) === 3) {
        bubbleDirections[bubble] = !bubbleDirections[bubble];
      }
      var shift = -2;
      if(bubbleDirections[bubble]) {
        shift = 2;
      } 
      const center = [bubbles[bubble][0]+shift, bubbles[bubble][1]-(Math.floor(Math.random() * 2))-2];
      ctx.strokeStyle = (bubbleColors[bubble]);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(center[0], center[1], 20, 0, 2 * Math.PI);
      ctx.stroke(); 
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.arc(center[0], center[1], 14,-.3 * Math.PI, -.1*Math.PI);
      ctx.stroke();
      if(bubble === 0) {
        ctx.font = "20px serif";
        ctx.fillStyle = bubbleColors[bubble];
        ctx.fillText("G", center[0]-7, center[1]+7);
        } else if([1,3,6,8].includes(bubble)) {
        ctx.font = "24px serif";
        ctx.fillStyle = bubbleColors[bubble];
        ctx.fillText("e", center[0]-7, center[1]+7);
        } else if(bubble === 2) {
        ctx.font = "24px serif";
        ctx.fillStyle = bubbleColors[bubble];
        ctx.fillText("n", center[0]-7, center[1]+7);
        } else if([4,7].includes(bubble)) {
        ctx.font = "24px serif";
        ctx.fillStyle = bubbleColors[bubble];
        ctx.fillText("v", center[0]-7, center[1]+7);
        } else if(bubble === 5) {
        ctx.font = "24px serif";
        ctx.fillStyle = bubbleColors[bubble];
        ctx.fillText("i", center[0]-7, center[1]+7);
        }
      bubbles[bubble] = center;
      if(bubbles[bubble][1] <=0) {
        bubbles[bubble][1] =  canvas.height+20;
      }
      if(bubbles[bubble][0] < -20) {
        bubbleDirections[bubble] = true;
      } 
      if(bubbles[bubble][0] > canvas.width+20) {
        bubbleDirections[bubble] = false;
      } 
    }
    await delay(40);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  
  
  function delay(milliseconds){
      return new Promise(resolve => {
          setTimeout(resolve, milliseconds);
      });
  }
}

init();


var button = document.getElementsByClassName("button");
var i;

for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = null;
    console.log(this.classList);
    if(this.parentElement.classList.contains("right")) {
      content = this.previousElementSibling;
      console.log("pes is ", this.previousElementSibling);
    } else {
      content = this.nextElementSibling;
    }
    console.log("content is ", content);
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });
} 
