let spinItems = [];

document.getElementById('item-input').addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        let item = document.getElementById('item-input').value;

        if (spinItems.includes(item)) {
            console.log('item already added');
        } else {
            spinItems.push(item);
            console.log(spinItems)
            updateItems(item);
        }
    }
});

function updateItems(item) {
    const itemsDiv = document.getElementById('spin-items');
    itemsDiv.innerHTML += `<div class='spin-item'>${item}</div>`
}