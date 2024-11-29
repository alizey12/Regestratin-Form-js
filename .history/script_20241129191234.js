<form id="loginForm">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Enter your Email" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" placeholder="Enter your Password" required>

    <button type="submit">Submit</button>
</form>

<script>
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Email Validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Password Validation
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordPattern.test(password)) {
            alert('Password must be at least 8 characters long and include at least one letter and one number.');
            return;
        }

        // If both are valid
        alert('Form submitted successfully!');
        console.log('Email:', email);
        console.log('Password:', password);
    });
</script>
