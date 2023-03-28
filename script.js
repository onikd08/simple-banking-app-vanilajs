// Add submit button event handler
const submitButton = document.getElementById('submit');
const handleClick = (e) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email === "" || password === "") {
        alert("Fields can not be empty");
    } else {
        location.href = 'bank.html';
    }
};
submitButton.addEventListener('click', handleClick);