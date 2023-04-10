import View from "./View";

function Model() {
  this.basePrice = 125.0;
  this.amount = 0;

  function updateAmount(newAmount) {
    if (newAmount > 0) {
      this.amount = newAmount;
    } else {
      throw Error('New amount cannot less than 0')
    }
  }

  function resetAmount() {
    this.amount = 0;
  }

  function calculateCart() {
    return this.basePrice * this.amount;
  }

  return {
    updateAmount,
    basePrice: this.basePrice,
    amount: this.amount,
    calculateCart,
    resetAmount
  }
}
function Controller({ view, model }) {
  view.bindAddToCartBtn(handleAddToCart);
  view.bindRemoveCartBtn(handleClearCart)

  function handleAddToCart(newValue) {
    model.updateAmount(newValue);
    view.renderCartMenu(model.basePrice, model.amount, model.calculateCart())
  }

  function handleClearCart() {
    console.log('clear');
    model.resetAmount();
    view.renderCartMenu();
  }


}

function App() {
  const model = new Model();
  const view = new View();
  const controller = new Controller({ view, model });


  return {
    init: () => {
      controller();
    }
  }
}


window.onload = () => { App().init };
