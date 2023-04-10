
//first we do separation of concerns to avoid repetition by declaring variables in the global scope.
const beerList = document.getElementById("beer-list");
const beerImage = document.getElementById("beer-image");
const beerName = document.getElementById("beer-name");
const beerDescription = document.getElementById("beer-description");
const reviewsList = document.getElementById("review-list");
const descriptionForm = document.getElementById("description-form");
const reviewForm = document.getElementById("review-form");
//DOM manipulation
//We want to display the list of all beers in the nav bar
let index = 0; // define index in global scope

function renderMenu() {
  const beerList = document.getElementById("beer-list");
  beerList.innerHTML = "";
  beerObjects.forEach((beer, i) => { // use i instead of index inside the forEach callback
    const li = document.createElement("li");
    li.textContent = beer.name;
    li.addEventListener("click", () => {
      index = i; // update the global index variable
      renderBeer(index);
    });
    beerList.appendChild(li);
  });
}
//function to load the beers in the webpage
  function renderBeer(index) {
    const beer = beerObjects[index];
    beerImage.src = `${beer.image_url}`;
    beerName.innerText = `${beer.name}`;
    beerDescription.innerText = `${beer.description}`;
    reviewsList.innerHTML = "";
    for (const review of beer.reviews) {
      const list = document.createElement("li");
      list.textContent = review;
      reviewsList.appendChild(list);
      list.addEventListener("click", () => {
        reviewsList.removeChild(list);
      });
    }
  }
//update the description without changes to the server
descriptionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const descriptionInput = document.getElementById("description");
  const newDescription = descriptionInput.value;
  const currentBeer = beerObjects[index];
  currentBeer.description = newDescription;
  descriptionInput.value = "";
  renderBeer(index);//refresh the page to include the updated description
});
//I want to update the beer reviews without updating the server 

reviewForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent form from submitting and refreshing the page
  const reviewInput = document.getElementById("review");
  const newReview = reviewInput.value;
  const currentBeer = beerObjects[index];
  currentBeer.reviews.push(newReview); // add new review to first beer object's reviews array
  renderBeer(index); // updates the page to reflect the reviews
  reviewInput.value = ""; // clear review input field
});

//fetch beer data from our database
  const api_url = "http://localhost:3000/beers";
  const beerObjects = [];

//using async function tells javascript to only execute the code after the response. I want to fetch the data and store it in a new object
  async function getAllBeers() {
    const response = await fetch(api_url);
    const beers = await response.json();
    for (const beer of beers) {
      const { id, name, image_url, description, reviews } = beer;
      const beerObj = { id, name, image_url, description, reviews };
      beerObjects.push(beerObj);
    }
    renderMenu();
    renderBeer(index);
  }
  getAllBeers();
///for now, this code only updates the reviews but does not store the updated description and reviews in the server. We are going great!