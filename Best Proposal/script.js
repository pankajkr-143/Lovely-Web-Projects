// Show Messages Section
function showMessages() {
    document.getElementById('landing').classList.add('hidden');
    document.getElementById('messages').classList.remove('hidden');
  }
  
  // Navigate Through Messages
  let messageIndex = 1;
  function nextMessage() {
    document.getElementById(`message${messageIndex}`).classList.add('hidden');
    messageIndex++;
  
    if (messageIndex <= 3) {
      document.getElementById(`message${messageIndex}`).classList.remove('hidden');
    } else {
      document.getElementById('messages').classList.add('hidden');
      document.getElementById('proposal').classList.remove('hidden');
    }
  }
  
  // Confetti and Final Message on "Yes" Click
  document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('finalMessage').classList.remove('hidden');
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });
  });
  
  // Moving 'No' Button and Sad Messages
  let sadMessages = [
    "Oh no, don't say no! 💔",
    "Please give me a chance! 😢",
    "My heart is breaking... 😭"
  ];
  let sadIndex = 0;
  
  document.getElementById('noButton').addEventListener('mouseover', function() {
    const noButton = document.getElementById('noButton');
    noButton.style.top = `${Math.random() * 50 - 25}px`;
    noButton.style.left = `${Math.random() * 50 - 25}px`;
  });
  
  document.getElementById('noButton').addEventListener('click', function() {
    const sadMessageEl = document.getElementById('sadMessage');
    sadMessageEl.textContent = sadMessages[sadIndex];
    sadMessageEl.classList.remove('hidden');
  
    sadIndex = (sadIndex + 1) % sadMessages.length;
  });
  