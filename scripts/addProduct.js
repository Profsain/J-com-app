const form = document.getElementById('form');
const productName = document.getElementById('productName');
const productPrice = document.getElementById('price');
const description = document.getElementById('description');
const productImg = document.getElementById('image');

function addProduct(e) {
    e.preventDefault();
    const product = {
        id: Date.now(),
        productName: productName.value,
        price: productPrice.value,
        description: description.value,
        imgUrl: productImg.value
    }
    let products = JSON.parse(localStorage.getItem('productData')) || [];
    products.push(product);
    localStorage.setItem('productData', JSON.stringify(products));
    form.reset();
}

form.addEventListener('submit', (event) => addProduct(event));