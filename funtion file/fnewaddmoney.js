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

    // bank ke dhorte para
    const selectedBank =document.getElementById("allbank").value;
    console.log(selectedBank);
      // not input negative value
      if(amount<0){
       alert('bhai positive no dite hobe')
       return;
      }

      if(account.length===11){
        if(pin===1234){
          const sum = mainBalance+amount;
          // document.getElementById('main-balance').innerText=sum;
          setInnerTextByIDandvalue('main-balance', sum);
          const container = document.getElementById("transaction-container");
          const div = document.createElement("div");
          div.classList.add("bg-red-400")
          div.innerHTML = `
          <h1>Added Money froms ${selectedBank}</h1>
          <p> ${amount} </P>
          <p> account number: ${account}</p>

          `
          container.appendChild(div)
          const p = document.createElement("p");
          p.innerText= `
           Added ${amount} Tk From ${account} Account Number
          `
          container.appendChild(p);
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