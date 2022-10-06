// Given variables
const dishData = [
	{
		name: 'Italian pasta',
		price: 9.55,
	},
	{
		name: 'Rice with veggies',
		price: 8.65,
	},
	{
		name: 'Chicken with potatoes',
		price: 15.55,
	},
	{
		name: 'Vegetarian Pizza',
		price: 6.45,
	},
];
const tax = 1.2;

// Implement getPrices()
function getPrices(taxBoolean) {
	for (var dishItem of dishData) {
		//console.log(dishItem)
		//console.log(taxBoolean);
		var finalPrice;
		if (taxBoolean == true) {
			finalPrice = dishItem.price * tax;
		} else if (taxBoolean == false) {
			finalPrice = dishItem.price;
		} else {
			console.log('You need to pass a boolean to the getPrices call!');
			return;
		}
		console.log(`Dish: ${dishItem.name} Price: $${finalPrice}`);
	}
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
	getPrices(taxBoolean);
	//console.log(typeof guests);
	var conditions = typeof guests == 'number' && guests > 0 && guests < 30;
	//console.log(conditions, ' = conditions');
	if (conditions) {
		var discount = 0;
		//console.log(guests, ' = guests in condition block');
		if (guests < 5) {
			discount = 5;
		} else if (guests >= 5) {
			discount = 10;
		}
		console.log(`Discount is: $${discount}`);
	} else {
		console.log('The second argument must be a number between 0 and 30');
	}
}

// Call getDiscount()
getDiscount(true, 2);
getDiscount(false, 10);
getDiscount('yellow', 4);
getDiscount('yellow', 31);
