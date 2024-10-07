const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function checkPal() {
    const input = textInput.value.trim(); // Trim whitespace from the input
    const cleanedInput = input
        .replace(/[^A-Za-z0-9]/g, '') // Remove non-alphanumeric characters
        .toLowerCase(); // Convert to lowercase

    if (input === "") {
        alert("Please input a value");
    } else if (cleanedInput === cleanedInput.split('').reverse().join('')) {
        // Check if the cleaned input is the same forwards and backwards
        result.innerHTML = `<p id="result"><span>${input}</span> is a Palindrome</p>`;
    } else {
        // If it's not a palindrome
        result.innerHTML = `<p id="result"><strong><span>${input}</span></strong> is not a Palindrome</p>`;
    }
}

// Event listener to trigger the checkPal when the button is clicked
checkBtn.addEventListener("click", checkPal);