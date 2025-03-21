// You are managing an e-commerce platform. The system needs to check which items in the
// shopping cart are eligible for discounts based on their price and category. Here are the discount rules:

// Price-based Discounts:
// Items that cost more than $50 are eligible for a 10% discount.
// Items that cost more than $100 are eligible for a 20% discount.
// Items that cost more than $200 are eligible for a 30% discount.

// Category-based Discounts:
// All items in the "electronics" category get an additional 5% discount.
// All items in the "clothing" category get an additional 10% discount.

// Priority Order:
// If an item qualifies for both price and category discounts, the price-based discount is applied first
// and then the category-based discount is calculated on the discounted price.

// Input
// The input will be an array of items, where each item is an object with the following properties:

// name: The name of the item.
// price: The original price of the item.
// category: The category of the item (e.g., "electronics", "clothing", "home").

// Output: An array of items with updated prices after discounts have been applied.

function myCart(cart) {
	for (let i = 0; i < cart.length; i++) {
		const item = cart[i];
		let discount = 0;
		let categoryDiscount = 0;
		if (item.price > 200) {
			discount = 30;
			item.price = item.price - item.price * (discount / 100);
			if (item.category === 'electronics') {
				categoryDiscount = 5;
			}
			if (item.category === 'clothing') {
				categoryDiscount = 10;
			}
			item.price = item.price - item.price * (categoryDiscount / 100);
		} else if (item.price > 100) {
			discount = 20;
			item.price = item.price - item.price * (discount / 100);
			if (item.category === 'electronics') {
				categoryDiscount = 5;
			}
			if (item.category === 'clothing') {
				categoryDiscount = 10;
			}
			item.price = item.price - item.price * (categoryDiscount / 100);
		} else if (item.price > 50) {
			discount = 10;
			item.price = item.price - item.price * (discount / 100);
			if (item.category === 'electronics') {
				categoryDiscount = 5;
			}
			if (item.category === 'clothing') {
				categoryDiscount = 10;
			}
			item.price = item.price - item.price * (categoryDiscount / 100);
		} else {
			discount = 0;
		}
	}
	return cart;
}

const shoppingCart = [
	{ name: 'Laptop', price: 1200, category: 'electronics' },
	{ name: 'T-shirt', price: 25, category: 'clothing' },
	{ name: 'Blender', price: 55, category: 'home' },
	{ name: 'Jeans', price: 80, category: 'clothing' },
	{ name: 'Headphones', price: 250, category: 'electronics' },
];

console.log(myCart(shoppingCart));
