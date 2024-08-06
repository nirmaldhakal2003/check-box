document.getElementById("myButton").onclick = function(){
    const myCheckBox = document.getElementById("myCheckBox");
    const visa = document.getElementById("visa");
    const mastercard = document.getElementById("mastercard");
    const paypal = document.getElementById("paypal");


    if(myCheckBox.checked){
        document.getElementById("output").innerHTML = "You are Subscribed!!";
        // console.log("you are Subscribed!!");
    }else{
        document.getElementById("output").innerHTML = "You are not Subscribed!!";
        // console.log("you are not Subscribed!!");
    }
    
    if(visa.checked){
        document.getElementById("output1").innerHTML = "you are paying using visa!";
    }
    else if(mastercard.checked){
        document.getElementById("output1").innerHTML = "you are paying using mastercard!";
    }
    else if(paypal.checked){
        document.getElementById("output1").innerHTML = "you are paying using paypal!";
    }
    else{
        document.getElementById("output1").innerHTML = "you must select one payment method";
    }
}