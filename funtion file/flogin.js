document.getElementById('login-btn').addEventListener('click',
    function(event){
        console.log('clicked log in button');
        // loead hoye je off hoye jay seta off kore dilam
        event.preventDefault();
        // account number get value
        const accountNumber = document.getElementById('account-no').value;
        // console.log(accountNumber);
        // pin number 

        const pinNumber=document.getElementById('pin-no').value;
        // console.log(accountNumber.length,pinNumber.length);
                console.log(accountNumber,pinNumber);

                if(accountNumber.length===11){
                    // console.log("ok thik ache");
                    // pin hocche string annd number hocche number, tai kaj korche na tai number ke string korte hobe
                    // or another way is(if(parseInt(pinNumber)===1234))
                    if(pinNumber==="1234"){
                        console.log('okay thik ase');
                        window.location.href="./fmain.html";
                    }
                    else{
                        console.log('pin thik nai');
                    }
                }
    

                else{
                    console.log('need valid number');
                }

    }
)