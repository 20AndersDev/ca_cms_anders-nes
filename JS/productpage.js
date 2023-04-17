const consumerKey = "ck_fddfd5fc1ddbbbfccd7a42a14b5c1bbe170618d6";
const secretKey = "cs_2ab09bccec3e8f72b07f393b479b8b4eeab44e34";

const productImg = document.querySelector('.movie-image');
const productTitle = document.querySelector('.movie-title');
const productPrice = document.querySelector('.productpage-price');
const productDescription = document.querySelector('.movie-description');

async function getProduct() {
  try {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const productUrl = `https://ca.wp-andersnes.no/wp-json/wc/v3/products/${id}?consumer_key=${consumerKey}&consumer_secret=${secretKey}`;
    const response = await fetch(productUrl);
    const product = await response.json();
    console.log(product);
    renderProduct(product);
  } catch (error) {
    console.error(error);
  }
}

function renderProduct(product) {
  const productPage = document.getElementById('product-page');

  productImg.src = product.images[0].src;
  productImg.alt = `Movie poster - ${product.title}`;

  productTitle.textContent = product.title;

  productPrice.textContent = `${product.price} ${product.currency_prefix}`;

  productDescription.textContent = product.description;

  productPage.appendChild(productImg);
  productPage.appendChild(productTitle);
  productPage.appendChild(productPrice);
  productPage.appendChild(productDescription);
}

getProduct();
