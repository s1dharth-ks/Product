let allProducts = [];

async function getProduct() {
    const res = await fetch('https://dummyjson.com/products');
    const { products } = await res.json();

    allProducts = products;

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
                <a href = "./pages/detail.html?ind=${product.id}"><button class="read-more" id="${product.id}">Read more →</button></a>
            </div>
        </div>
        `;
    })
    document.getElementById("product").innerHTML = str;
}
getProduct()

let searchInput = document.getElementById("searchInput")
searchInput.addEventListener('keyup',async(e)=>{
    
    let filteredProducts = allProducts.filter(product=>product.title.toLowerCase().includes(e.target.value.toLowerCase()))
    // let filterd = filter((products)=>)
    console.log(filteredProducts)
    let str = '';
    if(filteredProducts.length == 0 ){
        str='<h1 class="no-found">No products found...</h1>'
    }
    else{
        filteredProducts.forEach(product => {
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
        })
    }
    document.getElementById("product").innerHTML = str;
})  