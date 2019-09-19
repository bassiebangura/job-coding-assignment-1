itemsData = [
  {
    name: "AirMax 90",
    brand: " Nike",
    description:
      "Best kdjsai llak kdie is akjfie ksdj lajdlksdjfos ksjdie klaskdjfe klsjadi",
    shortDescription: "Best kdjsai llak...",
    imageUrl: "https://placebeard.it/400x400",
    price: "$160",
    prodId: "216fd5f7-7f17-455d-8791-dd1579c1b89b",
    rating: 4.3,
    ratingCount: 89,
    salePrice: null
  },

  {
    name: "OffWhite AirMax",
    brand: "Virgil",
    description:
      "Best kdjsai llak kdie is akjfie ksdj lajdlksdjfos ksjdie klaskdjfe klsjadi",
    shortDescription: "Best kdjsai llak...",
    imageUrl: "https://placebeard.it/400x400",
    price: "$160",
    prodId: "216fd5f7-7f17-455d-8791-dd1579c1b89b",
    rating: 3,
    ratingCount: 9,
    salePrice: "$79"
  },
  {
    name: "OffWhite AirMax",
    brand: "Virgil",
    description:
      "Best kdjsai llak kdie is akjfie ksdj lajdlksdjfos ksjdie klaskdjfe klsjadi",
    shortDescription: "Best kdjsai llak...",
    imageUrl: "https://placebeard.it/400x400",
    price: "$160",
    prodId: "216fd5f7-7f17-455d-8791-dd1579c1b89b",
    rating: 3,
    ratingCount: 9,
    salePrice: "$79"
  },
  {
    name: "OffWhite AirMax",
    brand: null,
    description:
      "Best kdjsai llak kdie is akjfie ksdj lajdlksdjfos ksjdie klaskdjfe klsjadi",
    shortDescription: "Best kdjsai llak...",
    imageUrl: "https://placebeard.it/400x400",
    price: "$160",
    prodId: "216fd5f7-7f17-455d-8791-dd1579c1b89b",
    rating: 3,
    ratingCount: 9,
    salePrice: "$79"
  },
  {
    name: "OffWhite AirMax",
    brand: "Virgil",
    description:
      "Best kdjsai llak kdie is akjfie ksdj lajdlksdjfos ksjdie klaskdjfe klsjadi",
    shortDescription: "Best kdjsai llak...",
    imageUrl: "https://placebeard.it/400x400",
    price: "$160",
    prodId: "216fd5f7-7f17-455d-8791-dd1579c1b89b",
    rating: 3,
    ratingCount: 9,
    salePrice: "$79"
  },
  {
    name: null,
    brand: "Virgil",
    description:
      "Best kdjsai llak kdie is akjfie ksdj lajdlksdjfos ksjdie klaskdjfe klsjadi",
    shortDescription: "Best kdjsai llak...",
    imageUrl: "https://placebeard.it/400x400",
    price: "$160",
    prodId: "216fd5f7-7f17-455d-8791-dd1579c1b89b",
    rating: 3,
    ratingCount: 9,
    salePrice: "$79"
  },
  {
    name: "OffWhite AirMax",
    brand: null,
    description:
      "Best kdjsai llak kdie is akjfie ksdj lajdlksdjfos ksjdie klaskdjfe klsjadi",
    shortDescription: "Best kdjsai llak...",
    imageUrl: "https://placebeard.it/400x400",
    price: "$160",
    prodId: "216fd5f7-7f17-455d-8791-dd1579c1b89b",
    rating: 3,
    ratingCount: 9,
    salePrice: "$79"
  },
  {
    name: "OffWhite AirMax",
    brand: "Virgil",
    description:
      "Best kdjsai llak kdie is akjfie ksdj lajdlksdjfos ksjdie klaskdjfe klsjadi",
    shortDescription: "Best kdjsai llak...",
    imageUrl: "https://placebeard.it/400x400",
    price: "$160",
    prodId: "216fd5f7-7f17-455d-8791-dd1579c1b89b",
    rating: 3,
    ratingCount: 9,
    salePrice: "$79"
  },
  {
    name: "OffWhite AirMax",
    brand: "Virgil",
    description:
      "Best kdjsai llak kdie is akjfie ksdj lajdlksdjfos ksjdie klaskdjfe klsjadi",
    shortDescription: "Best kdjsai llak...",
    imageUrl: "https://placebeard.it/400x400",
    price: "$160",
    prodId: "216fd5f7-7f17-455d-8791-dd1579c1b89b",
    rating: 3,
    ratingCount: 9,
    salePrice: "$79"
  },
  {
    name: "OffWhite AirMax",
    brand: "Virgil",
    description:
      "Best kdjsai llak kdie is akjfie ksdj lajdlksdjfos ksjdie klaskdjfe klsjadi",
    shortDescription: "Best kdjsai llak...",
    imageUrl: "https://placebeard.it/400x400",
    price: "$160",
    prodId: "216fd5f7-7f17-455d-8791-dd1579c1b89b",
    rating: 3,
    ratingCount: 9,
    salePrice: "$79"
  }
];

let itemsToAddToProductsParentWrapperElement = itemsData.map(item => {
  //Creates an article element to represent each product in the items array
  //Adds classes for css styling purposes
  //Adds details of each product as children of the article element
  let {
    name,
    brand,
    description,
    shortDescription,
    imageUrl,
    price,
    prodId,
    rating,
    ratingCount,
    salePrice
  } = item; //collect individual properties of each item using deconstruct method
  let priceToDisplay = salePrice ? `${salePrice} Sale` : price; //check if item is on sale and assigns price as sale price
  let priceToDisplayClass = salePrice
    ? "item__salePrice"
    : "item__regularPrice";
  shortDescription = shortDescription ? shortDescription : ""; //handles null values assigning empty string
  prodId = prodId ? `Product ID: ${prodId}` : ""; //handle null values by assigning  empty string
  let percentageRating = (rating / 5) * 100;
  let setsNameDisplay = name ? "" : "setDisplayNone"; //handles null values by adding  a new class.
  let setsBrandDisplay = brand ? "" : "setDisplayNone"; //handles null values by adding  a new class.
  let detailDescription = description ? description : ""; //handles null values with empty string

  return `<article class="item">
              <img class="item__image" src="${imageUrl}"/>
              <p class="item__name ${setsNameDisplay}">${name}</p>
              <p class="item__brand ${setsBrandDisplay}">${brand}</p>
              <div class="ratings">
                <div class="empty-stars"></div>
                <div class="full-stars" style="width:${percentageRating}%"></div>
                <div class="item__totalRatingcount">${ratingCount}</div>
              </div>
              <p class=${priceToDisplayClass}>${priceToDisplay}</p>
              <p class="item__productid">${prodId}</p>
              <P class="item__shortDescription">${shortDescription}</P>
              <P class="item__detailDescription">${detailDescription}</P>
          </article>`;
});

let parentElementForProducts = document.querySelector("section.items-wrapper"); //get the parent element

let addItemToInnerHTML = item => {
  //Adds parameter passed to it to the innerHTML of products to list parent element
  parentElementForProducts.innerHTML += item;
};

itemsToAddToProductsParentWrapperElement.forEach(addItemToInnerHTML); //Loops through product and add it to parent element

let listOfShortDescriptionElements = document.querySelectorAll(
  ".item__shortDescription"
);

listOfShortDescriptionElements.forEach(item => {
  //Add click event listeners to element that contain shortdescription
  if (item) {
    //If statement used to account for null values
    item.addEventListener("click", e => {
      let clickedShortdescriptionElement = e.target;
      let detaildescriptionElement =
        clickedShortdescriptionElement.nextElementSibling; // get the next element which is the detail description element
      if (detaildescriptionElement) {
        detaildescriptionElement.style.display = "block";
        clickedShortdescriptionElement.style.display = "none";

        detaildescriptionElement.addEventListener("click", e => {
          //add even listener to detail description element
          //This creates a toggle between displaying short description and detail description
          if (detaildescriptionElement.style.display === "block") {
            detaildescriptionElement.style.display = "none";
            clickedShortdescriptionElement.style.display = "block";
          }
        });
      }
    });
  }
});
