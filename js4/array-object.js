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