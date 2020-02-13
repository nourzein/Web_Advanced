var cards = document.getElementsByClassName("card");
// console.log(cards);

document.querySelectorAll(".card").forEach(item => {
  item.addEventListener("click", event => {
    console.log(event.target);
    event.target.classList.add("turn");
  });
});

// for (var card of cards) {
//   //console.log(card);
//   card.addEventListner("click", () => {
//     console.log(this);
//     //this.classList.add("turn");
//   });
// }
