// login page
document.getElementById("login-btn").addEventListener('click',function(event){
    event.preventDefault();
const actnumber=document.getElementById("act-number").value;
const pinnumber=document.getElementById("pin").value;
const convertedpin=parseInt(pinnumber);
if(actnumber.length === 11 && actnumber==="01882838525"){
    if( convertedpin=== 1234){
        window.location.href="./main.html"
    }
    else{
        alert("invalid pin")
    }
}
 
else{
    alert("invalid account number")
}
    
})

// hero page


