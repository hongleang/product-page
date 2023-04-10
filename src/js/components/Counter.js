import { getObservables } from "../utils/observable";
import { getElement } from "../utils/views.utils";


export function Counter() {
  let counter = 0;
  const btnQuantity = getElement("#btn-quantity");
  const itemCounts = getElement("#item-count", btnQuantity);
  const btnAdd = getElement("#btn-add", btnQuantity);
  const btnMinus = getElement("#btn-minus", btnQuantity);
  const submitBtn = getElement("#add-to-cart");
  btnMinus.disabled = true;

  const observer = getObservables();

  function updateCounter(newCount) {
    itemCounts.innerText = newCount;
  }

  observer.subscribe(updateCounter);
  
  function incrementCounter() {
    btnMinus.disabled = false;
    counter++;
    observer.notify(counter);
  }
  function decreaseCounter() {
    if (counter > 0) {
      counter --;
    }
    observer.notify(counter);
  }

  function bindAddToCartBtn(handler) {
    submitBtn.addEventListener('click', () =>
      handler(counter)
    );
  }

  return {
    mount: () => {
      btnAdd.addEventListener('click', incrementCounter);
      btnMinus.addEventListener('click', decreaseCounter);
    },
    bindAddToCartBtn
  };
}
