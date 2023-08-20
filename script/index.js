// reusable function 
function cardClick(target){
    const selectedItem = document.getElementById('show-item-name')
    const itemName = target.childNodes[3].childNodes[5].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItem.append(li);
}