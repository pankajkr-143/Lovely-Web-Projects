// Quotes array with funny love quotes
const quotes = [
    "\"Love is sharing your popcorn.\" — Charles Schultz",
    "\"I love you more than coffee, but please don’t make me prove it.\"",
    "\"Gravitation is not responsible for people falling in love.\" — Albert Einstein",
    "\"If love is the answer, could you rephrase the question?\" — Lily Tomlin",
    "\"Love is being stupid together.\" — Paul Valery",
    "\"I love you no matter what you do, but do you have to do so much of it?\" — Jean Illsley Clarke",
    "\"Marriage is like vitamins: we supplement each other's minimum daily requirements.\" — Kathy Mohnke",
    "\"True love is like a pair of socks. You gotta have two and they’ve gotta match.\"",
    "\"If only love was as easy as making a cup of tea...\"",
    "\"If love is the answer, can you please repeat the question?\" — Bernard Shaw"
  ];
  
  // Function to generate a new random quote
  function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
  
    // Update quote and add heart-beat animation
    quoteElement.innerText = quotes[randomIndex];
    quoteElement.classList.add("heart-beat");
  
    // Remove animation after a short delay
    setTimeout(() => quoteElement.classList.remove("heart-beat"), 300);
  }
  
  // Function to save the current quote
  function saveQuote() {
    const currentQuote = document.getElementById("quote").innerText;
    const savedQuotesList = document.getElementById("saved-quotes");
  
    // Add new list item with the saved quote
    const listItem = document.createElement("li");
    listItem.innerText = currentQuote;
    savedQuotesList.appendChild(listItem);
  
    // Show a success message temporarily
    const saveButton = document.getElementById("save-quote");
    saveButton.innerText = "Saved! ⭐";
    setTimeout(() => saveButton.innerText = "Save Quote ⭐", 1000);
  }
  
  // Function to copy the current quote to clipboard
  function copyQuote() {
    const quoteText = document.getElementById("quote").innerText;
    navigator.clipboard.writeText(quoteText).then(() => {
      // Show feedback on successful copy
      const copyButton = document.getElementById("copy-quote");
      copyButton.innerText = "Copied! 📋";
      setTimeout(() => copyButton.innerText = "Copy Quote 📋", 1000);
    });
  }
  
  // Function to download the current quote as a .txt file
  function downloadQuote() {
    const quoteText = document.getElementById("quote").innerText;
    const blob = new Blob([quoteText], { type: "text/plain" });
    const link = document.createElement("a");
    
    link.href = URL.createObjectURL(blob);
    link.download = "love_quote.txt";
    link.click();
  
    // Clean up and revoke the object URL
    URL.revokeObjectURL(link.href);
  }
  