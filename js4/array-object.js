testCreateObject();

function createObjectWithTypeProperties(array) {
    newObject = {};

    for (let item of array) {
        let currCategory = typeof(item) + "s";
        let objectsCategories = Object.keys(newObject);

        if (objectsCategories.includes(currCategory)) {
            newObject[currCategory].push(item);
        }
        else {
            newObject[currCategory] = [item];
        }
    }
    return newObject;
}

function testCreateObject() {
    let inputs = [[-1, 5, "cat", false, 10.2, true, "dog"]];
    inputs.push(["Test", 1, false]);
    inputs.push([[1, 2, 3], "wolf", 12, {x: 3, y: 4}, "tiger", 3.14]);
    inputs.push([null, "bird", "fish", 0, -1.5]);
    inputs.push([]);

    for (let currInput of inputs) {
        let output = createObjectWithTypeProperties(currInput);

        displayResult(currInput, output);
    }
}

function displayResult(input, output) {
    output = JSON.stringify(output);
    input = JSON.stringify(input);

    let newRow = document.createElement('tr');
    newRow.innerHTML = "<td>" + input + "</td><td>" + output + "</td>";

    let tBody = document.getElementsByTagName("tbody")[0];

    tBody.appendChild(newRow);
}