//jshint esversion:8
const currencyElOne = document.getElementById("currency_one");
const currencyElTwo = document.getElementById("currency_two");

const amountElOne = document.getElementById("amount_one");
const amountElTwo = document.getElementById("amount_two");

const rateEl = document.getElementById("rate");
const swapEl = document.getElementById("swap");


// FETCH EXCHANGE RATE AND UPDATE THE DOM
async function calculate() {
    const currencyOne = currencyElOne.value;
    const currencyTwo = currencyElTwo.value;

    const reqLink = `https://v6.exchangerate-api.com/v6/b6a3bdec7102362873731f7d/latest/${currencyOne}`;
    const fetchData = await fetch(reqLink);

    const parsed = await fetchData.json();
    const rate = parsed.conversion_rates[currencyTwo];

    rateEl.innerHTML = `<p> 1 ${currencyOne} = ${rate} ${currencyTwo} </p>`;
    amountElTwo.value = (amountElOne.value * rate ).toFixed(2);
}



// Event Listeners
currencyElOne.addEventListener("change", calculate);
amountElOne.addEventListener("input", calculate);
currencyElTwo.addEventListener("change", calculate);
amountElTwo.addEventListener("input", calculate);
swapEl.addEventListener("click", function swapCurrency(){
    let tmp = currencyElOne.value;
    currencyElOne.value = currencyElTwo.value;
    currencyElTwo.value = tmp;
    calculate();
}
);


calculate();