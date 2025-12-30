

export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart = [
        {
        productId: '1',
        quantity: 2,
        deliveryOptionId: '1'
        },
        
        {
        productId: '2',
        quantity: 1,
        deliveryOptionId: '2'    
        }
    ];
}

export function addToCart(productId){
    let matchingItem;

    cart.forEach((cartItem)=>{
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });

    if(matchingItem){
        matchingItem.quantity += 1;
    }else{
        cart.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId: '1'
        });
    }
    saveToStorage();
}

/** 
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

*/

export function removeFromCart(productId){
    const newCart =[];

    cart.forEach((cartItem)=>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;

    cart.forEach((cartItem)=>{
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });
    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();
}


