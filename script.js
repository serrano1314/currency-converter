
let price_input_text = document.getElementById('price-input');
let conv_price = document.getElementById('converted-price');
let price_change = document.getElementById('prc-change');
let selected_coin = document.getElementById('seleted-coin');
let selected_currency = document.getElementById('selected-currency');

price_input_text.addEventListener('keyup',getCoinValue)
selected_coin.addEventListener('change',getCoinValue)
selected_currency.addEventListener('change',getCoinValue)
getCoinValue()
function getCoinValue(){
    let coin = selected_coin.value;
    let currency = selected_currency.value;
    let price_input = document.getElementById('price-input').value;
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${currency}&include_24hr_change=true`)
    .then((res)=>res.json())    
    .then((data)=>{
        console.log(data);
        conv_price.value = ((data[coin][currency])*price_input).toFixed(3);
        price_change.innerText = "Price Change(24h): " + data[coin][`${currency}_24h_change`].toFixed(2);
        
    })
}