// Add submit button event handler
const submitButton = document.getElementById('submit');
const handleClick = (e) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email === "" || password === "") {
        alert("Fields can not be empty");
    } else if(email === "onikd08@gmail.com" && password === "123456") {
        location.href = 'bank.html';
    } else{
        alert("Email or password is incorrect")
    }
};
submitButton.addEventListener('click', handleClick);