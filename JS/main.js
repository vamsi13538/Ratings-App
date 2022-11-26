let ratings = {
    sony: 4.1,
    samsung: 3.6,
    panasonic: 2.4,
    redmi: 4.6
};

const starsTotal = 5;

document.addEventListener('DOMContentLoaded', getRatings);

const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-select');

let product;

productSelect.addEventListener('change', (e) => {
    product = e.target.value;
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
})

    ratingControl.addEventListener('blur', (e) => {
        let rating = e.target.value;
        if(rating > starsTotal){
            showMessage('Please Rate From 1 - 5', 'alert-danger')
        }
        else{
            ratings[product] = rating;
        
        getRatings();

        showMessage('Thanks For Your FeedBack', 'alert-success');

        }

    })

function getRatings(){
    for(let rating in ratings){
        const starPercentage = (ratings[rating] / starsTotal ) *  100;
        const starPercentageRounded = `${Math.round(starPercentage/10)* 10}%`;
        
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

        document.querySelector(`.${rating} .number-ratings`).innerHTML = `-------->${ratings[rating]}`;
    }
};

function showMessage(message, className){
    const div = document.createElement('div');
    div.className = `alert mt-2 ${className}`;
    
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');

    div.appendChild(document.createTextNode(message));

    one.insertBefore(div, two);

    setTimeout(function (){
        document.querySelector('.alert').remove();
    }, 2000);
    
}


