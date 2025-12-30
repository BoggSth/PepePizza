const myImagesObjects = [
    {
        image: 'images/swissGardenBlackOlives.jpg', 
        bbsmCode: '16.1692',
        description:'Swiss garden, pitted black olives, 340g/200g',
        price: 245.00
    },

    {
        image: 'images/palermoOliveOil.jpg',
        bbsmCode: '16.1646',
        description: 'Palermo olive oil, 1L',
        price: 1170.00   
    },

    {
        image: 'images/orsiniOliveOil.jpg',
        bbsmCode: '16.1642',
        description: 'Orsini olive oil, pomace, 1L',
        price: 1110.00
    },

    {
        image: 'images/swissGardenOliveOil.jpg',
        bbsmCode: '16.1677',
        description: 'Swiss Garden olive oil, extra virgin, 1L',
        price: 1176.00  
    },
    {
        image: 'images/GCKetchup.jpg',
        bbsmCode: '14.14445',
        description: 'Golden Crown, 5kg, ketchup',
        price: 825.00  
    },
    {
        image: 'images/TPKetchupSachet.jpg',
        bbsmCode: '14.14999',
        description: 'Tasty Pixel, ketchup sachet, 8g*100',
        price: 180.00  
    },
    {
        image: 'images/9amKetchup.jpg',
        bbsmCode: '14.14475',
        description: '9am, ketchup, 5kg',
        price: 825.00  
    },   
    {
        image: 'images/veebaMayo.png',
        bbsmCode: '14.15296',
        description: 'Veeba, Mayonnaise, 1kg',
        price: 295.00  
    },
    {
        image: 'images/veebaCheeseJalapeno.jpg',
        bbsmCode: '14.14973',
        description: 'Veeba, cheeese/Jalapeno, 1kg',
        price: 440.00  
    },
    {
        image: 'images/veebaChipotle.jpg',
        bbsmCode: '14.14972',
        description: 'Veeba, chipotle sauce, 1kg',
        price: 517.00  
    },
    {
        image: 'images/veebaBbq.jpg',
        bbsmCode: '14.14826',
        description: 'Veeba, BBQ sauce, 1kg',
        price: 389.00  
    },
    {
        image: 'images/veebaPeriPeri.jpg',
        bbsmCode: '14.14756',
        description: 'Veeba, Peri Peri sauce, 1kg',
        price: 493.00  
    },
    {
        image: 'images/VGHotSauce.jpg',
        bbsmCode: '14.15534',
        description: 'VGarden, hot sauce, 88mL',
        price: 85.00  
    },
    {
        image: 'images/tasteCraftBlueCuracao.jpg',
        bbsmCode: '5.3335',
        description: 'Tastecraft, Blue curacao, 1L',
        price: 1120.00 
    },
    {
        image: 'images/tasteCraftVanilla.jpg',
        bbsmCode: '14.14840',
        description: 'Tastecraft, Vanilla syrup, 1L',
        price: 1120.00 
    },
    {
        image: 'images/tasteCraftMojito.jpg',
        bbsmCode: '5.3337',
        description: 'Tastecraft, Mojito syrup, 1L',
        price: 1120.00 
    },
    {
        image: 'images/tasteCraftGrenadine.jpg',
        bbsmCode: '5.3336',
        description: 'Tastecraft, Grenadine syrup, 1L',
        price: 1120.00 
    },
    {
        image: 'images/tasteCraftMixedBerry.jpg',
        bbsmCode: '5.3529',
        description: 'Tastecraft, Mixed berry crush, 5kg jar',
        price: 3635.00 
    },
    {
        image: 'images/tasteCraftMango.jpg',
        bbsmCode: '5.3530',
        description: 'Tastecraft, Mango crush, 5kg jar',
        price: 2655.00 
    },
    {
        image: 'images/tasteCraftStrawberry.jpg',
        bbsmCode: '5.3531',
        description: 'Tastecraft, Strawberry crush, 5kg jar',
        price: 2655.00 
    },
    {
        image: 'images/TPChocolateSyrup.jpg',
        bbsmCode: '14.15320',
        description: 'Tasty Pixel, Chocolate syrup, 1.3kg',
        price: 2655.00 
    },
    {
        image: 'images/BBOregano.jpg',
        bbsmCode: '14.14441',
        description: 'Big Bell, oregano, 1kg',
        price: 690.00 
    },
    {
        image: 'images/invictaOregano.jpg',
        bbsmCode: '14.15384',
        description: 'Invicta, oregano, 1kg',
        price: 670.00 
    },
    {
        image: 'images/BBRosemary.jpg',
        bbsmCode: '14.14195',
        description: 'Big Bell, rosemary, 500g',
        price: 345.00 
    },
    {
        image: 'images/invictaChilliFlakes.jpg',
        bbsmCode: '14.15385',
        description: 'Invicta, chilli flakes, 1kg',
        price: 730.00 
    },
    {
        image: 'images/drukTomatoPuree.jpg',
        bbsmCode: '8.1263',
        description: 'Druk tomato puree, 850g',
        price: 243.00 
    },
    {
        image: 'images/GTMushroom.png',
        bbsmCode: '8.1271',
        description: 'Golden Tower, mushroom, 400g/180g',
        price: 128.00 
    },
    {
        image: 'images/gyanMaida.jpg',
        bbsmCode: '7.3058',
        description: 'Gyan maida, 50kg',
        price: 3875.00 
    },
    {
        image: 'images/ramailoMaida.jpg',
        bbsmCode: '7.1992',
        description: 'Ramailo maida, 50kg',
        price: 3800.00 
    },
    {
        image: 'images/bhansagharMaida.jpg',
        bbsmCode: '7.3043',
        description: 'Bhansaghar maida, 50kg',
        price: 3800.00 
    },
    {
        image: 'images/fortuneMaida.jpg',
        bbsmCode: '7.3064',
        description: 'Fortune maida, 50kg',
        price: 3800.00 
    },
    {
        image: 'images/BFPlasticWrap.jpg',
        bbsmCode: '13.7378',
        description: 'Best Fresh, plastic wrap',
        price: 650.00 
    },
    {
        image: 'images/purePopup.jpg',
        bbsmCode: '6.1328',
        description: 'Pure, pop-up, napkins, 100/110 pulls',
        price: 18.00 
    }   
];
