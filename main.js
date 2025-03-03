// add money
document.getElementById('log-out').addEventListener('click',function(){
    window.location.href="./index.html"
})
document.getElementById('add-money-box').style.display='none';
    document.getElementById('cash-out-box').style.display='none';
    document.getElementById('add-box').addEventListener('click',function(){
        document.getElementById('add-money-box').style.display='block';
        document.getElementById('cash-out-box').style.display='none';
    })
    document.getElementById('cashout-box').addEventListener('click',function(){
        document.getElementById('add-money-box').style.display='none';
        document.getElementById('cash-out-box').style.display='block';
    })

document.getElementById('add-money').addEventListener('click',function(event){
    
    event.preventDefault();
   
    let mainbalanced=document.getElementById('Balance').innerText;
    let convertedmainbalanced=parseFloat(mainbalanced);
    const actnumber=document.getElementById('add-money-act-number').value;
    const pinnumber=document.getElementById('add-money-pin').value;
    let convertedpin=parseInt(pinnumber);
    let addamount=document.getElementById('add-amount').value;

    let convertedamount=parseFloat(addamount);
    if(actnumber.length===11){
        if(convertedpin===1234){
           sum=convertedmainbalanced+convertedamount;
            document.getElementById('Balance').innerText=sum;

        }
        else{
            alert("invalid pin number");
        }

    }
    else{
        alert("invalid account number");
    }
})
document.getElementById('withdraw-money').addEventListener('click',function(event){

    event.preventDefault();
    let mainbalanced=document.getElementById('Balance').innerText;
    let convertedmainbalanced=parseFloat(mainbalanced);
    const actnumber=document.getElementById('agent-number').value;
    const pinnumber=document.getElementById('withdraw-money-pin').value;
    let convertedpin=parseInt(pinnumber);
    let cashoutamount=document.getElementById('cashout-money').value;

    let convertedamount=parseFloat(cashoutamount);
    if(actnumber.length===11){
        if(convertedpin===1234){
          let cashout=convertedmainbalanced-convertedamount;
            document.getElementById('Balance').innerText=cashout;

        }
        else{
            alert("invalid pin number");
        }

    }
    else{
        alert("invalid account number");
    }
})


