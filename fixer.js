const KEY = "fcfb85e2b58185a23d03adf00556c182";


// utilizam Fetch in loc de Ajax
function getCurrenciesForToday(){
    fetch(`http://data.fixer.io/api/latest?access_key=${KEY}`)
    .then(function(response) {
        return response.json();

    }).then( function( data ){
        drawCurrenciesFroToday( data );
        
    })

};
getCurrenciesForToday(); 


// desenarea graficului

function drawCurrenciesFroToday( currencies ){
    var ctx = document.getElementById('currencies-latest');
    console.log( currencies );
    
    var latestChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys( currencies.rates ).slice(0, 20),
            datasets:[
                {
                    label: "Currencies for Today",
                    data: Object.values( currencies.rates ).slice(0, 20),
                }
            ]
        },
        option: {}
    });
}
