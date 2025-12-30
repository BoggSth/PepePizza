import {cart, removeFromCart, updateDeliveryOption} from '../../data/cart.js';
import {product, getProduct} from '../../data/product.js';
import {formatCurrency} from '../utils/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { deliveryOptions, getDeliveryOption } from '../../data/deliveryOptions.js';
import { renderPaymentSummary } from './paymentSummary.js';


export function renderOrderSummary(){
    
  let cartSummaryHTML = '';

    cart.forEach( (cartItem)=> {
        const productId = cartItem.productId;
        const matchingProduct = getProduct(productId);

        const deliveryOptionId = cartItem.deliveryOptionId;
        const deliveryOption = getDeliveryOption(deliveryOptionId);

        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
        const dateString = deliveryDate.format('dddd, MMMM D');

  

        cartSummaryHTML += `
            
            <div class="cart-item-container
            js-cart-item-container
            js-cart-item-container-${matchingProduct.id} ">
              <div class="delivery-date">
                ${dateString}
              </div>

            <div class="cart-item-details-grid">
              <img class="product-image" src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.description}
                </div>
                <div class="product-price">
                ${formatCurrency(matchingProduct.price * 100)}
                </div>
                <div class="product-quantity
                  js-product-quantity-e43638ce-6aa0-4b85-b27f-e1d07eb678c6">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link"
                    data-product-id ="${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                ${deliveryOptionsHTML(matchingProduct, cartItem)}
            
              </div>
            </div>
          </div>
        `;
    });

    function deliveryOptionsHTML(matchingProduct, cartItem){
        let deliveryHTML = '';

        deliveryOptions.forEach((deliveryOption)=>{
            const today =dayjs();
            const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
            const dateString = deliveryDate.format('dddd, MMMM D');

            const priceString = deliveryOption.priceCents===0
                                ? 'FREE'
                                : `$${formatCurrency(deliveryOption.priceCents)} -` ;
            const isChecked = deliveryOption.deliveryId === cartItem.deliveryOptionId;
            
            deliveryHTML += `
                
            <div class="delivery-option js-delivery-option" 
            data-product-id="${matchingProduct.id}" 
            data-delivery-option-id="${deliveryOption.deliveryId}">
              <input type="radio" 
              ${isChecked ? 'checked' : ''}
              class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
              <div>
                <div class="delivery-option-date">
                  ${dateString}
                </div>
                <div class="delivery-option-price">
                  ${priceString}
                </div>
              </div>
            </div>
            `;
        });
        return deliveryHTML;
    }

    document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

    document.querySelectorAll('.js-delete-link')
      .forEach((link)=>{
        link.addEventListener('click', ()=>{
          const productId = link.dataset.productId;
          removeFromCart(productId);

          const container = document.querySelector(`.js-cart-item-container-${productId}`);
          container.remove();
         renderPaymentSummary();

      });
    });

    document.querySelectorAll('.js-delivery-option')
        .forEach((element) => {
          element.addEventListener('click', ()=>{
            const productId = element.dataset.productId;
            const deliveryOptionId = element.dataset.deliveryOptionId;
            updateDeliveryOption(productId, deliveryOptionId);
           //Using RECURSION( calling the same function again to solve the problem) to rewrite the html on the page 
           renderOrderSummary();
           renderPaymentSummary(); 
        });

      });
}

