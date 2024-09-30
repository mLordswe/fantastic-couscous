//state = all den data som appen har lagrat utifrån vad användaren gör
//state innehåller också vår config eller "start-värden"

state = {
  shop: [
    { vegetable: "broccoli", amount: 12, color: "green" },
    { vegetable: "potato", amount: 25, color: "brown" },
    { vegetable: "tomato", amount: 8 },
  ],
};

for (const v of state.shop) {
  //skapa ny divtagg
  const vegetable = document.createElement("div");
  //lägg till text i divtaggen
  vegetable.innerHTML = `${v.vegetable}: ${v.amount} ${
    v.color === undefined ? "" : "," + v.color
  }`;
  //lägger till taggen i domen
  document.querySelector(".shop").appendChild(vegetable);
}
