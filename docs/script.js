

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

// Fish generation system
function createFish() {
  const fish = document.createElement('div');
  fish.className = 'fish';
  
  // Random size variation
  const rand = Math.random();
  if (rand < 0.3) {
    fish.classList.add('small');
  } else if (rand > 0.8) {
    fish.classList.add('large');
  }
  
  // Random color variation
  const colorRand = Math.random();
  if (colorRand < 0.167) {
    fish.classList.add('orange');
  } else if (colorRand < 0.333) {
    fish.classList.add('green');
  } else if (colorRand < 0.5) {
    fish.classList.add('blue');
  } else if (colorRand < 0.667) {
    fish.classList.add('purple');
  } else if (colorRand < 0.833) {
    fish.classList.add('yellow');
  }
  // Default red if no color class added (remaining ~16.7%)
  
  // Random direction (left-to-right or right-to-left)
  const goingRight = Math.random() > 0.5;
  
  // Random vertical position (can now appear anywhere including top area)
  const minY = 50; // Allow fish near the top (below the very top edge)
  const maxY = window.innerHeight - 150; // Stay above bottom (account for larger fish size)
  const randomY = minY + Math.random() * (maxY - minY);
  
  // Slight vertical movement during swim
  const verticalDrift = (Math.random() - 0.5) * 60; // -30px to +30px
  
  // Wave movement amplitude (up and down during swim)
  const waveOffset = 15 + Math.random() * 25; // 15-40px wave amplitude
  
  let startX, endX, animationName;
  
  if (goingRight) {
    startX = -50; // Start off-screen left
    endX = window.innerWidth + 50; // End off-screen right
    animationName = 'fishSwimHorizontal'; // Fish flipped to face right direction
  } else {
    startX = window.innerWidth + 50; // Start off-screen right
    endX = -50; // End off-screen left
    animationName = 'fishSwimReverse'; // Fish normal orientation to face left direction
  }
  
  // Set CSS custom properties for animation
  fish.style.setProperty('--start-x', startX + 'px');
  fish.style.setProperty('--end-x', endX + 'px');
  fish.style.setProperty('--start-y', randomY + 'px');
  fish.style.setProperty('--end-y', (randomY + verticalDrift) + 'px');
  fish.style.setProperty('--wave-offset', waveOffset + 'px');
  
  // Random swim duration (slower than bubbles)
  const duration = 8 + Math.random() * 8; // 8-16 seconds
  fish.style.animation = `${animationName} ${duration}s linear forwards`;
  
  // Position fish at starting point
  fish.style.left = '0px';
  fish.style.top = '0px';
  
  // Add to page
  document.body.appendChild(fish);
  
  // Remove fish after animation completes
  setTimeout(() => {
    if (fish.parentNode) {
      fish.parentNode.removeChild(fish);
    }
  }, duration * 1000);
}

// Generate fish every 4-8 seconds (less frequent than bubbles)
function scheduleFish() {
  const nextFishDelay = 4000 + Math.random() * 4000; // 4-8 seconds
  setTimeout(() => {
    createFish();
    scheduleFish(); // Schedule the next fish
  }, nextFishDelay);
}

// Start the fish generation
scheduleFish();

// Generate a few fish immediately with delays
for (let i = 0; i < 3; i++) {
  setTimeout(createFish, i * 3000);
}
