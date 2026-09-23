let allProducts = [];

async function getProduct() {

        const res = await fetch('https://dummyjson.com/products');
        const { products } = await res.json();
         let str = '';
    products.forEach(product => {
        str += `
        <div class="product">
            <div>
                <img src="${product.thumbnail}" alt="${product.title}">
                <h2>${product.title}</h2>
                <h3>${product.price}</h3>
                <p id="desc-${product.id}">${product.description}</p>
            </div>
            <div>
                <button class="read-more" id="${product.id}">Read more →</button>
            </div>
        </div>
        `;
    });
    document.getElementById("product").innerHTML = str;
}




getProduct();