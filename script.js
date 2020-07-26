// Way No: 2

function handleProduct(isIncrease, product){

    phoneQty = document.getElementById(product + "-qty");
    phoneCount = parseInt(phoneQty.value);
    let setPhoneQty = phoneCount;
    if(isIncrease == true){
        setPhoneQty = phoneCount + 1;
    }
    if(isIncrease == false && phoneCount >  0) {
        setPhoneQty = phoneCount - 1;
    }
    phoneQty.value = setPhoneQty;
    let newPrice = 0;
    if(product === "phone"){
        newPrice = setPhoneQty * 1219;
    }
    else if(product === "case"){
        newPrice = setPhoneQty * 59;
    }
    document.getElementById(product + "-total").innerText = "$" + newPrice;
}

function calculateTotal(product, product2){

    //get phone total price
    phoneTotal = document.getElementById(product + "-qty");
    getPhone = parseInt(phoneTotal.value);
    calculatePhone = getPhone * 1219;

    //get case total price
    caseTotal = document.getElementById(product2 + "-qty");
    getCase = parseInt(caseTotal.value);
    calculateCase = getCase * 59;

    //set sub total amount
    setSubTotal = calculatePhone + calculateCase;
    document.getElementById("sub-total").innerText = "$" + setSubTotal;

    //set tax amount
    calculateTax = (setSubTotal * .10).toFixed(2);
    document.getElementById("tax").innerText = "$" + calculateTax;

    //set grand total
    getParseValue = parseInt(calculateTax);
    grandTotal = setSubTotal + getParseValue;
    document.getElementById("grand-total").innerText = "$" + grandTotal;
}

//before click show sub total amount
calculateTotal("phone", "case");

// first item
document.getElementById("phone-plus").addEventListener("click", function(){

    handleProduct(true, "phone");
    calculateTotal("phone", "case");
});

document.getElementById("phone-minus").addEventListener("click", function(){
   
    handleProduct(false, "phone");
    calculateTotal("phone", "case");
});

//second item
document.getElementById("case-plus").addEventListener("click", function(){

    handleProduct(true, "case");
    calculateTotal("phone", "case");
});

document.getElementById("case-minus").addEventListener("click", function(){

    handleProduct(false, "case");
    calculateTotal("phone", "case");
});

// checkout button
document.getElementById("Check-out").addEventListener("click", function(){
    alert("Are you sure want to checkout");
});

/**************************************************************** 
 *                                 Way No: 2 
 * *************************************************************/
