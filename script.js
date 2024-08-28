const frequencyToggle = document.getElementById('frequency');
const priceOne = document.querySelector('.price-1');
const priceTwo = document.querySelector('.price-2');
const priceThree = document.querySelector('.price-3');

const isMonthlyFrequency = () => {return frequencyToggle.checked};

const changeFrequency = () => {
    const isMonthly = isMonthlyFrequency();

    if(isMonthly){
        priceOne.innerHTML = "$19.99";
        priceTwo.innerHTML = "$24.99";
        priceThree.innerHTML = "$39.99";
        document.querySelector('.annual').classList.remove('slider-active');
        document.querySelector('.monthly').classList.add('slider-active');
    } else {
        priceOne.innerHTML = "$190.99";
        priceTwo.innerHTML = "$240.99";
        priceThree.innerHTML = "$390.99";
        document.querySelector('.annual').classList.add('slider-active');
        document.querySelector('.monthly').classList.remove('slider-active');
    }
}


frequencyToggle.addEventListener('input', changeFrequency)