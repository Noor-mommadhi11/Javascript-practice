let allProducts = [];
let filteredProducts = [];

const container = document.getElementById("productContainer");
const loader = document.getElementById("loader");
const errorText = document.getElementById("error");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

async function fetchProducts() {
    loader.style.display = "block";
    errorText.textContent = "";

    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("API Failed");
        }

        const data = await response.json();

        allProducts = data;
        filteredProducts = data;

        displayProducts(filteredProducts);
    } catch (error) {
        errorText.textContent = "Error loading data";
    } finally {
        loader.style.display = "none";
    }
}

function displayProducts(products) {
    container.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title.slice(0, 20)}...</h3>
            <p>${product.description.slice(0, 60)}...</p>
            <div class="price-btn">$${product.price}</div>
            <br>
            <button class="view-btn" onclick="viewDetails(${product.id})">
                View More
            </button>
        `;

        container.appendChild(card);
    });
}

searchInput.addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();

    filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchValue)
    );

    applyCategoryFilter();
});

categoryFilter.addEventListener("change", applyCategoryFilter);

function applyCategoryFilter() {
    let products = [...allProducts];

    const searchValue = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    products = products.filter(product =>
        product.title.toLowerCase().includes(searchValue)
    );

    if (category !== "all") {
        products = products.filter(product =>
            product.category === category
        );
    }

    filteredProducts = products;
    displayProducts(filteredProducts);
}

function sortProducts(order) {
    let sorted = [...filteredProducts];

    if (order === "low") {
        sorted.sort((a, b) => a.price - b.price);
    } else {
        sorted.sort((a, b) => b.price - a.price);
    }

    displayProducts(sorted);
}

function viewDetails(id) {
    const product = allProducts.find(item => item.id === id);

    const modalBody = document.getElementById("modalBody");
    const modal = document.getElementById("modal");

    modalBody.innerHTML = `
        <h2>${product.title}</h2>
        <img src="${product.image}" width="200">
        <p>${product.description}</p>
        <h3>Price: $${product.price}</h3>
        <p>Category: ${product.category}</p>
    `;

    modal.style.display = "block";
}

document.getElementById("closeBtn").onclick = function () {
    document.getElementById("modal").style.display = "none";
};

fetchProducts();