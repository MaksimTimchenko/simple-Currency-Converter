const usdValue = document.querySelector('[data-value="USD"]'),
      eurValue = document.querySelector('[data-value="EUR"]'),
      gbpValue = document.querySelector('[data-value="GBP"]');


const input = document.querySelector('#input'),
      result = document.querySelector('#result'),
      selectInput = document.querySelector('.select-input'),
      selectOutput = document.querySelector('.select-output');
     
let rates = {
    USD: 0,
    EUR: 0,
    GBR:0,
    PLN: 0,
    UAH:0
}

const fetchData = async () => {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    
    const data = await response.json();
   
    console.log(data);

    const {USD, EUR, GBP, PLN, UAH} = data.Valute;

    rates = {
       USD: USD.Value,
       EUR: EUR.Value,
       GBP: GBP.Value,
       PLN: PLN.Value, 
       UAH: UAH.Value
    }

    
    renderComponent(usdValue,USD,UAH);
    renderComponent(eurValue,EUR,UAH);
    renderComponent(gbpValue,GBP,UAH);
    
    
}

input.oninput = convertValute;
selectOutput.oninput = convertValute;

function convertValute () {
    result.value = ((input.value * rates[selectInput.value] )/ rates[selectOutput.value]).toFixed(2)
}

const renderComponent = (div,valute, UAH) => {
   return div.innerHTML = ((valute.Value / UAH.Value) * 10).toFixed(2); 
}






fetchData();




