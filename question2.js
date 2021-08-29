const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f4bad3940fb1446382fd6040e2510e85";

const nameContainer = document.querySelector(".name");

const ratingContainer = document.querySelector(".rating");

const numberContainer = document.querySelector(".numbertags");

const resultsContainer = document.querySelector(".results");


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

        nameContainer.innerHTML += `<div class="result">${results[i].name}</div>`;
        
        ratingContainer.innerHTML += `<div class="rating">${results[i].rating}</div>`;
        
        numberContainer.innerHTML += `<div class="numbertags">${results[i].tags.length}</div>`;
    } 

} catch (error) {
    console.log("An error occurred");
    resultsContainer.innerHTML = displayError("An error occurred when calling the API");
}
}

getInfo();