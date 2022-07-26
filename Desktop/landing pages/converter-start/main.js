const usdValue = document.querySelector('[data-value="USD"]'),
      eurValue = document.querySelector('[data-value="EUR"]'),
      gbpValue = document.querySelector('[data-value="GBP"]');
     


const fetchData = async () => {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
   
    console.log(data);

    const {USD: usd, UAH: uah, EUR: eur, GBP: gbp} = data.Valute;
    console.log(usd.Value);

    //
    renderComponent(usdValue,usd);
    renderComponent(eurValue,eur);
    renderComponent(gbpValue,gbp);
    
    
}

const renderComponent = (div,valute) => {
   return div.innerHTML = valute.Value.toFixed(2);
}


fetchData();




