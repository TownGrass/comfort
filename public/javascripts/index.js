const phrases = [
    "You are doing great.",
    "Everything will be okay.",
    "You are stronger than you think.",
    "Take it one step at a time.",
    "You are not alone.",
    "Believe in yourself.",
    "You are capable of amazing things.",
    "It's okay to take a break.",
    "You are loved.",
    "Keep going, you got this.",
    "You are enough.",
    "Stay positive.",
    "Your hard work will pay off.",
    "Don't give up.",
    "Take care of yourself.",
    "Every day is a new beginning.",
    "Trust the process.",
    "You are worthy of good things.",
    "Stay strong.",
    "Keep pushing forward.",
    "Your efforts are appreciated.",
    "Stay hopeful.",
    "Good things take time.",
    "You are resilient.",
    "Stay focused.",
    "Believe in your dreams.",
    "You are making progress.",
    "Stay calm and carry on.",
    "You are important.",
    "Keep smiling.",
    "Stay motivated.",
    "You are a fighter.",
    "Stay determined.",
    "You are a blessing.",
    "Stay humble.",
    "You are unique.",
    "Stay inspired.",
    "You are a light.",
    "Stay grateful.",
    "You are a gift.",
    "Stay patient.",
    "You are a warrior.",
    "Stay courageous.",
    "You are a star.",
    "Stay kind.",
    "You are a miracle.",
    "Stay true to yourself.",
    "You are a treasure.",
    "Stay faithful.",
    "You are a gem.",
    "Stay optimistic.",
    "You are a hero.",
    "Stay confident.",
    "You are a champion.",
    "Stay joyful.",
    "Stay peaceful.",
    "You are a winner.",
    "Stay loving.",
    "You are a survivor."
];

let count = 0;

function change(){
    $("#phrase").text(phrases[count]);
    count < 3 ? count++ : count = 0;

}


$(document).ready(function (){
    setInterval(change, 7000);
})



