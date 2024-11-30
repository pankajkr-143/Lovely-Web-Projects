document.getElementById("panchangForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const place = document.getElementById("place").value.trim();

    if (!name || !dob || !place) {
        alert("Please fill all fields!");
        return;
    }

    const result = generatePanchang(name, dob, place);

    // Display the results
    const detailsList = document.getElementById("panchangDetails");
    detailsList.innerHTML = result.details
        .map(detail => `<li>${detail}</li>`)
        .join("");

    document.getElementById("loveQuote").innerText = result.loveQuote;
    document.getElementById("resultContainer").classList.remove("hidden");
});

function generatePanchang(name, dob, place) {
    const hashValue = hashString(name + dob + place);

    // Predefined arrays for Panchang details
    const sunrises = ["6:20 AM", "6:40 AM", "6:50 AM"];
    const sunsets = ["6:00 PM", "6:15 PM", "6:30 PM"];
    const moonrises = ["6:30 PM", "6:45 PM", "7:00 PM"];
    const moonsets = ["6:30 AM", "6:45 AM", "7:00 AM"];
    const vaaras = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const nakshatras = ["Pushya (Lord: Saturn)", "Ashlesha (Lord: Mercury)", "Magha (Lord: Ketu)"];
    const tithis = ["Purnima", "Pratipada", "Dwitiya"];
    const karanas = ["Vishti / Bhadra", "Bava", "Balava"];
    const yogas = ["Ayushman", "Saubhagya", "Shobhana"];
    const quotes = [
        "Love aligns your stars. 🌟",
        "Plan your day with love. 💖",
        "Every moment feels right when love guides. ❤️"
    ];

    return {
        details: [
            `Sunrise: ${sunrises[hashValue % sunrises.length]}`,
            `Sunset: ${sunsets[hashValue % sunsets.length]}`,
            `Moonrise: ${moonrises[hashValue % moonrises.length]}`,
            `Moonset: ${moonsets[hashValue % moonsets.length]}`,
            `Vaara: ${vaaras[hashValue % vaaras.length]}`,
            `Nakshatra: ${nakshatras[hashValue % nakshatras.length]}`,
            `Tithi: ${tithis[hashValue % tithis.length]}`,
            `Karana: ${karanas[hashValue % karanas.length]}`,
            `Yoga: ${yogas[hashValue % yogas.length]}`
        ],
        loveQuote: quotes[hashValue % quotes.length]
    };
}

function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash * 31 + str.charCodeAt(i)) % 100000;
    }
    return hash;
}
