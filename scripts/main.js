const products = [
  {
    id: 1,
    productName: 'Dell XPS 13',
    price: 1299.99,
    imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/5541121/1.jpg?1126',
    description: 'Powerful and portable laptop with a stunning InfinityEdge display.',
    category: 'Ultrabook'
  },
  {
    id: 2,
    productName: 'HP Spectre x360',
    price: 1499.99,
    imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/3445122/1.jpg?9219',
    description: 'Convertible laptop with a sleek design, powerful performance, and a 360-degree hinge.',
    category: 'Convertible'
  },
  {
    id: 3,
    productName: 'Lenovo ThinkPad X1 Carbon',
    price: 1699.99,
    imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/18/461128/1.jpg?9089',
    description: 'Business laptop with a durable build, impressive performance, and a high-resolution display.',
    category: 'Business'
  },
  {
    id: 4,
    productName: 'Asus ROG Zephyrus G14',
    price: 1799.99,
    imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/0301442/1.jpg?0937',
    description: 'Gaming laptop with a powerful AMD Ryzen processor and a high-refresh-rate display.',
    category: 'Gaming'
  },
  {
    id: 5,
    productName: 'MacBook Air',
    price: 999.99,
    imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/42/695217/1.jpg?2858',
    description: "Thin and lightweight laptop with Apple's M1 chip for efficient performance.",
    category: 'Ultrabook'
  },
  {
    id: 6,
    productName: 'Acer Predator Helios 300',
    price: 1299.99,
    imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/124177/1.jpg?9117',
    description: 'Gaming laptop with a powerful GPU, high-refresh-rate display, and a cooling system.',
    category: 'Gaming'
  },
  {
    id: 7,
    productName: 'Microsoft Surface Laptop 4',
    price: 1399.99,
    imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/124177/1.jpg?9117',
    description: 'Sleek and stylish laptop with a high-resolution PixelSense touchscreen.',
    category: 'Ultrabook'
  },
  {
    id: 8,
    productName: 'Alienware m15 R4',
    price: 2499.99,
    imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/1676612/1.jpg?3817',
    description: 'High-performance gaming laptop with advanced graphics and customizable RGB lighting.',
    category: 'Gaming'
  },
  {
    id: 9,
    productName: 'HP Envy x360',
    price: 1199.99,
    imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/202877/1.jpg?7727',
    description: 'Convertible laptop with a sleek design, AMD Ryzen processor, and a touch display.',
    category: 'Convertible'
  },
  {
    id: 10,
    productName: 'Dell Inspiron 14',
    price: 699.99,
    imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/6971202/1.jpg?7211',
    description: 'Affordable laptop with a compact design and reliable performance.',
    category: 'Budget'
  },
  {
    id: 11,
    productName: 'MSI GS66 Stealth',
    price: 1999.99,
    imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/7965412/1.jpg?2372',
    description: 'Sleek and powerful gaming laptop with a high-refresh-rate display and advanced cooling.',
    category: 'Gaming'
  },
  {
    id: 12,
    productName: 'Razer Blade 15',
    price: 2199.99,
    imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/2214031/1.jpg?3602',
    description: 'Premium gaming laptop with a thin and light design, powered by NVIDIA graphics.',
    category: 'Gaming'
  },
  {
    id: 13,
    productName: 'Lenovo Yoga C940',
    price: 1299.99,
    imgUrl: 'https://example.com/lenovo_yoga_c940.jpg',
    description: 'Convertible laptop with a 4K display, Dolby Atmos sound, and a stylus for creativity.',
    category: 'Convertible'
  },
  {
    id: 14,
    productName: 'Acer Chromebook Spin 13',
    price: 599.99,
    imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/5527881/1.jpg?4172',
    description: 'Chromebook with a 2-in-1 design, long battery life, and a touchscreen display.',
    category: 'Chromebook'
  },
  {
    id: 15,
    productName: 'LG Gram 17',
    price: 1499.99,
    imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/18/261498/1.jpg?3372',
    description: 'Ultra-lightweight laptop with a large 17-inch display and all-day battery life.',
    category: 'Ultrabook'
  },
  {
    id: 16,
    productName: 'Asus VivoBook S15',
    price: 899.99,
    imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/033789/1.jpg?8526',
    description: 'Stylish and affordable laptop with a colorful display and a slim design.',
    category: 'Budget'
  },
  {
    id: 17,
    productName: 'HP Pavilion Gaming Laptop',
    price: 999.99,
    imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/8435352/1.jpg?6148',
    description: 'Entry-level gaming laptop with dedicated graphics and a high-refresh-rate display.',
    category: 'Gaming'
  },
  {
    id: 18,
    productName: 'Lenovo Legion Y540',
    price: 1299.99,
    imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/7636902/1.jpg?2719',
    description: 'Mid-range gaming laptop with a balanced combination of performance and affordability.',
    category: 'Gaming'
  },
  {
    id: 19,
    productName: 'Dell Latitude 7410',
    price: 1499.99,
    imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/1784112/1.jpg?2655',
    description: 'Business laptop with a compact design, long battery life, and security features.',
    category: 'Business'
  },
  {
    id: 20,
    productName: 'Samsung Galaxy Book Flex',
    price: 1299.99,
    imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/3670352/1.jpg?0450',
    description: '2-in-1 laptop with a QLED display, S Pen support, and a premium aluminum build.',
    category: 'Convertible'
  }
];

// store products in local storage
const productDatabase = localStorage.getItem('productsData');
if (!productDatabase) {
  localStorage.setItem('productsData', JSON.stringify(products));
}

// convert productDatabase to javascript object
const productList = JSON.parse(productDatabase);
const productGrid = document.getElementById('grid');

// loop through productList and display each product
for (product of productList) {
    const productCard = document.createElement('div');
    productCard.setAttribute('class', 'card');
    productCard.setAttribute('style', 'width: 18rem;');

    // image element
    const productImg = document.createElement('img');
    productImg.setAttribute('class', 'card-img-top');
    productImg.setAttribute('src', product.imgUrl);

    // card body
    const productCardBody = document.createElement('div');
    productCardBody.setAttribute('class', 'card-body');
    
    // product name
    const productName = document.createElement('h5');
    productName.setAttribute('class', 'card-title');
    productName.textContent = product.productName;

    // product price
    const productPrice = document.createElement('p');
    productPrice.setAttribute('class', 'card-text');
    productPrice.textContent = `N${product.price}`;

    // product description
    const productDesc = document.createElement('p');
    productDesc.setAttribute('class', 'card-text');
    productDesc.textContent = product.description;

    // action buttons
    const buyBtn = document.createElement('button');
    buyBtn.setAttribute('class', 'btn btn-warning');
    buyBtn.textContent = 'Buy Now';
    buyBtn.setAttribute('id', product.id);
    buyBtn.addEventListener('click', (event) => handleProduct(event));

    // assemble product card body
    productCardBody.appendChild(productName);
    productCardBody.appendChild(productPrice);
    productCardBody.appendChild(productDesc);
    productCardBody.appendChild(buyBtn);

    // assemble product card
    productCard.appendChild(productImg);
    productCard.appendChild(productCardBody);

    // add product card to product grid 
    productGrid.appendChild(productCard);

}

// handle single product click
function handleProduct(e) {
    const productId = e.target.id;
    const product = productList.find(product => product.id == productId);
    console.log(product);
    localStorage.setItem('product', JSON.stringify(product));
    window.location.href = './pages/product.html';
}