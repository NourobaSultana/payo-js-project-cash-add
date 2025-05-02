document.getElementById('add-money').addEventListener('click', 
    function(event){
        event.preventDefault()
       console.log('add money');
    //   const values= getInputValueById();
    //   console.log(values);
      const amount = getInputValueById("amount");
      const pin = getInputValueById('pin-no-one');
      const account = document.getElementById('account-no').value;
    //   console.log(amount,pin);
    const mainBalance = getInnerTextByID("main-balance")
    console.log(mainBalance);

      if(account.length===11){
        if(pin===1234){
          const sum = mainBalance+amount;
          document.getElementById('main-balance').innerText=sum;
          setInnerTextByIDandvalue('main-balance', sum);
        }

        else{
            console.log('pin thik nai');
        }
      }

      else{
        console.log('account no thik nai');
      }
    }
)