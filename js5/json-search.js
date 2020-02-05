const PEOPLE = `[{
        "name": "Sam Smith",
        "sex": "m",
        "born": 1940,
        "died": 1981,
        "father": "Jack Smith",
        "mother": "Jane Smith"
    }, {
        "name": "Sam Drake",
        "sex": "m",
        "born": 1900,
        "died": 2000,
        "father": "Bob Drake",
        "mother": "Brandy Drake"
    }, {
        "name": "Jimi Hendrix",
        "sex": "m",
        "born": 1942,
        "died": 1970,
        "father": "Al Hendrix",
        "mother": "Lucille Jeter"
    }, {
        "name": "Kate Johnson",
        "sex": "f",
        "born": 1977,
        "died": 2010,
        "father": "Luke Johnson",
        "mother": "Mary Johnson"
    }, {
        "name": "Sara Smith",
        "sex": "f",
        "born": 1950,
        "died": 1991,
        "father": "Jack Smith",
        "mother": "Jane Smith"
    }]`;

document.getElementById("btn-search").addEventListener("click", search);

function search() {
    let searchText = document.getElementById("txt-search").value.toLowerCase().trim();
    let results = document.getElementById("results");

    // Clear search results if searched for nothing
    if (searchText === "") {
        results.innerHTML = "";
        return;
    }

    // Filter people with search term
    let people = JSON.parse(PEOPLE);
    let foundPeople = people.filter(p => p.name.toLowerCase().includes(searchText));

    let output = "";

    // Show data if found
    if (foundPeople.length > 0) {
        foundPeople.forEach(p => output +=
            `<ul>
                <li>Name: ${p.name}</li>
                <li>Sex: ${p.sex}</li>
                <li>Born: ${p.born}</li>
                <li>Died: ${p.died}</li>
                <li>Father: ${p.father}</li>
                <li>Mother: ${p.mother}</li>
            </ul>`);
    }
    else { // Give message if not found
        output = "<p>That person could not be found.</p>";
    }
    results.innerHTML = output;
}