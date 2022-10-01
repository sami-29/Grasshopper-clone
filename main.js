const HeroSubOptions = document.querySelector(".hero-options");
let options = HeroSubOptions.childNodes;

// remove #text nodes
(() => {
  options.forEach((option, index) => {
    if (option.nodeType !== 1) {
      option.remove();
    }
  });
})();

console.log(options);

let i = 1;
setInterval(() => {
  const previous = i === 0 ? options[options.length - 1] : options[i - 1];

  const text = options[i];
  previous.classList.toggle("hidden");
  text.classList.toggle("hidden");

  i++;
  if (i === options.length) {
    i = 0;
  }
}, 3000);
