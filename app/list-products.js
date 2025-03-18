import './list-products.scss';

// images
// import enginakyurt from "./assets/images/pexels-engin-akyurt-1089439-9561297.jpg";
// import quangVietNguyen from "./assets/images/pexels-quang-viet-nguyen-1089439-9561297.jpg";
// import yaazhini from "./assets/images/pexels-yaazhini-1089439-9561297.jpg";

import apple from "./assets/images/apple.jpg";
import camara1 from "./assets/images/camara1.jpg";
import camara2 from "./assets/images/camara2.jpg";
import crema from "./assets/images/crema.jpg";
import crema2 from "./assets/images/crema2.jpg";
import drone1 from "./assets/images/drone1.jpg";
import drone2 from "./assets/images/drone2.jpg";
import drone3 from "./assets/images/drone3.jpg";
import jabon from "./assets/images/jabon.jpg";
import pasta from "./assets/images/pasta.jpg";
import suero from "./assets/images/suero.jpg";
import uneta from "./assets/images/uneta.jpg";

document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById('products');

    const products = [
        { name: 'Apple Pack', description: 'Everything you need from Apple.', image: apple, price: "$2999.99" },
        { name: 'Camera 1', description: 'High-resolution digital camera.', image: camara1, price: "$499.99" },
        { name: 'Camera 2', description: 'Professional photography camera.', image: camara2, price: "$699.99" },
        { name: 'Cream', description: 'Moisturizing face cream.', image: crema, price: "$9.99" },
        { name: 'Cream 2', description: 'Special anti-aging cream.', image: crema2, price: "$14.99" },
        { name: 'Drone 1', description: 'High-performance aerial drone.', image: drone1, price: "$999.99" },
        { name: 'Drone 2', description: 'Advanced GPS-enabled drone.', image: drone2, price: "$799.99" },
        { name: 'Drone 3', description: 'Beginner-friendly drone.', image: drone3, price: "$299.99" },
        { name: 'Soap', description: 'Organic handmade soap.', image: jabon, price: "$3.99" },
        { name: 'Toothpaste', description: 'Fluoride toothpaste for fresh breath.', image: pasta, price: "$2.49" },
        { name: 'Serum', description: 'Hydrating facial serum.', image: suero, price: "$19.99" },
        { name: 'Nail Polish', description: 'Long-lasting nail polish.', image: uneta, price: "$4.99" }
    ];

    products.forEach(product => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'mb-4');

        cardDiv.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="price">${product.price}</p>
                    <button class="btn btn-primary w-100">Add to Cart</button>
                </div>
            </div>
        `;

        productsContainer.appendChild(cardDiv);
    });
});