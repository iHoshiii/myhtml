const compliments = [
    "You're Amazing!",
    "You have a great sense of humor!",
    "You're a true gem!",
    "You're incredibly talented!",
    "You light up the room!",
    "You inspire me!",
    "You're a fantastic friend!",
    "You have a heart of gold!",
    "You're doing great!",
    "You're a wonderful person!"
];

document.getElementById('textName').addEventListener('input', function() {
    const nameInput = document.getElementById('textName').value;
    const surnameInput = document.getElementById('txtSurname');
    
    if (nameInput.toLowerCase() === "mitz") {
        surnameInput.style.display = 'inline';
    } else {
        surnameInput.style.display = 'none';
        surnameInput.value = '';
        document.getElementById('mitzLabel').style.display = 'none';
    }
});

document.getElementById('btnGenerate').addEventListener('click', function() {
    const name = document.getElementById('textName').value;
    const surname = document.getElementById('txtSurname').value;
    const complimentLabel = document.getElementById('lblCompliment');
    const mitzLabel = document.getElementById('mitzLabel');

    if (!name.trim()) {
        complimentLabel.textContent = "Please enter your first name.";
        return;
    }

    if (name.toLowerCase() === "mitz") {
        if (!surname.trim()) {
            complimentLabel.textContent = "Enter my EXACT Messenger's Nickname.";
            return;
        } else if (surname.toLowerCase() === "yoyong the explorerrr") {
            mitzLabel.style.display = 'block';
            mitzLabel.textContent = "Hellooooooo, I made this program just for you, except if you shared my messenger’s nickname with others. It’s been more than a month since we talked. I hope you’re doing great, I hope you’re enjoying school with your friends, and I hope you still remember me even if you know, basta yon.  Since you opened this, find your way on how to reply on this HAHAHAHAHAH, anyway, I’m still doing great, I hope I can still share stories with you someday. Good Luck TEACHER!";
            complimentLabel.textContent = '';
            return;
        }
    }

    const randomIndex = Math.floor(Math.random() * compliments.length);
    complimentLabel.textContent = `${name}, ${compliments[randomIndex]}`;
    mitzLabel.style.display = 'none';
});
