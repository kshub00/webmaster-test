fetch('http://feedsapi.safe-installation.com/api/GetJackpotTotalAmount?CurrencyCode=USD&currencySymbol=$&BrandID=0').then(function (response) {
	console.log('SUCCESS', response);
    console.log('TEST');
    return response.json();
}).then(function (data) {
    amount = data.totalAmount;
	console.log(data);
}).catch(function (err) {
	console.warn('ERROR', err);
});