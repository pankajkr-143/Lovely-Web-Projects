function calculateCareer() {
    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value;
    const zodiac = document.getElementById("zodiac").value;

    if (!name || !dob) {
        document.getElementById("result").innerHTML = "💔 Please fill out all fields, dear!";
        return;
    }

    const careers = {
        aries: "Leader of the pack 🌟",
        taurus: "Luxury connoisseur 💎",
        gemini: "Master communicator 💬",
        cancer: "Caretaker of hearts 💖",
        leo: "Shining star 🌟",
        virgo: "Perfect planner 📅",
        libra: "Harmony bringer ⚖️",
        scorpio: "Mysterious strategist 🕵️",
        sagittarius: "World traveler 🌍",
        capricorn: "Ambitious achiever 🏆",
        aquarius: "Innovative dreamer 🚀",
        pisces: "Creative artist 🎨",
    };

    const career = careers[zodiac] || "a unique path 🌈";
    const age = calculateAge(dob);
    const message = `
        💕 Hello, ${name}! 💕<br>
        Your Zodiac Sign: <b>${zodiac}</b> <br>
        Your Age: <b>${age} years young</b> 🌟<br>
        Your Career Path: <b>${career}</b> <br>
        💖 The stars are shining just for you! 💖
    `;
    document.getElementById("result").innerHTML = message;
}

function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
