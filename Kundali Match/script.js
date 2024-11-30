document.getElementById("matchButton").addEventListener("click", function () {
    const boyName = document.getElementById("boyName").value.trim();
    const girlName = document.getElementById("girlName").value.trim();

    if (!boyName || !girlName) {
        alert("Please enter both names!");
        return;
    }

    // Pre-defined Guna results for specific name pairs
    const predefinedResults = {
        "pankaj:khushboo": { score: 33, percentage: 96.02 },
        "rahul:simran": { score: 29, percentage: 80.56 },
        "arjun:priya": { score: 27, percentage: 75.00 },
    };

    // Generate a key from the names (case-insensitive)
    const key = `${boyName.toLowerCase()}:${girlName.toLowerCase()}`;

    let result;
    if (predefinedResults[key]) {
        // Use predefined result for known pairs
        result = predefinedResults[key];
    } else {
        // For other names, generate consistent deterministic results
        const hashValue = hashNames(boyName, girlName);
        const score = (hashValue % 36) + 1; // Score between 1 and 36
        const percentage = ((score / 36) * 100).toFixed(2); // Percentage based on score
        result = { score, percentage };
    }

    // Populate Guna Table with random consistent values for all Gunas
    const gunaScores = distributeScore(result.score);
    const gunaTable = document.querySelector("#gunaTable tbody");
    gunaTable.innerHTML = `
        <tr><td>Varna</td><td>${gunaScores.varna}</td><td>1</td></tr>
        <tr><td>Vasya</td><td>${gunaScores.vasya}</td><td>2</td></tr>
        <tr><td>Tara</td><td>${gunaScores.tara}</td><td>3</td></tr>
        <tr><td>Yoni</td><td>${gunaScores.yoni}</td><td>4</td></tr>
        <tr><td>Graha Maitri</td><td>${gunaScores.grahaMaitri}</td><td>5</td></tr>
        <tr><td>Gana</td><td>${gunaScores.gana}</td><td>6</td></tr>
        <tr><td>Bhakoot</td><td>${gunaScores.bhakoot}</td><td>7</td></tr>
        <tr><td>Nadi</td><td>${gunaScores.nadi}</td><td>8</td></tr>
    `;

    // Populate overall result
    document.getElementById("resultText").innerText = `${boyName} and ${girlName}'s Compatibility Score: ${result.score}/36`;
    document.getElementById("percentage").innerText = `Overall Compatibility: ${result.percentage}%`;

    const explanation =
        result.percentage >= 70
            ? "This is a highly compatible match! Your bond is destined for happiness and understanding. 💖"
            : result.percentage >= 50
            ? "This match is decent, but you may need to work on mutual understanding. 🌟"
            : "This match has low compatibility. Challenges may arise, but love conquers all. 💔";

    document.getElementById("detailedExplanation").innerText = explanation;

    const loveQuote =
        result.percentage >= 70
            ? `"Love is not finding someone to live with, it's finding someone you can't live without." ❤️`
            : `"Every relationship takes work, but the effort is worth the love you build together." 💞`;

    document.getElementById("loveQuote").innerText = loveQuote;

    // Show modal
    const modal = document.getElementById("resultModal");
    modal.style.display = "flex";
});

document.getElementById("closeModal").addEventListener("click", function () {
    const modal = document.getElementById("resultModal");
    modal.style.display = "none";
});

document.getElementById("resetButton").addEventListener("click", function () {
    document.getElementById("boyName").value = "";
    document.getElementById("girlName").value = "";
    document.getElementById("resultModal").style.display = "none";
});

// Hash Function to Generate Consistent Results
function hashNames(boyName, girlName) {
    const str = boyName.toLowerCase() + girlName.toLowerCase();
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0; // Convert to 32-bit integer
    }
    return Math.abs(hash);
}

// Function to Distribute Score Across Gunas
function distributeScore(totalScore) {
    const gunaWeights = [1, 2, 3, 4, 5, 6, 7, 8]; // Max scores for each Guna
    let remainingScore = totalScore;
    const gunaScores = {};

    gunaWeights.forEach((max, index) => {
        if (index === gunaWeights.length - 1) {
            gunaScores[`guna${index}`] = remainingScore; // Assign remaining score to the last Guna
        } else {
            const score = Math.min(Math.floor(Math.random() * (max + 1)), remainingScore);
            gunaScores[`guna${index}`] = score;
            remainingScore -= score;
        }
    });

    return {
        varna: gunaScores.guna0,
        vasya: gunaScores.guna1,
        tara: gunaScores.guna2,
        yoni: gunaScores.guna3,
        grahaMaitri: gunaScores.guna4,
        gana: gunaScores.guna5,
        bhakoot: gunaScores.guna6,
        nadi: gunaScores.guna7,
    };
}
