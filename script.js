// Select form and input elements
const form = document.querySelector('form');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const rememberCheckbox = document.querySelector('input[type="checkbox"]');

// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Simple validation
    if (!username) {
        alert('Please enter your username.');
        return;
    }

    if (!password) {
        alert('Please enter your password.');
        return;
    }

    // Simulate successful login (replace this with real backend logic)
    alert(`Welcome, ${username}!`);
    console.log('Login data:', { username, password, rememberMe: rememberCheckbox.checked });

    // Optionally, clear inputs after successful login
    usernameInput.value = '';
    passwordInput.value = '';
    rememberCheckbox.checked = false;
});

// Remember me checkbox interaction (optional)
rememberCheckbox.addEventListener('change', () => {
    if (rememberCheckbox.checked) {
        console.log('Remember me selected');
    } else {
        console.log('Remember me deselected');
    }
});
