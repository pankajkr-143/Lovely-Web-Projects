document.getElementById("loveForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const name1 = document.getElementById("name1").value.trim();
    const gender1 = document.getElementById("gender1").value;
    const age1 = document.getElementById("age1").value;
  
    const name2 = document.getElementById("name2").value.trim();
    const gender2 = document.getElementById("gender2").value;
    const age2 = document.getElementById("age2").value;
  
    if (!name1 || !name2 || !age1 || !age2) {
      alert("Please fill in all fields!");
      return;
    }
  
    // Check for the special case
    let lovePercentage;
    if (
      (name1.toLowerCase() === "pankaj" && name2.toLowerCase() === "khushboo") ||
      (name1.toLowerCase() === "khushboo" && name2.toLowerCase() === "pankaj")
    ) {
      lovePercentage = 96;
    } else {
      // Generate a random percentage for other cases
      lovePercentage = Math.floor(Math.random() * 101);
    }
  
    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      <p><strong>${name1}</strong> (${gender1}, ${age1}) ❤️ <strong>${name2}</strong> (${gender2}, ${age2}): <strong>${lovePercentage}%</strong></p>
    `;
  });
  