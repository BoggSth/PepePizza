import { product } from '../data/product.js';
import {cart, addToCart} from '../data/cart.js';
//import {formatCurrency} from './utils/money.js';


let displayHTML = '';

function displayImages(){                                
    product.forEach( (item) => {
       const html = `
				
		
                <div class = "product-container">	
					<div class = "imageLogo">
						<img class = "logoPic" src = ${item.image}>
					</div>
					
					<div classs = "product-code">
					    <p class = "lettersLogo">BBSM CODE: ${item.bbsmCode}</p>
                    </div>

                    <div class = "product-description">    
					    <p class = "lettersLogo">${item.description}</p>
                    </div>

                    
                    <div class="product-rating-container">
                            <img class="product-rating-stars" src = "images-rating/rating-35.png">
                            <div class="product-rating-count link-primary">
                                ${item.rating.count}
                            </div>
                            </div>

                            <div class="product-price">
                            ${item.price}
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
                            <img src="images-icon/checkmark.png">
                            
                            </div>

                            <button class="add-to-cart-button button-primary js-add-to-cart"
                            data-product-id="${item.id}">
                            Add to Cart
                            </button>
                        </div>                    
                    
                        

			    </div>
             
              
        `;

        displayHTML += html;
    });
   document.querySelector('.js-image-display').innerHTML = displayHTML;
}

displayImages();

function updateCartQunatity(){
    let cartQuantity = 0;
    
    cart.forEach( (cartItem)=>{
        cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}


document.querySelectorAll('.js-add-to-cart').forEach( (button)=>{
    button.addEventListener('click', ()=>{
        const productId = button.dataset.productId;
        addToCart(productId);
        updateCartQunatity();
    });
});

// document.body.innerHTML = `${displayImages()};`
