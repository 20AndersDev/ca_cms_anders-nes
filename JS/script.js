const wp_url = 'https://ca.wp-andersnes.no/wp-json/wc/store/products';

async function getData() {
  try {
    const response = await fetch(wp_url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function displayProducts() {
    const data = await getData();
  
    const productContainer = document.getElementById('product-container');
  
    data.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
  
      const productName = document.createElement('h2');
      productName.className ='prod-h2';
      productName.textContent = product.name;
      productElement.appendChild(productName);
  
      const productPrice = document.createElement('p');
      productPrice.className = 'prod-price';
      productPrice.textContent = `${product.prices.price}${product.prices.currency_symbol}`;
      productElement.appendChild(productPrice);
  
      const productImage = document.createElement('img');
      productImage.className = 'prod-img';
      productImage.src = product.images[0].src;
      productElement.appendChild(productImage);
  
      productContainer.appendChild(productElement);
    });
  }
  
  displayProducts();