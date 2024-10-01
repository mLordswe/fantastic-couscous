//state = all den data som appen har lagrat utifrån vad användaren gör
//state innehåller också vår config eller "start-värden"

const state = {
  shop: [
    { vegetable: "🥦broccoli", amount: 12, color: "green" },
    { vegetable: "🥔potato", amount: 25, color: "brown" },
    { vegetable: "🍅tomato", amount: 8 },
  ],
  order: [],
  addVegetable: function (vegetable, amount, color) {
    this.shop.push({ vegetable, amount, color });
  },
};

//render = visa upp nya "GUI"
const renderShop = () => {
  //tömma shop-div först!
  const shopDiv = document.querySelector(".shop");
  shopDiv.innerHTML = "";
  for (const v of state.shop) {
    //skapa ny divtagg
    const vegetable = document.createElement("div");
    //lägg till text i divtaggen
    vegetable.innerHTML = `${v.vegetable}: ${v.amount} ${
      v.color === undefined ? "" : "," + v.color
    }`;
    //lägger till taggen i domen
    shopDiv.appendChild(vegetable);
  }
};
renderShop();
document.querySelector(".add-vegetable").addEventListener("click", (e) => {
  e.preventDefault();

  state.addVegetable(
    document.querySelector("#vegetable").value,
    document.querySelector("#amount").value,
    document.querySelector("#color").value
  );
  renderShop();
});
