document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    
    // Get field values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const quantity = document.getElementById('quantity').value;
    const birthday = document.getElementById('birthday').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const languages = Array.from(document.querySelectorAll('input[name="language"]:checked'))
                            .map(lang => lang.value);

    // Validate gender
    if (!gender) {
        alert('Please select your gender.');
        return;
    }

    // Validate at least one language is selected
    if (languages.length === 0) {
        alert('Please select at least one favourite language.');
        return;
    }

    // Log values in the console
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Phone Number:', quantity);
    console.log('Birthday:', birthday);
    console.log('Gender:', gender.value);
    console.log('Languages:', languages);

    // Show success message
    alert('Signup successful!');
});
