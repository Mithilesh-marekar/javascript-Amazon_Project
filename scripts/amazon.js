
// This Array is now available in Products.js file
// const products = [{
//     image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
//     name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//     rating: {
//         stars: 4.5,
//         count: 87
//     },
//     priceRupee: 1090
// },

// {
//     image: 'images/products/intermediate-composite-basketball.jpg',
//     name: 'Intermediate Size Basketball',
//     rating: { stars: 4, count: 127 },
//     priceRupee: 2095
// },
// {
//     image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//     name: 'Adults Plain Cotton T-Shirt - 2 Pack',
//     rating: {
//         stars: 4.5, count: 56
//     },
//     priceRupee: 799
// },
// {
//     image:'images/products/black-2-slot-toaster.jpg',
//     name:'2 Slot Toaster Black',
//     rating:{
//         stars:5 ,count :  2197
//     },
//     priceRupee: 1899
// }];


// Combining Generated HTML Together
let productsHTML = '';

// Generate HTML
products.forEach((product) => {
  productsHTML += ` <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      ₹${(product.priceRupee / 100).toFixed(2)} 
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button
     button-primary js-add-to-cart"
     data-product-name="${product.name}">
      Add to Cart
    </button>
  </div>`;

});
// console.log(productsHTML);
// Putting The generated and combined HTML of Products on web Page using DOM
document.querySelector('.js-products-grid')
  .innerHTML = productsHTML;


// Using DOM to Make all ADD to Cart buttons Interactive
document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      // Storing the product name
      const productName = button.dataset.productName;

      // Checking if the product is alredy in the cart
      // by looping through the cart.

      let matchingItem;
      cart.forEach((item) => { // this "item" will have the cart "productName" and "quantity";
        //1- Check if the product is alredy in the cart
        if (productName === item.productName) {
          matchingItem = item;
        }
      });
      // 2- If its in the cart increase the quantity by 1
      if (matchingItem) {
        matchingItem.quantity += 1;
      }
      // 3- If its not in the cart just add it to the cart.
      else {
        //  Added the Product to Cart with its quantity
        cart.push({
          productName: productName,
          quantity: 1
        });
      }
      console.log(cart);
      //  console.log(button.dataset.productName) ;
      // console.log('Added Product');
    });
  });