let displayHTML = '';
    /*
    console.log(myImagesObjects);
    console.log(myImagesObjects[0]);
    */
    console.log(myImagesObjects[0].bbsmCode);
    console.log(myImagesObjects[0].price);


function displayImages(){                                
    myImagesObjects.forEach( (item) => {
       const html = `
				
		
                <div class = "product-container">	
					<div class = "imageLogo">
						<img class = "logoPic" src = ${item.image}>
					</div>
					
					<div classs = "product-code">
					    <p class = "lettersLogo">BBSM CODE: ${item.bbsmCode}</p>
                    </div>
                    <div class = "product-price">    
					    <p class = "lettersLogo">PRICE: ${item.price}</p>
                    </div>
                    <div class = "product-description">    
					    <p class = "lettersLogo">PRODUCT DESCRIPTION: ${item.description}</p>
                    </div>
                    <div class = "details-button">
                        <button>details</button> 
                    </div>
                    <div class = "buy-button">    
                        <button>Buy</button>
                    </div>    
			    </div>
             
              
        `;

        displayHTML += html;
    });
   document.querySelector('.js-image-display').innerHTML = displayHTML;
}


displayImages();
//}


// document.body.innerHTML = `${displayImages()};`
