

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

// Bubble generation system
function createBubble() {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  
  // Random size variation
  const rand = Math.random();
  if (rand < 0.3) {
    bubble.classList.add('small');
  } else if (rand > 0.8) {
    bubble.classList.add('large');
  }
  
  // Random horizontal position across the bottom of the page
  const randomX = Math.random() * window.innerWidth;
  
  // Random drift amount (side-to-side movement)
  const driftAmount = (Math.random() - 0.5) * 80; // -40px to +40px
  
  // Position at bottom of page
  bubble.style.left = randomX + 'px';
  bubble.style.bottom = '0px';
  bubble.style.setProperty('--drift', driftAmount + 'px');
  
  // Random animation duration for variety (reduced speed by 0.75)
  const duration = (8 + Math.random() * 6) / 0.75; // 10.67-18.67 seconds
  bubble.style.animation = `bubbleRise ${duration}s linear forwards`;
  
  // Add to page
  document.body.appendChild(bubble);
  
  // Remove bubble after animation completes
  setTimeout(() => {
    if (bubble.parentNode) {
      bubble.parentNode.removeChild(bubble);
    }
  }, duration * 1000);
}

// Generate bubbles every 300ms (0.3 seconds)
setInterval(createBubble, 300);

// Also generate a few bubbles immediately
for (let i = 0; i < 5; i++) {
  setTimeout(createBubble, i * 200);
} 
