function updateProductNumber(product,price,isInceasing){
    const productInput=document.getElementById(product+"-number");
    let productNumber =productInput.value;
   

    if(isInceasing==true){
        productNumber=parseInt( productNumber)+1;
    }else if( productNumber>0){
        productNumber=parseInt( productNumber)-1;
    }
    productInput.value= productNumber;
    // update product total
    const productTotal=document.getElementById(product+"-total");
    productTotal.innerText= productNumber*price;
    // calculate total
    calculateTotal();
     
}

function getInputValue(product){
    const productInput=document.getElementById(product+"-number");
    const  productNumber =parseInt( productInput.value);

    return  productNumber;
}

function calculateTotal(){
    const phoneTotal=getInputValue('phone')*1219;
    const caseTotal=getInputValue('case')*59;
    const subTotal=phoneTotal+caseTotal;
    const tax=subTotal/10;
    const totalPrice=subTotal+tax;
    // console.log(subTotal);
    document.getElementById("sub-total").innerText=subTotal;
    document.getElementById("tax-amount").innerText=tax;
    document.getElementById("total-price").innerText=totalPrice;
}

//----------------------------------
// ---------------- phone-----------
//----------------------------------

// increase
document.getElementById("phone-plus").addEventListener("click",function(){
    // console.log(1);
    updateProductNumber("phone",1219,true);
})

// decrease
document.getElementById("phone-minus").addEventListener("click",function(){
    
    updateProductNumber("phone",1219,false);
});

//----------------------------------
// ---------------- case-----------
//----------------------------------

// increase
document.getElementById("case-plus").addEventListener("click",function(){
    // console.log(1);
    // const caseInput=document.getElementById("case-number");
    // const caseNumber =caseInput.value;
    // caseInput.value=parseInt(caseNumber)+1;
    updateProductNumber("case",59,true);
});

// decrease
document.getElementById("case-minus").addEventListener("click",function(){
    // console.log(1);
    // const caseInput=document.getElementById("case-number");
    // const caseNumber =caseInput.value;
    // caseInput.value=parseInt(caseNumber)-1;
    updateProductNumber("case",59,false);
});

//-------------------------------------------
// ---------------- calculate total-----------
//--------------------------------------------

