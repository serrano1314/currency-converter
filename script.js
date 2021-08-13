
let price_input_text = document.getElementById('price-input');
let conv_price = document.getElementById('converted-price');
let price_change = document.getElementById('change-value');
let selected_coin = document.getElementById('seleted-coin');
let selected_currency = document.getElementById('selected-currency');
let refres_icon = document.getElementById('refresh-icon');
let refresh_but = document.getElementById('refresh');
let coin_title = document.getElementById('coin-title')

price_input_text.addEventListener('change',getCoinValue)
price_input_text.addEventListener('keyup',getCoinValue)
selected_coin.addEventListener('change',getCoinValue)
selected_currency.addEventListener('change',getCoinValue)
let percentage_color = 'white';
refresh_but.onclick = getCoinValue;
getCoinValue()
function getCoinValue(){
    loading();
    let coin = selected_coin.value;
    let currency = selected_currency.value;
    conv_price.value = "loading...";
    let price_input = document.getElementById('price-input').value;
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${currency}&include_24hr_change=true`)
    .then((res)=>res.json())    
    .then((data)=>{
        stopLoading()
        console.log(data)
        coin_title.innerText = selected_coin.value.charAt(0).toUpperCase() + selected_coin.value.slice(1);
        conv_price.value = ((data[coin][currency])*price_input);
        prc_change_value = data[coin][`${currency}_24h_change`]
        if(prc_change_value<0) percentage_color = 'red';
        if(prc_change_value>0) percentage_color = 'lightgreen';
        
        price_change.innerText = prc_change_value.toFixed(2) + "%";
        price_change.style.color = percentage_color;
    })
}
setInterval(getCoinValue,10000)
function loading(){
    refres_icon.style.animation = "spin 0.5s linear infinite"
}
function stopLoading(){
    refres_icon.style.animation = ""
}