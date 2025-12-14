let birthMonth = "March";
let fortunes;

if (birthMonth === "January" || birthMonth === "February" || birthMonth === "March") {
    fortunes = [
        "A new opportunity will come your way soon.",
        "Your hard work will soon pay off.",
        "Good news is heading in your direction."
    ];
} else if (birthMonth === "April" || birthMonth === "May" || birthMonth === "June") {
    fortunes = [
        "You will meet someone who inspires you.",
        "A positive change is coming into your life.",
        "Creativity will lead you to success."
    ];
} else if (birthMonth === "July" || birthMonth === "August" || birthMonth === "September") {
    fortunes = [
        "An exciting adventure is ahead.",
        "Your confidence will open new doors.",
        "Something you’ve been waiting for will happen."
    ];
} else if (birthMonth === "October" || birthMonth === "November" || birthMonth === "December") {
    fortunes = [
        "You will find clarity in an important decision.",
        "A surprise will brighten your day.",
        "Your patience will be rewarded."
    ];
} else {
    console.log("Please enter a valid month.");
    fortunes = null;
}

if (fortunes) {
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    console.log(`Your fortune: ${fortunes[randomIndex]}`);
}
