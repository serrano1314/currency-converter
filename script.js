
let price_input_text = document.getElementById('price-input');
let conv_price = document.getElementById('converted-price');
let price_change = document.getElementById('prc-change')
let coin = "bitcoin";
let currency = "php";
price_input_text.addEventListener('keyup',getCoinValue)
getCoinValue()
function getCoinValue(){
    let price_input = document.getElementById('price-input').value;
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${currency}&include_24hr_change=true`)
    .then((res)=>res.json())    
    .then((data)=>{
        console.log(data);
        conv_price.value = ((data[coin][currency])*price_input).toFixed(3);
        price_change.innerText = "Price Change(24h): " + data[coin][`${currency}_24h_change`].toFixed(2);
        
    })
}