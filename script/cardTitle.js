// card item Name & price

let price = 0;
function cardClick(target) {
    const selectedItem = document.getElementById('show-item-name');
    const totalPriceId = document.getElementById('total-price');
    const itemName = target.childNodes[3].childNodes[5].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItem.append(li);

    const itemPrice = target.childNodes[3].childNodes[7].childNodes[0].innerText;
    price = parseFloat(price) + parseFloat(itemPrice);
    itemTotalPrice = price.toFixed(2)
    totalPriceId.innerText = itemTotalPrice;
    

    // Purchase btn enable 
     const purchaseBtn = document.getElementById('purchase-btn');
     if(itemTotalPrice > 0){
        purchaseBtn.removeAttribute('disabled')
     }

    //  apply btn enable 
    const applyBtn = document.getElementById('apply-btn');
    if(itemTotalPrice > 200){
        applyBtn.removeAttribute('disabled');
    }

    

    };



