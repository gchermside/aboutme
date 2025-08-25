

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
  if (colorRand < 0.2) {
    fish.classList.add('orange');
  } else if (colorRand < 0.4) {
    fish.classList.add('green');
  } else if (colorRand < 0.6) {
    fish.classList.add('blue');
  } else if (colorRand < 0.8) {
    fish.classList.add('purple');
  }
  // Default red if no color class added (remaining 20%)
  
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

// Jellyfish generation system
function createJellyfish() {
  const jellyfish = document.createElement('div');
  jellyfish.className = 'jellyfish';
  
  // Random size variation
  const rand = Math.random();
  if (rand < 0.4) {
    jellyfish.classList.add('small');
  } else if (rand > 0.7) {
    jellyfish.classList.add('large');
  }
  
  // Random color variation using hue rotation
  const colorRand = Math.random();
  if (colorRand < 0.25) {
    jellyfish.classList.add('blue');
  } else if (colorRand < 0.5) {
    jellyfish.classList.add('pink');
  } else if (colorRand < 0.75) {
    jellyfish.classList.add('green');
  } else {
    jellyfish.classList.add('purple');
  }
  
  // Random direction (left-to-right or right-to-left)
  const goingRight = Math.random() > 0.5;
  
  // Random vertical position (prefer middle to bottom areas)
  const minY = window.innerHeight * 0.2; // Start from 20% down the screen
  const maxY = window.innerHeight - 200; // Stay well above bottom
  const randomY = minY + Math.random() * (maxY - minY);
  
  // Upward movement only (jellyfish propelling themselves)
  const verticalDrift = -Math.random() * 60; // 0px to -60px (upward only)
  
  // More pronounced wave movement (jellyfish float more gracefully)
  const waveOffset = 40 + Math.random() * 50; // 40-90px wave amplitude
  
  let startX, endX;
  
  if (goingRight) {
    startX = -150; // Start off-screen left
    endX = window.innerWidth + 150; // End off-screen right
  } else {
    startX = window.innerWidth + 150; // Start off-screen right
    endX = -150; // End off-screen left
  }
  
  // Set CSS custom properties for animation
  jellyfish.style.setProperty('--start-x', startX + 'px');
  jellyfish.style.setProperty('--end-x', endX + 'px');
  jellyfish.style.setProperty('--start-y', randomY + 'px');
  jellyfish.style.setProperty('--end-y', (randomY + verticalDrift) + 'px');
  jellyfish.style.setProperty('--wave-offset', waveOffset + 'px');
  
  // Even slower, more graceful movement than fish
  const duration = 18 + Math.random() * 15; // 18-33 seconds
  
  // Use different animation based on direction, combining with frame animation
  if (goingRight) {
    jellyfish.style.animation = `jellyfishFloatFlipped ${duration}s ease-in-out forwards, jellyfishFrames 2s infinite steps(2)`;
  } else {
    jellyfish.style.animation = `jellyfishFloat ${duration}s ease-in-out forwards, jellyfishFrames 2s infinite steps(2)`;
  }
  
  // Position jellyfish at starting point
  jellyfish.style.left = '0px';
  jellyfish.style.top = '0px';
  
  // Add to page
  document.body.appendChild(jellyfish);
  
  // Remove jellyfish after animation completes
  setTimeout(() => {
    if (jellyfish.parentNode) {
      jellyfish.parentNode.removeChild(jellyfish);
    }
  }, duration * 1000);
}

// Generate jellyfish every 8-15 seconds (less frequent than fish)
function scheduleJellyfish() {
  const nextJellyfishDelay = 8000 + Math.random() * 7000; // 8-15 seconds
  setTimeout(() => {
    createJellyfish();
    scheduleJellyfish(); // Schedule the next jellyfish
  }, nextJellyfishDelay);
}

// Start the jellyfish generation
scheduleJellyfish();

// Generate a few jellyfish immediately with delays
for (let i = 0; i < 2; i++) {
  setTimeout(createJellyfish, i * 6000 + 3000); // Start after 3 seconds, then every 6 seconds
}

// Seaweed generation system
function createSeaweed() {
  const seaweed = document.createElement('div');
  seaweed.className = 'seaweed';
  
  // Random size variation
  const rand = Math.random();
  if (rand < 0.3) {
    seaweed.classList.add('small');
  } else if (rand > 0.7) {
    seaweed.classList.add('large');
  }
  
  // Random green color variation
  const colorRand = Math.random();
  if (colorRand < 0.25) {
    seaweed.classList.add('light-green');
  } else if (colorRand < 0.5) {
    seaweed.classList.add('medium-green');
  } else if (colorRand < 0.75) {
    seaweed.classList.add('dark-green');
  } else {
    seaweed.classList.add('forest-green');
  }
  
  // Random horizontal position along bottom
  const randomX = Math.random() * window.innerWidth;
  seaweed.style.left = randomX + 'px';
  
  // Random animation timing for variety
  const frameDelay = Math.random() * 3; // 0-3 second delay
  const swayDelay = Math.random() * 4; // 0-4 second delay
  const swayDuration = 3 + Math.random() * 2; // 3-5 second sway cycle
  
  // Apply both frame cycling and swaying animations
  seaweed.style.animation = `seaweedFrames 3s infinite steps(3) ${frameDelay}s, seaweedSway ${swayDuration}s ease-in-out infinite ${swayDelay}s`;
  
  // Add to page
  document.body.appendChild(seaweed);
  
  return seaweed;
}

// Generate seaweed across the bottom of the page
function generateSeaweedField() {
  const seaweedCount = Math.floor(window.innerWidth / 80) + 2; // About every 80px + some extra
  
  for (let i = 0; i < seaweedCount; i++) {
    // Spread creation over a few seconds for natural feel
    setTimeout(createSeaweed, i * 200);
  }
}

// Generate seaweed field on page load
generateSeaweedField();

// Regenerate seaweed if window is resized
window.addEventListener('resize', () => {
  // Remove existing seaweed
  const existingSeaweed = document.querySelectorAll('.seaweed');
  existingSeaweed.forEach(seaweed => seaweed.remove());
  
  // Generate new field
  setTimeout(generateSeaweedField, 100);
});

