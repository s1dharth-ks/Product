const searchParams = new URLSearchParams(window.location.search)
const ind = parseInt(searchParams.get('ind'))

async function getDetails() {
    const res = await fetch('https://dummyjson.com/products');
    const { products } = await res.json();

    // product.push([product])
    // localStorage.setItem("product",JSON.stringify(product))

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

                    <input type="number" value="" id="quantity">
                    <button id ="addToCart">Add to cart</button>
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

    document.getElementById("detail").innerHTML = str;


    
    let div = document.getElementById('review')
    // div.innerHTML = " ";
    product.reviews.forEach((review,index) => {
        let rate = " "
        switch(review.rating){
            case 0:{
               rate = "☆☆☆☆☆" 
               break;
            }
            case 1:{
                rate = "★☆☆☆☆"
                break;
            }
            case 2:{
                rate = "★★☆☆☆"
                break;
            }
            case 3:{
                rate = "★★★☆☆"
            }
            case 4:{
                rate = "★★★★☆"
                break;
            }
            case 5:{
                rate = "★★★★★"
                break;
            }
            default:{
                rate = " "
                break;
            }
        }
        let reviewDiv =  document.createElement("div")
        reviewDiv.innerHTML =`
        <div class="review">
            <b>${review.reviewerName}</b> -${review.date}
            <div>${rate}</div>
            <p>${review.comment}</p>
        </div>
        `
        div.appendChild(reviewDiv)
    });

        document.getElementById("addToCart").addEventListener("click", ()=>{
        const quantity = parseInt(document.getElementById("quantity").value)

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        
        cart.push({
            id : product.id,
            title : product.title,
            price : product.price,
            thumbnail : product.thumbnail,
            quantity : quantity

        })

        localStorage.setItem("cart", JSON.stringify(cart))

        alert("product added to cart!")
    })
  
}



getDetails()