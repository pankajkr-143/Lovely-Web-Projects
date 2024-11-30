document.getElementById("calculateBtn").addEventListener("click", function () {
    const name1 = document.getElementById("name1").value.trim().toLowerCase();
    const name2 = document.getElementById("name2").value.trim().toLowerCase();
    const resultDiv = document.getElementById("result");
  
    // Specific bond percentage for Pankaj and Khushboo
    if (name1 === "pankaj" && name2 === "khushboo" || name1 === "khushboo" && name2 === "pankaj") {
      resultDiv.innerHTML = `<p>The bond between <span>${name1}</span> and <span>${name2}</span> is <span>99%</span>! ❤️🌹 You are destined for a magical connection! 💖`;
    } else {
      // Random bond percentage for others
      const percentage = Math.floor(Math.random() * 100) + 1;
      resultDiv.innerHTML = `<p>The bond between <span>${name1}</span> and <span>${name2}</span> is <span>${percentage}%</span>. Keep building your connection! 💕</p>`;
    }
  });
  