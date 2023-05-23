let productViews = new WeakMap();
let cartItems = new WeakSet();

function incrementProductViews(productId) {
  let key = { id: productId }; // Wrap the productId in an object

  if (productViews.has(key)) {
    let viewCount = productViews.get(key);
    productViews.set(key, viewCount + 1);
  } else {
    productViews.set(key, 1);
  }
}

function addToCart(productId) {
  let key = { id: productId }; // Wrap the productId in an object

  if (cartItems.has(key)) {
    return "Product already in cart";
  } else {
    cartItems.add(key);
    return "Product added to cart";
  }
}

// Example usage:
incrementProductViews(123);
incrementProductViews(123);
console.log(addToCart(123));
console.log(addToCart(123));
