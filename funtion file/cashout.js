document.getElementById('cashout-btn').addEventListener('click', 
    function(event){
    event.preventDefault();

    const accountNumber = document.getElementById("cashout-account-no").value;
    const amount =  getInputValueById("cashout-amount");
    const pinNumber = getInputValueById("pin-no-two")
    const mainBalance = getInnerTextByID('main-balance');
    // console.log(amount);

    // amount theke jodi boro hoy tahole
    if(amount>mainBalance){
        alert("invalid amount");
        return;
    }

    if(accountNumber.length===11){
        if(pinNumber===1234){
            const sum = mainBalance - amount;
            setInnerTextByIDandvalue('main-balance', sum);

            const container = document.getElementById("transaction-container");
            const p = document.createElement("p");
            p.innerText =`
            cashout ${amount} from this ${accountNumber}`

            container.appendChild(p)

        }
        else{
            alert("pin not valid");
        }
    }

    else{
        alert("account number not valid");
    }
})