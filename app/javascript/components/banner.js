import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Full Stack Developer", "Film Watcher", "Wannabe Runner"],
    typeSpeed: 75,
    loop: true
  });
}

export { loadDynamicBannerText };
