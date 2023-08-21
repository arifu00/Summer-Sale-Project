// card item Name & price

let price = 0;
function cardClick(target) {
    const selectedItem = document.getElementById('show-item-name');
    const totalPriceId = document.getElementById('total-price');
    const grandTotalId = document.getElementById('grand-total');

    const itemName = target.childNodes[3].childNodes[5].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItem.append(li);

    const itemPrice = target.childNodes[3].childNodes[7].childNodes[0].innerText;
    price = parseFloat(price) + parseFloat(itemPrice);
    itemTotalPrice = price.toFixed(2)
    totalPriceId.innerText = itemTotalPrice;
    grandTotalId.innerText = itemTotalPrice;


    // Purchase btn enable 
    const purchaseBtn = document.getElementById('purchase-btn');
    if (itemTotalPrice > 0) {
        purchaseBtn.removeAttribute('disabled')
    }

    //  apply btn enable 
    const applyBtn = document.getElementById('apply-btn');
    if (itemTotalPrice > 200) {
        applyBtn.removeAttribute('disabled');
    }

}

document.getElementById("apply-btn").addEventListener("click", function () {
    const couponCodeInput = document.getElementById('coupon-code');
    const couponCode = couponCodeInput.value;

    const grandTotalId = document.getElementById('grand-total');
    const discount = document.getElementById('discount');
    const totalPrice = itemTotalPrice;

    couponCodeInput.value = '';


    if (couponCode === "SELL200") {
        discountPercentage = 20 / 100;
        discountPrice = (totalPrice * discountPercentage).toFixed(2);
        discount.innerText = discountPrice;
        grandTotalId.innerText = (totalPrice - (totalPrice * discountPercentage)).toFixed(2);



    } else {

        alert("Coupon code is not valid.");
    }

});

document.getElementById('go-home').addEventListener('click', function(){
    window.document.location.href = 'index.html'
})



