const consumerKey = "ck_fddfd5fc1ddbbbfccd7a42a14b5c1bbe170618d6";
const secretKey = "cs_2ab09bccec3e8f72b07f393b479b8b4eeab44e34";

const featuredUrl = "https://ca.wp-andersnes.no/wp-json/wc/v3/products/?featured=true&consumer_key=" + consumerKey + "&consumer_secret=" + secretKey;

async function getData() {
  try {
    const response = await fetch(featuredUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}



async function displayProducts() {
  const data = await getData();

  const productContainer = document.getElementById('featured-container');

  data.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const productName = document.createElement('h2');
    productName.className ='prod-h2';
    productName.textContent = product.name;
    productElement.appendChild(productName);

    const productPrice = document.createElement('p');
    productPrice.className = 'prod-price';
    productPrice.textContent = `${product.price}$`;
    productElement.appendChild(productPrice);

    const productImage = document.createElement('img');
    productImage.className = 'prod-img';
    productImage.src = product.images[0].src;
    productElement.appendChild(productImage);

    productContainer.appendChild(productElement);
  });
}

displayProducts()
