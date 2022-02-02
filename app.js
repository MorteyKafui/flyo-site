const nav = document.querySelector('.navbar');
const header = document.querySelector('.header-section');
console.log(header);

const observer = new IntersectionObserver(
  entries => {
    const entry = entries[0];

    if (!entry.isIntersecting) {
      nav.classList.add('sticky');
    }

    if (entry.isIntersecting) {
      nav.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

observer.observe(header);
