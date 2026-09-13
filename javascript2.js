console.log("This is javascript page 2");

const shoppingList = [];
shoppingList.push("Apples");
shoppingList.push("Bread");
shoppingList.push("Milk");
shoppingList.push("Chicken");
shoppingList.push("Rice");

shoppingList[2] = "Can of Peas";

shoppingList.shift();
shoppingList.shift();
shoppingList.reverse();

console.log("The list contains ${shoppingList.length} items");
