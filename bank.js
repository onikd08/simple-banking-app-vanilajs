const depositField = document.getElementById("deposit-field");
const withdrawField = document.getElementById("withdraw-field");
const balance = document.querySelector("#total-balance");

const updateAmount = (id, amount) => {
    const getAmount = document.getElementById(id);
    const getAmountValue = getAmount.innerText;
    const newAmount = Number(getAmountValue) + Number(amount);
    getAmount.innerText = newAmount;
};

// Deposit
document.getElementById('deposit-btn').addEventListener("click", function(){ 
    const depositAmount = depositField.value;
    if (depositAmount === "") {
        alert("Please enter amount");
    } else {
        updateAmount('total-deposit', depositAmount);
        calculateBalance('deposit', Number(depositAmount));
        depositField.value = "";
    }
})

// Withdraw
document.getElementById('withdraw-btn').addEventListener("click", function(){
    const withdrawAmount = withdrawField.value;
    if (withdrawAmount === "") {
        alert("Please enter amount");
    } else if (Number(withdrawAmount) > Number(balance.innerText)){
        alert("You do not have enough balance to withdraw");
    }
    else {
        updateAmount('total-withdraw', withdrawAmount);
        calculateBalance('withdraw', Number(withdrawAmount));
        withdrawField.value = "";
    }
})

// Calculate Balance
const calculateBalance = (updateBalance, amount) => {
    const totalBalance = Number(balance.innerText);
    if (updateBalance === "deposit") {
        const newBalance = totalBalance + amount;
        balance.innerText = newBalance;
    } else if(updateBalance === "withdraw"){
        const newBalance = totalBalance - amount;
        balance.innerText = newBalance;
    }
};
