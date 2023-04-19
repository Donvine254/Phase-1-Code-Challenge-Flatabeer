
// // This file is just for practice
// //fetch beer data from our database
// const api_url = "http://localhost:3000/beers";
// const beerObjects = [];
// //using async function tells javascript to only execute the code after the response. I want to fetch the data and store it in a new object
// async function getAllBeers() {
//   const response = await fetch(api_url);
//   const beers = await response.json();
//   for (const beer of beers) {
//     const { id, name, image_url, description, reviews } = beer;
//     const beerObj = { id, name, image_url, description, reviews };
//     beerObjects.push(beerObj);
//   }
//   console.log(beerObjects);
//   renderMenu();
//   renderImage();
//   renderBeerName();
//   renderDescription();
//   renderReviews();
// }
getAllBeers();
//DOM manipulation
function renderMenu() {
  const beerList = document.getElementById("beer-list");
  beerList.innerHTML = "";
  for (const beer of beerObjects) {
    const li = document.createElement("li");
    li.textContent = beer.name;
    beerList.appendChild(li);
  }
  console.log(beerList);
}
// function renderImage() {
//   const beerImage = document.getElementById("beer-image");
//   beerImage.src = `${beerObjects[0].image_url}`;
// }
// function renderBeerName() {
//   const beerName = document.getElementById("beer-name");
//   beerName.innerText = `${beerObjects[0].name}`;
// }
// function renderDescription() {
//   const beerDescription = document.getElementById("beer-description");
//   beerDescription.innerText = `${beerObjects[0].description}`;
// }
// function renderReviews() {
//   const reviewsList = document.getElementById("review-list");
//   reviewsList.innerHTML = "";
//   const firstBeer = beerObjects[0];
//   for (const review of firstBeer.reviews) {
//     const list = document.createElement("li");
//     list.textContent = review;
//     reviewsList.appendChild(list);
//     list.addEventListener("click", () => {
//       reviewsList.removeChild(list);
//     });
//   }
// }
//update the description without changes to the server
// const descriptionForm = document.getElementById("description-form");
// descriptionForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const descriptionInput = document.getElementById("description");
//   const newDescription = descriptionInput.value;
//   const firstBeer = beerObjects[0];
//   firstBeer.description = newDescription;
//   renderDescription();
//   descriptionInput.value = "";
// });
// //i want to update the reviews and update the server side with the new customer review
// const reviewForm = document.getElementById("review-form");

// reviewForm.addEventListener("submit", (event) => {
//   event.preventDefault(); // prevent form from submitting and refreshing the page
//   const reviewInput = document.getElementById("review");
//   const newReview = reviewInput.value;
//   const firstBeer = beerObjects[0];
//   firstBeer.reviews.push(newReview); // add new review to first beer object's reviews array
//   renderReviews(); // re-render reviews list on page
//   reviewInput.value = ""; // clear review input field
// });

/*
.................................code 2..............................
*/

//DOM manipulation
/* function renderMenu() {
    const beerList = document.getElementById("beer-list");
    beerList.innerHTML = "";
    for (const [index, beer] of beerObjects.entries()) {
      const li = document.createElement("li");
      li.textContent = beer.name;
      li.addEventListener("click", () => {
        renderBeer(index);
      });
      beerList.appendChild(li);
    }
    console.log(beerList);
  }
//function to load the beers in the webpage
  function renderBeer(index) {
    const beer = beerObjects[index];
    const beerImage = document.getElementById("beer-image");
    beerImage.src = `${beer.image_url}`;

    const beerName = document.getElementById("beer-name");
    beerName.innerText = `${beer.name}`;

    const beerDescription = document.getElementById("beer-description");
    beerDescription.innerText = `${beer.description}`;

    const reviewsList = document.getElementById("review-list");
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
const descriptionForm = document.getElementById("description-form");
descriptionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const descriptionInput = document.getElementById("description");
  const newDescription = descriptionInput.value;
  const firstBeer = beerObjects[0];
  firstBeer.description = newDescription;
  descriptionInput.value = "";
});
//i want to update the reviews and update the server side with the new customer review
const reviewForm = document.getElementById("review-form");

reviewForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent form from submitting and refreshing the page
  const reviewInput = document.getElementById("review");
  const newReview = reviewInput.value;
  const firstBeer = beerObjects[0];
  firstBeer.reviews.push(newReview); // add new review to first beer object's reviews array
  renderReviews(); // re-render reviews list on page
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
    renderBeer(0);
  }
  getAllBeers();
//...........................code 3.................................
//fetch beer data from our database
/* const api_url = "http://localhost:3000/beers";
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
  renderBeer();
}
getAllBeers();
// DOM manipulation
function renderMenu() {
  const beerList = document.getElementById("beer-list");
  beerList.innerHTML = "";
  for (const [index, beer] of beerObjects.entries()) {
    const li = document.createElement("li");
    li.textContent = beer.name;
    li.addEventListener("click", () => {
      renderBeer(index);
    });
    beerList.appendChild(li);
  }
  console.log(beerList);
}

function renderDescription(currentBeerIndex) {
  const beerDescription = document.getElementById("beer-description");
  beerDescription.innerText = beerObjects[currentBeerIndex].description;
}

function renderReviews(currentBeerIndex) {
  const reviewsList = document.getElementById("review-list");
  reviewsList.innerHTML = "";
  for (const review of beerObjects[currentBeerIndex].reviews) {
    const list = document.createElement("li");
    list.textContent = review;
    reviewsList.appendChild(list);
    list.addEventListener("click", () => {
      beerObjects[currentBeerIndex].reviews.splice(
        beerObjects[currentBeerIndex].reviews.indexOf(review),
        1
      ); // remove review from beer object's reviews array
      renderReviews(currentBeerIndex); // re-render the reviews with updated reviews
    });
  }
}

// function to load the beers in the webpage
function renderBeer(index) {
  const beer = beerObjects[index];
  const beerImage = document.getElementById("beer-image");
  beerImage.src = `${beer.image_url}`;

  const beerName = document.getElementById("beer-name");
  beerName.innerText = `${beer.name}`;

  renderDescription(index);
  renderReviews(index);

  //update description form on submission without changing the database
  const descriptionForm = document.getElementById("description-form");
  descriptionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const descriptionInput = document.getElementById("description");
    const newDescription = descriptionInput.value;
    beerObjects[index].description = newDescription;
    renderDescription(index);
    descriptionInput.value = "";
  });

  //update consumer reviews without changing the database
  const reviewForm = document.getElementById("review-form");
  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const reviewInput = document.getElementById("review");
    const newReview = reviewInput.value;
    beerObjects[index].reviews.push(newReview);
    renderReviews(index);
    reviewInput.value = "";
  });
}
 */