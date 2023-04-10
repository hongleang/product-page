import { Counter } from "./components/Counter";
import { CartMenu } from "./components/CartMenu";
import { MobileMenu } from "./components/MobileMenu"
import { LightBox } from "./components/Lightbox";



export default function View() {
  const mobileMenu = new MobileMenu();
  const cartMenu = new CartMenu();
  const counter = new Counter();
  const lightbox = new LightBox();

  function init() {
    mobileMenu.mount();
    cartMenu.mount();
    counter.mount();
    lightbox.mount();
  }

  init();

  return {
    bindAddToCartBtn: counter.bindAddToCartBtn,
    renderCartMenu: cartMenu.render,
    bindRemoveCartBtn: cartMenu.bindRemoveCartBtn
  }
}