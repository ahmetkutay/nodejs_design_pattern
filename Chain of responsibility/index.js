var Store = require('./Store');
var inventory = require('./inventory.json');

var skiShop = new Store('Steep and Deep', inventory);

var searchItem = 'powder skis';
var results = skiShop.find(searchItem);

console.log( results );
