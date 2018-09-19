Objects

The pupose of an object is to group related variables and functionsmethods

Factory Functions - A function that rerurns an object

            function createAddress(street, city, zipCode) {
            return {
                street: street,
                city: street,
                zipCode: zipCode
            };
            }


            function createCircle(radius) {
                return {
                    radius;
                    draw(){
                        console.log('draw');
                    }
                }
            }

            const circle1 = createCircle(1);

Constructor Function

        function Address(street, city, zipCode) {
            this.street = street;
            this.city = city;
            this.zipCode = zipCode;
        }

        function Circle(radius) {
        this.radius = radius;
        this.draw = function() {
            console.log("draw");
        };
        }

        const circle = new Circle(1);

        Circle.call({}, 1);

        the {} is the same as new

    new does three things:
        1. Creates an empty object
        2. Sets this to point to the empty object
        3. Returns the object from the function

        Circle.call({}, 1);

Every object has a constructor property that references the function
that was used to create that object

Functions are Objects

Value vs Reference Types

        let x = 10;
        let y = x;
        x = 20;

        console.log("x:", x);
        console.log("y:", y);

        returns
        x:20
        y:10

        The x and y are independent

        let x = { value: 10 };
        let y = x;
        x.value = 20;

        console.log("x:", x);
        console.log("y:", y);

        returns
        x: {value: 20}
        y: {value: 20}

        Both x and y are point to the same object stored in memory

Primitives (string, number, int....) are copied by their value.
Objects are copied by their reference.

Objects are not iterable

        const circle = { radius: 1 };

        for (let key in circle) console.log(key, circle[key]);
            returns radius 1

        for (let key of circle) console.log(key, circle[key]);
            returns error Uncaught TypeError: circle is not iterable

        for (let key of Object.keys(circle)) console.log(key, circle[key]);
            returns radius 1

        for (let entry of Object.entries(circle)) console.log(entry);
            returns (2) ["radius", 1]0: "radius"1: 1length: 2__proto__: Array(0)

        if('radius' in circle) console.log('yes')'
            returns yes

Clone an Object

        const another = { ...original };

Template Literals ``

        Useful for formatting strings and making them dynamic
        const array1 = [1, 3, 2];
        const message = `This is the answer ${Math.max(...array1)}`;

Finding Elements (Reference Types)

        Price Range Object
            let priceRanges = [
            { label: "$", toolTip: "Inexpensive", minPerPseron: 5, maxPerPerson: 10 },
            { label: "$$", toolTip: "Not Bad", minPerPseron: 11, maxPerPerson: 20 },
            { label: "$$$", toolTip: "Pricey", minPerPseron: 21, maxPerPerson: 30 },
            { label: "$$$$", toolTip: "Expensive", minPerPseron: 31, maxPerPerson: 100 }
            ];

            Use callback function

            const cheapRestuarant = priceRanges.find(function(restuarant) {
                return restuarant.maxPerPerson < 11;
            });

            Arrow Function version

            const cheapRestuarant = priceRanges.find(restuarant => restuarant.maxPerPerson < 11);

            console.log(cheapRestuarant);
