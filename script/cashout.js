document.getElementById('cashout-btn').addEventListener('click',
    function(event){
        event.preventDefault()
        const cashOutAmount = document.getElementById('cashout-amount').value;
        const convertedCashOutAmount=parseInt(cashOutAmount);

        const cashOutPin = document.getElementById('pin-no-two').value;
        const convertedPin = parseInt(cashOutPin);

        const cashMainBalance = document.getElementById('main-balance').innerText;
        const convertedmainbalance =parseFloat(cashMainBalance);
        console.log("hello");

        if(cashOutAmount && cashOutPin){
            if(convertedPin===1234){
                const sub =convertedmainbalance - convertedCashOutAmount;
                document.getElementById('main-balance').innerText=sub;
        
            }
        }

        else{
            console.log("invalid value");
        }
    }
)