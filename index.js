itemsData = [
  {
    name: "AirMax 90",
    brand: " Nike",
    description:
      "Best kdjsai llak kdie is akjfie ksdj lajdlksdjfos ksjdie klaskdjfe klsjadi",
    shortDescription: "Best kdjsai llak...",
    imageUrl: "https://placebeard.it/400x400",
    price: "$160",
    prodId: 18287784847748,
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
    prodId: 18287784847748,
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
    prodId: 18287784847748,
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
    prodId: 18287784847748,
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
    prodId: 18287784847748,
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
    prodId: 18287784847748,
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
    prodId: 18287784847748,
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
    prodId: 18287784847748,
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
    prodId: 18287784847748,
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
    prodId: 18287784847748,
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
  shortDescription = shortDescription ? shortDescription : "";
  prodId = prodId ? `ProductID: ${prodId}` : "";
  return `<article class="item"><img class="item__image" src="${item.imageUrl}"/>
  <p class="item__name">${name}</p>
  <p class="item__brand">${brand}</p>
  <P class="item__description">${shortDescription}</P>
  <div class="ratings">
  <div class="empty-stars"></div>
  <div class="full-stars" style="width:${percentageRating}%"></div>
  <div class="item__totalRatingcount">${item.ratingCount}</div>
  </div>
  
  <p class=${priceToDisplayClass}>${priceToDisplay}</p>
  <p class="item__productid">${prodId}</p></article>`;
});

//below is initial implementation of ratings
{
  /* <div>
    <span class="item__rating">${item.rating}</span
    ><span class="item__totalRatingcount">${item.ratingCount}</span>
  </div> */
}

//console.log(itemToAddFormat);
// {/* <img class="item__image" />
// <p class="item__name">AirMax90</p>
// <p class="item__brand">Nike</p>
// <P class="item__description">Short Description ....</P>
// <div>
//   <span class="item__rating">Rating</span
//   ><span class="item__totalRatingcount">RatingCount</span>
// </div>
// <p class="item__price item__saleprice">Price/SalePrice</p>
// <p class="item__productid">ProductID</p> */}

let parentElement = document.querySelector("section.items-wrapper");
console.log(parentElement);

let addItemToInnerHTML = item => {
  parentElement.innerHTML += item;
};

itemToAddFormat.forEach(addItemToInnerHTML);
