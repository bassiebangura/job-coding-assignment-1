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

let itemToAddFormat = itemsData.map(item => {
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
  } = item;
  let priceToDisplay = salePrice ? `${salePrice} Sale` : price; //check if item is on sale and assign sale price
  let priceToDisplayClass = salePrice
    ? "item__salePrice"
    : "item__regularPrice";
  let percentageRating = (rating / 5) * 100;
  name = name ? name : "";
  brand = brand ? brand : "";
  let brandClass = brand ? "" : "setDisplayNone";
  let detailDescription = description ? description : "";
  shortDescription = shortDescription ? shortDescription : "";
  prodId = prodId ? `ID: ${prodId}` : "";

  return `<article class="item"><img class="item__image" src="${item.imageUrl}"/>
  <p class="item__name">${name}</p>
  <p class="item__brand ${brandClass}">${brand}</p>
  <div class="ratings">
  <div class="empty-stars"></div>
  <div class="full-stars" style="width:${percentageRating}%"></div>
  <div class="item__totalRatingcount">${item.ratingCount}</div>
  </div>
  <p class=${priceToDisplayClass}>${priceToDisplay}</p>
  <p class="item__productid">${prodId}</p>
  <P class="item__shortDescription">${shortDescription}</P>
  <P class="item__detailDescription">${detailDescription}</P>
  </article>
  `;
});

let parentElement = document.querySelector("section.items-wrapper");
console.log(parentElement);

let addItemToInnerHTML = item => {
  parentElement.innerHTML += item;
};

itemToAddFormat.forEach(addItemToInnerHTML);

let shortDescriptionElements = document.querySelectorAll(
  ".item__shortDescription"
);

shortDescriptionElements.forEach(item => {
  if (item) {
    item.addEventListener("click", e => {
      let clickedElement = e.target;
      console.log(clickedElement.nextElementSibling);
      if (clickedElement.nextElementSibling) {
        // get the next element which is the detail description element
        // And set it's display "block"
        clickedElement.nextElementSibling.style.visibility = "visible";
        clickedElement.style.display = "none";
        clickedElement.nextElementSibling.addEventListener("click", e => {
          if(clickedElement.nextElementSibling.style.visibility === "visible") {
            clickedElement.nextElementSibling.style.visibility = "hidden"
            clickedElement.style.display = "block"
          }
        })
      }
    });
  }
});

console.log(shortDescriptionElements);
