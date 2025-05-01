document.getElementById('add-money').addEventListener('click', 
    function(event){
        event.preventDefault();

        const pin = document.getElementById('pin-no').value;
        const convertedPin = parseInt(pin);

        const amount = document.getElementById('amount-no').value;
        const convertedAmount = parseInt('amount');

        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedBalance = parseFloat('main-balance');
        

        if(pin && amount){
            if(convertedPin === 1234){
                const sum = convertedAmount +convertedBalance;
                document.getElementById('add-money').innerTex = sum;
            }

            else{
                console.log("pin sothik noy");
            }
        }

        else{
            console.log("you out of condition");
        }
    }
)