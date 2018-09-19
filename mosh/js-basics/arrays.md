Combining and Slicing Arrays

            const first = [1, 2, 3, 4];
            const second = [4, 5, 6, 7];

            Combine
            const combined = first.concat(second);

            Slice
            const slice = combined.slice(2, 4);

            console.log(slice);

            If the values are primitive they are copied by value
            If they are reference types they are copied by reference

            The Spread Operator
            const first = [1, 2, 3, 4];
            const second = [4, 5, 6, 7];

            const combined = [0, ...first, ...second, 8];

            const copy = [...combined];

            console.log(copy);
            returns [0, 1, 2, 3, 4, 4, 5, 6, 7, 8]

Two ways to iterate arrays

            const numbers =  [0, 1, 2, 3, 4, 5, 6, 7, 8]

            for (let number of numbers) console.log(number);

            numbers.forEach((index, number) => console.log(index, number));

            End
            const numbers = [1, 2, 3, 4];
            const last = numbers.pop();

            console.log(numbers);
            console.log(last);

            Beginning
            const first = numbers.shift();
            console.log(numbers);
            console.log(first);

            Middle
            const middle = numbers.splice(2, 1);
            console.log(numbers);
            console.log(middle);

            ombining and Slicing Arrays

            const first = [1, 2, 3, 4];
            const second = [4, 5, 6, 7];

             Combine
            const combined = first.concat(second);

             Slice
            const slice = combined.slice(2, 4);

            console.log(slice);

            if the values are primitive they are copied by value
            it they are reference types they are copied by reference

            The Spread Operator
            const first = [1, 2, 3, 4];
            const second = [5, 6, 7, 8];

            const combined = [0, ...first, ...second, 9];

            const copy = [...combined];

            console.log(copy);
            returns [0, 1, 2, 3, 4, 4, 5, 6, 7, 8]

            Two ways to iterate arrays

            for (let c of copy) console.log(c);

            copy.forEach((c, index) => console.log(index, c));

            const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

            for (let number of numbers) console.log(number);

            numbers.forEach((index, number) => console.log(index, number));

            const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            const joined = numbers.join(" - BLAH ");
            console.log(joined);
            returns 0 - BLAH 1 - BLAH 2 - BLAH 3 - BLAH 4 - BLAH 5 - BLAH 6 - BLAH 7 - BLAH 8
