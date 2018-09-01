// https://programmingwithmosh.com/

// before ES6

var name = "Mosh";
var message = "Hi " + name + ",";

// after ES6

var name = "Mosh";
var message = `Hi ${name},`;

/*
Note that I’m using the backtick character here. As funny as it sounds, 
nobody knew what backticks were until Angular 2 was released! 
That’s the character before number 1 on your keyboard.

To add a placeholder in a template literal, we use the ${expression} syntax. 
You can replace “expression” with any JavaScript expressions. 
Here, we are adding the name variable there. You can also call a function or 
pass any JavaScript expressions that results in a value.
*/
