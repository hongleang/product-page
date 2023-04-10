import { calculateCart } from "../utils/calculate.utils";
import { getElement } from "../utils/views.utils";

export function CartMenu() {
  const cartMenuDom = getElement('#cart-menu');
  const btnCart = getElement('#btn-cart');
  let btnRemoveCart;
  render();

  let cartMenuIsOpen = false;

  function toggleCardMenu() {
    if (cartMenuIsOpen) {
      document.body.style.overflow = "auto";
      cartMenuIsOpen = false;
    } else {
      document.body.style.overflow = "hidden";
      cartMenuIsOpen = true;
    }
    cartMenuDom.classList.toggle("hidden");
  }

  function closeMenu() {
    document.body.style.overflow = "auto";
    cartMenuOpen = false;
  }

  function bindRemoveCartBtn(handler) {
    btnRemoveCart?.addEventListener('click', () => {
      handler();
      closeMenu();
    })
    // try {
    //   console.log(btnRemoveCart);

    // } catch (err) {
    //   throw Error("Error ocurred at bindRemoveCartBtn", err)
    // }
  }

  function render(basePrice = 0, amount = 0, totalPrice = 0) {
    const emptyCartMsg = '<h3 class="text-center font-bold py-14 px-10">🛒 Your cart is empty</h3>';
    const html = `
    <h3 class="font-bold p-4">Cart</h3>
    <hr class="mb-4 border-blue-200" />
    <div class="p-4 space-y-6">
      <div class="flex gap-x-4">
        <div class="w-12 h-12 rounded-lg overflow-hidden">
          <img src="./images/image-product-1-thumbnail.jpg" alt="thumbnail">
        </div>
        <div class="text-blue-400 text-sm font-medium">
          <p>Fall Limited Edition Sneakers</p>
          <span class="">$${basePrice} x ${amount}</span>
          <span class="font-bold">$${totalPrice}</span>
        </div>
        <button id="btn-remove">
          <img src="./images/icon-delete.svg" alt="delete-icon">
        </button>
      </div>
      <button
        class="w-full rounded-xl flex items-center justify-center gap-x-3 text-white bg-orange-400 font-bold py-3 hover:opacity-80 focus:opacity-50 transition">
        Checkout
      </button>
    </div>
    `;
    if (amount > 0) btnRemoveCart = getElement('#btn-remove');
    const htmlToInsert = amount !== 0 ? html : emptyCartMsg;
    cartMenuDom.innerHTML = htmlToInsert;
  }

  return {
    render,
    bindRemoveCartBtn,
    mount: () => {
      btnCart.addEventListener('click', toggleCardMenu);
    }
  };
}
