Required: Someone dedicated to principals of good software development and user experiences. Must understand modern web development and tools including Git, HTML5, and Node.js.

Required: You must understand the JavaScript language:
lexical Scope

http://pierrespring.com/2010/05/11/function-scope-and-lexical-scoping/

    Lexical Scoping defines how variable names are resolved in nested functions. Other names of Lexical Scoping are Static Scoping or Closure. It means that the scope of an inner function contains the scope of a parent function. Let’s have a look at the following example:

        var text = 'Look at me';

        var parent_function = function () {

        var inner_function = function () {
            var scream = '!!!';
            alert(text + ', ' + reason + scream);
        }

        var reason = "I'm an attention whore";
        var scream = '!';

        alert(text + scream);
        inner_function();
        };

        parent_function();
        // alerts the two following strings, in this order:
        // "Look at me!"
        // "Look at me, I'm an attention whore!!!"

    Look at what happens when the inner_function is called. It needs to alert all three of the following variables: text, reason and scream.

    The first variable that needs to be looked up is text. This variable is neither declared in the scope of the inner_function nor in the scope of parent_function. So it takes the globally declared text.

    The second variable the alert() in the inner_function needs is reason. This variable is not declared within the inner_function. Hence it is looked for in the enclosing parent_function scope where it finds the truth about my nature. "I'm an attention whore".

    The 3rd variable inner_function needs to alert() is scream. It is declared within inner_function and parent_function. The alert is called in the scope of inner_function, hence it is resolved to '!!!'.

    That’s almost all you have to know about Lexical Scoping. The scope of an inner function contains the scope of a parent function.

    If you bare with me for a little more, you will know it all. There is a little more to it, and that little more is what makes Lexical Scoping so powerful: inner functions contain the scope of parent functions even if the parent function has returned.

    Let’s look at the following example:

        var adder = function (total) {

        // the following function is returned
        // and assigned to adder
        var inner_function = function (summand) {
            total += summand;
            alert(total);
        }

        return inner_function;

        }(0); // <- we call the annonymous function
            //    and assign the returned function to adder

        adder(2); // -> 2
        adder(3); // -> 5

        This is possible, because in JavaScript functions are first class objects. That means that you can pass functions as arguments or they can be returned from a function. They can also be assigned to a variable or stored in an object. Anyway, the inner_function that is returned is assigned to the variable adder. And when you call adder, that is the inner_function, it has access to total due to Lexical Scoping, even though the function that had the total. total itself was declared in the scope of a function that has returned a long time ago.

        Get it? How sexy is that? Simple yet beautiful!

        And that’s it. You know everything there is to know about Lexical Scoping: inner functions contain the scope of parent functions even if the parent function has returned.

dynamic scope

closures

hoisting

polyfills

this & that

object prototypes

behavior delegation

callbacks

promises

generators
