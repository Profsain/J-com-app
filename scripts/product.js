// get product from localStorage
const product = JSON.parse(localStorage.getItem('product'));
console.log(product);

const title = document.getElementById('productTitle');
title.setAttribute('class', 'my-4');
title.textContent = product.productName;

const productImg = document.getElementById('productImg');
productImg.setAttribute('src', product.imgUrl);

const productPrice = document.getElementById('price');
productPrice.textContent = `N${product.price}`;

const productDesc = document.getElementById('description');
productDesc.textContent = product.description;

const buyBtn = document.getElementById('buyBtn');
buyBtn.setAttribute('id', product.id);
buyBtn.textContent = 'Buy Now';
buyBtn.addEventListener('click', addToCart)

// add product to cart
function addToCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productObj = {
        quantity: 1,
        id: product.id,
        productName: product.productName,
        price: product.price,
        imgUrl: product.imgUrl
    };
    
    cart.push(productObj);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Product added to cart');
    window.location.href = '../index.html';
}