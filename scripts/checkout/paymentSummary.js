import {cart} from '../../data/cart.js';
import { formatCurrency } from '../utils/money.js';
import { getProduct } from '../../data/product.js';
import {deliveryOptions} from '../../data/deliveryOptions.js';

export function renderPaymentSummary(){
    
    let productPriceCents = 0;
    let shippingPriceCents = 0;
    let cartQuantity = 0;
    
    cart.forEach((cartItem) =>{
        const product = getProduct(cartItem.productId);
        productPriceCents += product.price * cartItem.quantity;     
        
        /*
        //This function or code is not working properly
        const deliveryOption = getDeliveryOption(cartItem.deliveyOptionId);
        shippingPriceCents += deliveryOption.priceCents;     
        */         
        //The code below works properly
        let deliveryOption;

        deliveryOptions.forEach((option)=>{
            if(option.deliveryId === cartItem.deliveryOptionId){
              deliveryOption = option;
            }
        });

        shippingPriceCents += deliveryOption.priceCents;

        cartQuantity += cartItem.quantity;
      
    });    
        const totalBeforTaxCents = (productPriceCents *100) + shippingPriceCents
        const taxCents = totalBeforTaxCents * 0.13;
        const totalCents = totalBeforTaxCents + taxCents;

    const paymentSummaryHTML = `
    
            <div class="payment-summary-title">
            Order Summary
            </div>

            <div class="payment-summary-row">
            <div>Items (${cartQuantity}):</div>
            <div class="payment-summary-money">
                Rs. ${formatCurrency(productPriceCents *100)}
            </div>
            </div>

            <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">
                Rs. ${formatCurrency(shippingPriceCents)}
            </div>
            </div>

            <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">
                Rs. ${formatCurrency(totalBeforTaxCents)}
            </div>
            </div>

            <div class="payment-summary-row">
            <div>Estimated VAT (13%):</div>
            <div class="payment-summary-money">
               Rs. ${formatCurrency(taxCents)}
            </div>
            </div>

            <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">
                Rs. ${formatCurrency(totalCents)}
            </div>
            </div>

            <button class="place-order-button button-primary
            js-place-order">
            Place your order
            </button>
        </div>
    `;
    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

}
