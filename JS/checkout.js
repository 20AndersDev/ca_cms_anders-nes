const consumerKey = "ck_fddfd5fc1ddbbbfccd7a42a14b5c1bbe170618d6";
const secretKey = "cs_2ab09bccec3e8f72b07f393b479b8b4eeab44e34";

const checkoutImg = document.querySelector('.checkout-product-img');
const checkoutTitle = document.querySelector('.checkout-p');
const checkoutPrice = document.querySelector('.checkout-price');

async function getProduct() {
  try {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const productUrl = `https://ca.wp-andersnes.no/wp-json/wc/v3/products/${id}?consumer_key=ck_fddfd5fc1ddbbbfccd7a42a14b5c1bbe170618d6&consumer_secret=cs_2ab09bccec3e8f72b07f393b479b8b4eeab44e34`;
    const response = await fetch(productUrl);
    const product = await response.json();
    renderProduct(product);
  } catch (error) {
    console.log(error);
  }
}

function renderProduct(product) {
  checkoutImg.src = product.images[0].src;
  checkoutImg.alt = `Movie poster - ${product.title}`;

  checkoutTitle.textContent = product.name;

  checkoutPrice.textContent = product.price + '$';


}

getProduct();
