import { getElement } from "../utils/views.utils";

export function MobileMenu() {
  const sidebarMenu = getElement('#sidebar');
  const btnOpenSidebarMenu = getElement('#mobile-menu');
  const btnCloseSidebarMenu = getElement('#close-menu-icon');

  function openCartMenuHandler() {
    sidebarMenu.classList.add('translate-x-0')
    sidebarMenu.classList.remove('-translate-x-full')
    sidebarMenu.classList.remove('-z-20')
    const backdrop = getElement('#backdrop', sidebarMenu)
    const menu = getElement('#sidebar-menu', sidebarMenu)
    backdrop.classList.remove('hidden')
    menu.classList.add('translate-x-0')
    menu.classList.remove('-translate-x-full')
    document.body.style.overflow = 'hidden'
  }

  function closeCartMenuHandler() {
    sidebarMenu.classList.remove('translate-x-0')
    sidebarMenu.classList.add('-translate-x-full')
    sidebarMenu.classList.add('-z-20')
    const backdrop = getElement('#backdrop', sidebarMenu)
    const menu = getElement('#sidebar-menu', sidebarMenu)
    backdrop.classList.add('hidden')
    menu.classList.remove('translate-x-0')
    menu.classList.add('-translate-x-full')
    document.body.style.overflow = 'auto'
  }

  return {
    mount: () => {
      btnOpenSidebarMenu.addEventListener('click', openCartMenuHandler);
      btnCloseSidebarMenu.addEventListener('click', closeCartMenuHandler);
    }
  };
}
