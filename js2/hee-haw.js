const FIRST_WORD = "Hee";
const SECOND_WORD = "Haw";

for (let i = 1; i <= 100; i++) {
    let output = i;

    if (i % 5 === 0) {
        output = SECOND_WORD + "!";

        if (i % 3 === 0) {
            output = FIRST_WORD + " " + output;
        }
    }
    else if (i % 3 === 0) {
        output = FIRST_WORD + "!";
    }

    console.log(output);
}