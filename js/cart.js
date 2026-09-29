let cart = JSON.parse(localStorage.getItem("cart")) || []
function getCart() {
    let str = ""

    let Tprice = 0
    cart.forEach((cart)=> {

        str += `
        <div class="cart-item">
            <img class="cart-item-image" src="${cart.thumbnail}" alt="Canvas backpack">
            <div class="cart-item-info">
                <h2 class="cart-item-title">${cart.title}</h2>
                <p class="cart-item-price">$ ${cart.price}</p>
                <input class="cart-item-qty" type="number" value="1" min="1">
            </div>
            <button class="cart-item-remove">Remove</button>
        </div>
        `
        Tprice += Number(cart.price); 
    });
    document.getElementById("cart-list").innerHTML = str
 
    document.getElementById("cart-summary").innerHTML = `
        <div class="cart-summary-row">
            <span>Subtotal</span>
            <span>${Tprice}</span>
        </div>
        <div class="cart-summary-row">
            <span>Shipping</span>
            <span>Free</span>
        </div>
        <div class="cart-summary-row cart-summary-total">
            <span>Total</span>
            <span>${Tprice}</span>
        </div>
        <button class="cart-checkout">Checkout</button>
    `     
}

getCart()