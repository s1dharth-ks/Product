const searchParams = new URLSearchParams(window.location.search)
const ind = parseInt(searchParams.get('ind'))

async function getDetails() {
    const res = await fetch('https://dummyjson.com/products');
    const { products } = await res.json();

    // allProducts = products;

    let str = '';
    
    const product = products.find((__,index)=>index==ind-1)

    str = `
            <div class="top">
                <div class="box">
                    <img src="${product.thumbnail}" alt="${product.title}">
                </div>

                <div>
                    <p>${product.brand}</p>
                    <h1>${product.title}</h1>
                    <p>★★★☆☆ ${product.rating} ( reviews)</p>

                    <span class="price">$ ${product.price}</span>
                    <span class="old-price">$ </span>
                    <span class="discount"> ${product.discountPercentage}% off</span>

                    <p class="stock">${product.availabilityStatus} · ${product.stock} left</p>

                    <p>${product.description}</p>

                    <input type="number" value="" min="48">
                    <button>Add to cart</button>
                    <p>Minimum order: 48 units</p>
                </div>
            </div>

            <div class="row">
                <div class="box">
                    <h3>Shipping and returns</h3>
                    <p>Shipping: ${product.shippingInformation}</p>
                    <p>Warranty: ${product.warrantyInformation}</p>
                    <p>Returns: No return policy</p>
                </div>

                <div class="box">
                    <h3>Specifications</h3>
                    <p>SKU: ${product.sku}</p>
                    <p>Category: ${product.category}</p>
                    <p>Weight: ${product.weight} g</p>
                    <p>Dimensions: ${product.dimensions.width} × ${product.dimensions.height} × ${product.dimensions.depth}</p>
                    
                </div>
            </div>


        `
        console.log(product.reviews.length)
    document.getElementById("detail").innerHTML = str;
    
    let div = document.getElementById('review')
    // div.innerHTML = " ";
    products.forEach((product,index) => {
        let reviewDiv =  document.createElement("div")
        reviewDiv.innerHTML =`
        <div class="review">
            <b>${product.reviews[index].reviewerName}</b> -${product.reviews[index].date}
            <div>★★★★★</div>
            <p>${product.reviews[index].comment}</p>
        </div>
        `
        div.appendChild(reviewDiv)
    });
    
  
}



getDetails()