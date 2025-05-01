
document.getElementById('add-money').addEventListener('click', 
    function(event){
      event.preventDefault();

      const amount = document.getElementById('amount').value;
      console.log(amount);
      const convertedAmount = parseFloat(amount);
      const pin = document.getElementById("pin-no-two").value;
      const convertedPin = parseInt(pin);
      const mainBalance= document.getElementById('main-balance').innerText;
      console.log(typeof mainBalance);
      const convertedBalance = parseInt(mainBalance);
      console.log(convertedBalance);
      if(convertedPin===1234){
         const sum = convertedBalance+convertedAmount;
         document.getElementById('main-balance').innerText= sum;
      }

      else{
        console.log('pin shothik na');
      }
    })

  