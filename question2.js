// Question 2

// Make a call to the Rawg API.

// Go to https://rawg.io/apidocs and get an API key which you’ll use as part of the endpoint you’re making an API call to. You can use https://noroff.no for the URL and Noroff Assignment for the description.

// You'll be given an API Key you can add as a "key" parameter in your fetch request.

// Make a call to the following API endpoint replacing INSERTAPIKEYHERE with the key given to you from the Rawg API.
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE

// Loop through the results and display the following properties in HTML, but only for the first eight results:
// name
// rating
// number of tags (not the tag details, just the amount of tags)
// The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

// Be sure to handle any potential errors in the code.

// You can use either regular promise or async/await syntax to make the call.

// Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f4bad3940fb1446382fd6040e2510e85";

const gamesContainer = document.querySelector(".games");
const resultsContainer = document.querySelector(".results");
const loading = document.querySelector("loader");


async function getInfo() {
    try {
    const response = await fetch(url);

    const data = await response.json(); 

    const results = data.results;

    for (let i = 0; i < results.length; i++) {
        let gameName = results[i].name;
        let rating = results[i].rating;
        let numberOfTags = results[i].tags.length;

        if(i === 8) {
            break;
        }

        gamesContainer.innerHTML += 
        `
        <div class="games">
        <p>Name: ${results[i].name}</div></p>
        <p>Rating: ${results[i].rating}</p>
        <p>Number of Tags: ${results[i].tags.length}</p>
        </div>
        `
    } 

} catch (error) {
    console.log("An error occurred");
    resultsContainer.innerHTML = displayError("An error occurred when calling the API");
}
}

getInfo();
