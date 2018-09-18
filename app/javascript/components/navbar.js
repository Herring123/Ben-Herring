function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.top');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('top-white');
      } else {
        navbar.classList.remove('top-white');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
