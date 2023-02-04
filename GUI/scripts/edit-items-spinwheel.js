// document.getElementById('clear-list').addEventListener('click', () => {
//     data = localStorage.clear();
//     renderItemsList();
// });

document.getElementById('item').addEventListener("keypress", async function (e) {
    if (e.key === "Enter") {
        let item = document.getElementById('item').value;
        item = item.trimStart();
        item = item.trimEnd();

        if (item.length > 10) {
            console.log("please enter the smaller string")
        } else {
            const target = {
                "label": item
            }

            data = localStorage.getItem('Items') ? JSON.parse(localStorage.getItem('Items')) : [];
            if (item.length < 1 || data.some(item => JSON.stringify(item) === JSON.stringify(target))) {
                console.log('item already added');
            } else {
                data.push({
                    'label': item
                });
                localStorage.setItem('Items', JSON.stringify(data));
                renderItemsList();
            }
        }
    }
});

document.getElementById('add-btn').addEventListener('click', () => {
    const editItemsContainer = document.getElementById('addItem')
    editItemsContainer.style.display = `flex`;

})

document.getElementById('done').addEventListener('click', async () => {

    await renderSpinWheel();

    const spinContainer = document.getElementById('spin-container')
    spinContainer.style.display = `flex`;

    const addItemContainer = document.getElementById('addItem')
    addItemContainer.style.display = `none`;

    const editItemsContainer = document.getElementById('editItems-container')
    editItemsContainer.style.display = `none`;


})

function renderItemsList() {
    const currentItems = document.getElementById('current-items');
    currentItems.innerHTML = '';
    data.forEach((element, index) => {
        currentItems.innerHTML += `
        <div class='spin-item'>
            <div class='item-name'>${element.label}</div>
            <div class="remove-btn-div">
                <button onclick="removeItem(${index})" class="remove-btn"><img src="assets/icons/remove-icon.png"></button>
            </div>
        </div>
    `;
    });
};

function removeItem(index) {
    data.splice(index, 1);
    localStorage.setItem('Items', JSON.stringify(data));
    renderItemsList();
};