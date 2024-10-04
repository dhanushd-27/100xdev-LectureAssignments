document.getElementById('calculateBtn').addEventListener('click', function() {
    const principal = parseFloat(document.getElementById('principal').value);
    const years = parseFloat(document.getElementById('years').value);
    const interest = parseFloat(document.getElementById('interest').value);

    if (!isNaN(principal) && !isNaN(years) && !isNaN(interest)) {
        const simpleInterest = (principal * years * interest) / 100;
        document.getElementById('result').innerText = `Simple Interest: ${simpleInterest.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
    }
});
