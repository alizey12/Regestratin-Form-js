document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const  password = document.getElementById('password').value;
    const  Quantity= document.getElementById('quantity').value;
    const Date= document.getElementById('date').value;
    const  = document.getElementById('password').value;
    const  = document.getElementById('password').value;
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('quantity:',Quantity );
    console.log('date:',Date );
    alert('Signup successful!');
});
