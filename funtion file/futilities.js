function getInputValueById(id){
    const amount= document.getElementById(id).value;
    console.log(amount);
    const convertedAmount = parseFloat(amount);
    return convertedAmount;
}

function getInnerTextByID(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function setInnerTextByIDandvalue(id, value) {
//   console.log(id, value);
document.getElementById(id).innerText= value;
}

function handleToggle(id, status){
    document.getElementById(id).style.display = status;
   }