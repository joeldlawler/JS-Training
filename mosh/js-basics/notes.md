JavaScript Operators

    Arithmetic
        +	Addition
        -	Subtraction
        *	Multiplication
        	Division
        %	Modulus (division remainder)
        **  Exponentiation
        ++	Increment
        --	Decrement

    Assignment
            let x = 3;
            console.log((x *= 3));
            9
    Comparison
            Strict Equality
                Ensures that both have the same Type and Same Value
                console.log(1 === 1)    true
                console.log("1" === 1)  false
            Lose Equality
                Converts type and only checks the values
                console.log(1 == 1)     true
                console.log("1" == 1)   true
                console.log(true == 1)  true
                console.log(true == 2)  false
    Ternary Operator
            Problem: Set type to to gold if points greater than 100 otherwise
            set type to silver
                let points = 110;
                let type = points > 100 ? 'gold' : 'silver';
    Logical Operators
            Logical AND (&&)
                Returns TRUE if both aperands are TRUE
                console.log(true && true);     returns true
                console.log(false && true);    returns false
                console.log(false && true);    returns false
                console.log(false && false);   returns false

                let highIncome = true;
                let goodCreditScore = true;
                let eligibleForLoan = highIncome && goodCreditScore; = true

                Logical OR (||)
                Returns TRUE if one aperands are TRUE
                console.log(true || true);      returns true
                console.log(false || true);     returns true
                console.log(false || true);     returns true
                console.log(false || false);    returns false

                NOT (!)

                let highIncome = false;
                let goodCreditScore = false;
                let eligibleForLoan = highIncome || goodCreditScore;

                let applicationRefused = !eligibleForLoan;  --always returns opposite

    Logical Operators with Non-booleans

                false || true       returns true
                false || "Bob"      retuns "Bob"
                false || 1          retuns 1

                Falsey Values
                    undedinfed
                    null
                    0
                    false
                    ''
                    NaN

                Anything that is not Falsey => Truthy

                The Logical OR (||) starts at the left and returns the first TRUTHY oparand

                false || 1 || 2     returns 1

                This is called Short-circuiting.

                let userColor = 'red'
                let defaultColor = 'blue'
                let currentColor = userColor || defaultColor;

                currentColor returns 'red'

                let userColor = ''
                let defaultColor = 'blue'
                let currentColor = userColor || defaultColor;

                currentColor returns 'blue'


    Bitwise

                &	AND	Sets each bit to 1 if both bits are 1
                |	OR	Sets each bit to 1 if one of two bits is 1
                ^	XOR	Sets each bit to 1 if only one of two bits is 1
                ~	NOT	Inverts all the bits
                <<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
                >>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
                >>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off


                1 = 00000001
                2 = 00000010
                3 = 00000011

                console.log(1 | 2); Returns 3;
                console.log(1 & 2); Returns 0;

                Example
                READ:       00000100
                WRITE:      00000010
                EXECUTE:    00000001

                const readPermission = 4;
                const writePermission = 2;
                const executePermission = 1

                let myPermission = 0;
                myPermission = myPermission | readPermission | writePermissin;

                let message = (myPermission & readPermission) ? 'yes' : 'no';

                console.log(message);   Returns 'yes';

                & Adds

    Operator Precedence

        let x = 2 + 3 * 4; = 14
            The * takes precedence so 3 * 14 is excecuted before 2 +
        let x = (2 + 3) * 4; = 20
            The () executes first

    Swapping Variables Excercise

        let a = "red";
        let b = "blue";

        let c = a;
        a = b;
        b = c;

        console.log(a);
        console.log(b);

    Conditional Statements

        If...else

            let hour = 18;

            if (hour >= 6 && hour < 12)
                console.log("Good Morning");
             else if (hour >= 12 && hour < 18)
                console.log("Good Afternoon");
             else
                console.log("Good Evening");

        Switch...case

            let role = "guest";

            switch (role) {
            case "guest":
                console.log("Guest User");
                break;
            case "mod":
                console.log("Mod");
                break;
            default:
                console.log("Unknown");
            }

        Loops
            For
                initial expression, condition, increment
                for (let i = 0; i < 5; i++) {
                    console.log("hi");
                }
                reverse order
                for (let i = 5; i >= 1; i--) {
                    if (i % 2 !== 0) console.log(i);
                }

            While

                let i = 0;

                while (i <= 5) {
                    if (i % 2 !== 0) console.log(i);
                    i++;
                }

            Do...While

                let i = 0;
                do {
                    if (i % 2 !== 0) console.log(i);
                    i++;
                } while (i <= 5);

            For...in

                const person = {
                    name: "bob",
                    age: 89
                };

                for (let key in person)
                    console.log(key, person[key]);

                const colors = ["red", "yellow", "blue"];

                for (let index in colors)
                    console.log(index, colors[index]);

            For...of

                const colors = ["red", "yellow", "blue"];

                for (let color of colors)
                    console.log(color);

    Break & Continue

                let i = 0;

                while (i <= 10) {

                    if(i===5) break;

                    if (i % 2 === 0) {
                        i++;
                        continue will go back to the top while
                        continue;
                    }

                    console.log(i);
                    i++;
                }
